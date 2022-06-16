<template>
  <section>
    <v-container>
      <v-file-input
        accept=".pdf"
        prepend-icon="mdi-cloud-upload"
        label="ここをクリックでファイルをアップロード"
        @change="onFileChange"
        clearable
      ></v-file-input>
      <v-btn @submit.prevent=""></v-btn>
    </v-container>
  </section>
</template>

<script>
import {
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";

export default {
  props: ["downloadLink"],
  data() {
    return {
      problemRef: null,
    };
  },
  methods: {
    onFileChange(file) {
      const storage = getStorage();
      if (file === null) {
        const deleteTask = deleteObject(this.problemRef);
      } else {
        this.problemRef = ref(storage, "problems/" + file.name);
        uploadBytes(this.problemRef, file)
          .then(() => getDownloadURL(this.problem))
          .then((link) => (this.downloadLink = link));
      }
    },
  },
};
</script>

<style>
</style>