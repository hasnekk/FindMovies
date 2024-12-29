<template>
  <teleport to="body">
    <div class="wrapper">
      <div class="container">
        <h1>Enter your name</h1>
        <input type="text" v-model="name" placeholder="Enter your name" />
        <button @click="submitName">Submit</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import useAppStore from '@/stores/AppStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

export default {
  name: 'NameModalComponent',
  emits: ['closeModal'],
  setup(props, ctx) {
    const appStore = useAppStore();

    const { userName } = storeToRefs(appStore);

    const name = ref('');

    function submitName() {
      if (!name.value) {
        return;
      }
      userName.value = name;
      localStorage.setItem('userName', JSON.stringify(userName.value));
      ctx.emit('closeModal');
    }

    return {
      name,
      submitName,
    };
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  row-gap: 0.5rem;

  width: 300px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.7);

  padding: 1rem;
}

input {
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
