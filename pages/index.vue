<template>
  <div>
    <PDFView />
    <ListProblems />
    <SubmitProblem />
  </div>
</template>

<script>
import SubmitProblem from "../components/problemComponents/SubmitProblem.vue";
import ListProblems from "../components/problemComponents/ListProblems.vue";
import PDFView from "../components/problemComponents/PDFView.vue";
//undefined
export default {
  name: "IndexPage",
  components: { ListProblems, SubmitProblem, PDFView },
};
</script>
