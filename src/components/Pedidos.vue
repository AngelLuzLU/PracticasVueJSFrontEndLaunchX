<template>
    <section id="Pedido">
              <h2>Pedidos</h2>
              <div class="tableContainer">
              <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Correo electrónico</th>
                        <th>Sabor/es del pastel</th>
                        <th>decoracion/es del pastel</th>
                        <th>Fecha de entrega</th>
                        <th>Domicilio</th>
                        <th>Comentarios adicionales</th>
                        <th>Imagén de referencia</th>
                    </tr>
                    <tr v-for="pedido in Pedidos" :key="pedido">
                        <td>{{ pedido.Nombre }}</td>
                        <td>{{ pedido.Telefono }}</td>
                        <td>{{ pedido.Correo }}</td>
                        <td>
                            <div v-for="sabor in pedido.Sabores" :key="sabor">
                                <p> {{ sabor }} </p>
                            </div>
                        </td>
                        <td>
                            <div v-for="decoracion in pedido.Decoraciones" :key="decoracion">
                                <p> {{ decoracion }} </p>
                            </div>
                        </td>
                        <td>{{ pedido.Fecha }}</td>
                        <td>{{ pedido.Domicilio }}</td>
                        <td>{{ pedido.Comentarios }}</td>
                        <td><a target="_blank" :id="pedido.Id" :href=FileUrl(pedido)>Img</a></td>
                    </tr>
              </table>
              </div>
          </section>  
</template>

<script>
export default {
 name: "Pedidos",
 computed:{
     Pedidos(){
         return this.$store.state.Pedidos;
     }
 },
 methods:{
     FileUrl(pedido){
            const reader = new FileReader();
            const file = pedido.Referencia;
            reader.addEventListener("load", function () {
               document.getElementById(pedido.Id).href = reader.result;
            }, false);
            if(file){
                reader.readAsDataURL(file);
            }
    },
    
 }
};
</script>