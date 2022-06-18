<template>
    <section>
        <v-container>
            <v-btn @click="login">ログイン</v-btn>
        </v-container>
    </section>
</template>

<script>
  import { getAuth, signInWithPopup, OAuthProvider, PhoneAuthProvider } from "firebase/auth";
  
  export default {
    methods: {
        login() {
            const provider = new OAuthProvider('microsoft.com');
            const auth  = getAuth();
            signInWithPopup(auth, provider)
            .then((result) => {
                this.$store.commit('setUser', result)
                this.$router.push('/')
            })
        .catch((error) => {
        // handle error.
        console.log(error);
        });
        }
    }
}
</script>