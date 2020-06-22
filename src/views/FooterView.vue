<template>
    <footer class='footer'>
        <ul class='link clearfix'>
            <li>推荐作品集：</li>
            <li v-for='x in starAray' :key='x.dataId' :data-id='x.dataId' @click="upWorksStore(x)">
                <router-link :to='"/detail/"+x.dataId'>{{x.dataTittle}}</router-link>
            </li>
        </ul>
        <ul class='link clearfix'>
            <li>友情链接：</li>
            <li v-for='x in firendLink' :key='x.dataId'><a>{{x.name}}</a></li>
        </ul>
        <div class='copyright'>尹竹群 版权所有 ©www.752746873.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ICP备案号：<a href='http://www.beian.miit.gov.cn'>苏ICP备14047197号-5</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工信部备案管理系统网址：<a href='http://www.beian.miit.gov.cn'>www.beian.miit.gov.cn</a></div>
    </footer>
</template>

<script>
    export default {
        computed:{
            starAray(){
                return this.$store.getters.starArray;
            },
            firendLink(){
                return this.$store.getters.firendLink;
            }
        },
        methods:{
            upWorksStore(data){
                console.log(data)
            }
        }
    };
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";
.footer{
    width: 100%;
    height: 10rem;
    background: $header_background;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    box-sizing: border-box;
    position: relative;
    .link,.copyright{
        width: 72rem;
    }
    .copyright{
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        color: $footer_default;
        a{
            color: $footer_default;
        }
    }
    .link{
        margin: .7rem auto 0;
        position: relative;
        font-size: .9rem;
        color: $footer_default;
        li{
            float: left;
            margin-right: 1rem;
            a{
                color: $footer_default;
                text-decoration: none;
                transition: all .2s;
            }
            a:hover{
                cursor: pointer;
                color: $line_background;
            }
        }
        li:first-child{
            margin-right: 1rem;
            // width: 100px;
        }
    }
}
</style>
