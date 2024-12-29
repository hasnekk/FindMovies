<template>
  <div class="movie-card">
    <img :src="poster" :alt="title" class="movie-image" />
    <div class="movie-details">
      <h2 class="movie-title">{{ title }}</h2>
      <p class="movie-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCardComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.movie-card {
  width: 300px;
  height: 340px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.movie-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.movie-details {
  padding: 16px;
}

.movie-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.movie-description {
  font-size: 14px;
  color: #555;
  margin-top: 8px;
}
</style>
