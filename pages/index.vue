<template>
<div>
  <Tutorial />
  <ListProblems />
</div>
</template>

<script>
import ListProblems from '../components/problemComponents/ListProblems.vue'
export default {
  name: 'IndexPage',
  components: { ListProblems }
}
</script>
