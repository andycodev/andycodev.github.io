<template>
  <div class="col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
    <div class="flex items-center space-x-4 mb-3">
      <img class="w-24 h-24 rounded-full" src="../assets/andycodev.png" alt="">
      <div>
        <div class="font-semibold text-xl text-gray-600">Andy Giampierre Ordoñez Vega</div>
        <div class="font-medium text-base text-gray-800 efect-write">Fullstack Developer</div>
        <div class="font-normal text-sm text-gray-400">Lima, Perú</div>
      </div>
    </div>
    <p class="font-normal text-base sm:text-sm text-gray-400">
      Soy Analista Programador, enfocado en desarrollo web y trabajo en equipo para resolver problemas. Mi
      objetivo es dar soluciones innovadoras y eficientes. Me apasiona la tecnología y siempre estoy en búsqueda
      de nuevas oportunidades para aprender y mejorar mis habilidades.
    </p>

    <!-- <div class="flex items-center space-x-1 mt-5">
              <button class="button-primary">
                Descargar CV
              </button>
              <button class="button-secondary">
                Github
              </button>
            </div> -->
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',

  data: () => ({
    items: [{ title: "Visualizar", value: 'v', icon: 'mdi-eye' }, { title: "Descargar", value: 'd', icon: 'mdi-download' }],
    show: false,
    linkBaseCurriculumGitHUB: 'https://github.com/andycodev/curriculum-vitae/',
    nombreCurriculum: 'CV_AndyGiampierreOrdo%C3%B1ezVega.pdf'
  }),

  methods: {
    /* openPage() {
      window.open(
        "https://www.linkedin.com/in/andygiampierreordonezvega/",
        "_blank"
      );
    },
 */
    descargarCurriculum() {
      window.open(
        `${this.linkBaseCurriculumGitHUB}raw/main/${this.nombreCurriculum}`,
        "_self"
      );
    },

    visualizarCurriculum() {
      window.open(
        `${this.linkBaseCurriculumGitHUB}blob/main/${this.nombreCurriculum}`,
        "_blank"
      );
    },

    opcionesCurriculum(value) {
      if (value === 'v') this.visualizarCurriculum();
      if (value === 'd') this.descargarCurriculum();
    },
  },
};
</script>

<style scoped>
.efect-write {
  display: block;
  white-space: nowrap;
  border-right: 3px solid;
  width: 16ch;
  /* color: #2b649d; */
  animation: typing 2s steps(16), blink 0.5s infinite step-end alternate;
  overflow: hidden;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.cursor {
  cursor: pointer;
}
</style>
