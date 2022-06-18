<template>
  <div>
    <client-only>
      <button @click="prevPage">戻る</button>
      <button @click="nextPage">次へ</button>
      {{ currentPageNum }} / {{ totalPageNum }}
      <vue-pdf
        :src="pdfUrl"
        :page="currentPageNum"
        @num-pages="totalPageNum = $event"
      />
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    pdfUrl: '/slide.pdf',
    currentPageNum: 1,
    totalPageNum: 0,
  }),
  methods: {
    prevPage() {
      if (this.currentPageNum <= 1) {
        return
      }
      this.currentPageNum = this.currentPageNum - 1
    },
    nextPage() {
      if (this.currentPageNum >= this.totalPageNum) {
        return
      }
      this.currentPageNum = this.currentPageNum + 1
    },
  },
})
</script>