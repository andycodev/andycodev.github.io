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
            <div class="fixed right-5 bottom-14 group sm:hidden">
              <a type="button" href="tel:945589531"
                class="flex items-center justify-center text-white bg-gray-700 rounded-full w-14 h-14 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z">
                  </path>
                </svg>
              </a>
              <!--  <a href="tel:123456789">Llamar al número</a> -->
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

