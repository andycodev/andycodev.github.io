<template>
  <div class="col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white mt-2">
    <h2 class="mb-2 text-lg text-left font-semibold text-gray-600">Contacto</h2>
    <!-- <label for="message" class="block mb-2 text-sm font-nomral text-gray-400">Escribir mensaje</label> -->
    <textarea id="message" rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
      @keyup="messageWhatsapp(message)" v-model="message" placeholder="Escribir mensaje a enviar...">
    </textarea>
    <small v-if="showMessage" class="mt-2 text-sm text-red-500 font-medium">
      Escribir mínimo cuatro caracteres.
    </small>
    <div class="flex justify-center">
      <button class="button-primary mt-3" @click="sendMessageWhatsapp()">Enviar mensaje a
        whatsapp</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ConatactComponent',
  data: () => ({
    message: "",
    apiWhatsapp: "",
    showMessage: false,
  }),

  mounted() { },

  methods: {
    messageWhatsapp(message) {
      (this.message.length < 4) ? this.showMessage = true : this.showMessage = false;
      this.apiWhatsapp = `https://api.whatsapp.com/send?phone=+51945589531&text=${message}`;
    },

    sendMessageWhatsapp() {
      if (this.message.length >= 4) {
        window.open(this.apiWhatsapp, "_blank");
        this.showMessage = false;
        this.message = "";
      } else {
        this.showMessage = true;
      }
    },
  },

  computed: {
    /* visualizeButton: function () {
      return this.message.length >= 4 ? true : false;
    }, */
  },
};
</script>

<style scoped>
.card-mh {
  min-height: 200px !important;
}
</style>
