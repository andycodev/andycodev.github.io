<template>
  <div id="experience" class="col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow mt-2">
    <h2 class="mb-2 text-lg text-left font-semibold text-gray-600">{{ title }}</h2>
    <ol class="border-l border-gray-200">
      <li class="mb-10 -ml-1.5" v-for="(experience, index) in experiences" :key="experience.id">
        <span class="bg-gray-500 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2">
        </span>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400">{{ experience.date }}
          <span v-if="experience.state === 1"
            class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Actualidad</span>
        </time>
        <h3 class="text-base font-medium text-gray-600 ml-5">{{ experience.entity }}</h3>
        <p class="font-medium text-sm text-gray-500 ml-5">{{ experience.rol }}</p>
        <!-- <div class="font-normal text-xs text-gray-400">Lima, Perú</div> -->
        <ul class="font-normal text-base sm:text-sm text-gray-400 space-y-1 list-disc list-inside mt-2 ml-5">
          <li v-for="(desc, index) in experience.description" :key="index">
            {{ desc }}
          </li>
        </ul>
      </li>
    </ol>


    <!-- <ol class="relative border-l border-gray-200">
      <li class="mb-10 ml-4" v-for="(experience, index) in experiences" :key="experience.id">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white">
        </div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400">{{ experience.date }}
          <span v-if="experience.state === 1"
            class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Actualidad</span>
        </time>
        <h3 class="text-base font-medium text-gray-600">{{ experience.entity }}</h3>
        <p class="font-medium text-sm text-gray-500">{{ experience.rol }}</p>
        <ul class="font-normal text-base sm:text-sm text-gray-400 space-y-1 list-disc list-inside mt-2">
          <li v-for="(desc, index) in experience.description" :key="index">
            {{ desc }}
          </li>
        </ul>
      </li>
    </ol> -->

    <!-- <div class="mb-5" v-for="(experience, index) in experiences" :key="experience.id">
      <div class="flex items-center space-x-4 mb-3">
        <div>
          <div class="font-medium text-base text-gray-600">
            {{ experience.entity }}
          </div>
          <div class="font-medium text-sm text-gray-500">{{ experience.rol }}</div>
          <span v-if="index === 0" class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{{
            experience.date }}</span>
          <div v-else class="font-normal text-xs text-gray-400">{{ experience.date }}</div>
          <div class="font-normal text-xs text-gray-400">Lima, Perú</div>
        </div>
      </div>
      <ul class="font-normal text-base sm:text-sm text-gray-400 space-y-1 list-disc list-inside">
        <li v-for="(desc, index) in experience.description" :key="index">
          {{ desc }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ExperienceComponent',
  data: () => ({
    title: 'Experiencia',
    experiences: [
      {
        id: 1,
        img: "/template/images/programador.svg",
        rol: "Programador",
        entity: "Clínica Good Hope",
        date: "Febrero 2018 - Junio 2018",
        state: 0,
        description: {
          1: "Comprender las necesidades de los usuarios.",
          2: "Brindar soporte de los módulos requeridos.",
          3: "Desarrollar requerimientos específicos.",
          4: "Aprendí nuevas tecnologías y herramientas para mejorar mis habilidades en el desarrollo de software."
        }
      },
      {
        id: 2,
        img: "/template/images/analista-programador-1.svg",
        rol: "Analista Desarrollador",
        entity: "Clínica Good Hope",
        date: "Julio 2018 - Abril 2020",
        state: 0,
        description: {
          1: "Participé en reuniones de equipo para discutir el progreso del proyecto y las tareas pendientes.",
          2: "Realicé pruebas en el código antes de la entrega del proyecto.",
          3: "Escribí código en Php y Javascript para el desarrollo de una aplicación web utilizando el framework Laravel para el backend y Vue para el frontend."
        }
      },
      {
        id: 3,
        img: "/template/images/analista-progrmador-2.svg",
        rol: "Analista Desarrollador",
        entity: "Universidad Peruana Unión",
        date: "Mayo 2020 - Mayo 2022",
        state: 0,
        description: {
          1: "Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS de la universidad.",
          2: "Desarrollar requerimientos y migraciones de módulos con tecnologías Laravel y Angular.",
        }
      },
      {
        id: 4,
        img: "/template/images/analista-progrmador-2.svg",
        rol: "Analista Desarrollador",
        entity: "Unión Peruana del Norte e IATec",
        date: "Junio 2022 - ",
        state: 1,
        description: {

        }
      },
    ],
  }),

  created() {
    this.sortDescExperiences();
  },
  methods: {
    sortDescExperiences() {
      this.experiences.sort(function (a, b) {
        return b.id - a.id;
      });
    }
  }


};
</script>

<style lang="scss" scoped></style>