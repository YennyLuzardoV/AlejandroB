<template>
  <div>
    <carrousel/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Carrousel from '../components/Carrousel.vue'
  import Footer from '@/components/Footer.vue'


  export default {
    name: 'CarrouselHome',

    components: {
      Carrousel, 
      Footer
    },
  }
</script>