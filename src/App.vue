<template>
  <v-app>
    <template v-if="loading">
      <v-app-bar color="indigo lighten-2" dense fixed dark>
        <v-toolbar-title>andycodev</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn v-for="redSocial in redesSociales" :key="redSocial.id" @click="openPage(redSocial.url)" icon>
          <v-icon>{{redSocial.icon}}</v-icon>
        </v-btn>

        <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
      </v-app-bar>

      <v-main class="mt-5" transition="fade-transition">
        <HomeComponent />
        <ExperienceComponent />
        <SkillsComponent />
        <FooterComponent />
      </v-main>
    </template>
    <v-container v-else style="height: 800px">
      <v-row class="fill-height" align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
          <h2>andycodev</h2>
        </v-col>
        <v-col cols="4">
          <v-progress-linear
            color="indigo accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import HomeComponent from "./components/HomeComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import SkillsComponent from "./components/SkillsComponent";
import FooterComponent from "./components/FooterComponent";

export default {

  name: "App",

  components: {
    HomeComponent,
    ExperienceComponent,
    SkillsComponent,
    FooterComponent,
  },

  data: () => ({

    loading: false,

    redesSociales: [
      {
        id: 1,
        name: "Github",
        url: "https://github.com/andycodev",
        icon: 'mdi-github'
      },
      {
        id: 2,
        name: "Linkedin",
        url: "https://www.linkedin.com/in/andygiampierreordonezvega/",
        icon: 'mdi-linkedin'
      },
      {
        id: 3,
        name: "Twitter",
        url: "https://twitter.com/andycodev",
        icon: 'mdi-twitter'
      },
      {
        id: 4,
        name: "Instagram",
        url: "https://www.instagram.com/andygiampierre/",
        icon: 'mdi-instagram'
      },
      {
        id: 5,
        name: "Facebook",
        url: "https://www.facebook.com/agov10/",
        icon: 'mdi-facebook'
      },
    ],
  }),

  mounted() {
    this.cargarContenido();
  },

  methods: {
    cargarContenido() {
      setTimeout(() => {
        this.loading = true;
      }, 1000);
    },

    openPage(url){
      window.open(`${url}`, '_blank');
    }
  },
};
</script>
<style>
* {
  font-family: Cascadia Code;
}


</style>
