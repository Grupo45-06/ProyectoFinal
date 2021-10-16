<template>
<div id="event">
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
          <v-tab><span style="font-size:1vw"><router-link to="/event" style="text-decoration:none; color:#cda45e">Eventos</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/gallery" style="text-decoration:none; color:white">Galería</router-link></span></v-tab>
          <v-tab><span style="font-size:1vw"><router-link to="/team" style="text-decoration:none; color:white">Equipo</router-link></span></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
   <v-parallax id="fondo" src="../assets/event-black.png" style="height:100vh">
      <v-container style="height: 60px;padding: 0; margin:0"></v-container>
      <div id="event">

      </div>
      <v-container>
          <v-row>
              <v-col>
                    <v-carousel :show-arrows="false">
                    <v-carousel-item>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-img
                                    src="../assets/event-birthday.jpg" 
                                    max-width="500px"
                                    style="border: 5px solid #cda45e; margin-top: 60px">
                                    > 
                                    </v-img>
                                </v-col>
                                <v-col>
                                    <div style="margin-top: 60px">
                                        <h3>Fiestas De Cumpleaños</h3>
                                        <p><span style="font-size: 26px; font-family: 'Open Sans', sans-serif; font-weight: 700; color:white">$ 460.000 - 550.000</span></p>
                                        <p style="font-style: italic; color:white">Hay momentos que se viven solo una vez por eso queremos acompañarte en ellos.</p>
                                        <p style="font-family: 'Open Sans', sans-serif; color:white">
                                            <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Cafetería. <br>
                                            <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Pastelería Personalizada. <br>
                                            <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Eventos Especiales.
                                        </p>
                                        <p style="font-family: 'Open Sans', sans-serif; font-weight: 700; color:white">Cuidamos cada detalle para tu momento sea increíble!. Confía en nosotros y te sorprenderás.</p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-img
                                    src="../assets/event-private.jpg" 
                                    max-width="500px"
                                    style="border: 5px solid #cda45e; margin-top: 60px">
                                    > 
                                    </v-img>
                                </v-col>
                                <v-col>
                                    <div style="margin-top: 16px">
                                        <h3>Fiestas Privadas</h3>
                                        <p><span style="font-size: 26px; font-family: 'Open Sans', sans-serif; font-weight: 700; color:white">$ 470.000 - 1.110.000</span></p>
                                        <p style="font-style: italic; color:white">Contamos con amplios y cómodos salones en nuestros puntos de venta para poder coordinar ese desayuno empresarial que necesita organizar para su equipo de trabajo o clientes especiales o diferentes eventos familiares.</p>
                                        <p style="font-family: 'Open Sans', sans-serif; color:white">
                                            <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Desayunos empresariales. <br>
                                            <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Ceremonias de quince años <br>
                                            <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Bautizos y Baby Shower.
                                        </p>
                                        <p style="font-family: 'Open Sans', sans-serif; font-weight: 700; color:white">Ponemos a su disposición el mejor talento humano, las mejores recetas, organizadas instalaciones, parqueadero vigilado y la mejor imagen para que todo salga mejor de lo que usted tenía planeado.</p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-img
                                    src="../assets/event-custom.jpg" 
                                    max-width="500px"
                                    style="border: 5px solid #cda45e; margin-top: 60px">
                                    > 
                                    </v-img>
                                </v-col>
                                <v-col>
                                    <div style="margin-top: 60px">
                                        <h3>Fiestas Privadas</h3>
                                        <p><span style="font-size: 26px; font-family: 'Open Sans', sans-serif; font-weight: 700; color:white">$ 379.000</span></p>
                                        <p style="font-style: italic; color:white">Diseñamos nuestros espacios con la imaginacion de nuestros clientes, para que ellos vivan momentos unicos y sin preocupaciones, algunos de los eventos más esperados son:</p>
                                        <p style="font-family: 'Open Sans', sans-serif; color:white">
                                            <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Halloween. <br>
                                            <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Amor Y Amistad. <br>
                                            <v-icon color="#cda45e" style="margin-bottom:10px">mdi-check-circle-outline</v-icon>  Aniversarios.
                                        </p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-carousel-item>
                    </v-carousel>
              </v-col>
          </v-row>
      </v-container>
    </v-parallax>
  </v-card>
</div>
</template>
<script>
export default {
    name: "Event",
    data: () =>({
    
    })
}
</script>
<style>
    #event{
        padding: 0;
        margin: 0;
        background-image: url('../assets/event-black.png');
        width: 100%;
        height: 100%;
        position: fixed;
        background-size: 100% 100%;
    }

    h3{
        font-weight: 600;
        font-size: 26px;
        color: #cda45e;
        font-family: "Playfair Display", serif;
    }

    #menu-content p{
        margin-left: 85px;
        font-style: italic;
        font-size: 14px;
        font-family: "Poppins", sans-serif;
        color: rgba(255, 255, 255, 0.5);  
        margin-top: -10px;
    }

    #menu-content h2{
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

</style>