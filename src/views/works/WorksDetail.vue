<template>
    <div class="detail-body">
        <div class="main clearfix">
            <div class="left">
                <img v-for="(x,index) in detailMessage.dataImgUrl" :src="imgShowSrc(x)" :key="index">
            </div>
            <div class="right">
                <h2>{{detailMessage.dataTittle}}</h2>
                <h4>{{detailMessage.dataExplain}}</h4>
                <div class="label-style clearfix">
                    <workLabel v-bind:labelSpan="detailMessage"></workLabel>
                </div>
                <ul class="clearfix">
                    <li>时间: {{detailMessage.dataTime}}</li>
                    <li>评分: {{detailMessage.dataScore}}</li>
                    <li>归属: {{detailMessage.dataC}}</li>
                </ul>
                <p class="content">{{ detailMessage.dataExplainMore }}</p>
                <button class="link-btn" v-if="showLink" v-on:click="openHref">前往原址查看</button>
            </div>
        </div>
    </div>
</template>

<script>
    import workLabel from "@/components/WorkLabel.vue";

    export default {
        methods:{
            openHref(){
                window.open(this.detailMessage.dataUrl, "_blank");
            },
            imgShowSrc(src){
                return require(`@/assets/${src}`)
            }
        },
        computed:{
            detailMessage(){
                return this.$store.getters.getWorksDetail;
            },
            showLink(){
                if(this.detailMessage.dataUrl && this.detailMessage.dataUrl !== "none" && typeof this.detailMessage.dataUrl === "string"){
                    return true;
                }
                else{
                    return false;
                }
            }
        },
        components:{
            workLabel
        }
    };
</script>

<style scoped lang="scss">
@import "@/style/color.scss";

.detail-body{
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 2rem;
    height: 100%;
    background: $default_background;
    .main{
        width: 78rem;
        min-height: 40rem;
        height: 100%;
        margin: 0 auto 0rem;
        box-sizing: border-box;
        padding: 1rem;
        background: $default_white;
        .left{
            width: 49rem;
            float: left;
            img{
                display: block;
                width: 100%;
            }
        }
        .right{
            width: 26rem;
            float: right;
            box-sizing: border-box;
            padding: .4rem .5rem;
            h2{
                font-size: 1.5rem;
                color: $detail_title;
            }
            h4{
                color: $header_color;
                margin: .2rem 0 .8rem 0;
            }
            .label-style{
                margin-top: .5rem;
                padding-bottom: .9rem;
                border-bottom: 1px solid $detail_line;
            }
            &>ul{
                display: block;
                width: 100%;
                margin-top: .9rem;
                li{
                    float: left;
                    margin-right: 1.5rem;
                    color: $header_color;
                    font-size: 12px;
                }
            }
            .content{
                margin-top: 1.2rem;
                line-height: 1.5rem;
                color: $footer_default;
                box-sizing: border-box;
            }
            .link-btn{
                width: 100%;
                height: 3rem;
                background: $detail_button;
                border:none;
                color: $default_white;
                display: block;
                margin: 2rem auto 0;
                border-radius: 6px;
                outline: none;
                transition: all .2s;
            }
            .link-btn:hover{
                cursor: pointer;
                background: $detail_button_hover;
            }
        }
    }
}
</style>
