<template>
<<<<<<< HEAD
    <section>
        <v-container>
            <v-btn block @click="login">ログイン</v-btn>
        </v-container>
    </section>
=======
  <section>
    <v-container>
      <v-btn @click="login">ログイン</v-btn>
    </v-container>
  </section>
>>>>>>> fixerTos
</template>

<script>
import {
  getAuth,
  signInWithPopup,
  OAuthProvider,
  PhoneAuthProvider,
} from "firebase/auth";

export default {
  methods: {
    login() {
      const provider = new OAuthProvider("microsoft.com");
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          this.$store.commit("setUser", result);
          localStorage.setItem("authDisplayName", result.user.displayName);
          localStorage.setItem("authUID", result.user.uid);
          this.$router.push("/");
        })
        .catch((error) => {
          // handle error.
          console.log(error);
        });
    },
  },
};
</script>