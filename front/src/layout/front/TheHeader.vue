<template>
  <header
    ref="navBar"
    class="fixed w-full bg-primary py-3 text-white border-b-8 border-orange-300 z-20"
  >
    <div
      class="container flex justify-between items-center flex-col lg:flex-row"
    >
      <RouterLink to="/" class="flex gap-2 items-center mb-2 lg:mb-0">
        <div class="relative">
          <img
            src="@/assets/svg/cart-plus.svg"
            class="w-4 absolute -top-2 right-2 animate-bounce"
          />
          <img src="@/assets/svg/cart.svg" class="w-10" />
        </div>
        <p class="text-[2rem] font-bold">團購趣</p>
        <p class="ml-2">盡情享受團購樂趣</p>
      </RouterLink>

      <nav>
        <ul class="flex gap-4 py-2 items-center justify-center">
          <li
            v-if="route.path === '/' || route.path === '/tracklist'"
            class="px-2 py-2 lg:hidden cursor-pointer"
            @click="toggleCategory()"
          >
            商品分類
          </li>
          <li>
            <RouterLink
              to="/about"
              class="px-3 py-2 rounded-lg hover:opacity-60 block"
              :class="activeClass('/about')"
              >關於本站</RouterLink
            >
          </li>
          <li v-if="user.isMember">
            <RouterLink
              to="/tracklist"
              class="px-3 py-2 rounded-lg hover:opacity-60 block"
              :class="activeClass('/tracklist')"
              >收藏商品</RouterLink
            >
          </li>
          <li v-if="user.isMember">
            <p
              class="px-3 py-2 rounded-lg cursor-pointer hover:text-gray-500 hover:bg-white"
              @click="toMember"
            >
              會員中心
            </p>
          </li>
          <li>
            <div class="relative hover:opacity-50" @click="toCart">
              <p
                v-if="cart.length"
                class="absolute -top-4 left-[59%] -translate-x-1/2 font-bold text-white"
              >
                {{ cart.length }}
              </p>
              <img src="@/assets/svg/cart.svg" class="w-6" />
            </div>
          </li>
          <li v-if="!user.isMember">
            <RouterLink
              to="/membership"
              class="px-3 py-2 rounded-lg hover:opacity-60 bg-white text-primary"
              :class="activeClass('/membership')"
              >會員登入</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { useUserStore } from '@/stores/users';
import { useCartStore } from '@/stores/carts';
import { useBankStore } from '@/stores/bank';
import { useAddressStore } from '@/stores/address';
import { useSwalStore } from '@/stores/swal';
import { useProductsStore } from '@/stores/products';
const route = useRoute();
const router = useRouter();

const user = useUserStore();
const carts = useCartStore();
const { cart } = storeToRefs(carts);
const { listAddress } = storeToRefs(useAddressStore());
const { listBank } = storeToRefs(useBankStore());
const { swalError } = useSwalStore();
const { toggleProductCategory, toggleCollectCategory } = storeToRefs(
  useProductsStore()
);

const navBar = ref(null);
const bodyHeight = ref();
const navAnimation = ref();

const activeClass = (active) => {
  return route.path === active ? 'text-primary bg-white' : null;
};

const toMember = () => {
  if (!user.isAdmin) {
    router.push('/member/orderlist');
  } else {
    router.push('/member/orderalllist');
  }
};

const toCart = () => {
  if (cart.value.length) {
    if (listBank.value.length === 0) {
      swalError('請先新增付款帳戶');
      router.push('/member/bankinfo');
      return;
    }
    if (listAddress.value.length === 0) {
      swalError('請先新增收件地址');
      router.push('/member/addressinfo');
      return;
    }
  }
  router.push('/cart');
};

const toggleCategory = () => {
  if (route.path === '/') {
    toggleProductCategory.value = !toggleProductCategory.value;
  } else if (route.path === '/tracklist') {
    toggleCollectCategory.value = !toggleCollectCategory.value;
  }
};

gsap.registerPlugin(ScrollTrigger);

watch(
  () => route.path,
  () => {
    setTimeout(() => {
      bodyHeight.value = document.documentElement.scrollHeight;
      ScrollTrigger.refresh();
      navAnimation.value.play();
    }, 250);
  }
);

onMounted(async () => {
  setTimeout(() => {
    bodyHeight.value = document.documentElement.scrollHeight;
    navAnimation.value = gsap.from(navBar.value, {
      yPercent: -100,
      paused: false,
      duration: 0.5,
      scrollTrigger: {
        id: 'nav',
        start: 'top 60',
        end: () => bodyHeight.value,
        onEnter(self) {
          self.animation.play();
        },
        onUpdate(self) {
          self.direction === -1
            ? self.animation.play()
            : self.animation.reverse();
        },
      },
    });
  }, 250);
});
</script>
