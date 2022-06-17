<template>
    <section>
        <v-app dark>
            <v-app-bar dark>
                <v-app-bar-nav-icon />
                <v-toolbar-title>Title</v-toolbar-title>
                <v-spacer />
                <v-btn icon to="/login">
                    ログイン
                </v-btn>
                <v-btn icon to="/">
                    <v-icon>mdi-home</v-icon>
                </v-btn>
            </v-app-bar>
            <content>
                <router-view />
            </content>
        </v-app>
    </section>
</template>

<script>
export default {

}
</script>