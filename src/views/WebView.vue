<template>
    <div class="webview">
        <div class="webview-body clearfix">
            <div class="left" id="webViewLeft">
                <quick-search v-for="(items,index) in msg" :key="index" :moduleNav="items"></quick-search>
            </div>
            <div class="right" :style="{'right':rightComputed}">
                <ul>
                    <li v-for="(item,index) in msg" :key="index" @click="amimateTop(item.id)">{{ item.title.substring(0,2) }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import QuickSearch from "@/views/webview/QuickSearch.vue";
    export default {
        name: "WebView",
        data(){
            return {
                msg:null,
                fontSize:null
            }
        },
        components: {
            QuickSearch
        },
        created(){
            this.$axios.get("/webviewData.json").then((res) => {
                this.msg = res.data;
            }).catch((err)=>{
                console.log(err);
            })

            this.fontSizeComputed();
        },
        mounted(){
            window.onresize = () => {
                this.fontSizeComputed();
            }

            document.onscroll = () => {
                // console.log(document.documentElement.scrollTop)
            }
        },
        methods:{
            fontSizeComputed(){
                const maxwidth = 1200,
                        minwidth = 980;

                if(document.body.clientWidth>maxwidth){
                    this.fontSize = 16;
                }
                else if(document.body.clientWidth>minwidth && document.body.clientWidth<maxwidth){
                    this.fontSize = 14;
                }
            },
            amimateTop(id){
                let top = document.getElementById(id).offsetTop + 4.5*this.fontSize - document.documentElement.scrollTop;
                document.documentElement.scrollTop = (top-document.body.clientHeight + document.getElementById(id).offsetHeight);
            }
        },
        computed:{
            rightComputed(){
                return (document.body.clientWidth - 74*this.fontSize) / 2 / this.fontSize - 4 + 'rem';
            }
        }
    };
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";
.webview{
    position: relative;
    padding-top: 4.5rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
    background: $default_background;
    .webview-body{
        width: 79rem;
        position: relative;
        margin: 0 auto;
        .left{
            float: left;
            width: 74rem;
        }
        .right{
            right: 4rem;
            width: 4rem;
            float: right;
            position: relative;
            top: 7.8rem;
            position: fixed;
            &>ul{
                width: 100%;
                background: $default_white;
                position: relative;
                transition: all .2s;
                top: 0rem;
                li{
                    box-sizing: border-box;
                    padding: .8rem 0;
                    text-align: center;
                    color:$detail_title;
                    right: 0;
                    position: relative;
                    font-size: .8rem;
                    transition: all .2s;
                    border-bottom: 1px solid $default_background;
                }
                li:hover{
                    cursor: pointer;
                    color:$default_white;
                    right: 4px;
                    background: $blue;
                }
            }
            // height: 10rem;
            // background: #000
        }
    }
    
}
</style>
