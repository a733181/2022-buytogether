<template>
  <div v-if="toggleShow">
    <div
      class="fixed top-20 left-1/2 -translate-x-1/2 z-30 bg-white p-10 overflow-y-auto max-h-[calc(100vh-136px)] rounded-xl"
      :class="props.classModel"
    >
      <slot></slot>
      <img
        src="@/assets/svg/close.svg"
        @click="toggleShow = false"
        class="w-6 absolute top-6 right-6"
      />
    </div>
    <div
      class="fixed top-0 left-0 z-20 w-full h-full bg-black/30"
      @click="toggleShow = false"
    ></div>
  </div>
</template>

<script setup>
import { useModelStore } from '@/stores/model';
import { storeToRefs } from 'pinia';
const model = useModelStore();
const { toggleShow } = storeToRefs(model);

const props = defineProps({
  classModel: {
    type: String,
  },
});
</script>
