<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="not-found-title">404</h1>
      <p class="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <router-link to="/" class="home-button">Go Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFoundView',
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
}

.not-found-content {
  max-width: 600px;
  padding: 20px;
}

.not-found-title {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  color: #ff6f61;
}

.not-found-message {
  font-size: 1.5rem;
  margin: 20px 0;
  color: #dddddd;
}

.home-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #ff6f61;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.home-button:hover {
  background-color: #e9594b;
  transform: scale(1.05);
}
</style>
