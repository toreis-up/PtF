<template>
  <section>
    <v-container>
      <v-data-table
        :headers="listHeader"
        :items="problems"
        @click:row="selectRow"
        no-data-text="データがありません。"
      >
        <template v-slot:[`item.name`]="props">
          <v-btn :href="props.item.url" target="_blank" text>{{
            props.item.name
          }}</v-btn>
        </template>
      </v-data-table>
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
export default {
  props: ["selectedRow"],
  data() {
    return {
      listHeader: [
        { text: "pdf名", value: "name" },
        { text: "教科名", value: "Subject" },
        { text: "担当教員", value: "Staff_name" },
        { text: "学年", value: "Grade" },
        { text: "年度", value: "Year" },
        { text: "開催期", value: "C_or_K" },
      ],
      problems: [],
    };
  },
  computed: {
    rowData: {
      get() {
        return this.selectedRow;
      },
      set(newVal) {
        this.$emit("onselectRow", newVal);
      },
    },
  },
  methods: {
    async getProblems() {
      const db = await getFirestore();
      const probColRef = collection(db, "problems");
      const querySnapshot = await getDocs(probColRef);
      querySnapshot.forEach((doc) => {
        if (this.problems.includes(doc.data()) === true);
        else this.problems.push(doc.data());
      });
    },
    selectRow(row) {
      console.log("here is lp: ", row);
      this.rowData = row;
    },
  },
  mounted() {
    this.getProblems();
  },
  mounted() {
    this.getProblems();
  },
};
</script>

<style>
</style>