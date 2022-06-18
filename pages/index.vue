<template>
  <div>
    <v-container>
      <v-row style="height: 80vh" justify="center" align-content="center">
        <v-col>
          <v-container fluid>
            <v-card min-height="70vh" max-width="50vw" class="mx-auto">
              <v-card-title class="justify-center"
                >過去問を登録する</v-card-title
              >
              <v-card-text justify="center" align="center"
                >過去問を登録して、Futureへ役立てましょう。</v-card-text
              >
              <v-card-actions class="justify-center"
                ><v-btn to="/submit" outlined
                  >過去問を登録する</v-btn
                ></v-card-actions
              >
            </v-card>
          </v-container>
        </v-col>
        <v-col>
          <v-container fluid>
            <v-card min-height="70vh" max-width="50vw" class="mx-auto">
              <v-card-title class="justify-center">過去問を見る</v-card-title>
              <v-card-text justify="center" align="center"
                >過去問を見て、Pastから学びましょう。</v-card-text
              >
              <v-card-actions class="justify-center"
                ><v-btn to="/list" outlined>過去問を見る</v-btn></v-card-actions
              >
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
