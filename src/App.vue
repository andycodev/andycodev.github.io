<template>
  <div>
    <transition name="fade">
      <div v-if="loading">
        <NavbarComponent />
        <div class="container max-w-screen-lg mx-auto mt-20 px-2">
          <div class="grid grid-cols-12 gap-2">
            <div class="col-span-12 md:col-span-8">
              <HomeComponent />
              <ExperienceComponent />
            </div>
            <div class="col-span-12 md:col-span-4">
              <AptitudesComponent />
              <RepositoriesComponent />
              <ContactComponent />
            </div>
          </div>
          <FooterComponent />
        </div>
      </div>
    </transition>
    <div v-if="!loading" class="container max-w-screen-lg mx-auto px-2">
      <div class="flex items-center justify-center h-screen">
        <div class="flex items-center justify-center w-56 h-56 rounded-lg text-center">
          <div
            class="px-4 py-2 text-sm font-medium leading-none text-center text-gray-500 bg-gray-200 rounded-full animate-pulse">
            andycodev...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "./components/NabvarComponent.vue"
import HomeComponent from "./components/HomeComponent"
import AptitudesComponent from "./components/AptitudesComponent"
import ExperienceComponent from "./components/ExperienceComponent"
/* import SkillsComponent from "./components/SkillsComponent";
import ProjectsComponent from "./components/ProjectsComponent"; */
import RepositoriesComponent from "./components/RepositoriesComponent"
import FooterComponent from "./components/FooterComponent.vue"
import ContactComponent from "./components/ContactComponent"

export default {

  name: "App",

  components: {
    NavbarComponent,
    HomeComponent,
    AptitudesComponent,
    ExperienceComponent,
    /* SkillsComponent,
    ProjectsComponent, */
    ContactComponent,
    RepositoriesComponent,
    FooterComponent
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

    openPage(url) {
      window.open(`${url}`, '_blank');
    }
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0
}
</style>

