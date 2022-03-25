<template>
    <section id="Pasteles">
        <h2>Pasteles</h2>
        <div class="ContainerPasteles">
            
            <SaborPastel 
            :img="require('@/assets/Vainilla.jpg')"
            Sabor='Vainilla'
            Descripcion='Pastel con pan sabor vainilla, con dulce de leche y cubierta sabor vainilla'
            Precio= '250'/>

            <SaborPastel 
            :img="require('@/assets/RedVelvet.jpg')"
            Sabor='Red Velvet'
            Descripcion='Pastel con pan sabor a Red Velvet, relleno y cubierta de chocolate blanco'
            Precio= '240'/>

            <SaborPastel 
            :img="require('@/assets/ChocolateOscuro.jpg')"
            Sabor='Chocolate Oscuro'
            Descripcion='Pastel con pan de de chocolate amargo y cubierta de chocolate semi-amargo'
            Precio= '280'/>

            <SaborPastel 
            :img="require('@/assets/Moka.jpg')"
            Sabor='Moka'
            Descripcion='Pastel con pan de chocolate con café y cubierta sabor kalhua con nueces'
            Precio= '300'/>

            <SaborPastel 
            :img="require('@/assets/Zanahoria.jpg')"
            Sabor='Zanahoria'
            Descripcion='Pastel de pan de zanahoria, cubierta de vainilla y nueces'
            Precio= '270'/>

            <SaborPastel 
            :img="require('@/assets/TresLeches.jpg')"
            Sabor='Tres Leches'
            Descripcion='Pastel de tres leches con cobertura sabor vainilla'
            Precio= '275'/>
        </div>
    </section>
</template>

<script>
import SaborPastel from './SaborPastel.vue';



export default {
 name: "ContainerSabor", 
 components: {
      SaborPastel,
  }
  
};
</script>