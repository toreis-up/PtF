<template>
  <section>
    <v-btn @click="signIn">にんしょー</v-btn>
  </section>
</template>

<script>
import { getAuth, OAuthProvider, signInWithPopup } from "firebase/auth";
export default {
  mounted() {},
  methods: {
    signIn() {
      const auth = getAuth();
      const provider = new OAuthProvider("microsoft.com");
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = OAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          const idToken = credential.idToken;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // signOut() {
    //   const auth = getAuth();
    //   signOut(auth)
    //     .then(() => {
    //       // Sign-out successful.
    //     })
    //     .catch((error) => {
    //       // An error happened.
    //     });
    // },
  },
};
</script>

<style>
</style>
