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
                            v-model="nombre" 
                            :rules="nameRules"
                            label="Nombre"
                           ></v-text-field>
                           <v-text-field
                           v-model="correo"
                           :rules="emailRules"
                           label="Correo electrónico"
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
                           <v-text-field
                           v-model="rol"
                           label="Rol"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-card-text class="text-center">
                           <v-btn rounded color="black" @click="registrar" dark>Registrarse</v-btn>
                        </v-card-text>   
                     </v-card-actions>
                     <v-card-text>
                        <a class="link" href="/Ingresar">Volver</a>
                     </v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
import axios from "axios";
export default {
   name: "Registrar",
    data: () => ({
      valid: true,
      nombre: '',
      correo:'',
      password:'',
      rol:'',
      nameRules: [
        v => !!v || 'El nombre es obligatorio',
      ],
      correo: '',
      emailRules: [
        v => !!v || 'El correo es obligatorio',
        v => /.+@.+\..+/.test(v) || 'El correo electronico debe ser valido',
      ],
      show1: false,
      show2: true,
    }),
    methods:{
       registrar(){
         axios.post('http://localhost:4000/api/usuario/add', {
          nombre: this.nombre,
          correo: this.correo,
          password : this.password,
          rol : this.rol,
        })
        .then(data => {
              localStorage.setItem('token', data.tokenReturn)
              this.$router.push({name : 'Admin'})
        })     
        .catch(error => {
          console.log(error);
        });
        this.close();
      }
   }  
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
   text-decoration:black;
}
</style>