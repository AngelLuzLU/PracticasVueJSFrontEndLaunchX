<template>
    <SaborStockCont/>
    <DecoracionStockCont/>
    <Pedidos/>
</template>

<script>
import SaborStockCont from '@/components/SaborStockCont.vue'
import SaborStock from '@/components/SaborStock.vue'
import DecoracionStock from '@/components/DecoracionStock.vue'
import DecoracionStockCont from '@/components/DecoracionStockCont.vue'
import Pedidos from '@/components/Pedidos.vue'
import { computed } from '@vue/runtime-core'


export default {
  name: 'PasteleroView',
  components: {
    SaborStockCont,
    SaborStock,
    DecoracionStock,
    DecoracionStockCont,
    Pedidos,
    computed
  },
}
</script>

<style>
  @import '../css/PasteleroPage.css';
</style>