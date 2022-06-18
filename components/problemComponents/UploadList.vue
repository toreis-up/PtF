<template>
  <section>
    <v-file-input
      accept=".pdf"
      placeholder="PDFをアップロード"
      outlined
      @change="onFileUpload"
      clear-icon="mdi-close-circle"
      clearable
      :rules="[(v) => !!v || 'PDFファイルは必須です。']"
      required
    ></v-file-input>
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
  props: ["downloadLink", "filename"],
  data() {
    return {
      problemRef: null,
    };
  },
  computed: {
    url: {
      get() {
        return this.downloadLink;
      },
      set(newVal) {
        this.$emit("changeDLLink", newVal);
      },
    },
    fname: {
      get() {
        return this.filename;
      },
      set(newVal) {
        this.$emit("changeFilename", newVal);
      },
    },
  },
  methods: {
    onFileUpload(file) {
      const storage = getStorage();
      if (!file) {
        if (file === null && !this.fname) {
          console.log("deleting");
          const deleteTask = deleteObject(this.problemRef);
        }
      } else {
        console.log(file);
        this.problemRef = ref(storage, "problems/" + file.name);
        uploadBytes(this.problemRef, file)
          .then(() => this.problemRef.fullPath)
          .then((link) => (this.url = link))
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>