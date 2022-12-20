<template>
  <div id="app">
    <v-app app id="inspire">
      <v-carousel 
        cycle
        height="700"
        hide-delimiter-background
        show-arrows-on-hover
        >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    
    <div class="contenInk">
      <v-container>
        <v-row>
          <v-col class="justify-center">
            <h1 class="font-weight-light colortextY text-h1 text-center mt-5">INKTATOO</h1>
            <v-row class="justify-center">
              <p></p>
            <v-col  md="8">
            <h4 class="font-weight-regular  text-center ">
              El trabajo de InkTaToo, artista de Ciudad de México, es conocido por superar límites artísticos. 
              Su enfoque lo(a) convertido en uno de los nombres principales de su generación y cuenta con la 
              aclamación de los críticos y los fanáticos por igual.
            </h4>
            </v-col>
          </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div>
     
      <div>
        <v-row class="gallery-container">
          <v-col v-for="imagen in imagenes"
          :key="imagen.src"
          class="project"
          cols= "12" sm="12" md="3"
          >
            <v-img :src="imagen.src" class="img">

            </v-img>
          </v-col>
        </v-row>
    </div>
   
    </div>

    </v-app>
</div>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        items: [
        {
          src: 'https://media.istockphoto.com/id/936427838/es/foto/maestro-del-tatuaje-femenino-en-guantes-de-trabajo-en-trozo-de-brazo-en-estudio.jpg?s=612x612&w=0&k=20&c=bYeG3UOfiGOB9wvxyErvQiKktiY8y2FHTd2txDlCovU=',
        },
        {
          src: 'https://media.istockphoto.com/id/1363968557/es/foto/hermoso-tatuaje-femenino.jpg?s=612x612&w=0&k=20&c=MqFnV0TizY8tr_7QX5w9rNgCCFa6QTjiC4itJBGB0Kg=',
        },
        {
          src: 'https://media.istockphoto.com/id/1292469526/es/foto/primer-plano-y-poke-m%C3%A9todo-de-tatuaje-de-la-mano-de-una-joven-con-la-inscripci%C3%B3n-en-los.jpg?s=612x612&w=0&k=20&c=yab1KGzrU2LdLQCDwFV2_QKJH5DrXbHrks61VSCCjIY=',
        },
        {
          src: 'https://media.istockphoto.com/id/913252736/es/foto/retrato-de-una-joven-tocando-el-piano-en-el-interior.jpg?s=612x612&w=0&k=20&c=tetcq-oO24aIS7BAtP1gfb5t0UXAv5bx6YcDawsD1UM=',
        },
        {
          src:'https://media.istockphoto.com/id/1354192559/es/foto/el-maestro-profesional-de-tatuajes-cauc%C3%A1sicos-barbudos-masculinos-est%C3%A1-trabajando-en-un.jpg?s=612x612&w=0&k=20&c=6b8ftlpuS3tREBSDDeUM1dpV_Nlos4MyVrXvOjvtWG8='
        }
        ],
        imagenes:[
          {
            src:'https://media.istockphoto.com/id/938981400/es/foto/una-mujer-con-la-cara-pintada-de-calavera.jpg?s=612x612&w=0&k=20&c=Pj5a0KYHwyOaKpnnUIBmJ30qb3lh5SMcUnTNwH5ZJkg='
          },
          {
            src:'https://media.istockphoto.com/id/108268930/es/foto/hermosa-modelo-con-tatuajes.jpg?s=612x612&w=0&k=20&c=nAMfTK2dM9HeQKu1n8BcOda0keT_BAWL0HTWYkgsaMc='
          },
          {
            src:'https://media.istockphoto.com/id/1363971166/es/foto/artista-del-tatuaje-femenina-aplicando-una-plantilla.jpg?s=612x612&w=0&k=20&c=VKfISpHKqRxHGYi87bcpitN3VEtfwvFxcK87_8GbQyg='
          },     
          {
            src:'https://media.istockphoto.com/id/517618197/es/foto/hermosa-chica-con-actitud-tattooed-pistolas-de-retenci%C3%B3n.jpg?s=612x612&w=0&k=20&c=KLF070m6MIdZhYLLPBIMgPF3X2hjQuv8hvQU0oafl_s='
          },
          {
            src:'https://media.istockphoto.com/id/155099865/es/foto/mujer-de.jpg?s=612x612&w=0&k=20&c=llDIWpD_W2buYFQGDeco_cNk7X3YC9Rm0R0s3Yv0zB4='
          },
          {
            src:'https://media.istockphoto.com/id/1323918806/es/foto/procedimiento-tatuaje-de-cejas-maquillaje-permanente.jpg?s=612x612&w=0&k=20&c=fG3nt36Xg-NPIJrrWMs94QcrCJYjnLqvdVzTAFZMLgk='
          },
          {
            src:'https://media.istockphoto.com/id/117147080/es/foto/hermosa-mujer-joven-usando-cors%C3%A9-posando.jpg?s=612x612&w=0&k=20&c=mgCdPPJp0wILgH_lHnNlDyDXp0eRn-cwNP2PUnfqM8U='
          },
          {
            src:'https://media.istockphoto.com/id/182699820/es/foto/chica-de-moda.jpg?s=612x612&w=0&k=20&c=KmMvdP6Iwoo-y6QTcOg1jRDC2I2Mmv2aMqaNJSVk97U='
          },
        ],
       
    })
}
</script>

<style>
  .contenInk{
    background-color: #E0E0E0;
    height: 20rem;
  }
  .img{
    max-width: 100%;
    display: block;
  }
  .project{
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
  }
  .project > img {
    grid-row: 1 / -1;
    grid-column: 1;
  }
  .gallery-container{
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: masonry;
  }
</style>