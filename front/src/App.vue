<template>
  <RouterView />
  <Chat />
  <div
    ref="toTop"
    class="fixed bottom-2 right-4 border-2 py-1 px-3 rounded-lg hover:opacity-60 bg-white"
    @click="toTopHandler"
  >
    <img src="@/assets/svg/arrow.svg" alt="arrow" class="w-4 rotate-90" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Chat from '@/layout/TheChats.vue';

const toTop = ref(null);

const toTopHandler = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  setTimeout(() => {
    gsap.from(toTop.value, {
      y: 100,
      duration: 1,
      scrollTrigger: {
        id: 'about',
        trigger: toTop.value,
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play complete reverse reset',
      },
    });
  }, 250);
});
</script>
