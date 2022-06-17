<template>
  <section>
    <v-file-input accept=".pdf" label="PDFをアップロード" @change="onFileUpload" clearable></v-file-input>
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
                const deleteTask = deleteObject(this.problemRef);
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