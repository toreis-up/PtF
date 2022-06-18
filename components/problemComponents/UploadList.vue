<template>
  <section>
    <v-file-input
    accept=".pdf"
    placeholder="PDFをアップロード"
    outlined
    @change="onFileUpload"
    clear-icon="mdi-close-circle"
    clearable
    :rules="[v => !!v || 'PDFファイルは必須です。']"
    required></v-file-input>
  </section>
</template>

<script>
  import {getStorage, ref ,uploadBytes,deleteObject} from 'firebase/storage'

  export default{
    props: [ 'downloadLink' ],
    data() {
        return {
            problemRef: null
            
        }
    },
    methods: {
        onFileUpload (file) {
            const storage = getStorage();
            if(file === null){
                const deteteTask = deleteObject(this.problemRef)
            }
            else{
                this.problemRef = ref(storage, 'problems/' +file.name);
                uploadBytes(this.problemRef, file)
                .then(() => getDownloadURL(this.problem))
                .then((link) => this.downloadLink = link);
            }
        }
    }
  }
</script>