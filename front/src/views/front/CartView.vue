<template>
  <div class="container pt-44 lg:pt-32 pb-10 overflow-auto">
    <Breadcrumbs class="mb-10">
      <p class="text-primary font-bold">購物車</p>
    </Breadcrumbs>
    <div v-if="!cart.length" class="text-2xl flex gap-8 justify-center">
      <h1>購物車內沒有商品</h1>
      <RouterLink to="/" class="text-primary">前往購物</RouterLink>
    </div>

    <form @submit.prevent="submitHandler" v-if="cart.length" class="mb-20">
      <div class="overflow-auto">
        <table class="w-full table-fixed lg:table-auto">
          <thead>
            <tr>
              <th class="border-2 p-2 w-[150px] lg:w-auto">圖片</th>
              <th class="border-2 p-2 w-[100px] lg:w-auto">名稱</th>
              <th class="border-2 p-2 w-[100px] lg:w-auto">數量</th>
              <th class="border-2 p-2 w-[100px] lg:w-auto">單價</th>
              <th class="border-2 p-2 w-[100px] lg:w-auto">小計</th>
              <th class="border-2 p-2 w-[60px] lg:w-auto">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.list">
              <td class="border-2 p-2">
                <img
                  :src="item.productId.image"
                  :alt="item.productId.name"
                  class="w-32 h-32 mx-auto object-cover rounded-lg"
                />
              </td>
              <td class="border-2 p-2 text-center">
                <p>{{ item.productId.name }}</p>
              </td>
              <td class="border-2 p-2">
                <div class="flex justify-center items-center gap-3 lg:gap-6">
                  <img
                    src="@/assets/svg/minus.svg"
                    class="w-5 hover:opacity-60"
                    @click="
                      changeNumber({ id: item.productId._id, quantity: -1 })
                    "
                  />
                  <p>{{ item.quantity }}</p>
                  <img
                    src="@/assets/svg/plus.svg"
                    class="w-5 hover:opacity-60"
                    @click="changeNumber({ id: item.productId._id })"
                  />
                </div>
              </td>
              <td class="border-2 p-2 text-center">
                {{ item.productId.price }}
              </td>
              <td class="border-2 p-2 text-center">
                {{ item.quantity * item.productId.price }}
              </td>
              <td class="border-2 p-2">
                <img
                  src="@/assets/svg/delete.svg"
                  class="w-6 hover:opacity-60 mx-auto"
                  @click="
                    changeNumber({ id: item.productId._id, type: 'delete' })
                  "
                />
              </td>
            </tr>
            <tr>
              <td colspan="3"></td>
              <td class="text-center p-4">
                <p>總計</p>
              </td>
              <td class="text-center p-4">
                <p>{{ sumTotal }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="lg:w-1/3 lg:ml-auto">
        <Input
          v-model="form.bank"
          title="付款帳戶"
          :select="bankNewList"
          :error="error.bank.error"
          :errorText="error.bank.value"
          @click="error.bank.error = false"
        />
      </div>
      <div class="lg:w-1/3 lg:ml-auto">
        <Input
          v-model="form.address"
          title="收件地址"
          :select="addressNewList"
          :error="error.address.error"
          :errorText="error.address.value"
          @click="error.address.error = false"
        />
      </div>
      <Btn
        text="確定"
        class="w-3/12 lg:w-2/12 mt-6 ml-auto block"
        @click="submitHandler"
        :disabled="isLoading"
        :loading="isLoading"
      />
    </form>

    <TheMoreProduct :category="'全部'" v-if="cart.length" />
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import validator from 'validator';

import Breadcrumbs from '@/components/ui/TheBreadcrumbs.vue';
import Btn from '@/components/ui/TheBtn.vue';
import Input from '@/components/ui/TheInput.vue';
import TheMoreProduct from '@/components/front/TheMoreProduct.vue';

import { useCartStore } from '@/stores/carts';
import { useOrderStore } from '@/stores/orders';
import { useBankStore } from '@/stores/bank';
import { useAddressStore } from '@/stores/address';

const carts = useCartStore();
const { getCartList, clickAddCartHandler, deleteCartHandler } = carts;
const { cart } = storeToRefs(carts);
const { checkouOrdertHandler } = useOrderStore();
const { listBank } = storeToRefs(useBankStore());
const { listAddress } = storeToRefs(useAddressStore());
getCartList();

const isLoading = ref(false);

const defaultAddress = computed(() => {
  const index = listAddress.value.findIndex((item) => item.preset);

  if (index === -1 && listAddress.value.length === 0) {
    return '';
  } else if (index === -1) {
    return `${listAddress.value[0].code} ${listAddress.value[0].city} ${listAddress.value[0].districts} ${listAddress.value[0].street}`;
  } else {
    return `${listAddress.value[index].code} ${listAddress.value[index].city} ${listAddress.value[index].districts} ${listAddress.value[index].street}`;
  }
});

const defaultBank = computed(() => {
  const index = listBank.value.findIndex((item) => item.preset);
  if (index === -1 && listBank.value.length === 0) {
    return '';
  } else if (index === -1) {
    return `${listBank.value[0].bankName} - ${listBank.value[0].bankNumber}`;
  } else {
    return `${listBank.value[index].bankName} - ${listBank.value[index].bankNumber}`;
  }
});

const error = reactive({
  address: {
    error: false,
    value: '',
  },
  bank: {
    error: false,
    value: '',
  },
});

const form = reactive({
  address: defaultAddress.value,
  bank: defaultBank.value,
});

const changeNumber = async ({ id, quantity, type }) => {
  if (type !== 'delete') {
    await clickAddCartHandler({ id, quantity });
  } else {
    await deleteCartHandler({ id });
  }
  await getCartList();
};

const sumTotal = computed(() => {
  return cart.value.list.reduce(
    (total, current) => total + current.productId.price * current.quantity,
    0
  );
});

const bankNewList = computed(() =>
  listBank.value.map((item) => `${item.bankName} - ${item.bankNumber}`)
);

const addressNewList = computed(() =>
  listAddress.value.map(
    (item) => `${item.code} ${item.city} ${item.districts} ${item.street}`
  )
);

const validatorFormHandler = () => {
  if (validator.isEmpty(form.bank)) {
    error.bank.value = '為必填';
    error.bank.error = true;
    return true;
  }
  if (validator.isEmpty(form.address)) {
    error.address.value = '為必填';
    error.address.error = true;
    return true;
  }

  const isBank = listBank.value.some((item) => {
    const bank = form.bank.split('-');
    return (
      item.bankName === bank[0].trim() &&
      item.bankNumber.toString() === bank[1].trim()
    );
  });
  if (!isBank) {
    error.bank.value = '格式錯誤';
    error.bank.error = true;
    return true;
  }

  const isAddress = listAddress.value.some((item) => {
    const address = form.address.split(' ');
    return (
      item.code.toString() === address[0] &&
      item.city === address[1] &&
      item.districts === address[2] &&
      item.street.toString() === address[3]
    );
  });

  if (!isAddress) {
    error.address.value = '格式錯誤';
    error.address.error = true;
    return true;
  }

  return false;
};

const submitHandler = async () => {
  if (validatorFormHandler()) return;
  isLoading.value = true;
  const bankIndex = listBank.value.findIndex((item) => {
    const bank = form.bank.split('-');
    return (
      item.bankName === bank[0].trim() &&
      item.bankNumber.toString() === bank[1].trim()
    );
  });

  const addressIndex = listAddress.value.findIndex((item) => {
    const address = form.address.split(' ');
    return (
      item.code.toString() === address[0] &&
      item.city === address[1] &&
      item.districts === address[2] &&
      item.street.toString() === address[3]
    );
  });

  const newForm = {
    addressId: listAddress.value[addressIndex]._id,
    bankId: listBank.value[bankIndex]._id,
  };

  await checkouOrdertHandler(newForm);
  isLoading.value = false;
};
</script>
