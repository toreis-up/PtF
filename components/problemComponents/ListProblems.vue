<template>
  <section>
    <v-container>
      <v-btn @click="getProglems">取得</v-btn>
      <v-data-table :headers="listHeader" :items="problems">

      </v-data-table>
    </v-container>
  </section>
</template>

<script>
import {collection, doc, getDoc, getDocs} from 'firebase/firestore';
export default {
data() {
  return {
    listHeader: [],
    problems: []
  }
},
methods: {
  async getProblems () {
    const q = query(collection(db, "problems"))

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data()); 
    })
  }
},
}
</script>

<style>

</style>