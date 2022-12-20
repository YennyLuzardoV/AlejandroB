<template>
    <div>
      <biografia/>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
    import Biografia from '@/components/Biografia.vue'
    import Footer from '@/components/Footer.vue'
  
  
    export default {
      name: 'BiografiaView',
  
      components: {
        Biografia, 
        Footer
      },
    }
  </script>
