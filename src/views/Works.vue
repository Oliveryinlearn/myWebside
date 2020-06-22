<template>
    <div>
        <introduction-view></introduction-view>
        <work-preview :workslist="worklist"></work-preview>
    </div>
</template>

<script>
    import IntroductionView from "@/views/works/Introduction.vue";
    import WorkPreview from "@/components/WorkPreview.vue";
    

    export default {
        name: "Works",
        components:{
            IntroductionView,
            WorkPreview,
            
        },
        computed:{
            worklist(){
                return this.$store.getters.filterWorksGet || this.$store.getters.worksList;
            }
        }
    };
</script>

<style scoped lang='scss'>

</style>
