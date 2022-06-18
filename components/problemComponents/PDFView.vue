<template>
  <div>
      <vue-pdf :src="pdfURL"></vue-pdf>
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