<template>
    <v-container class="mt-5">
        <h2 class="display-1 text-center mb-5">Proyectos 🏆</h2>
        <v-row dense class="mt-5" justify="center">
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <v-card>
                    <v-img :src="card.src" class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>

                    <v-card-actions>
                   
                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>mdi-github</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-web</v-icon>
                        </v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "ProjectsComponent",
    data: () => ({
        cards: [
            { title: 'Microframework Tailwindcss', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            { title: 'Favorite road', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            { title: 'Best airliness', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            { title: 'Best airliness', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
        ],
    }),

    mounted() { },

    methods: {},
};
</script>

<style scoped>
</style>
