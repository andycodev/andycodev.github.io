<template>
  <div>
    <!-- <ul class="flex flex-wrap items-center justify-start mb-6 text-gray-800 mt-8">
      <li v-for="redSocial in redesSociales" :key="redSocial.id">
        <a href="#" class="mr-4 hover:underline md:mr-6" @click="openPage(redSocial.url)">{{ redSocial.name }}</a>
      </li>
    </ul> -->
    <div class="flex items-center justify-between mt-3">
      <h2 class="ml-2 mt-4 mb-4 text-base text-start font-medium text-gray-500">{{ new Date().getFullYear() }} — andycodev
        👨‍💻</h2>
      <button class="button-secondary text-right" v-show="showScrollButton" @click="scrollToTop">Volver al inicio</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data: () => ({
    redesSociales: [
      {
        id: 1,
        name: "Github",
        url: "https://github.com/andycodev",
      },
      {
        id: 2,
        name: "Linkedin",
        url: "https://www.linkedin.com/in/andygiampierreordonezvega/",
      },
      {
        id: 3,
        name: "Facebook",
        url: "https://www.facebook.com/agov10",
      },
      /* {
        id: 4,
        name: "Instagram",
        url: "https://www.instagram.com/andygiampierre/",
      }, */
    ],
    showScrollButton: false
  }),

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {

    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.showScrollButton = scrollTop > 0.8 * maxScroll;
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },

    openPage(url) {
      window.open(`${url}`, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped></style>