<template>
  <div class="hidden col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white mt-2">
    <h2 class="mb-2 text-lg text-left font-semibold text-gray-600">Repositorios</h2>
    <div class="mb-5">
      <div class="flex items-center space-x-4 mb-3">
        <img class="w-14 h-14 rounded-full" src="../assets/svgs/github-circle.svg" alt="">
        <!-- <div
                class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full">
                <span class="font-medium text-gray-100">E1</span>
              </div> -->
        <div>
          <div class="font-medium text-sm text-gray-600">Mi página web</div>
          <div class="font-normal text-xs text-gray-400">25 de marzo de 2023</div>
          <div class="font-normal text-xs text-gray-400">andycodev</div>
        </div>
      </div>
      <p class="font-normal text-sm sm:text-sm text-gray-400">
        Es una demo de mi página web oficial ...
      </p>
    </div>
    <div class="mb-5">
      <div class="flex items-center space-x-4 mb-3">
        <img class="w-14 h-14 rounded-full" src="../assets/svgs/github-circle.svg" alt="">
        <!-- <div
                class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full">
                <span class="font-medium text-gray-100">E1</span>
              </div> -->
        <div>
          <div class="font-medium text-sm text-gray-600">Mi página web</div>
          <div class="font-normal text-xs text-gray-400">25 de marzo de 2023</div>
          <div class="font-normal text-xs text-gray-400">andycodev</div>
        </div>
      </div>
      <p class="font-normal text-sm sm:text-sm text-gray-400">
        Es una demo de mi página web oficial ...
      </p>
    </div>
  </div>

  <!-- <v-container class="mt-5">
    <v-row class="mt-5" justify="center">
      <v-col cols="12" md="12" class="mb-4">
        <h2 class="display-1 text-center mb-5">Repositorios 📂</h2>
        <p class="text-center grey--text">Usuarios Github: andycodev | giampierre</p>
        <v-row align="center">
          <v-col class="d-flex" cols="12" sm="6">
            <p class="text-left grey--text">
              Últimos repositorios |
              <a :href="`https://github.com/${selectionUser}?tab=repositories`" target="_blank">ver todos</a>
              <v-icon>mdi-arrow-up-right</v-icon>
            </p>
          </v-col>

          <v-col class="d-flex" cols="12" sm="6">
            <v-select :items="items" @change="onChange()" v-model="selectionUser" label="andycodev" dense solo>
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="repositorie in sortRopositories" :key="repositorie.id" cols="12" sm="4">
            <v-card color="grey lighten-5" elevation="2" light class="pt-2 pl-2 pb-2 card-mh">
              <v-card-title class="text-h5">
                {{ repositorie.name }}</v-card-title>

              <v-card-subtitle>
                {{ repositorie.description }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn outlined rounded small @click="openPage(repositorie.url)">
                  visitar repositorio
                </v-btn>
              </v-card-actions>
              <small class="ml-5 grey--text">Fecha de creación: {{ repositorie.date }}</small>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>

export default {
  name: 'RepositoriesComponent',
  data: () => ({
    repositories: [],
    selectionUser: "andycodev",
    items: ["andycodev", "giampierre"],
  }),

  mounted() {
    this.getRepositories();
    /* setTimeout(() => {
      console.log(this.sortRopositories);
    }, 2000); */
  },

  methods: {

    onChange() {
      this.getRepositories();
    },

    async getRepositories() {
      try {
        const response = await fetch(`https://api.github.com/users/${this.selectionUser}/repos`);
        this.repositories = await response.json();
      } catch (error) {
        console.log(error);
      }
    },

    openPage(url) {
      window.open(`${url}`, "_blank");
    },
  },

  computed: {
    seteandoRepositories() {
      return this.repositories.map((item) => {
        const container = {};
        /*  container[item.id] = item.name; */
        container.name = item.name;
        container.date = item.created_at.split("T")[0];
        container.update = item.updated_at.split("T")[0];
        container.description = item.description;
        container.url = item.html_url;
        container.clone = item.clone_url;
        return container;
      });
    },

    sortRopositories() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.seteandoRepositories
        .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
        .reverse()
        .slice(0, 3);
    },
  },
};
</script>

<style scoped>
.card-mh {
  min-height: 250px !important;
}
</style>
