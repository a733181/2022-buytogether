<template>
  <div class="container pt-44 lg:pt-32 pb-10">
    <div class="mb-10">
      <Breadcrumbs>
        <span class="text-primary font-bold">精選團購</span>
        <span v-if="breadSearch">&ensp;/&ensp;{{ breadSearch }}</span>
      </Breadcrumbs>
    </div>
    <div class="flex mb-6 gap-7 items-center justify-between">
      <Select
        v-model="filter"
        :select="sortProduct"
        class="toend w-32 h-[44px]"
      />

      <form @submit.prevent="submitHandler" class="flex gap-5 items-center">
        <Input v-model="searchKey" class="-mt-10" />
        <Btn type="submit" className="btn-gray" text="搜尋" />
      </form>
    </div>

    <div class="flex">
      <div class="toend lg:flex gap-5 flex-col mr-10 lg:w-32 hidden">
        <Tab
          tab="全部"
          :active="activeTab"
          @click="changeCategoryHandler('全部')"
        />
        <Tab
          v-for="(item, index) in productCategory"
          :tab="item"
          :key="index"
          :active="activeTab"
          @click="changeCategoryHandler(item)"
        />
      </div>
      <div class="flex-1">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10"
          v-if="filterData.length"
        >
          <Card
            class="w-full"
            v-for="item in filterData"
            :key="item._id"
            :data="item"
          />
        </div>
        <p v-if="!filterData.length && !isLoad" class="text-3xl">找不到商品</p>
        <p v-if="isLoad" class="text-3xl">資料讀取中</p>
        <div class="w-min mx-auto">
          <Pagination
            v-if="productPage.total > 1"
            :total="productPage.total"
            :current="productPage.current"
            @current="changePageHandler"
          />
        </div>
      </div>
    </div>
    <Loaded :loaded="isLoad" />

    <div
      class="fixed bg-primary w-full top-0 left-0 z-20 h-full text-white text-center flex flex-col justify-center gap-5 duration-200 -translate-x-full text-xl"
      :class="{ 'translate-x-0': toggleProductCategory }"
    >
      <div
        class="bg-white py-2 px-3 fixed top-0 right-0 rounded-lg hover:opacity-60 cursor-pointer"
      >
        <img
          src="@/assets/svg/close.svg"
          class="w-6"
          alt="close"
          @click="toggleProductCategory = false"
        />
      </div>
      <p
        @click="changeCategoryHandler('全部')"
        class="hover:opacity-60 cursor-pointer"
      >
        全部
      </p>
      <p
        v-for="(item, index) in productCategory"
        :key="index"
        class="hover:opacity-60 cursor-pointer"
        @click="changeCategoryHandler(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, computed, onUnmounted, onMounted } from 'vue';

import gsap from 'gsap';

import Breadcrumbs from '@/components/ui/TheBreadcrumbs.vue';
import Tab from '@/components/ui/TheTab.vue';
import Select from '@/components/ui/TheSelect.vue';
import Card from '@/components/ui/TheCard.vue';
import Input from '@/components/ui/TheInput.vue';
import Pagination from '@/components/ui/ThePagination.vue';
import Btn from '@/components/ui/TheBtn.vue';
import Loaded from '@/components/ui/TheLoaded.vue';

import { useCategoryStore } from '@/stores/category';
import { useProductsStore } from '@/stores/products';

const products = useProductsStore();
const { productCategory, sortProduct } = useCategoryStore();
const { getAllsellProductHandler } = products;
const { allSellProduct, productPage, toggleProductCategory } =
  storeToRefs(products);

const activeTab = ref('全部');
const breadSearch = ref('');
const filter = ref(sortProduct[0]);
const searchKey = ref('');
const isLoad = ref(true);

(async () => {
  await getAllsellProductHandler();
  isLoad.value = false;
})();

const filterData = computed(() => {
  if (filter.value === sortProduct[0]) {
    return allSellProduct.value;
  }
  const copydata = JSON.parse(JSON.stringify(allSellProduct.value));

  if (filter.value === sortProduct[1] || filter.value === sortProduct[2]) {
    return copydata.sort((itemA, itemB) => {
      if (filter.value === sortProduct[1]) {
        return itemA.price < itemB.price ? 1 : -1;
      }
      if (filter.value === sortProduct[2]) {
        return itemA.price < itemB.price ? -1 : 1;
      }
    });
  }
  if (filter.value === sortProduct[3] || filter.value === sortProduct[4]) {
    return copydata.sort((itemA, itemB) => {
      const sellNumberA = itemA.maxNumber - itemA.remaining;
      const sellNumberB = itemB.maxNumber - itemB.remaining;
      if (filter.value === sortProduct[3]) {
        return sellNumberA < sellNumberB ? 1 : -1;
      }
      if (filter.value === sortProduct[4]) {
        return sellNumberA < sellNumberB ? -1 : 1;
      }
    });
  }
});

const submitHandler = () => {
  if (searchKey.value) {
    getAllsellProductHandler({ key: searchKey.value });
    breadSearch.value = searchKey.value;
    searchKey.value = '';
  } else {
    cancelSearchHandler();
  }
};

const changeCategoryHandler = (tab) => {
  activeTab.value = tab;
  toggleProductCategory.value = false;
  productPage.value.current = 1;
  getAllsellProductHandler({ category: activeTab.value });
};

const cancelSearchHandler = () => {
  getAllsellProductHandler();
  breadSearch.value = '';
};

const changePageHandler = (page) => {
  productPage.value.current = page;
  getAllsellProductHandler({ category: activeTab.value });
};

onMounted(() => {
  gsap.from('.toend', {
    x: '-100%',
    duration: 1,
  });
});

onUnmounted(() => {
  productPage.value.current = 1;
  toggleProductCategory.value = false;
});
</script>
