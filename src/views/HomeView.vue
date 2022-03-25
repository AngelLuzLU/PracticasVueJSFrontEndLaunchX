<template>
  <Presentation/>
  <ContainerSabor/>
  <ContainerDecaracion/>
  <Form/>
  <Contacto/>
</template>

<script>
import ContainerSabor from '@/components/ContainerSabor.vue'
import SaborPastel from '@/components/SaborPastel.vue'
import DecoracionPastel from '@/components/DecoracionPastel.vue'
import ContainerDecaracion from '@/components/ContainerDecaracion.vue'
import Presentation from '@/components/Presentation.vue'
import Form from '@/components/Form.vue'
import Contacto from '@/components/Contacto.vue'

export default {
  name: 'HomeView',
  components: {
    SaborPastel,
    ContainerSabor,
    DecoracionPastel,
    ContainerDecaracion,
    Presentation,
    Form,
    Contacto
  }
}
</script>

<style>
  @import '../css/HomePage.css';
</style>