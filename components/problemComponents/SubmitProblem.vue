<template>
  <section>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title> 教科 </v-card-title>
              <v-card-text>
                <v-text-field
                    v-model="subject"
                    label="例) 高専太郎"
                    single-line
                    clear-icon="mdi-close-circle"
                    clearable
                    @click:clear="clearSubject"></v-text-field>
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
                @click:clear="clearYear"></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title> 学年 </v-card-title>
              <v-card-text>
               <v-radio-group row v-model="grade_school">
                <v-radio v-for="gra in grade" :key="gra.name" :label="gra.name" :value="gra.val"></v-radio>
               </v-radio-group>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title> 中間 or 期末 </v-card-title>
              <v-card-text>
                <v-radio-group row v-model="CorK">
                  <v-radio v-for="btn in buttons" :key="btn.name" :label="btn.name" :value="btn.val"></v-radio>
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
                @click:clear="clearStaff"></v-text-field>
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
      subject: "",
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
    },
  methods: {
    clearSubject () {
      this.subject = ''
    },
    clearYear () {
      this.year = ''
    },
    clearStaff () {
      this.staff_name = ''
    },
  }
}
</script>

<style>

</style>