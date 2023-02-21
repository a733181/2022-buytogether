<template>
  <div class="container py-10">
    <Breadcrumbs class="mb-10">
      <div class="flex">
        <RouterLink
          to="/member/ship"
          class="text-primary font-bold hover:scale-105"
          >帳戶</RouterLink
        >
        <p>&ensp;/&ensp;個人資訊編輯</p>
      </div>
    </Breadcrumbs>
    <div class="lg:w-1/2 mx-auto border-2 px-5 py-10 rounded-lg">
      <form @submit.prevent="submitHandler">
        <UploadImage
          v-model="form.image"
          className="avatar"
          id="avatar"
          class="mx-auto w-fit"
        />
        <Input
          title="名稱"
          class="mb-8 w-4/5 mx-auto"
          v-model="form.name"
          :error="error.name.error"
          :errorText="error.name.value"
          @click="error.name.error = false"
          maxlength="12"
        />
        <Input
          title="密碼"
          class="mb-8 w-4/5 mx-auto"
          type="password"
          v-model="form.password"
          :error="error.password.error"
          :errorText="error.password.value"
          @click="error.password.error = false"
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
import UploadImage from '@/components/ui/UploadImage.vue';

import { useUserStore } from '@/stores/users';

const user = useUserStore();
const { editUserHander } = user;
const { users } = storeToRefs(user);

const isLoading = ref(false);

const form = reactive({
  name: users.value.name || '',
  image: users.value.image || '',
  password: '',
});

const error = reactive({
  name: {
    error: false,
    value: '',
  },
  password: {
    error: false,
    value: '',
  },
});

const validatorFormHandler = () => {
  if (validator.isEmpty(form.name)) {
    error.name.value = '為必填';
    error.name.error = true;
    return true;
  }
  if (!validator.isByteLength(form.name, { max: 12 })) {
    error.name.value = '長度小於 12';
    error.name.error = true;
    return true;
  }
  if (
    form.password !== '' &&
    !validator.isByteLength(form.password, { min: 4, max: 20 })
  ) {
    error.password.value = '長度大於 4 小於 20';
    error.password.error = true;
    return true;
  }
  return false;
};

const submitHandler = async () => {
  if (validatorFormHandler()) return;
  isLoading.value = true;
  const fd = new FormData();
  fd.append('name', form.name);
  fd.append('password', form.password);
  if (
    form.image &&
    form.image !== users.value.image &&
    form.image.type.startsWith('image/')
  ) {
    fd.append('image', form.image);
  }
  await editUserHander(fd);
  isLoading.value = false;
};
</script>
