<template>
  <v-app dark>
    <v-main>
      <v-container fluid>
        <Navbar />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/problemComponents/Navbar.vue";
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  components: { Navbar },
};
</script>
