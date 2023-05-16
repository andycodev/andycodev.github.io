<template>
  <!-- hidden sm:block --> <!-- Clases para ocultar en mobile -->
  <div
    class="col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow mt-2 transition-opacity duration-500 ease-in-out">
    <h2 class="mb-2 text-lg text-left font-semibold text-gray-600">Repositorios</h2>
    <transition name="fade">
      <ul class="max-w-md divide-y divide-gray-200">
        <li class="pb-3 pt-3 sm:pb-4" v-for="repositorie in sortRopositories" :key="repositorie.id">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-10 h-10 rounded-full" src="../assets/svgs/github-circle.svg" alt="Neil image">
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-600 truncate">
                {{ repositorie.name }}
              </p>
              <p class="text-xs text-gray-400 truncate">
                {{ repositorie.description }}
              </p>
              <p class="text-xs text-gray-400 truncate">
                {{ repositorie.date }}
              </p>
            </div>
            <div class="inline-flex items-center text-xs font-semibold text-gray-900">
              <a href="#" class="font-medium text-blue-500 hover:underline" @click="openPage(repositorie.url)">Más
                info</a>
            </div>
          </div>
        </li>
        <div class="text-center text-sm font-semibold text-gray-900 pt-4 p-0">
          <a href="#" class="font-medium text-blue-500 hover:underline"
            @click="openPage('https://github.com/andycodev?tab=repositories')">Ver todos los
            repositorios en Github</a>
        </div>
      </ul>
    </transition>

    <!-- <div v-if=" repositories.length" class="mb-5">
            <div class="mb-5" v-for="repositorie in sortRopositories" :key="repositorie.id">
              <div class="flex items-center space-x-4 mb-3">
                <img class="w-14 h-14 rounded-full" src="../assets/svgs/github-circle.svg" alt="">
                <div>
                  <div class="font-medium text-sm text-gray-600">{{ repositorie.name }}</div>
                  <div class="font-normal text-xs text-gray-400">{{ repositorie.date }}</div>
                  <div class="font-normal text-xs text-gray-400">andycodev</div>
                </div>
              </div>
              <p class="font-normal text-sm sm:text-sm text-gray-400">
                {{ repositorie.description }}
              </p>
            </div>
        </div> -->
  </div>
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
        console.log('repositories', this.repositories);
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
