<template>
    <nav class="fixed top-0 w-full bg-gray-800">
        <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center">
                <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> -->
                <span class="self-center text-xl font-semibold whitespace-nowrap text-white">andycodev</span>
            </a>
            <button class="button-primary" @click="scrollToSection">Experiencia</button>
            <!-- <ul class="flex space-x-4">
          <li>
            <img title="Linkedin" class="w-8 h-8 rounded-full cursor-pointer" src="./assets/svgs/linkedin-circle.svg" alt="user photo">
          </li>
        </ul> -->
        </div>
    </nav>
</template>
<script>
export default {
    name: 'NabvarComponent',
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
    }),

    methods: {

        scrollToSection() {
            const mySection = document.querySelector('#experience');
            mySection.scrollIntoView({ behavior: 'smooth' });
        },

        openPage(url) {
            window.open(`${url}`, "_blank");
        },

    },
};
</script>
