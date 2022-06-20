<template>
  <v-container class="mt-5">
    <v-row class="text-center mt-5" justify="center">
      <v-col cols="12" md="2">
        <v-avatar color="" size="200">
          <v-img
            :src="require('../assets/andycodev.png')"
            class="my-3 mt-5"
            contain
            height="200"
          />
        </v-avatar>
      </v-col>

      <v-col cols="12" md="6" class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Hola👋, Soy Andy</h1>
        <h2>Desarrollador Fullstack 👨‍💻</h2>
        <p class="mt-3">
          👨‍🎓 Egresado de la carrera de Ingeniería de Sistemas de la Universidad
          Peruana Unión - Lima.
        </p>
        <p class="mb-4">🎯 Enfocado al desarrollo web.</p>
        <!-- <v-btn class="mr-3" elevation="4" large>Descargar CV</v-btn> -->
        <v-btn @click="openPage()" elevation="4" large>Linkedin</v-btn>
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
</style>
