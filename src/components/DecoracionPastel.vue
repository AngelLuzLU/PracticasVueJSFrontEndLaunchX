<template>
    <div class="DecoracionImgContainer">
            <img :src=img class="DecoracionImg">
            <h3>{{ Decoracion }}</h3>
            <p>{{ Descripcion }}</p>
            <p class="green">Precio: ${{ Precio }} adicional</p>
        </div>
</template>
<script>
export default {
  name: "DecoracionPastel",
  props: {
    img: String,
    Decoracion: String,
    Descripcion: String,
    Precio: String
  },
};
</script>