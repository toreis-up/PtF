<template>
  <section>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title> PDFファイル アップロード</v-card-title>
              <UploadList
                @changeDLLink="setDLLink"
<<<<<<< HEAD
                :downloadLink="downloadURL"
=======
                @changeFilename="setFilename"
                :downloadLink="downloadURL"
                :filename="pdfname"
>>>>>>> fixerTos
              ></UploadList>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title> 教科 </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="subject_name"
                  placeholder="例) 基礎数学Ⅰ"
                  outlined
                  :rules="[Rules.required]"
                  required
                  clear-icon="mdi-close-circle"
                  clearable
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title> 年度 </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="year"
                  placeholder="例) 令和4年度"
                  outlined
                  :rules="[Rules.required]"
                  required
                  clear-icon="mdi-close-circle"
                  clearable
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title> 学年 </v-card-title>
              <v-card-text>
                <v-select
                  v-model="grade_school"
                  :items="grades"
                  :rules="[Rules.required]"
                  placeholder="学年"
                  required
                ></v-select>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title> 中間 or 期末 </v-card-title>
              <v-card-text>
                <v-select
                  v-model="CorK"
                  :items="cork"
                  :rules="[Rules.required]"
                  placeholder="中間 or 期末"
                  required
                ></v-select>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title> 教員名 </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="staff_name"
                  placeholder="例) 高専太郎"
                  outlined
                  :rules="[Rules.required]"
                  required
                  clear-icon="mdi-close-circle"
                  clearable
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
<<<<<<< HEAD
        </v-row>
        <v-btn
          :disabled="!valid"
=======
          <v-row>
            <v-col>
              <v-card height="100%">
                <v-card-title>てすと</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-row>

        <v-btn
          :disabled="!valid || loading"
>>>>>>> fixerTos
          :loading="loading"
          color="info"
          large
          @click="upload"
        >
          登録 <v-icon right> mdi-cloud-upload </v-icon>
        </v-btn>
      </v-container>
    </v-form>
  </section>
</template>

<script>
import UploadList from "./UploadList.vue";
import { addDoc, collection, getFirestore } from "@firebase/firestore";

export default {
  data() {
    return {
      valid: true,
      downloadURL: "",
      subject_name: "",
      year: "",
      grade_school: "",
      grades: ["1年", "2年", "3年", "4年", "5年"],
      staff_name: "",

      pdfname: "",
      CorK: "",
      cork: ["中間", "期末"],
      loading: false,
      Rules: {
        required: (v) => !!v || "入力は必須です。",
      },
    };
  },
  methods: {
    async upload() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const db = await getFirestore();
        const probColRef = await collection(db, "problems");
        const probDocRef = await addDoc(probColRef, {
          name: this.pdfname,
          Subject: this.subject_name,
          Year: this.year,
          Grade: this.grade_school,
          C_or_K: this.CorK,
          Staff_name: this.staff_name,
          url: this.downloadURL,
        })
          .then(() => {
            this.$refs.form.reset();
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },

    setDLLink(newVal) {
      this.downloadURL = newVal;
    },

    setDLLink(newVal) {
      this.downloadURL = newVal;
    },

    setFilename(newVal) {
      this.pdfname = newVal;
    },
  },
  components: { UploadList },
};
</script>

<style>
</style>