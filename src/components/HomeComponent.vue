<template>
  <v-container class="mt-5">
    <v-row class="text-center mt-5" justify="center">
      <v-col cols="12 mt-3" left  md="3">
        <v-avatar color="" size="200">
          <v-img
            :src="require('../assets/andycodev.png')"
            class="my-3 mt-5"
            contain
            height="200"
          />
        </v-avatar>
      </v-col>

      <v-col cols="12" md="5" class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Hola👋, Soy Andy</h1>
        <center><h2 class="efect-write">Desarrollador Fullstack</h2></center>
        <p class="mt-3">
          👨‍🎓 Egresado de la carrera de Ingeniería de Sistemas de la Universidad
          Peruana Unión - Lima.
        </p>
        <p class="mb-3">🎯 Enfocado al desarrollo web.</p>
        <!-- <v-btn class="mr-3" elevation="4" large>Descargar CV</v-btn> -->
        <v-btn @click="openPage()" elevation="2" large>Linkedin</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeComponent",

  data: () => ({}),

  methods: {
    openPage() {
      window.open(
        "https://www.linkedin.com/in/andygiampierreordonezvega/",
        "_blank"
      );
    },
  },
};
</script>

<style scoped>

.efect-write{
  display: block;
  white-space: nowrap;
  border-right: 4px solid;
  width: 25ch;
  color: #2b649d;

  animation: typing 2s steps(25), blink .5s infinite 
  step-end alternate;
  overflow: hidden;
}

@keyframes typing {
  from { width: 0 }
}

@keyframes blink {
  50% { border-color: transparent }
}

</style>
