<template>
  <v-container class="mt-5">
    <v-row class="mt-5" justify="center">
      <v-col cols="12" md="8" class="mb-4">
        <h2 class="display-1 text-center mb-5">Repositorios 📂</h2>
        <p class="text-left grey--text">Últimos repositorios creados en mi Github | <a href="https://github.com/andycodev?tab=repositories" target="_blank">ver todos</a></p>
        <v-row>
          <v-col
            v-for="repositorie in sortRopositories"
            :key="repositorie.id"
            cols="12"
            sm="6"
          >
            <v-card color="#385F73" dark class="pt-2 pl-2 pb-2 card-mh">
              <v-card-title class="text-h5">
                {{ repositorie.name }}</v-card-title
              >

              <v-card-subtitle>
                {{ repositorie.description }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn outlined rounded small @click="openPage(repositorie.url)" > visitar repositorio </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const API_REPOS = "https://api.github.com/users/andycodev/repos";

export default {
  name: "RepositoriesComponent",
  data: () => ({
    repositories: [],
  }),

  mounted() {
    this.getRepositories();
    /* setTimeout(() => {
      console.log(this.sortRopositories);
    }, 2000); */
  },

  methods: {
    async getRepositories() {
      try {
        const response = await fetch(API_REPOS);
        this.repositories = await response.json();
      } catch (error) {
        console.log(error);
      }
    },

    openPage(url){
      window.open(`${url}`, '_blank')
    }
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
        .slice(0, 4);
    },
  },
};
</script>

<style scoped>
.card-mh {
  min-height: 200px !important;
}
</style>
