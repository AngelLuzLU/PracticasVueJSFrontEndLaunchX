<template>
    <div class="PastelImgContainer">
              <img :src=img class="PastelImg">
              <h3>{{ Sabor }}</h3>
              <p class="green" :id="Sabor.replace(' ', '').concat('s')">Quedan suficientes ingredientes para {{ Stock }} pasteles</p>
              <div class="StockLinkContainer">
                  <p><a href="#" @click.prevent="showAct" class="StockLink">Actualizar</a></p>
                  <p><a href="#" @click.prevent="recordatorio" class="StockLink">Añadir Recordatorio</a></p>
              </div>
              </div>
              <div class="actualizacionCont" style="display:none;" :id=img>
                <div class="exitCont"><button @click.prevent="hideAct" class="exitAct">X</button></div>
                <label for="nStock">Ingrese el nuevo número de stock que se tiene para el sabor: <b>{{ Sabor }}</b> </label>
                <div class="stockCont"><input type="number" name="nStock" :id="Sabor.replace(' ', '')"></div> 
                <button @click.prevent="actualizar" class="actBtn">Actualizar</button>
              </div>

</template>

<script>
export default {
  name: "SaborStock",
  props: {
    img: String,
    Sabor: String,
    Stock: Number,
  },
  methods:{
    recordatorio (){
      alert("Recordatorio de compra añadido a la lista de compras");
    },
    actualizar (){
        const sab = this.$props.Sabor.replace(' ', '');
        const newStock = document.getElementById(sab).value;
        switch(sab){
                        case "Vainilla": this.$store.commit("actualizarVainilla",newStock); break;
                        case "RedVelvet": this.$store.commit("actualizarRedVelvet",newStock);break;
                        case "ChocolateOscuro": this.$store.commit("actualizarChocolateOsc",newStock);break;
                        case "Moka": this.$store.commit("actualizarMoka",newStock);break;
                        case "Zanahoria" : this.$store.commit("actualizarZanahoria",newStock);break;
                        case "TresLeches": this.$store.commit("actualizarTresLeches",newStock);break;
        }
        document.getElementById(this.$props.img).style = 'display:none;';
    },
    showAct (){
      document.getElementById(this.$props.img).style = '';
    },
    hideAct (){
      document.getElementById(this.$props.img).style = 'display:none;';
    },
  },
  mounted: function (){
      const Id = this.$props.Sabor.replace(' ', '').concat('s');
      console.log(Id);
      if(this.$props.Stock <= 3){
        document.getElementById(Id).className = "red";
      }
      else{
        document.getElementById(Id).className = "green";
      }
  },
  updated: function (){
      const Id = this.$props.Sabor.replace(' ', '').concat('s');
      console.log(Id);
      if(this.$props.Stock <= 3){
        document.getElementById(Id).className = "red";
      }
      else{
        document.getElementById(Id).className = "green";
      }
  },
};
</script>