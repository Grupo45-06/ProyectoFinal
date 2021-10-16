<template>
<div id="about">
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
          <v-tab><span style="font-size:1vw"><router-link to="/about" style="text-decoration:none; color:#cda45e"> Sobre nosotros</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/menu" style="text-decoration:none; color:white">Menú</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/event" style="text-decoration:none; color:white">Eventos</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/gallery" style="text-decoration:none; color:white">Galería</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/team" style="text-decoration:none; color:white">Equipo</router-link></span></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
   <v-parallax id="bg-about" src="../assets/about-dark.png" style="height:100vh; width:100vw">
      <v-container style="height: 60px;padding: 0; margin:0"></v-container>
      <div id="about-content" ref="about-content" style="margin-left: 7%; margin-right:7%">
        <v-row>
          <v-col>
            <h3 style="font-family:'Playfair Display', serif; font-size:26px">Somos una empresa que presta como servicios los siguientes:</h3>
            <p style="font-family: italic">Somos una panadería, repostería, hojaldre, galletería artesanal ubicada en Cali y Bogotá, especializada en sabores tanto en panes como en postres.</p>
            <p style="font-family: 'Open Sans', sans-serif">
              <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Cafetería. <br>
              <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Pastelería Personalizada. <br>
              <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Eventos Especiales.
            </p>
            <p style="text-align: justify; font-family:'Open Sans', sans-serif">Ofrecemos las mejores alternativas en alimentación a través de nutritivos productos de panadería, pastelería y postres , apoyándonos en un mejoramiento continuo y un excelente servicio al cliente</p>
          </v-col>
          <v-col>
              <v-img 
                src="../assets/about.jpg" 
                max-width="500px"
                style="border: 5px solid #cda45e">
              </v-img>
          </v-col>
        </v-row>
      </div>
    </v-parallax>
    </v-card>
</div>
</template>
<style>
  #about{
    padding: 0;
    margin: 0;
    background-image: url('../assets/about-dark.png');
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
    color: black;
  }

</style>