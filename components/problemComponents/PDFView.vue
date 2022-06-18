<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="8">
          <vue-pdf :src="link"></vue-pdf>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ["pdfurl", "selectedRow"],
  computed: {
    link: {
      get() {
        console.log(this.selectedRow)
        if (this.selectedRow === undefined) {
          return null
        }
        else {
          console.log(this.selectedRow.url)
          return this.selectedRow.url
        }
      },
      set (val) {}
    }
  },

  methods: {
  },
})
</script>