<template>
<div id="header">
  <v-card class="overflow-hidden" style="margin-top:3%">
    <v-app-bar
      absolute
      color = "rgba(12, 11, 9, 0.6)"
      dark
    >
      <v-app-bar-title style="width=100%; font-size:3vw; font-family:'Times New Roman'; margin-left:3%">Good Memories Bakery</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <a href=""><v-icon color="white">mdi-calendar</v-icon></a>
      </v-btn>

      <v-btn icon>
        <a href="/Ingresar" style="text-decoration:none"><v-icon color="white">mdi-login</v-icon></a>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab><span style="font-size:1vw"><router-link to="/" style="text-decoration:none; color:#cda45e"> Inicio</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw" ><router-link to="/about" style="text-decoration:none; color:white"> Sobre nosotros</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/menu" style="text-decoration:none; color:white"> Menú</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/event" style="text-decoration:none; color:white">Eventos</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/gallery" style="text-decoration:none; color:white">Galería</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/team" style="text-decoration:none; color:white">Equipo</router-link></span></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
   <v-parallax id="fondo" src="../assets/hero-dark.png" style="height:100vh">
      <v-container style="height: 60px;padding: 0; margin:0"></v-container>
      <div id="inicio" ref="inicio" style="margin-left: 7%">
          <h1>Bienvenido a <span>Good Memories <br>Bakery</span></h1>
          <h2>Entregando el mejor pan todos los días.</h2>

          <div class="btns">
            <v-btn id="menu"
              color="transparent"
              elevation="2"
            >Nuestro Menú</v-btn>
            <v-btn
              id="fecha"
              color="transparent"
              elevation="2"
            >Reserva una Fecha</v-btn>
          </div>
      </div>
    </v-parallax>
  </v-card>
  
  </div>
  
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
      inicio: true,
      nosotros: false,
      menu: false,
      eventos: false,
      galeria: false,
      equipo: false,
      contacto: false,
      active : false
    }),

    methods:{
      clic: function (opcion){
      this.inicio =  false,
      this.nosotros = false,
      this.menu =  false,
      this.eventos =  false,
      this.galeria = false,
      this.equipo = false,
      this.contacto = false
        if (opcion == "inicio"){
            this.inicio = true
        }
        else if(opcion == "nosotros"){
          this.nosotros = true
        }
        else if(opcion == "menu"){
          this.menu = true
        }
        else if(opcion == "eventos"){
          this.eventos = true
        }
        else if(opcion == "galeria"){
          this.galeria = true
        }
        else if(opcion == "equipo"){
          this.equipo = true
        }
        else{
          this.contacto = true
        }
      },
    }
  }

</script>

<style>
  #header{
    padding: 0;
    margin: 0;
    background-image: url('../assets/hero-dark.png');
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
    color: black;
  }

  #inicio h1{
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
    font-family: "poppins", sans-serif;
  }

  #inicio h1 span{
    color: #cda45e;
  }

  #inicio h2{
    color: #eee;
    font-size: 22px;
    font-family: "Playfair Display", serif;
  }

  #fecha, #menu{
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    display: inline-block;
    padding: 12px 30px;
    transition: 0.3s;
    line-height: 1;
    color: white;
    border: 2px solid #cda45e !important;
    text-align: center;
    border-radius: 50px;
    margin-top: 30px;
  }

  #fecha{
    margin-left: 1%;
  }
</style>
