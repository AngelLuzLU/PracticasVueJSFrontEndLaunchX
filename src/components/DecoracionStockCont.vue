<template>
    <section id="Decoraciones">
              <h2>Stock Decoraciones</h2>
              <div class="ContainerDecoraciones">
                  <DecoracionStock
                  :img="require('@/assets/Frutas.jpg')"
                  Decoracion="Fruta"
                  :Stock= this.$store.getters.getFruta />

                  <DecoracionStock
                  :img="require('@/assets/Chocolate.jpg')"
                  Decoracion="Chocolate"
                  :Stock= this.$store.getters.getChocolate />

                  <DecoracionStock
                  :img="require('@/assets/Macaroons.jpg')"
                  Decoracion="Macarrones"
                  :Stock= this.$store.getters.getMacarrones />

                  <DecoracionStock
                  :img="require('@/assets/Fondant.jpg')"
                  Decoracion="Fondant"
                  :Stock= this.$store.getters.getFondant />
              </div>
    </section>
</template>

<script>
import DecoracionStock from './DecoracionStock.vue';



export default {
 name: "DecoracionStockCont", 
 components: {
      DecoracionStock,
  }
  
};
</script>