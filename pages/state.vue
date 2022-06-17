<template>
  <div>
    <div>
      {{count}}
    </div>
    <v-btn @click="huyasu"> add </v-btn>
  </div>
</template>

<script>
export default{
  computed: {
    count(){
      console.log(this.$store.state.counter)
      return this.$store.state.counter
    }
  },
  methods:{
    huyasu() {
      this.$store.commit('increment')
    }
  }
}
</script>