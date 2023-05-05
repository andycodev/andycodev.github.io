<template>
  <div>
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
    expand: false,

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
      this.expand = true;
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

