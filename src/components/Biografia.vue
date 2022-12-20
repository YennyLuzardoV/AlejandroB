<template>
    <div>
        <v-container>
            <v-row class="d-flex">
                <v-col cols="6 mt-10" class="text-center">
                    <h1>BIOGRAFÍA</h1>
                    <br>
                    <p>Al terminar su educación, InkTaToo comenzó a trabajar como un(a) artista profesional 
                        en Ciudad de México. Desde el año 2000, InkTaToo ha trabajado en varios proyectos 
                        creativos. Sus trabajos se han presentado en exhibiciones individuales y grupales de 
                        todo el mundo.</p>
                    <br>
                    <p>u expresión artística ha atravesado muchas fases a lo largo de los años, y esto ha 
                        tenido como consecuencia un enfoque y una perspectiva muy personales. Quedarse quieto(a)
                         no lo(a) satisface y siempre busca el próximo proyecto que lo(a) cautive.</p>
                </v-col>
                <v-col cols="6">
                    <img src="https://media.istockphoto.com/id/484287238/es/foto/hipster-hombre-fr%C3%ADo.jpg?s=612x612&w=0&k=20&c=XWH1lgcj6PVCY3VEuzhZ01gkDT-Hemq_qlmxr6KYzgQ=" 
                    alt="">
                </v-col>
            </v-row>
     </v-container>
  
    <div class="curriculum">
            <v-row class="d-flex justify-center" cols="12">
                <v-col class="text-center font-weight-light "><br><br>
                    <h1 class="white--text font-weight-light">CURRÍCULUM</h1><br>
                    <p class="white--text">Entrenamiento y educación </p>
                </v-col>
            </v-row>>  
            <v-row class=" d-flex">
                <v-col cols="4">
                    <v-card
                        class="mx-auto text-center"
                        color="#E0E0E0"
                >       <br>
            <p>Septiembre de 2020 - Agosto de 2021</p>
            <br>
            <p>POSGRADO EN ARTE, UNIVERSIDAD DE CINCINNATI (UCIT)</p>
            <p>Esta es la descripción de tu experiencia en tu CV. Describe brevemente 
               tu experiencia, estudios profesionales, premios que hayas obtenido, etc. 
               Los CV más efectivos ofrecen una clara visión de dónde vienes, de manera 
               que los lectores pueden entender quién eres rápidamente.</p>
            <br>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card
                        class="mx-auto text-center"
                        color="#E0E0E0"
                > <br>
            <p>Septiembre de 2020 - Agosto de 2021</p>
            <br>
            <p>CURADOR(A), GALERÍA NACIONAL DE ARTE</p>         
            <p>Esta es la descripción de tu experiencia en tu CV. Describe brevemente 
            tu experiencia, estudios profesionales, premios que hayas obtenido, etc. 
            Los CV más efectivos ofrecen una clara visión de dónde vienes, de manera 
            que los lectores pueden entender quién eres rápidamente.
            </p>
            <br>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card
                            class="mx-auto text-center"
                            color="#E0E0E0"
                            ><br>
            <p>Septiembre de 2020 - Agosto de 2021</p>
            <br>
            <p>PASANTÍA, CONSEJO DE ARTES CULTURALES</p>
            <p>Esta es la descripción de tu experiencia en tu CV. Describe brevemente 
            tu experiencia, estudios profesionales, premios que hayas obtenido, etc. 
            Los CV más efectivos ofrecen una clara visión de dónde vienes, de manera 
            que los lectores pueden entender quién eres rápidamente.</p>
            <br>    
                    </v-card>
                </v-col>
            </v-row>
            <br><br><br>
        </div>
    </div>
 
           


</template>

<script>
export default {
  name: 'BiografiaView',
  props: {
    msg: String
  }
}
</script>
<style>
    .curriculum{
        background: black;
        padding-left: 35px;
        padding-right: 35px
    };
</style>
