<template>
    <section id="Pasteles">
          <h2>Stock Pasteles</h2>
          <div class="ContainerPasteles">
              <SaborStock
              :img="require('@/assets/Vainilla.jpg')"
              Sabor="Vainilla"
              :Stock= this.$store.getters.getVainilla />

              <SaborStock
              :img="require('@/assets/RedVelvet.jpg')"
              Sabor="Red Velvet"
              :Stock= this.$store.getters.getRedVelvet />

              <SaborStock
              :img="require('@/assets/ChocolateOscuro.jpg')"
              Sabor="Chocolate Oscuro"
              :Stock= this.$store.getters.getChocolateOsc />

              <SaborStock
              :img="require('@/assets/Moka.jpg')"
              Sabor="Moka"
              :Stock= this.$store.getters.getMoka />

              <SaborStock
              :img="require('@/assets/Zanahoria.jpg')"
              Sabor="Zanahoria"
              :Stock= this.$store.getters.getZanahoria />

              <SaborStock
              :img="require('@/assets/TresLeches.jpg')"
              Sabor="Tres Leches"
              :Stock= this.$store.getters.getTresLeches />
          </div>
    </section>
</template>

<script>
import { computed } from '@vue/runtime-core';
import SaborStock from './SaborStock.vue';

const Vainilla = {
  template: `<div>{{ Stock_Vainilla }}</div>`,
  computed: {
    getVainilla(){
            return this.$store.state.Stock_Vainilla;
        }
  }
}
export default {
    name: "SaborStockCont", 
    components: {
        SaborStock, computed
    },
};
</script>