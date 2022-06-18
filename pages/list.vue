<template>
<div>
    <ListProblems @onselectRow="changeRow" :selectedRow="selectedProblem"/>
    <PDFView :selectedRow="selectedProblem"/>
</div>
</template>

<script>
import ListProblems from "../components/problemComponents/ListProblems.vue";
import PDFView from "../components/problemComponents/PDFView.vue";
export default{
    name: "IndexPage",
    components: { ListProblems, PDFView },
    data() {
        return {
            selectedProblem: {}
        }
    },
    methods: {
        changeRow(newRow) {
            console.log("here is list: ", newRow)
            this.selectedProblem = newRow;
        }
    }
}
</script>