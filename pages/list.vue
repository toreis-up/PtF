<template>
  <div>
    <v-container>
      <v-row
        ><v-col
          ><ListProblems
            @onselectRow="changeRow"
            :selectedRow="selectedProblem"
        /></v-col>
        <v-col v-show="!!selectedProblem"
          ><PDFView :selectedRow="selectedProblem" /></v-col
      ></v-row>
    </v-container>
  </div>
</template>

<script>
import ListProblems from "../components/problemComponents/ListProblems.vue";
import PDFView from "../components/problemComponents/PDFView.vue";
export default {
  name: "IndexPage",
  components: { ListProblems, PDFView },
  data() {
    return {
      selectedProblem: null,
    };
  },
  methods: {
    changeRow(newRow) {
      console.log("here is list: ", newRow);
      this.selectedProblem = newRow;
    },
  },
};
</script>
