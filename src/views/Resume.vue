<template>
    <div class="my-resume">
        <div class="resume-body">
            <img :src="getResume" alt="我的简历" class="page">
        </div>
    </div>
</template>

<script>
    export default {
        name:"Resume",
        computed:{
            getResume(){
                return require(`@/assets/resume/resume.jpg`)
            }
        }
    };
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";
.my-resume{
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 2rem;
    height: 100%;
    background: $default_background;
    .resume-body{
        width: 78rem;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 2rem;
        background: $default_white;
        .page{
            width: 74rem;
            display: block;
            // background: $header_background;
        }
    }
}
</style>
