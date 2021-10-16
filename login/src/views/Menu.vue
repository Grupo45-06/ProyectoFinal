<template>
<div id="menu-view">
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
          <v-tab><span style="font-size:1vw"><router-link to="/about" style="text-decoration:none; color:white"> Sobre nosotros</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/menu" style="text-decoration:none; color:#cda45e">Menú</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/event" style="text-decoration:none; color:white">Eventos</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/gallery" style="text-decoration:none; color:white">Galería</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/team" style="text-decoration:none; color:white">Equipo</router-link></span></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
   <v-parallax id="bg-about" src="../assets/bg-black.jpg" style="height:100vh; width:100vw">
      <v-container style="height: 60px;padding: 0; margin:0"></v-container>
      <div id="menu-content" ref="menu-content" style="margin-left: 7%; margin-right:7%">
        <h2 class="titulo">Menú</h2>
        <p class="parrafo-n" id="title">Echa un vistazo a algunas opciones de nuestro exquisito menú.</p>
        <div id="menu-nav" style="margin-left:35%;">
          <v-btn
              color = "transparent"
              id="todo"
              class="boton-menu"
              elevation="2"
              v-on:click="seleccion('todo')"
            >Todo
          </v-btn>
          <v-btn
              color = "transparent"
              id="pan"
              class="boton-menu"
              elevation="2"
              v-on:click="seleccion('pan')"
            >Pan
          </v-btn>
          <v-btn
              color = "transparent"
              id="pasteleria"
              class="boton-menu"
              elevation="2"
              v-on:click="seleccion('pasteleria')"
            >Pasteleria
          </v-btn>
          <v-btn
              color = "transparent"
              id="postres"
              class="boton-menu"
              elevation="2"
              v-on:click="seleccion('postres')"
            >Postres
          </v-btn>
        </div>
        <v-container v-if="todo">
          <v-row>
            <v-col>
              <div id="hojaldre">
                <v-img
                  class="img-menu"
                  src="../assets/lobster-bisque.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Pan de hojaldre .........................................................................</strong><span style="color:'#cda45e'"> $400</span></p>
                <p class="parrafo-n">Delicioso pan hecho con masa de hojaldre de contextura muy suave</p>
              </div>
              <div id="jamon-queso" style="margin-top:50px">
                <v-img
                  class="img-menu"
                  src="../assets/cake.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Pan de jamón y queso ...............................................................</strong><span style="color:'#cda45e'"> $400</span></p>
                <p class="parrafo-n">Pan cubierto de mucho queso y jamón, al pedir uno, vas a querer otro</p>
              </div>
              <div id="flan" style="margin-top:50px">
                <v-img
                  class="img-menu"
                  src="../assets/tuscan-grilled.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Flan de arequipe .....................................................................</strong><span style="color:'#cda45e'"> $7000</span></p>
                <p class="parrafo-n">Delicioso flan de arequipe acompañado de una capa de maní</p>
              </div>
              <div id="flan" style="margin-top:50px">
                <v-img
                  class="img-menu"
                  src="../assets/greek-salad.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Cake de chocolate ..................................................................</strong><span style="color:'#cda45e'"> $90000</span></p>
                <p class="parrafo-n">Cake esponjoso de chocolate, relleno 100% de crema de chocolate</p>
              </div>
            </v-col>
            <v-col>
              <div id="galleta">
                <v-img
                  class="img-menu"
                  src="../assets/bread-barrel.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Postre de galleta ..................................................................</strong><span style="color:'#cda45e'"> $6000</span></p>
                <p class="parrafo-n">Postre con galleta y deliciosas fresas</p>
              </div>
              <div id="pan-maiz">
                <v-img
                  class="img-menu"
                  src='../assets/mozzarella.jpg'
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Pan de maiz ............................................................................</strong><span style="color:'#cda45e'"> $400</span></p>
                <p class="parrafo-n">Exquisito pan hecho con masa de maiz, perfecto para esas tardes de meriendas.</p>
              </div>
              <div id="merengue">
                <v-img
                  class="img-menu"
                  src="../assets/spinach-salad.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Merengue  ..............................................................................</strong><span style="color:'#cda45e'"> $1200</span></p>
                <p class="parrafo-n">Tradicional merengón hecho con guanábana.</p>
              </div>
              <div id="postre-leche" style="margin-top: 20px">
                <v-img
                  class="img-menu"
                  src="../assets/lobster-roll.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Postre 3 leches .....................................................................</strong><span style="color:'#cda45e'"> $5000</span></p>
                <p class="parrafo-n">Tradicional postre 3 leches acompañado de una cereza.</p>
              </div>
              <div id="pastel-leche">
                <v-img
                  class="img-menu"
                  src="../assets/caesar.jpg"
                  max-width="70px"
                  style="margin-right:10px; ma"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>pastel tres leches ..............................................................</strong><span style="color:'#cda45e'"> $45000</span></p>
                <p class="parrafo-n">Pastel de vainilla, bañado en tres leches</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-else-if="pan">
          <v-row>
            <v-col>
              <div id="hojaldre" style="margin-top: 50px">
                <v-img
                  class="img-menu"
                  src="../assets/lobster-bisque.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Pan de hojaldre .........................................................................</strong><span style="color:'#cda45e'"> $400</span></p>
                <p class="parrafo-n">Delicioso pan hecho con masa de hojaldre de contextura muy suave</p>
              </div>
              <div id="pan-maiz" style="margin-top: 70px; padding-bottom:96px">
                <v-img
                  class="img-menu"
                  src="../assets/mozzarella.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Pan de maiz ............................................................................</strong><span style="color:'#cda45e'"> $400</span></p>
                <p class="parrafo-n">Exquisito pan hecho con masa de maiz, perfecto para esas tardes de meriendas.</p>
              </div>
            </v-col>
            <v-col>
              <div id="jamon-queso" style="margin-top:50px">
                <v-img
                  class="img-menu"
                  src="../assets/cake.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Pan de jamón y queso ...............................................................</strong><span style="color:'#cda45e'"> $400</span></p>
                <p class="parrafo-n">Pan cubierto de mucho queso y jamón, al pedir uno, vas a querer otro</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-else-if="pasteleria">
          <v-row>
            <v-col>
               <div id="pastel-leche" style="margin-top:50px">
                <v-img
                  class="img-menu"
                  src="../assets/caesar.jpg"
                  max-width="70px"
                  style="margin-right:10px; ma"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>pastel tres leches ..............................................................</strong><span style="color:'#cda45e'"> $45000</span></p>
                <p class="parrafo-n">Pastel de vainilla, bañado en tres leches</p>
              </div>
              <div id="merengue" style="margin-top:90px; padding-bottom: 97px">
                <v-img
                  class="img-menu"
                  src="../assets/spinach-salad.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Merengue  ..............................................................................</strong><span style="color:'#cda45e'"> $1200</span></p>
                <p class="parrafo-n">Tradicional merengón hecho con guanábana.</p>
              </div>
            </v-col>
            <v-col>
              <div id="flan" style="margin-top:50 px">
                <v-img
                  class="img-menu"
                  src="../assets/greek-salad.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Cake de chocolate ..................................................................</strong><span style="color:'#cda45e'"> $90000</span></p>
                <p class="parrafo-n">Cake esponjoso de chocolate, relleno 100% de crema de chocolate</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-else>
          <v-row>
            <v-col>
              <div id="galleta" style="margin-top: 50px">
                <v-img
                  class="img-menu"
                  src="../assets/bread-barrel.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Postre de galleta ..................................................................</strong><span style="color:'#cda45e'"> $6000</span></p>
                <p class="parrafo-n">Postre con galleta y deliciosas fresas</p>
              </div>
              <div id="pastel-leche" style="margin-top: 50px; padding-bottom: 135px">
                <v-img
                  class="img-menu"
                  src="../assets/caesar.jpg"
                  max-width="70px"
                  style="margin-right:10px; ma"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>pastel tres leches ..............................................................</strong><span style="color:'#cda45e'"> $45000</span></p>
                <p class="parrafo-n">Pastel de vainilla, bañado en tres leches</p>
              </div>
            </v-col>
            <v-col>
              <div id="flan" style="margin-top:50px">
                <v-img
                  class="img-menu"
                  src="../assets/tuscan-grilled.jpg"
                  max-width="70px"
                  style="margin-right:10px"
                >  
                </v-img>
                <p class="parrafo-n" style="font-family: 'Open Sans', sans-serif; color:white"><strong>Flan de arequipe .....................................................................</strong><span style="color:'#cda45e'"> $7000</span></p>
                <p class="parrafo-n">Delicioso flan de arequipe acompañado de una capa de maní</p>
              </div>
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
    name: "Menu",
    data: () => ({
      todo : true,
      pan : false,
      pasteria : false,
      postres : false
    }),
    methods:{
      seleccion: function (elemento){
        var otros = document.getElementsByClassName("boton-menu")
        var seleccionado = document.getElementById(elemento);
        for (let i = 0; i < otros.length; i++){
          otros[i].style.color = 'white';
        }
        seleccionado.style.color = '#cda45e';
        if(seleccionado.id == "todo"){
          this.todo = true;
          this.pan = false;
          this.pasteleria = false;
          this.postres = false;
        }else if(seleccionado.id == "pan"){
          this.todo = false;
          this.pan = true;
          this.pasteleria = false;
          this.postres = false;
        }else if(seleccionado.id == "pasteleria"){
          this.todo = false;
          this.pan = false;
          this.pasteleria = true;
          this.postres = false;
        }else{
          this.todo = false;
          this.pan = false;
          this.pasteleria = false;
          this.postres = true;
        }
        console.log('todo' + this.todo);
        console.log('pan' +this.pan);
        console.log('pasteleria' + this.pasteleria);
        console.log('postres' +this.postres);
        console.log(typeof(seleccionado))
      }
    }
}
</script>

<style>
  #menu-view{
    padding: 0;
    margin: 0;
    background-color: #1a1814;
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
  }

  .titulo{
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    line-height: 1px;
    margin: 0 0 5px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #aaaaaa;
    font-family: "Poppins", sans-serif;
  }

  #title{
    margin: 0;
    font-size: 36px;
    font-weight: 700;
    font-family: "Playfair Display", serif;
    color: #cda45e;
  }

  #pan, #pasteleria, #postres{
    color: white;
    font-family: "Playfair Display", serif
  }

  #todo{
    color: #cda45e;
  }

  .img-menu{
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.2);
    float: left;
  }

  .parrafo-n{
    margin-left: 85px;
    font-style: italic;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: rgba(255, 255, 255, 0.5);  
    margin-top: -10px;
  }
</style>