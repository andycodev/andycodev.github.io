<template>
    <div class="col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
        <h2 class="mb-2 text-lg text-left font-semibold text-gray-600">Aptitudes</h2>
        <ul class="font-normal text-base sm:text-sm text-gray-400 space-y-1 list-disc list-inside">
            <li>
                Trabajo en equipo
            </li>
            <li>
                Rapidez de aprendizaje
            </li>
            <li>
                Responsable
            </li>
            <li>
                Autodidacta
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'AptitudesComponent',
    data: () => ({
        aptitudes: [
            {
                id: 1,
                name: "Github",
            },
            {
                id: 2,
                name: "Linkedin",
            },
            {
                id: 3,
                name: "Twitter",
            },
            {
                id: 4,
                name: "Instagram",
            },
        ],
    }),
};
</script>
