<template>
    <section id="Pedido">
        <h2>Haz tu pedido</h2>
        <div class="formresp">
        <form action="" @submit.prevent="hacerPedido" id="form">
            <div class="formContainer">
                <div class="formElementContainer">
            <label for="Nombre">Ingresa tu Nombre:</label><br>
            <input type="text" name="Nombre" id="Nombre" required><br>
        </div>

            <div class="formElementContainer">
            <label for="Teléfono">Ingresa tu Teléfono:</label><br>
            <input type="tel" name="Teléfono" id="Teléfono" pattern="33[0-9]{8}" Title="Por favor ingrese un número de teléfono con clave LADA de Guadalajara(33), a 10 dígitos" required><br>
        </div>

    <div class="formElementContainer">
            <label for="Email">Ingresa tu correo electrónico:</label><br>
            <input type="email" name="Email" id="Email" required><br>
        </div>

        <div class="formElementContainer">
            <label for="Domicilio">Ingresa el domicilio para la entrega del pastel(ZMG):</label><br>
            <input type="text" name="Domicilio" id="Domicilio" required><br>
        </div>    

        <div class="formElementContainer">
            <label for="Fecha">Seleccione la fecha para la entrega del pastel</label><br>
            <input type="date" name="Fecha" id="Fecha" required  @click="minDate"><br>
        </div>

        <div class="formElementContainer">
            <label for="Sabores">Seleccione el sabor de su pastel (Al seleccionar más de uno, el pastel tendrá secciones iguales de cada sabor, con el costo del más caro)</label><br>
        </div>

        <div>
            <input type="checkbox" name="Sabores" id="Vainilla" value="Vainilla" class="sabores">
            <label for="Vainilla">Vainilla</label><br>
        </div>

        <div>
            <input type="checkbox" name="Sabores" id="RedVelvet" value="RedVelvet" class="sabores">
            <label for="RedVelvet">Red Velvet</label><br>
        </div>

        <div>
            <input type="checkbox" name="Sabores" id="ChocolateOscuro" value="ChocolateOscuro" class="sabores"> 
            <label for="ChocolateOscuro">Chocolate Oscuro</label><br>
        </div>

        <div>
            <input type="checkbox" name="Sabores" id="Moka" value="Moka" class="sabores">
            <label for="Moka">Moka</label><br>
        </div>

        <div>
            <input type="checkbox" name="Sabores" id="Zanahoria" value="Zanahoria" class="sabores">
            <label for="Zanahoria">Zanahoria</label><br>
        </div>

        <div>
            <input type="checkbox" name="Sabores" id="TresLeches" value="TresLeches" class="sabores">
            <label for="TresLeches">Tres Leches</label><br>
        </div>     
        
        <div class="formElementContainer">
            <label for="Decoraciones">Seleccione la decoracion adicional de su pastel (si quisiera esto, puede combinar y se cobra el precio más alto)</label><br>
        </div>

        <div>
            <input type="checkbox" name="Decoraciones" id="Fruta" value="Fruta" class="decoraciones">
            <label for="Fruta">Fruta</label><br>
        </div>

        <div>
            <input type="checkbox" name="Decoraciones" id="Chocolate" value="Chocolate" class="decoraciones">
            <label for="chocolate">Chocolate</label><br>
        </div>
        
        <div>
            <input type="checkbox" name="Decoraciones" id="Macarrones" value="Macarrones" class="decoraciones">
            <label for="Macarrones">Macarrones</label><br>
        </div>

        <div>
            <input type="checkbox" name="Decoraciones" id="Fondant" value="Fondant" class="decoraciones">
            <label for="Fondant">Fondant</label><br>
        </div>

        <div class="formElementContainer">
            <label for="Descripcion">Ingrese comentarios o detalles adicionales sobre el pastel: </label><br>
            <textarea name="Descripcion" id="Descripcion" cols="30" rows="10" placeholder="En caso de aplicar, agregue la cantidad de macarrones, tipo de fruta y la decoración con fondant deseada"></textarea><br>
        </div>

        <div class="formElementContainer">
            <label for="Referencia">Agrege una imagen como referencia para el pastel (el precio puede variar)</label><br>
            <input type="file" name="Referencia" id="Referencia" accept=".jpg,.jpeg,.png,.pdf"><br>
        </div>

        <div class="formElementContainer buttonContainer">
            <input type="submit" value="Hacer Pedido" id="Submit">
            <input type="reset" value="Limpiar TODAS las Casillas">
        </div>
            </div>
        </form>
        </div>
    </section>
