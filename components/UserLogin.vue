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
                const credential = OAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                const idToken = credential.idToken;
            })
        .catch((error) => {
        // handle error.
        console.log(error);
        });
        }
    }
}
</script>