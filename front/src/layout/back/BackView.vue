<template>
  <div class="min-h-[100vh] flex items-stretch">
    <Header />
    <div class="flex-1 overflow-auto flex flex-col">
      <RouterView v-slot="{ Component }">
        <transition name="router" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
      <Footer class="mt-auto" />
    </div>
  </div>
</template>

<script setup>
import Header from '@/layout/back/TheHeader.vue';
import Footer from '@/layout/back/TheFooter.vue';
</script>

<style scoped>
.router-enter-from,
.router-leave-to {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 150ms ease-out;
}
.router-leave-active {
  transition: opacity 150ms ease-in;
}
.router-enter-to,
.router-leave-from {
  opacity: 1;
}
</style>
