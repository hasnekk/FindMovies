<template>
  <template v-if="loading">
    <SpinnerComponent />
  </template>
  <template v-else-if="error">
    <div class="center-text">
      {{ error }}
    </div>
  </template>
  <template v-else-if="!Array.isArray(movies) || movies.length === 0">
    <div class="center-text">We have no movies to display</div>
  </template>
  <template v-else>
    <div class="movies">
      <MovieCardComponent
        v-for="movie of movies"
        :key="movie.id"
        :title="movie.title"
        :description="movie.description"
        :poster="movie.poster"
        @click="onMovieClick(movie.id)"
      />
    </div>
  </template>
</template>
<script>
// vue
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// stores
import useAppStore from '@/stores/AppStore';

// components
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import MovieCardComponent from '@/components/MovieCardComponent.vue';

export default {
  name: 'MoviesView',
  components: {
    SpinnerComponent,
    MovieCardComponent,
  },
  setup() {
    const router = useRouter();

    const appStore = useAppStore();

    const { movies } = storeToRefs(appStore);

    const { loadMovies } = appStore;

    const loading = ref(true);
    const error = ref('');

    // initialy load movies and store them in pinia store
    (async () => {
      try {
        await loadMovies();
      } catch (error) {
        error.value = 'Error loading the movies.';
      } finally {
        loading.value = false;
      }
    })();

    function onMovieClick(movieId) {
      router.push({
        name: 'movieDetails',
        params: {
          id: movieId,
        },
      });
    }

    return {
      loading,
      movies,
      error,
      onMovieClick,
    };
  },
};
</script>

<style scoped>
.center-text {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-weight: bold;
  font-size: large;
}

.movies {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;

  flex-wrap: wrap;
}
</style>
