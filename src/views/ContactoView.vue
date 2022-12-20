<template>
    <div>
      <Contacto/>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
    import Contacto from '@/components/Contacto.vue'
    import Footer from '@/components/Footer.vue'
  
  
    export default {
      name: 'ContactoView',
  
      components: {
        Contacto, 
        Footer
      },
    }
  </script>
