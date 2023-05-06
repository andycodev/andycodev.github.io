<template>
  <div
    class="col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white mt-2 hidden sm:block transition-opacity duration-500 ease-in-out">
    <h2 class="mb-2 text-lg text-left font-semibold text-gray-600">Repositorios</h2>
    <transition name="fade">
      <div v-if="repositories.length" class="mb-5">
        <div class="mb-5" v-for="repositorie in sortRopositories" :key="repositorie.id">
          <div class="flex items-center space-x-4 mb-3">
            <img class="w-14 h-14 rounded-full" src="../assets/svgs/github-circle.svg" alt="">
            <!-- <div
                class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full">
                <span class="font-medium text-gray-100">E1</span>
              </div> -->
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
      </div>
    </transition>
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
