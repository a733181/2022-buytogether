<template>
  <div class="container py-10">
    <Breadcrumbs v-if="editBank.type != 'admin'" class="mb-20">
      <div class="flex">
        <RouterLink
          to="/member/ship"
          class="text-primary font-bold hover:scale-105"
          >帳戶</RouterLink
        >
        <p>&ensp;/&ensp;</p>
        <RouterLink to="/member/banklist" class="hover:scale-105"
          >帳戶列表</RouterLink
        >

        <p>
          {{ editBank._id ? '&ensp;/&ensp;修改帳戶' : '&ensp;/&ensp;新增帳戶' }}
        </p>
      </div>
    </Breadcrumbs>
    <Breadcrumbs v-else class="mb-20">
      <div class="flex">
        <RouterLink to="/member/shipadmin" class="hover:scale-105"
          >會員</RouterLink
        >
        <p>&ensp;/&ensp;</p>
        <RouterLink to="/member/adminbank" class="hover:scale-105"
          >帳戶列表</RouterLink
        >

        <p>
          {{ editBank._id ? '&ensp;/&ensp;修改帳戶' : '&ensp;/&ensp;新增帳戶' }}
        </p>
      </div>
    </Breadcrumbs>

    <div class="lg:w-1/2 mx-auto border-2 px-5 py-10 rounded-lg">
      <form @submit.prevent="submitHandler">
        <div class="flex gap-5 items-center">
          <Input
            title="代號"
            class="w-1/4"
            v-model="form.bankName"
            :error="error.bankName.error"
            :errorText="error.bankName.value"
            @click="error.bankName.error = false"
            :select="bankNumberLists"
          />

          <Input
            title="帳號"
            class="w-2/4"
            v-model="form.bankNumber"
            :error="error.bankNumber.error"
            :errorText="error.bankNumber.value"
            @click="error.bankNumber.error = false"
            maxlength="16"
          />
          <Input
            title="預設"
            type="checkbox"
            class="-mb-4"
            v-model="form.preset"
            id="bankpreset"
          />
        </div>

        <div class="flex mt-8 gap-5 justify-center">
          <Btn
            text="取消"
            className="btn-outline"
            class="w-1/6"
            @click="cancelBankHandler"
          />
          <Btn
            type="sumbit"
            text="確定"
            class="w-1/6"
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

import { useBankStore } from '@/stores/bank';
import { useCategoryStore } from '@/stores/category';

import Breadcrumbs from '@/components/ui/TheBreadcrumbs.vue';
import Input from '@/components/ui/TheInput.vue';

import Btn from '@/components/ui/TheBtn.vue';

const isLoading = ref(false);

const bank = useBankStore();
const { sumbitBankHandler, cancelBankHandler } = bank;
const { editBank } = storeToRefs(bank);
const { bankNumberLists } = useCategoryStore();

const form = reactive({
  _id: editBank.value._id || '',
  userId: editBank.value.userId || null,
  bankName: editBank.value.bankName || '',
  bankNumber: editBank.value.bankNumber
    ? String(editBank.value.bankNumber)
    : '',
  preset: editBank.value.preset || false,
});

const error = reactive({
  bankName: {
    error: false,
    value: '',
  },
  bankNumber: {
    error: false,
    value: '',
  },
});

const validatorFormHandler = () => {
  if (validator.isEmpty(form.bankName)) {
    error.bankName.value = '為必填';
    error.bankName.error = true;
    return true;
  }
  if (validator.isEmpty(form.bankNumber)) {
    error.bankNumber.value = '為必填';
    error.bankNumber.error = true;
    return true;
  }

  if (!validator.isNumeric(form.bankNumber)) {
    error.bankNumber.value = '不是數字';
    error.bankNumber.error = true;
    return true;
  }

  if (!validator.isByteLength(form.bankNumber, { min: 11, max: 16 })) {
    error.bankNumber.value = '長度大於 11 小於 16';
    error.bankNumber.error = true;
    return true;
  }
  if (!bankNumberLists.some((item) => item === form.bankName)) {
    error.bankName.value = '格式錯誤';
    error.bankName.error = true;
    return true;
  }

  return false;
};

const submitHandler = async () => {
  if (validatorFormHandler()) return;
  isLoading.value = true;
  await sumbitBankHandler(form);
  isLoading.value = false;
};
</script>
