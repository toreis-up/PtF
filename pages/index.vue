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
};
</script>
