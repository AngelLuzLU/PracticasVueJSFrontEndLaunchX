<template>
    <div class="PastelImgContainer">
        <img :src=img class="PastelImg">
        <h3>{{ Sabor }}</h3>
        <p>{{ Descripcion }}</p>
        <p class="green">Precio: ${{ Precio }}</p>
    </div>
</template>

<script>
export default {
  name: "SaborPastel",
  props: {
    img: String,
    Sabor: String,
    Descripcion: String,
    Precio: String
  },
};
</script>