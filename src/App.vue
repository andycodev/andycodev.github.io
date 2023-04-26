<template>
  <div>
    <nav class="fixed top-0 w-full bg-gray-800">
      <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> -->
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">andycodev</span>
        </a>
        <!-- <ul class="flex space-x-4">
          <li>
            <img title="Linkedin" class="w-8 h-8 rounded-full cursor-pointer" src="./assets/svgs/linkedin-circle.svg" alt="user photo">
          </li>
        </ul> -->
      </div>
    </nav>
    <div class="container max-w-screen-lg mx-auto mt-20 px-2">
      <div class="grid grid-cols-12 gap-2">
        <div class="col-span-12 md:col-span-8">
          <HomeComponent />
          <ExperienceComponent/>
        </div>
     
        <div class="col-span-12 md:col-span-4">
          <div class="col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
            <h2 class="mb-2 text-lg text-left font-semibold text-gray-600">Aptitudes</h2>
            <ul class="font-normal text-base sm:text-sm text-gray-400 space-y-1 list-disc list-inside">
              <li>
                Trabajo en equipo
              </li>
              <li>
                Rapidez de aprendizaje
              </li>
              <li>
                Responsable
              </li>
              <li>
                Autodidacta
              </li>
            </ul>
          </div>
          <RepositoriesComponent />
        </div>
      </div>
      <h2 class="ml-2 mt-4 mb-4 text-base text-left font-medium text-gray-500">2023 — andycodev 👨‍💻</h2>
    </div>
  </div>
</template>

<script>
import HomeComponent from "./components/HomeComponent";
import ExperienceComponent from "./components/ExperienceComponent";
/* import SkillsComponent from "./components/SkillsComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import FooterComponent from "./components/FooterComponent"; */
import RepositoriesComponent from "./components/RepositoriesComponent";
/* import ContactComponent from "./components/ContactComponent" */

export default {

  name: "App",

  components: {
    HomeComponent,
    ExperienceComponent,
   /*  SkillsComponent,
    ProjectsComponent,
    FooterComponent, */
    RepositoriesComponent,
   /*  ContactComponent */
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

