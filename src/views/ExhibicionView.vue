<template>
    <div>
      <Exhibiciones/>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
    import Exhibiciones from '@/components/Exhibiciones.vue'
    import Footer from '@/components/Footer.vue'
  
  
    export default {
      name: 'BiografiaView',
  
      components: {
        Exhibiciones, 
        Footer
      },
    }
  </script>
