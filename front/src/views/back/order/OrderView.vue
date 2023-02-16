<template>
  <div class="container py-10">
    <Breadcrumbs class="mb-10">
      <span class="text-primary font-bold">訂單管理</span>
      <span>&ensp;/&ensp;{{ activeTab }}</span>
    </Breadcrumbs>
    <div class="flex gap-8 mb-10 border-b-2 border-primary">
      <p
        v-for="(tab, index) in tabCategory"
        :key="index"
        class="text-lg py-3 px-8"
        :class="{
          'bg-primary text-white rounded-t-lg': activeTab === tab,
        }"
        @click="activeTab = tab"
      >
        {{ tab }}
      </p>
    </div>
    <BuyOrder v-if="activeTab === tabCategory[0]" />
    <SellOrder v-if="activeTab === tabCategory[1]" />
    <ChartOrder v-if="activeTab === tabCategory[2]" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumbs from '@/components/ui/TheBreadcrumbs.vue';
import BuyOrder from '@/components/back/BuyOrder.vue';
import SellOrder from '@/components/back/SellOrder.vue';
import ChartOrder from '@/components/back/ChartOrder.vue';

import { useOrderStore } from '@/stores/orders';

const order = useOrderStore();
const { getMemberBuyOrderHandler, getMemberSellOrderHandler } = order;

getMemberBuyOrderHandler();
getMemberSellOrderHandler();

const activeTab = ref('購買訂單');

const tabCategory = ['購買訂單', '銷售訂單', '訂單分析'];
</script>
