<template>
  <div>
    <ListProblems />
    <PDFView />
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
<<<<<<< HEAD
  components: { ListProblems, SubmitProblem, PDFView },
=======
  components: { ListProblems, SubmitProblem },

  middleware: "auth",
  data() {
    return {
      User: this.$store.state.authUser,
    };
  },
  mounted() {
    if (
      localStorage.getItem("authDisplayName") &&
      localStorage.getItem("authUID")
    ) {
      this.$store.commit("setUser", {
        user: {
          displayName: localStorage.getItem("authDisplayName"),
          uid: localStorage.getItem("authUID"),
        },
      });
    } else {
      this.$router.push("/login");
    }
  },
>>>>>>> fixerTos
};
</script>
