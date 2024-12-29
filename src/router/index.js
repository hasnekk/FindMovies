// vue
import { createRouter, createWebHistory } from 'vue-router';

// views
import HomeView from '../views/HomeView.vue';
import MoviesView from '@/views/MoviesView.vue';
import MovieView from '@/views/MovieView.vue';
import PageNotFoundView from '@/views/PageNotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/movies',
      name: 'allMovies',
      component: MoviesView,
    },
    {
      path: '/movie/:id',
      name: 'movieDetails',
      component: MovieView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: PageNotFoundView,
    },
  ],
});

export default router;
