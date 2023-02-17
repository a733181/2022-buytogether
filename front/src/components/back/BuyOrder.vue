<template>
  <div class="overflow-auto">
    <Select v-model="sortType" :select="sortOrder" />
    <table class="mt-10 w-full table-auto">
      <thead>
        <tr>
          <th class="border-2 p-2">訂單編號</th>
          <th class="border-2 p-2">商品名稱</th>
          <th class="border-2 p-2 w-[60px]">總量</th>
          <th class="border-2 p-2 w-[80px]">總金額</th>
          <th class="border-2 p-2">收件地址</th>
          <th class="border-2 p-2">付款帳戶</th>
          <th class="border-2 p-2">是否付款</th>
          <th class="border-2 p-2">出貨狀態</th>
          <th class="border-2 p-2 w-[90px]">商品詳情</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filterData" :key="item._id">
          <td class="border-2 p-2 text-center">{{ item._id }}</td>
          <td class="border-2 p-2 text-center">
            <p v-for="prod in item.products">{{ prod.productId.name }}</p>
          </td>
          <td class="border-2 p-2 text-center">
            {{ countyNum(item.products) }}
          </td>
          <td class="border-2 p-2 text-center">
            {{ countyPrice(item.products) }}
          </td>

          <td class="border-2 p-2">
            <p>{{ item.addressId.name }}</p>
            <p>
              {{ item.addressId.phone }}
            </p>
            <p class="">
              {{ item.addressId.code }}
              {{ item.addressId.city }} {{ item.addressId.districts }}
              {{ item.addressId.street }}
            </p>
          </td>
          <td class="border-2 p-2">
            <p>{{ item.bankId.bankName }}</p>
            <p>{{ item.bankId.bankNumber }}</p>
          </td>
          <td class="border-2 p-2 text-center lg:w-[120px]">
            <p v-if="truePaid(item.products)">
              {{ truePaid(item.products) }} 筆已付款
            </p>
            <p v-if="falsePaid(item.products)" class="text-red-400">
              {{ falsePaid(item.products) }} 筆未付款
            </p>
          </td>
          <td class="border-2 p-2 text-center lg:w-[120px]">
            <p v-if="notShip(item.products)" class="text-red-400">
              {{ notShip(item.products) }} 筆未出貨
            </p>
            <p v-if="shiped(item.products)">
              {{ shiped(item.products) }} 筆已出貨
            </p>
            <p></p>
          </td>
          <td class="border-2 p-2">
            <img
              src="@/assets/svg/eye-solid.svg"
              class="w-6 hover:opacity-60 mx-auto"
              @click="viewOrder(item)"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <Model>
      <div>
        <h2 class="mb-6 font-bold text-xl">訂單資訊</h2>
        <table class="mb-6 table-auto">
          <tr>
            <td class="p-2">訂單編號</td>
            <td class="p-2">{{ showProduct.list._id }}</td>
          </tr>
          <tr>
            <td class="p-2">收件地址</td>
            <td class="p-2">
              <div class="flex gap-1">
                <p>{{ showProduct.list.addressId.name }}</p>
                <p>{{ showProduct.list.addressId.phone }}</p>
              </div>
              <div class="flex gap-1">
                <p>{{ showProduct.list.addressId.code }}</p>
                <p>{{ showProduct.list.addressId.city }}</p>
                <p>{{ showProduct.list.addressId.districts }}</p>
                <p>{{ showProduct.list.addressId.street }}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="p-2">付款帳戶</td>
            <td class="p-2">
              <p>
                <span
                  >{{ showProduct.list.bankId.bankName }}
                  {{ showProduct.list.bankId.bankNumber }}</span
                >
              </p>
            </td>
          </tr>
          <tr>
            <td class="p-2">是否付款</td>
            <td class="p-2">
              <p v-if="truePaid(showProduct.list.products)">
                {{ truePaid(showProduct.list.products) }}筆已付款
              </p>
              <p
                v-if="falsePaid(showProduct.list.products)"
                class="text-red-400"
              >
                {{ falsePaid(showProduct.list.products) }}筆未付款
              </p>
            </td>
          </tr>
        </table>
        <table>
          <thead>
            <tr>
              <td class="border-2 p-2">商品名稱</td>
              <td class="border-2 p-2">商品數量</td>
              <td class="border-2 p-2">商品價格</td>
              <td class="border-2 p-2">收款帳戶</td>
              <td class="border-2 p-2">訂單狀態</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in showProduct.list.products" :key="item._id">
              <td class="border-2 p-2">
                <img
                  :src="item.productId.image"
                  class="rounded-lg w-56 h-36 lg:w-80 lg:h-56 object-cover"
                />
              </td>
              <td class="text-center border-2 p-2">
                {{ item.quantity }}
              </td>
              <td class="text-center border-2 p-2">
                {{ item.productId.price }}
              </td>
              <td class="border-2 p-2">
                <p>{{ item.productId.bankId.bankName }}</p>
                <p>{{ item.productId.bankId.bankNumber }}</p>
              </td>
              <td class="border-2 p-2">
                <p
                  v-if="item.paid.isPaid"
                  class="text-center mb-2"
                  :class="{ 'text-red-400': item.shippingStatus === 0 }"
                >
                  {{ item.shippingStatus === 0 ? '未出貨' : '已出貨' }}
                </p>
                <p v-if="item.shippingStatus === 2">已取消</p>
                <Btn
                  :text="item.paid.isPaid ? '已付款' : '未付款'"
                  class="w-24 block mb-4"
                  :disabled="item.paid.isPaid || item.shippingStatus === 2"
                  :class="{
                    'disabled: opacity-50':
                      item.paid.isPaid || item.shippingStatus === 2,
                  }"
                  @click="
                    paidOrderHandler({
                      orderId: showProduct.list._id,
                      productId: item.productId._id,
                    })
                  "
                />
                <Btn
                  text="取消訂單"
                  class="w-24 block"
                  className="btn-outline"
                  :disabled="item.paid.isPaid || item.shippingStatus === 2"
                  :class="{
                    'disabled: opacity-50':
                      item.paid.isPaid || item.shippingStatus === 2,
                  }"
                  @click="
                    cancelOrderHandler({
                      orderId: showProduct.list._id,
                      productId: item.productId._id,
                    })
                  "
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Model>
  </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

