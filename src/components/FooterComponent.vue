<template>
  <div class="flex items-center mt-3">
    <h2 class="ml-2 mt-4 mb-4 text-base text-left font-medium text-gray-500">2023 — andycodev 👨‍💻</h2>
    <button class="button-secondary text-right" v-show="showScrollButton" @click="scrollToTop">Volver al inicio</button>
  </div>
  <!-- <v-footer color="grey lighten-2" class="mt-5" light padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="redSocial in redesSociales"
        :key="redSocial.id"
        color="secondary"
        text
        rounded
        class="my-2"
        @click="openPage(redSocial.url)"
      >
        {{ redSocial.name }}
      </v-btn>
      <v-col class="indigo lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>andycodev 👨‍💻</strong>
      </v-col>
    </v-row>
  </v-footer> -->
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
        name: "Twitter",
        url: "https://twitter.com/andycodev",
      },
      {
        id: 4,
        name: "Instagram",
        url: "https://www.instagram.com/andygiampierre/",
      },
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