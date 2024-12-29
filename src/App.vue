<template>
  <HeaderComponent />
  <NameModalComponent v-if="showModal" @closeModal="onCloseModal" />
  <RouterView />
</template>

<script>
// vue
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

// components
import HeaderComponent from './components/HeaderComponent.vue';
import NameModalComponent from './components/NameModalComponent.vue';

// css
import '@/assets/global.css';

// stores
import useAppStore from './stores/AppStore';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NameModalComponent,
  },
  setup() {
    const appStore = useAppStore();

    const { userName } = storeToRefs(appStore);

    const showModal = ref(true);

    function onCloseModal() {
      showModal.value = false;
    }

    onMounted(() => {
      const jsonName = localStorage.getItem('userName');

      if (!jsonName) {
        return;
      }

      showModal.value = false;
      userName.value = JSON.parse(jsonName);
    });

    return {
      showModal,
      onCloseModal,
    };
  },
};
</script>
