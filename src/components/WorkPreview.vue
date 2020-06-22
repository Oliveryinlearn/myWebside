<template>
    <div class="works">
        <ul class='clearfix' :style="{'width':widthComputedNum}">
            <li v-for='item in workslist' :data-id='item.dataId' :key='item.dataId' @click="updataDetail(item)">
                <router-link v-bind:to='"/detail/"+item.dataId'>
                    <img class='cover' :src='imgShowSrc(item.imageUrl)'>
                    <div class='title'>
                        <h2>{{item.dataTittle}}</h2>
                        <h4>{{item.dataExplain}}</h4>
                    </div>
                    <div class='author clearfix'>
                        <work-label :labelSpan='item'></work-label>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import WorkLabel from "@/components/WorkLabel.vue";
    export default {
        data(){
            return {
                widthComputedNum:null,
                fontSize:null
            }
        },
        props:{
            workslist:Array
        },
        methods:{
            imgShowSrc(src){
                return require(`@/assets/${src}`)
            },
            updataDetail(item){
                this.$store.dispatch("actionSetWorksDetail", item);
            },
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
            widthComputed(width){
                if(width > ( 92.5 * this.fontSize)){
                    this.widthComputedNum = "92.5rem";
                }
                else{
                    this.widthComputedNum = "74rem";
                }
            }
        },
        components:{
            WorkLabel
        },
        created(){
            this.fontSizeComputed();
            this.widthComputed(document.body.clientWidth);
        },
        mounted(){
            window.onresize = () => {
                this.fontSizeComputed();
                this.widthComputed(document.body.clientWidth);
            }
        }
    };
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";
.works{
    width: 100%;
    min-height: 50rem;
    padding-top: 2rem;
    box-sizing: border-box;
    position: relative;
    background: $default_background;
    ul{
        // max-width: 92.5rem;
        // width: 74rem;
        // margin: 0 auto;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        a{
            text-decoration: none;
        }
        &>li{
            float: left;
            width: 17.5rem;
            background: $default_white;
            margin: 0 .5rem 1rem;
            position: relative;
            top: 0;
            transition: all .2s;
        }
        &>li:hover{
            cursor: pointer;
            box-shadow: 0px 8px 40px #bfbfbf;
            top: -4px;
        }
        .cover{
            display: block;
            width: 100%;
            height: 12.5rem;
            background: $header_selected;
        }
        .title{
            padding-bottom: .9rem;
            border-bottom: 1px solid rgb(235, 235, 235);
            h2,h4{
                padding: 0 1rem;
                box-sizing: border-box;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            h2{
                font-size: 1rem;
                color: #333;
                margin-top: .8rem;
            }
            h4{
                font-size: .6rem;
                color: $header_color;
                margin-top: .2rem;
            }
        }
        .author{
            padding: .8rem 1rem;
            position: relative;
        }
    }
    
}
</style>
