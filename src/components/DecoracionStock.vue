<template>
    <div class="DecoracionImgContainer">
                  <img :src=img class="DecoracionImg">
                  <h3>{{ Decoracion }}</h3>
                  <p class="green" :id="Decoracion.concat('s')">Quedan suficientes ingredientes para {{ Stock }} pasteles</p>
              <div class="StockLinkContainer">
                  <p><a href="#" @click.prevent="showAct" class="StockLink">Actualizar</a></p>
                  <p><a href="#" @click.prevent="recordatorio" class="StockLink">Añadir Recordatorio</a></p>
              </div>
              </div>
              <div class="actualizacionCont" style="display:none;" :id=img>
                <div class="exitCont"><button @click.prevent="hideAct" class="exitAct">X</button></div>
                <label for="nStock">Ingrese el nuevo número de stock que se tiene para la decoracion: <b>{{ Decoracion }}</b></label>
                <div class="stockCont"><input type="number" name="nStock" :id=Decoracion></div>
                <button @click.prevent="actualizar" class="actBtn">Actualizar</button>
              </div>
</template>

<script>
export default {
  name: "DecoracionStock",
  props: {
    img: String,
    Decoracion: String,
    Stock: Number,
  },
  methods:{
    recordatorio (){
      alert("Recordatorio de compra añadido a la lista de compras");
    },
    actualizar (){
        const deco = this.$props.Decoracion;
        const newStock =   parseInt(document.getElementById(deco).value);
        switch(deco){
          case "Fruta": this.$store.commit("actualizarFruta",newStock); break;
          case "Chocolate": this.$store.commit("actualizarChocolate",newStock);break;
          case "Macarrones": this.$store.commit("actualizarMacarrones",newStock);break;
          case "Fondant": this.$store.commit("actualizarFondant",newStock);break;
        }
        document.getElementById(this.$props.img).style = 'display:none;';
    },
    showAct (){
      document.getElementById(this.$props.img).style = '';
    },
    hideAct (){
      document.getElementById(this.$props.img).style = 'display:none;';
    },
    setColor(){
      const Id = this.$props.Decoracion.concat('s');
      console.log(Id);
      if(this.$props.Stock <= 3){
        document.getElementById(Id).className = "red";
      }
      else{
        document.getElementById(Id).className = "green";
      }
    }
  },
  mounted: function (){
      const Id = this.$props.Decoracion.concat('s');
      console.log(Id);
      if(this.$props.Stock <= 3){
        document.getElementById(Id).className = "red";
      }
      else{
        document.getElementById(Id).className = "green";
      }
  },
  updated: function (){
      const Id = this.$props.Decoracion.concat('s');
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