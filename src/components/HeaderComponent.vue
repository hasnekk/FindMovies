<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/movies" class="nav-link">All Movies</RouterLink>
    </nav>
    <div v-if="userName" class="user-info">
      <span>{{ userName }}</span>
    </div>
  </header>
</template>

<script>
import useAppStore from '@/stores/AppStore.js';
import { storeToRefs } from 'pinia';

export default {
  name: 'HeaderComponent',

  setup() {
    const appStore = useAppStore();

    const { userName } = storeToRefs(appStore);

    return { userName };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
}

.nav {
  display: flex;
  gap: 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

.user-info {
  font-weight: bold;
}
</style>
