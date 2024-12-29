<template>
  <teleport to="body">
    <div class="wrapper">
      <div class="spinner">
        <div class="spinner-ring"></div>
        <span class="spinner-text">Loading...</span>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'SpinnerComponent',
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.spinner-ring {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-text {
  margin-top: 10px;
  font-size: 16px;
  color: #3498db;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
