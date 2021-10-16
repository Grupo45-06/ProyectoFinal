<template>
<div id="team">
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
          <v-tab><span style="font-size:1vw"><router-link to="/gallery" style="text-decoration:none; color:white">Galería</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/team" style="text-decoration:none; color:#cda45e">Equipo</router-link></span></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
   <v-parallax id="fondo" src="../assets/bg-black.jpg" style="height:100vh; width:100vw">
      <v-container style="height: 60px;padding: 0; margin:0"></v-container>
      <div id="equipo" style="margin-left: 7%; margin-right:7%">
        <h2 class="titulo">Equipo de trabajo</h2>
        <p class="parrafo-n" id="title">Nuestro equipo de trabajo</p> 

        <v-container>
            <v-row>
                <v-col>
                    <v-img
                        src="../assets/chefs-1.jpg"
                        max-width="280px"
                    ></v-img>
                    <p class="parrafo-n" style="margin-top: 7px">Jhon Cortes</p>
                </v-col>
                <v-col>
                    <v-img
                        src="../assets/chefs-2.jpg"
                        max-width="280px"
                    ></v-img>
                    <p class="parrafo-n" style="margin-top: 7px">Gabriela León</p>
                </v-col>
                <v-col>
                    <v-img
                        src="../assets/chefs-3.jpg"
                        max-width="280px"
                    ></v-img>
                    <p class="parrafo-n" style="margin-top: 7px">Iván Zapata</p>
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
    name: "Team"
}
</script>

<style>
    #team{
        padding: 0;
        margin: 0;
        background-color: #1a1814;
        width: 100%;
        height: 100%;
        position: fixed;
        background-size: 100% 100%;
    } 
</style>