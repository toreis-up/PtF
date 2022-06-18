<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="8">
          <vue-pdf :src="pdfUrl"></vue-pdf>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ["pdfurl"],
  data: () => ({
    pdfUrl: "pdfurl",
  }),
  methods: {
  },
})
</script>