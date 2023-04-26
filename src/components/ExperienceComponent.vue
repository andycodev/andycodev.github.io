<template>
  <div class="col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white mt-2">
    <h2 class="mb-2 text-lg text-left font-semibold text-gray-600">Experiencia</h2>
    <div class="mb-5" v-for="(experience, index) in experiences" :key="experience.id">
      <div class="flex items-center space-x-4 mb-3">
        <div class="inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-500 rounded-full">
          <span class="font-medium text-gray-100">E{{ index+1 }}</span>
        </div>
        <div>
          <div class="font-medium text-base text-gray-600">{{ experience.entity }}</div>
          <div class="font-medium text-sm text-gray-500">{{ experience.rol }}</div>
          <div class="font-normal text-xs text-gray-400">{{ experience.date }}</div>
          <div class="font-normal text-xs text-gray-400">Lima, Perú</div>
        </div>
      </div>
      <ul class="font-normal text-base sm:text-sm text-gray-400 space-y-1 list-disc list-inside">
        <li v-for="(desc, index) in experience.description" :key="index">
          {{ desc }}
        </li>
      </ul>
    </div>
  </div>

  <!-- <v-container class="mt-5">
    <v-row class="mt-5" justify="center">
      <v-col cols="12" md="8" class="mb-4">
        <h2 class="display-1 text-center">Experiencia 📝</h2>

        <v-switch @click="reverseExperience()" label="Revertir"></v-switch>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item v-for="experience in experiences" :key="experience.id">
            <span slot="opposite">{{ experience.date }}</span>
            <v-card class="elevation-2">
              <v-card-title class="text-h6">
                {{ experience.entity }}
              </v-card-title>
              <v-card-text>
                {{ experience.description }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
export default {
  name: 'ExperienceComponent',
  data: () => ({
    experiences: [
      {
        id: 1,
        img: "/template/images/programador.svg",
        rol: "Programador",
        entity: "Clínica Good Hope",
        date: "Febrero 2018 - Junio 2018",
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
        description: {
          1: "Participé en reuniones de equipo para discutir el progreso del proyecto y las tareas pendientes.",
          2: "Realicé pruebas en el código antes de la entrega del proyecto.",
          3: "Escribí código en Php y Javascript para el desarrollo de una aplicación web utilizando el framework Laravel para el backend y Vue para el frontend."
        }
        /* description:
          "Gestionar requerimientos de los usuarios, diseñar y crear nuevos programas. Desarrollar modificaciones y mejoras en programas existentes, etc.", */
      },
      {
        id: 3,
        img: "/template/images/analista-progrmador-2.svg",
        rol: "Analista Desarrollador",
        entity: "Universidad Peruana Unión",
        date: "Mayo 2020 - Actualidad",
        description: {
          1: "Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS de la universidad.",
          2: "Desarrollar requerimientos y migraciones de módulos con tecnologías Laravel y Angular.",
        }
        /* description:
          "Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS de la universidad. Desarrollar requerimientos y migraciones de módulos financieros.", */
      },
    ],
  }),

  /* mounted: () => {
    setInterval(() => {
      this.experiences.reverse();
    }, 3000);
  }, */

  /* methods: {
    reverseExperience() {
      this.experiences.reverse();
    }
  } */
};
</script>

<style lang="scss" scoped></style>