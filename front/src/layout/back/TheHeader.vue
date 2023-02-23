<template>
  <!-- lg:translate-y-0 -->
  <header>
    <div
      class="fixed z-20 bg-primary cursor-pointer top-1 right-4 px-3 py-2 block lg:hidden rounded-lg"
      @click="toggleNav = !toggleNav"
    >
      <img src="@/assets/svg/bars-solid.svg" alt="bar" class="w-6" />
    </div>
    <nav
      class="bg-primary py-3 text-white lg:w-[250px] h-full -translate-x-full fixed lg:relative lg:translate-x-0 w-full z-10 duration-200"
      :class="{ 'translate-x-0': toggleNav }"
    >
      <ul class="flex gap-8 items-center flex-wrap justify-center flex-col">
        <li class="border-b-2 w-full pb-4">
          <div class="text-center text-xl font-bold">
            <p>團購趣</p>
            <p>後臺管理系統</p>
          </div>
        </li>
        <li class="flex items-center gap-2">
          <img
            :src="user.users.image"
            :alt="user.users.name"
            class="rounded-full w-14 h-14 object-cover"
          />
          <p>{{ user.users.name }}</p>
        </li>
        <li>
          <RouterLink
            to="/"
            class="px-3 py-2 rounded-lg hover:opacity-60"
            @click="toggleNav = false"
            >回首頁</RouterLink
          >
        </li>
        <li v-if="!user.isAdmin">
          <RouterLink
            to="/member/orderlist"
            class="px-3 py-2 rounded-lg hover:opacity-60 block"
            :class="activeClass('/member/orderlist')"
            @click="toggleNav = false"
            >訂單管理</RouterLink
          >
        </li>
        <li v-if="user.isAdmin">
          <RouterLink
            to="/member/orderalllist"
            class="px-3 py-2 rounded-lg hover:opacity-60 block"
            :class="activeClass('/member/orderalllist')"
            @click="toggleNav = false"
            >訂單管理</RouterLink
          >
        </li>
        <li v-if="!user.isAdmin">
          <RouterLink
            to="/member/productlist"
            class="px-3 py-2 rounded-lg hover:opacity-60 block"
            :class="activeClass('/member/productlist')"
            @click="toggleNav = false"
            >商品管理</RouterLink
          >
        </li>
        <li v-if="user.isAdmin">
          <RouterLink
            to="/member/productalllist"
            class="px-3 py-2 rounded-lg hover:opacity-60 block"
            :class="activeClass('/member/productalllist')"
            @click="toggleNav = false"
            >商品管理</RouterLink
          >
        </li>
        <li v-if="user.isAdmin">
          <RouterLink
            to="/member/aboutmessage"
            class="px-3 py-2 rounded-lg hover:opacity-60 block"
            :class="activeClass('/member/aboutmessage')"
            @click="toggleNav = false"
            >留言管理</RouterLink
          >
        </li>
        <li v-if="!user.isAdmin" class="relative">
          <RouterLink
            to="/member/qanda"
            class="px-3 py-2 rounded-lg hover:opacity-60 block"
            :class="activeClass('/member/qanda')"
            @click="toggleNav = false"
            >留言管理
          </RouterLink>

          <p
            class="absolute top-2 -right-8 bg-white rounded-full px-2 text-primary font-bold"
            v-if="messageAllProduct.length"
          >
            {{ messageAllProduct.length }}
          </p>
        </li>
        <li>
          <p
            class="px-3 py-2 rounded-lg cursor-pointer hover:text-gray-500 hover:bg-white"
            @click="toggleChatHandler"
          >
            私訊管理
          </p>
        </li>
        <li v-if="!user.isAdmin">
          <RouterLink
            to="/member/ship"
            class="rounded-lg hover:opacity-60 block py-3 px-2 -mt-3"
            :class="activeClass('/member/ship')"
            @click="toggleNav = false"
            >會員資料</RouterLink
          >
        </li>
        <li v-if="user.isAdmin">
          <RouterLink
            to="/member/shipadmin"
            class="rounded-lg hover:opacity-60 block py-3 px-2 -mt-3"
            :class="activeClass('/member/shipadmin')"
            @click="toggleNav = false"
            >會員</RouterLink
          >
        </li>
        <li>
          <p
            class="py-3 px-2 -mt-3 rounded-lg hover:text-gray-500 hover:bg-white cursor-pointer"
            @click="logoutHandler"
          >
            登出
          </p>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useUserStore } from '@/stores/users';
import { useMessageStore } from '@/stores/messages';
import { useChatsStore } from '@/stores/chats';

const route = useRoute();

const user = useUserStore();
const { logoutHandler } = user;
const { messageAllProduct } = storeToRefs(useMessageStore());
const { showList, showChat } = storeToRefs(useChatsStore());

const toggleNav = ref(false);

const activeClass = (active) => {
  return route.path === active ? 'text-gray-500 bg-white' : null;
};

const toggleChatHandler = () => {
  showList.value = !showList.value;
  showChat.value = false;
  toggleNav.value = false;
};
</script>
