<template>
  <div class="container py-10">
    <Breadcrumbs class="mb-10">
      <div class="flex">
        <RouterLink
          to="/member/ship"
          class="text-primary font-bold hover:scale-105"
          >帳戶</RouterLink
        >
        <p>&ensp;/&ensp;Email編輯</p>
      </div>
    </Breadcrumbs>
    <div class="lg:w-1/2 mx-auto border-2 px-5 py-10 rounded-lg">
      <form @submit.prevent="submitHandler">
        <Input
          title="Email"
          type="email"
          class="mb-8 w-4/5 mx-auto"
          v-model="form.email"
          :error="error.error"
          :errorText="error.value"
          @click="error.error = false"
        />
        <div class="flex mt-8 justify-center gap-5">
          <RouterLink to="/member/ship" class="w-1/4 block">
            <Btn text="取消" className="btn-outline" class="w-full" />
          </RouterLink>
          <Btn
            type="sumbit"
            text="確定"
            class="w-1/4"
            :disabled="isLoading"
            :loading="isLoading"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import validator from 'validator';
import { storeToRefs } from 'pinia';

import Breadcrumbs from '@/components/ui/TheBreadcrumbs.vue';
import Input from '@/components/ui/TheInput.vue';
import Btn from '@/components/ui/TheBtn.vue';

import { useUserStore } from '@/stores/users';

const isLoading = ref(false);

const user = useUserStore();
const { editUserHander } = user;
const { users } = storeToRefs(user);

const form = reactive({
  email: users.value.email || '',
});

const error = reactive({
  error: false,
  value: '',
});

const validatorFormHandler = () => {
  if (validator.isEmpty(form.email)) {
    error.value = '為必填';
    error.error = true;
    return true;
  }
  if (!validator.isEmail(form.email)) {
    error.value = '格式錯誤';
    error.error = true;
    return false;
  }
  return false;
};

const submitHandler = async () => {
  if (validatorFormHandler()) return;
  isLoading.value = true;
  const fd = new FormData();
  fd.append('email', form.email);
  await editUserHander(fd);
  isLoading.value = false;
};
</script>