import Model from '@/components/ui/TheModel.vue';
import Btn from '@/components/ui/TheBtn.vue';
import Select from '@/components/ui/TheSelect.vue';

import { useOrderStore } from '@/stores/orders';
import { useModelStore } from '@/stores/model';
import { useCategoryStore } from '@/stores/category';

const order = useOrderStore();
const { orderBuy, showProduct } = storeToRefs(order);
const { paidOrderHandler, cancelOrderHandler } = order;
const { toggleShow } = storeToRefs(useModelStore());
const { sortOrder } = useCategoryStore();

const sortType = ref(sortOrder[0]);

const filterData = computed(() => {
  const copydata = JSON.parse(JSON.stringify(orderBuy.value));
  if (sortType.value === sortOrder[0]) {
    return copydata.filter((item) => {
      item.products = item.products.filter(
        (prod) => !prod.paid.isPaid && prod.shippingStatus !== 2
      );
      return item.buyStatus === 0 && item.products.length > 0;
    });
  }
  if (sortType.value === sortOrder[1]) {
    return copydata.filter((item) => {
      item.products = item.products.filter(
        (prod) => prod.paid.isPaid && prod.shippingStatus === 0
      );
      return item.buyStatus === 0 && item.products.length > 0;
    });
  }
  if (sortType.value === sortOrder[2]) {
    return copydata.filter((item) => {
      item.products = item.products.filter(
        (prod) => prod.paid.isPaid && prod.shippingStatus === 1
      );
      return item.buyStatus === 0 && item.products.length > 0;
    });
  }
  if (sortType.value === sortOrder[3]) {
    return copydata.filter((item) => {
      item.products = item.products.filter((prod) => prod.shippingStatus === 2);
      return item.buyStatus === 0 && item.products.length > 0;
    });
  }
});

const countyNum = (data) =>
  data.reduce((total, current) => total + current.quantity, 0);

const countyPrice = (data) => {
  const allPrice = data.map((item) => item.quantity * item.productId.price);
  return allPrice.reduce((total, current) => total + current, 0);
};

const truePaid = (data) => {
  return data.reduce((total, item) => {
    if (item.paid.isPaid && item.shippingStatus !== 2) {
      total++;
    }
    return total;
  }, 0);
};
const falsePaid = (data) => {
  return data.reduce((total, item) => {
    if (!item.paid.isPaid && item.shippingStatus !== 2) {
      total++;
    }
    return total;
  }, 0);
};

const notShip = (data) => {
  return data.reduce((total, item) => {
    if (item.shippingStatus === 0) {
      total++;
    }
    return total;
  }, 0);
};

const shiped = (data) => {
  return data.reduce((total, item) => {
    if (item.shippingStatus === 1) {
      total++;
    }
    return total;
  }, 0);
};

const viewOrder = (data) => {
  toggleShow.value = true;
  showProduct.value.list = data;
};

watch(
  () => toggleShow.value,
  (value) => {
    if (!value) {
      showProduct.value.list = {};
    }
  }
);
</script>
