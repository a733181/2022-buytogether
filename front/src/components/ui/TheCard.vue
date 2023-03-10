<template>
  <div class="flex flex-col border-2 border-orange-200 p-4 rounded-lg">
    <div class="relative">
      <RouterLink :to="`/product/${data._id}`">
        <img
          class="w-full rounded-lg hover:scale-105 h-60 object-cover duration-200"
          :src="data.image"
        />
      </RouterLink>
      <div
        class="absolute top-2 right-2 flex flex-col justify-center items-center"
      >
        <img
          :src="isFavorite"
          class="w-6 mb-4"
          @click="clickFavoriteHandler(data._id)"
        />
        <img
          :src="isLike"
          class="w-7 mb-2"
          @click="clickLikesHandler(data._id)"
        />
        <p class="font-bold text-xl text-orange-500">
          {{ likesLength }}
        </p>
      </div>
    </div>
    <RouterLink :to="`/product/${data._id}`" class="hover:text-primary">
      <div class="mt-3 mb-4">
        <h3 class="text-xl mb-1 ml-2">{{ data.name }}</h3>

        <p class="text-3xl text-primary text-end font-bold">
          $ {{ data.price }}
        </p>
      </div>
    </RouterLink>
    <div class="flex items-center mt-auto">
      <div class="">
        <p class="text-gray-500">
          銷售數量：{{ data.maxNumber - data.remaining }}
        </p>
        <RouterLink v-if="data.userId" :to="`/memberhome/${data.userId._id}`">
          <p class="hover:text-primary text-gray-500">
            開團主揪：{{ data.userId.name }}
          </p>
        </RouterLink>
      </div>
      <Btn
        text="加入購物車"
        class="ml-auto"
        @click="addCartBtnHandler(data._id)"
        :disabled="isLoading"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

import Btn from '@/components/ui/TheBtn.vue';

import { useCartStore } from '@/stores/carts';
import { useUserStore } from '@/stores/users';
import { useProductsStore } from '@/stores/products';

const { clickAddCartHandler } = useCartStore();
const user = useUserStore();
const { clickFavoriteHandler } = user;
const { favorites, users } = storeToRefs(user);
const { clickLikesHandler } = useProductsStore();

const props = defineProps({
  data: {
    type: Object,
    requried: true,
  },
});

const isLoading = ref(false);

const isFavorite = computed(() => {
  const index = favorites.value.findIndex((item) => item === props.data._id);

  return index === -1
    ? new URL('@/assets/svg/heart.svg', import.meta.url).href
    : new URL('@/assets/svg/heart-active.svg', import.meta.url).href;
});

const isLike = computed(() => {
  const index = props.data.likes.findIndex((item) => item === users.value._id);
  return index === -1
    ? new URL('@/assets/svg/start.svg', import.meta.url).href
    : new URL('@/assets/svg/start-active.svg', import.meta.url).href;
});

const likesLength = computed(() => {
  return props.data.likes.length;
});

const addCartBtnHandler = async (id) => {
  isLoading.value = true;
  await clickAddCartHandler({ id });
  isLoading.value = false;
};
</script>

<style scoped>
.word-break {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  white-space: pre;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
