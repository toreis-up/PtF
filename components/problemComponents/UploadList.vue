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
  props: ["downloadLink"],
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
  },
  methods: {
    onFileUpload(file) {
      const storage = getStorage();
      if (!file) {
        const deleteTask = deleteObject(this.problemRef);
      } else {
        this.problemRef = ref(storage, "problems/" + file.name);
        uploadBytes(this.problemRef, file)
          .then(() => getDownloadURL(this.problemRef))
          .then((link) => (this.url = link));
      }
    },
  },
};
</script>