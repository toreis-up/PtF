<template>
  <section>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title> PDFファイル アップロード</v-card-title>
              <UploadList
                @changeDLLink="setDLLink"
                :downloadLink="downloadURL"
              ></UploadList>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title> 教科 </v-card-title>
              <v-card-text>
                <v-text-field v-model="subject_name"></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-subtitle> 年度 </v-card-subtitle>
              <v-card-text>
                <v-text-field v-model="year"></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-subtitle> 学年 </v-card-subtitle>
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
          <v-col cols="12" md="4">
            <v-card>
              <v-card-subtitle> 中間 or 期末 </v-card-subtitle>
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
          <v-col cols="12" md="4">
            <v-card>
              <v-card-subtitle> 教員名 </v-card-subtitle>
              <v-card-text>
                <v-text-field v-model="staff_name"></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-btn
          :disabled="!valid"
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
export default {
  data() {
    return {
      subject_name: "",
      year: "",
      grade_school: "",
      grades: ["1年", "2年", "3年", "4年", "5年"],
      staff_name: "",
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
          name: "pdfname",
          Subject: this.subject_name,
          Year: this.year,
          Grade: this.grade_school,
          C_or_K: this.CorK,
          Staff_name: this.staff_name,
        })
          .then(() => {
            this.clearSubject();
            this.clearYear();
            this.clearGrade();
            this.clearCorK();
            this.clearStaff();
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

    clearSubject() {
      this.subject_name = "";
    },
    clearYear() {
      this.year = "";
    },
    clearGrade() {
      this.grade_school = "";
    },
    clearCorK() {
      this.CorK = "";
    },
    clearStaff() {
      this.staff_name = "";
    },
  },
  components: { UploadList },
};
</script>

<style>
</style>