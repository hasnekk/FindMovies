<template>
  <template v-if="loading">
    <SpinnerComponent />
  </template>
  <template v-else-if="error">
    <div class="center-text">
      {{ error }}
    </div>
  </template>
  <template v-else-if="!movie">
    <div class="center-text">This movie does not exist</div>
  </template>
  <template v-else>
    <div class="movie-page">
      <h1>{{ movie.title }}</h1>
      <p><strong>Year:</strong> {{ movie.year }}</p>
      <p><strong>Genre:</strong> {{ movie.genre }}</p>
      <img :src="movie.poster" alt="Movie Poster" />
      <p><strong>Description:</strong> {{ movie.description }}</p>
    </div>
  </template>
</template>
<script>
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

// store
import useAppStore from '@/stores/AppStore';

// components
import SpinnerComponent from '@/components/SpinnerComponent.vue';

export default {
  name: 'MovieView',
  components: {
    SpinnerComponent,
  },
  setup() {
    const route = useRoute();

    const appStore = useAppStore();

    const { loadMovies } = appStore;

    const { movies } = storeToRefs(appStore);

    const loading = ref(true);
    const error = ref('');
    const movieId = computed(() => Number(route.params.id));
    const movie = computed(() => {
      if (!movieId.value) {
        return null; // avoid unnessecry search
      }
      const movie = movies.value.find((movie) => movie.id === movieId.value);
      return movie;
    });

    (async () => {
      try {
        await loadMovies();
      } catch (error) {
        error.value = 'Error loading the movies.';
      } finally {
        loading.value = false;
      }
    })();

    return {
      movie,
      error,
      loading,
    };
  },
};
</script>

<style scoped>
.movie-page {
  max-width: 600px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
}

.movie-page h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
}

.movie-page p {
  font-size: 1rem;
  margin-bottom: 5px;
}

.movie-page img {
  display: block;
  max-width: 100%;
  margin: 20px 0;
}

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
</style>
