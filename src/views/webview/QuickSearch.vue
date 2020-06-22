<template>
    <div class="quick-body" :id="moduleNav.id">
        <div class="page-body">
            <h3>{{ moduleNav.title }}</h3>
            <ul class="page-ul clearfix">
                <li class="clearfix" v-for="(item,index) in moduleNav.list" :key="index" @click="openHref(item.url)">
                    <img alt="" v-if="item.img" :src="imgShowSrc(item.img)">
                    <div v-else class="img-div">{{ item.name.substring(0,1) }}</div>
                    <div class="content">
                        <h4>{{ item.name }} </h4>
                        <span>{{ item.content }}</span>
                    </div>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: "QuickSearch",
        props:{
            moduleNav:Object
        },
        methods:{
            imgShowSrc(src){
                return require(`@/assets/img/${src}`)
            },
            openHref(href){
                window.open(href)
            }
        }
    };
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";
.quick-body{
    width: 100%;
    background: $default_background;
    // min-height: 40rem;
    margin-bottom: .2rem;
    position: relative;
    .page-body{
        position: relative;
        width: 74rem;
        box-sizing: border-box;
        margin: 0 auto;
        h3{
            width: 100%;
            box-sizing: border-box;
            padding: .5rem 0;
            border-bottom: 1px solid $detail_line;   
            color: #888888;
            font-size: .9rem;
        }
        .page-ul{
            margin-top: 1rem;
            li{
                float: left;
                background: $default_white;
                width: 17.75rem;
                margin-right: 1rem;
                margin-bottom: 1rem;
                padding: .6rem .6rem;
                position: relative;
                top: 0;
                transition: all .2s;
                box-sizing: border-box;
                &>img{
                    display: block;
                    float: left;
                    width: 4rem;
                    height: 4rem;
                    background: $default_white;
                }
                .img-div{
                    display: block;
                    float: left;
                    width: 4rem;
                    height: 4rem;
                    background: $default_background;
                    font-size: 1.4rem;
                    text-align: center;
                    line-height: 4rem;
                    color: $detail_title;
                }
                .content{
                    width: 12.15rem;
                    height: 4rem;
                    float: left;
                    box-sizing: border-box;
                    padding-left: .8rem;
                    h4{
                        font-size: .95rem;
                        color: $detail_title;
                    }
                    span{
                        display: inline-block;
                        margin-top: .3rem;
                        color: $header_color;
                        font-size: .75rem;
                    }
                }
            }
            li:nth-child(4n){
                margin-right: 0;
            }
            li:hover{
                cursor: pointer;
                box-shadow: 0px 10px 20px #d3d3d3;
                top: -4px;
            }
        }
        // box-shadow: 1px 14px 20px $search_page;
    }
}
</style>
