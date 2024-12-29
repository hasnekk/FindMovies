<template>
  <div class="home-container">
    <div class="hero-section">
      <img class="hero-image" src="@/assets/heroImage.jpg" alt="Movies Background" />
      <div class="hero-content">
        <h1 class="hero-title">Watch Movies for Free</h1>
        <p class="hero-subtitle">
          Unlimited entertainment at your fingertips. Start your journey now!
        </p>
        <button class="cta-button" @click="navigateToMovies">Start Watching</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'HomePage',
  setup() {
    const router = useRouter();

    function navigateToMovies() {
      router.push('/movies');
    }

    return {
      navigateToMovies,
    };
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  font-family: Arial, sans-serif;
}

.hero-section {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.8;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 20px;
  backdrop-filter: blur(5px);
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  line-height: 1.4;
}

.cta-button {
  padding: 12px 25px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.cta-button:hover {
  background-color: #e74c3c;
  transform: scale(1.05);
}
</style>
