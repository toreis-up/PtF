<template>
  <section>
    <v-container>
      <v-btn @click="getProblems">取得</v-btn>
      <v-card>
        <v-card-title>
          検索欄
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
          </v-text-field>
        </v-card-title>
      <v-data-table :headers="listHeader" :items="problems" no-data-text="データがありません。">
        <template v-slot:[`item.name`]="props">
          <v-btn :href="props.item.url" target="_blank" text>{{
            props.item.name
            <PDFView></PDFView>
            }}</v-btn>
        </template>
      </v-data-table>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import PDFViewVue from "./PDFView.vue";
import PDFView from "./PDFView.vue";
export default {
    data() {
        return {
            search: "",
            listHeader: [
                { text: "pdf名", value: "name" },
                { text: "担当教員", value: "teacher" },
                { text: "学年", value: "grade" },
                { text: "年度", value: "year" },
            ],
            problems: [],
        };
    },
    methods: {
        async getProblems() {
            const db = await getFirestore();
            const probColRef = collection(db, "problems");
            const querySnapshot = await getDocs(probColRef);
            querySnapshot.forEach((doc) => {
                if (this.problems.includes(doc.data()) === true)
                    ;
                else
                    this.problems.push(doc.data());
            });
        },
    },
    components: { PDFView }
};
</script>

<style>
</style>