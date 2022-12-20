<template>
  <div id="app">
      <v-footer padless>
        <v-col
          class="text-center"
          cols="12"
        >
        <br>
        <p>info@mysite.com</p>
        <br>
        ©{{ new Date().getFullYear() }} — <strong>Por InkTaTToo.</strong>
        </v-col>
      </v-footer>
  </div>
</template>

<script>
export default {
    name: 'App',

    data: () => ({})
}
</script>
