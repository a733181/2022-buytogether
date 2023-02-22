<template>
  <div>
    <div v-if="!sellFatorite.length" class="text-2xl flex gap-8 justify-center">
      <h2>沒有收藏商品</h2>
      <RouterLink to="/" class="text-primary">前往首頁</RouterLink>
    </div>
    <div class="flex">
      <div class="hidden lg:flex gap-5 flex-col mr-10 lg:w-32">
        <Tab tab="全部" :active="activeTab" @click="activeTab = '全部'" />
        <Tab
          v-for="(item, index) in productCategory"
          :tab="item"
          :key="index"
          :active="activeTab"
          @click="activeTab = item"
        />
      </div>
      <div class="flex-1">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          <Card v-for="item in filterProduct" :key="item._id" :data="item" />
          <div v-if="!filterProduct.length" class="text-2xl flex gap-8">
            <h2 class="font-bold">找不到收藏商品</h2>
            <RouterLink to="/" class="text-primary">前往首頁</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed bg-primary w-full top-0 left-0 z-20 h-full text-white text-center flex flex-col justify-center gap-5 duration-200 -translate-x-full text-xl"
      :class="{ 'translate-x-0': toggleCollectCategory }"
    >
      <div
        class="bg-white py-2 px-3 fixed top-0 right-0 rounded-lg hover:opacity-60 cursor-pointer"
      >
        <img
          src="@/assets/svg/close.svg"
          class="w-6"
          alt="close"
          @click="toggleCollectCategory = false"
        />
      </div>
      <p
        @click="toggleCollectCategoryHandler('全部')"
        class="hover:opacity-60 cursor-pointer"
      >
        全部
      </p>
      <p
        v-for="(item, index) in productCategory"
        :key="index"
        class="hover:opacity-60 cursor-pointer"
        @click="toggleCollectCategoryHandler(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

import Tab from '@/components/ui/TheTab.vue';
import Card from '@/components/ui/TheCard.vue';

import { useCategoryStore } from '@/stores/category';
import { useProductsStore } from '@/stores/products';
const products = useProductsStore();
const category = useCategoryStore();
const { productCategory } = category;
const { sellFatorite, toggleCollectCategory } = storeToRefs(products);

const activeTab = ref('全部');

const filterProduct = computed(() => {
  if (!sellFatorite.value) return [];
  if (activeTab.value === '全部') {
    return sellFatorite.value;
  }
  return sellFatorite.value.filter((item) => item.category === activeTab.value);
});

const toggleCollectCategoryHandler = (item) => {
  activeTab.value = item;
  toggleCollectCategory.value = false;
};
</script>
