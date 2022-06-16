<template>
  <div>
    <ListProblems />
    <SubmitProblem />
  </div>
</template>

<script>
import SubmitProblem from "../components/problemComponents/SubmitProblem.vue";
import ListProblems from "../components/problemComponents/ListProblems.vue";
export default {
  name: "IndexPage",
  components: { ListProblems, SubmitProblem },
};
</script>
