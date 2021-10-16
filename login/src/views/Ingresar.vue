<template>
    <v-app class="fondo">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="container_">
                      <v-img class="mx-auto" src="../assets/logo.png" width="70%"></v-img>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              v-model="correo"
                              name="correo"
                              label="Correo electrónico"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                           v-model="password"
                           :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                           :type="show1 ? 'text' : 'password'"
                           name="password"
                           label="Contraseña"
                           class="input-group--focused"
                           @click:append="show1 = !show1"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-card-text class="text-center">
                           <v-btn rounded color="black" @click="ingresar"  dark>Ingresar</v-btn>
                        </v-card-text>   
                     </v-card-actions>
                     <v-card-text>
                        <a  class="link" href="/Registrar">Registrarse</a>
                     </v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>

import axios from 'axios'

  export default {
      name : 'TheLogin',
    data: () => ({
        mensaje : null,
      valid: true,
      password: '',
      correo: '',
      show1: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      ingresar() {
          axios.post('http://localhost:4000/api/usuario/login', {
              correo : this.correo,
              password : this.password
          })
          .then(respuesta =>{
              console.log(respuesta.data)
              return respuesta.data
          })
          .then(data => {
              localStorage.setItem('token', data.tokenReturn)
              this.$router.push({name : 'Admin'})
          })
          .catch(err =>{
              this.mensaje = null;
              console.log(err.response);
              if([404, 401].includes(err.response.status)){
                  this.mensaje = 'El correo o la contraseña son incorrectos'
              }else{
                  this.mensaje = 'Ocurrió un error interno, intente de nuevo en unos minutos'
              }
          });
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>
.fondo {
  background: url('../assets/background.jpg');
  background-size: cover;
  height: 100vh;
}
.container_{
        background-color: white !important;
        color: black;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 2vh;
        border-radius: 25px;
        height: 100%;
        padding: 5%;
}
.link{
   color:black;
   text-decoration: black;
}
</style>