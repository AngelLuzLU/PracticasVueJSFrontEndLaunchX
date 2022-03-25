<template>
    <section id="Decoraciones">
        <h2>Decoraciones</h2>
        <div class="ContainerDecoraciones">
            <DecoracionPastel 
            :img="require('@/assets/Frutas.jpg')"
            Decoracion='Fruta'
            Descripcion='Agregar trozos de fruta a la parte superior del pastel, pueden ser de fresa, durazno, kiwi, mora azul, frambuesa o moras'
            Precio= '50'/>

            <DecoracionPastel 
            :img="require('@/assets/Chocolate.jpg')"
            Decoracion='Chocolate'
            Descripcion='Agregar decoraciones de chocolate semi-amargo con variedad de formas'
            Precio= '80'/>

            <DecoracionPastel 
            :img="require('@/assets/Macaroons.jpg')"
            Decoracion='Macarrones'
            Descripcion='Agregar macarrones alrededor o sobre el pastel a forma de decoración'
            Precio= '20 por pieza'/>

            <DecoracionPastel 
            :img="require('@/assets/Fondant.jpg')"
            Decoracion='Fondant'
            Descripcion='Adornos varios en fondant'
            Precio= '100 (puede variar según la figura)'/>
        </div>
    </section>
</template>


<script>
import DecoracionPastel from './DecoracionPastel.vue';



export default {
 name: "ContainerDecaracion", 
 components: {
      DecoracionPastel,
  }
  
};
</script>