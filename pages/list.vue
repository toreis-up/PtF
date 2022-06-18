<template>
<div>
    <ListProblems />
    <PDFView />
</div>
</template>

<script>
import ListProblems from "../components/problemComponents/ListProblems.vue";
import PDFView from "../components/problemComponents/PDFView.vue";
export default{
    name: "IndexPage",
    components: { ListProblems, PDFView },
}
</script>