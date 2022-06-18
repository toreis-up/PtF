<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <vue-pdf
            :src="link"
            :page="currentPage"
            @num-pages="totalPage = $event"
          ></vue-pdf>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn @click="prevPage"><</v-btn>
        <v-spacer></v-spacer>

        {{ currentPage }}
        <v-spacer></v-spacer>
        <v-btn @click="nextPage">></v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      currentPage: 1,
      totalPage: 0,
    };
  },
  props: ["pdfurl", "selectedRow"],
  computed: {
    link: {
      get() {
        console.log(this.selectedRow);
        if (this.selectedRow === undefined) {
          return null;
        } else {
          console.log(this.selectedRow.url);
          return this.selectedRow.url;
        }
      },
      set(val) {},
    },
  },

  methods: {
    prevPage() {
      if (this.currentPage <= 1) {
        return;
      }
      this.currentPage = this.currentPage - 1;
    },
    nextPage() {
      if (this.currentPage >= this.totalPage) {
        return;
      }
      this.currentPage = this.currentPage + 1;
    },
  },
});
</script>