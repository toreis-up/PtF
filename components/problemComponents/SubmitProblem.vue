<template>
  <section>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-subtitle> 教科 </v-card-subtitle>
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
               <v-radio-group row v-model="grade_school">
                <v-radio v-for="gra in grade" :key="gra.name" :label="gra.name" :value="gra.val"></v-radio>
               </v-radio-group>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-subtitle> 中間 or 期末 </v-card-subtitle>
              <v-card-text>
                <v-radio-group row v-model="CorK">
                  <v-radio v-for="btn in buttons" :key="btn.name" :label="btn.name" :value="btn.val"></v-radio>
                </v-radio-group>
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
      </v-container>
    </v-form>
  </section>
</template>

<script>
export default {
    data(){
      return {
      subject_name: "",
      year: "",
      grade_school: 1,
      grade: [
        {name: "1年", val: "1"},
        {name: "2年", val: "2"},
        {name: "3年", val: "3"},
        {name: "4年", val: "4"},
        {name: "5年", val: "5"}
      ],
      staff_name: "",
      CorK: 1,
      buttons:[
        {name: "中間", val: "chukan"},
        {name: "期末", val: "kimatsu"}
      ]
      }
    }
}
</script>

<style>

</style>