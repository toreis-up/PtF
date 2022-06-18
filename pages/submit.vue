<template>
  <div>
    <v-container>
      <v-row>
        <v-col><SubmitProblem @changeLink="setLink" /></v-col>
        <v-col>
          <v-card>
            <v-card-title>Preview</v-card-title>
            <v-card-text> <PDFView :selectedRow="pdfLink" /></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SubmitProblem from "../components/problemComponents/SubmitProblem.vue";
import PDFView from "~/components/problemComponents/PDFView.vue";
export default {
  components: { SubmitProblem, PDFView },
  data() {
    return {
      User: this.$store.state.authUser,
      pdfLink: {
        url: "",
      },
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
  methods: {
    setLink(newVal) {
      this.pdfLink.url = newVal;
    },
  },
};
</script>

<style>
</style>