</template>

<script>
export default {
  name: "Form",
  methods:{
      hacerPedido: function(){
            let Nombre = document.getElementById("Nombre").value; 
            let Telefono = document.getElementById("Teléfono").value;
            let Correo = document.getElementById("Email").value;
            let Domicilio = document.getElementById("Domicilio").value;
            let Fecha = document.getElementById("Fecha").value;
            let sabores = document.getElementsByClassName("sabores");
            var arraysabores = Array.from(sabores);
            var saboresPastel = [];
            for(let i = 0; i<arraysabores.length;i++){
                if (arraysabores[i].checked){
                    saboresPastel.push(arraysabores[i]._value);
                    switch(arraysabores[i]._value){
                        case "Vainilla": this.$store.commit("decreaseVainilla"); break;
                        case "RedVelvet": this.$store.commit("decreaseRedVelvet");break;
                        case "ChocolateOscuro": this.$store.commit("decreaseChocolateOsc");break;
                        case "Moka": this.$store.commit("decreaseMoka");break;
                        case "Zanahoria" : this.$store.commit("decreaseZanahoria");break;
                        case "TresLeches": this.$store.commit("decreaseTresLeches");break;
                    }
                }
            }
            let decoraciones = document.getElementsByClassName("decoraciones");
            var arraydecoraciones = Array.from(decoraciones);
            var decoracionesPastel = [];
            for(let i = 0; i<arraydecoraciones.length;i++){
                if (arraydecoraciones[i].checked){
                    decoracionesPastel.push(arraydecoraciones[i].value);
                    switch(arraydecoraciones[i].value){
                        case "Fruta": this.$store.commit("decreaseFruta"); break;
                        case "Chocolate": this.$store.commit("decreaseChocolate");break;
                        case "Macarrones": this.$store.commit("decreaseMacarrones");break;
                        case "Fondant": this.$store.commit("decreaseFondant");break;
                    }
                }
            }
            let Comentarios = document.getElementById("Descripcion").value;
            let Ref = document.getElementById("Referencia").files[0];
            let id = ("Pedido"+this.$store.state.Pedidocount);
            this.$store.commit("increaseCount");
                const Pedido = {
                    Nombre: Nombre,
                    Telefono: Telefono,
                    Correo: Correo,
                    Domicilio: Domicilio,
                    Fecha: Fecha,
                    Sabores: saboresPastel,
                    Decoraciones: decoracionesPastel,
                    Comentarios: Comentarios,
                    Referencia: Ref,
                    Id: id
            };
            this.$store.commit("agregarPedido",Pedido);
           

            
            
      },
      minDate (){
          var hoy = new Date();
          var ano = hoy.getFullYear();
          var mes = hoy.getMonth() + 1;
          var dia = hoy.getDate() + 7;
          switch (mes){
              case 1: if (dia > 31){mes++;dia -= 31;}break;
              case 2: if (dia > 28){mes++;dia -= 28;}break;
              case 3: if (dia > 31){mes++;dia -= 31;}break;
              case 4: if (dia > 30){mes++;dia -= 30;}break;
              case 5: if (dia > 31){mes++;dia -= 31;}break;
              case 6: if (dia > 30){mes++;dia -= 30;}break;
              case 7: if (dia > 31){mes++;dia -= 31;}break;
              case 8: if (dia > 31){mes++;dia -= 31;}break;
              case 9: if (dia > 30){mes++;dia -= 30;}break;
              case 10: if (dia > 31){mes++;dia -= 31;}break;
              case 11: if (dia > 30){mes++;dia -= 30;}break;
              case 12: if (dia > 31){mes++;dia -= 31;}if (mes > 12){ano++;mes -= 12;}break;
          }
          if (mes < 10){
              mes = '0'+mes;
          }
          if (dia < 10){
              dia = '0'+dia;
          }
          const minDate = ano + "-" + mes + "-" + dia;
          document.getElementById("Fecha").min = minDate;
      }
  }
};
</script>

