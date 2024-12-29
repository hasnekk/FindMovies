import { defineStore } from 'pinia';
import { ref } from 'vue';

const useAppStore = defineStore('appStore', () => {
  const userName = ref('');
  const movies = ref(null);

  async function loadMovies() {
    if (movies.value) {
      return;
    }
    // Wait for 1 second to see the async call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch('/moviesDB.json');
    const allMovies = await response.json();

    movies.value = allMovies;
  }

  return {
    userName,
    movies,
    loadMovies,
  };
});

export default useAppStore;
