<template>
  <section>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title> PDFファイル アップロード</v-card-title>
              <UploadList :downloadLink="downloadURL"></UploadList>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title> 教科 </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="subject_name"
                  label="例) 基礎数学Ⅰ"
                  single-line
                  clear-icon="mdi-close-circle"
                  clearable
                  @click:clear="clearSubject"
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title> 年度 </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="year"
                  label="例) 令和4年度"
                  single-line
                  clear-icon="mdi-close-circle"
                  clearable
                  @click:clear="clearYear"
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title> 学年 </v-card-title>
              <v-card-text>
                <v-radio-group row v-model="grade_school">
                  <v-radio
                    v-for="gra in grade"
                    :key="gra.name"
                    :label="gra.name"
                    :value="gra.val"
                  ></v-radio>
                </v-radio-group>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title> 中間 or 期末 </v-card-title>
              <v-card-text>
                <v-radio-group row v-model="CorK">
                  <v-radio
                    v-for="btn in buttons"
                    :key="btn.name"
                    :label="btn.name"
                    :value="btn.val"
                  ></v-radio>
                </v-radio-group>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title> 教員名 </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="staff_name"
                  label="例) 高専太郎"
                  single-line
                  clear-icon="mdi-close-circle"
                  clearable
                  @click:clear="clearStaff"
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-row>
            <v-col>
              <v-card height="100%">
                <v-card-title>てすｔｐ</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
        <v-btn :disabled="TorF" @click="upload"> 登録 </v-btn>
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
      downloadURL: "",
      subject_name: "",
      year: "",
      grade_school: 1,
      grade: [
        { name: "1年", val: "1" },
        { name: "2年", val: "2" },
        { name: "3年", val: "3" },
        { name: "4年", val: "4" },
        { name: "5年", val: "5" },
      ],
      staff_name: "",
      CorK: 1,
      buttons: [
        { name: "中間", val: "chukan" },
        { name: "期末", val: "kimatsu" },
      ],
      TorF: false,
    };
  },
  methods: {
    async upload() {
      this.TorF = true;
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
          this.TorF = false;
        })
        .catch(() => {
          this.TorF = false;
        });
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