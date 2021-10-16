<template>
<div id="gallery">
    <v-card class="overflow-hidden" style="margin-top:3%">
    <v-app-bar
      absolute
      color = "rgba(12, 11, 9, 0.6)"
      dark
    >
      <v-app-bar-title style="width=100%; font-size:3vw; font-family:'Times New Roman'; margin-left:3%">Good Memories Bakery</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab><span style="font-size:1vw"><router-link to="/" style="text-decoration:none; color:white"> Inicio</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw" ><router-link to="/about" style="text-decoration:none; color:white"> Sobre nosotros</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/menu" style="text-decoration:none; color:white"> Menú</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/event" style="text-decoration:none; color:white">Eventos</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/gallery" style="text-decoration:none; color:#cda45e">Galería</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/team" style="text-decoration:none; color:white">Equipo</router-link></span></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
   <v-parallax id="fondo" src="../assets/bg-black.jpg"  style="height:100vh; width:100vw">
      <v-container style="height: 60px;padding: 0; margin:0"></v-container>
      <div id="gallery-div"  style="margin-left: 7%; margin-right:7%">
        <h2 class="titulo">Galería</h2>
        <p class="parrafo-n" id="title">Algunas fotos de los productos.</p>
        <v-container>
            <v-row>
                <v-col>
                    <v-img
                        src="../assets/gallery-1.jpg"
                        max-width="200px"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                        src="../assets/gallery-2.jpg"
                        max-width="200px"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                        src="../assets/gallery-3.jpg"
                        max-width="200px"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                        src="../assets/gallery-4.jpg"
                        max-width="200px"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                        src="../assets/gallery-5.jpg"
                        max-width="200px"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                        src="../assets/gallery-6.jpg"
                        max-width="200px"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                        src="../assets/gallery-7.jpg"
                        max-width="200px"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                        src="../assets/gallery-1.jpg"
                        max-width="200px"
                    ></v-img>
                </v-col>
            </v-row>
        </v-container>
      </div>   
    </v-parallax>
  </v-card>
</div>
</template>

<script>
export default {
    name: "Gallery"
}
</script>

<style>
    #gallery{
    padding: 0;
    margin: 0;
    background-color: #1a1814;
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
  }

  #gallery-div img{
      border: 5px solid #cda45e;
  }
</style>