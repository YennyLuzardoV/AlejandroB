<template>
  <v-app>
    <v-app-bar    
      color="#E0E0E0"
      flat
      height="170px"
      tile
      class="menubar"
    >    
    <v-container>
        <v-row class="">
          <v-col class="d-flex justify-center"> 
            <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            src="./assets/Logoink.png"
            transition="scale-transition"
            width="80"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-toolbar 
    color="black"
    dark>
      <v-row>
        <v-col>
          <v-tabs
            background-color="black"
            dark
            class="d-flex justify-center"
          >
            <v-tab router-link to="/">Inicio</v-tab>
            <v-tab router-link to="/biografia">Biografia</v-tab>
            <v-tab router-link to="/exhibicion">Exhibicion</v-tab>
            <v-tab router-link to="/contacto">Contacto</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  
  data: () => ({
    //
  }),
components:{
}

};
</script>
<style>
  .menubar{
    margin-left: 0;
    margin-right: 0;
    padding-right: 0;
    padding-right: 0;
  }
  
</style>