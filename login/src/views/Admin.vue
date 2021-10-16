<template>
  <v-card height=100vh
    class="mx-auto overflow-hidden"
  >
    <v-app-bar
      color="black"
      dark
      prominent
      height=60
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Administrador</v-toolbar-title>
      <v-app-bar-nav class="button">
        <v-btn icon href="/Admin/Inicio">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon href="/">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-app-bar-nav>  
    </v-app-bar> 
    <v-navigation-drawer class="admin" width="300"
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-img
          max-height="300"
          max-width="500"
          src="../assets/logo.png">
        </v-img>
        <v-list>
          <v-list-item-avatar class="user" size="100">
              <v-img  src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-list>
        <v-list-subtitle class="letra">Iván Zapata Florez</v-list-subtitle>
        <v-list>
          <v-list-item>
            <v-btn class="button1" rounded href="/Admin/Usuarios">
              Usuarios
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn class="button2" rounded href="/Admin/Articulos">
              Articulos
            </v-btn>
          </v-list-item>
          <v-list-item>  
          <v-btn class="button3" rounded href="/Admin/Categorias">
              Categorias
            </v-btn>
          </v-list-item>
        </v-list>  
    </v-navigation-drawer>
    <v-main> <router-view/> </v-main>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
.admin{
    background-color: black !important;
}
.user{
  margin-top: 60px;
  margin-left: 95px;
}
.letra{
  color: white !important;
  margin-left: 75px;
}
.button{
  margin-left: 1000px;
}
.button1{
  margin-top: 30px;
  margin-left: 73px;
}
.button2{
  margin-top: 20px;
  margin-left: 70px;
}
.button3{
  margin-top: 15px;
  margin-left: 63px;
}


</style>