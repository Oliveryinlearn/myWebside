<template>
    <div class="search-web">
        <div class="search">
            <!-- <img class="portrait" src="@/assets/de_portrait.png"> -->
            <!-- <ul class="search-ul clearfix">
                <li class="selected">百度</li>
                <li>谷歌</li>
                <li>搜搜</li>
                <li>360</li>
            </ul>
            <div class="search-body">
                <input type="text" class="search-input" placeholder="请输入搜索内容">
                <button class="icon iconfont icon-magnifier"></button>
            </div> -->
            <!-- <div class="quick-search clearfix">
                <div>快捷搜索: </div>
                <ul class="clearfix">
                    <li>vue官网</li>
                    <li>JQ插件</li>
                    <li>阿里UI</li>
                </ul>
            </div> -->
            
        </div>
    </div>
</template>

<script>
    export default {
        name:"WebSearch",
        data(){
            return {
                url:[
                    {
                        name: "百度",
                        url: ""
                    },
                    {
                        name: "谷歌",
                        url: ""
                    },
                    {
                        name: "搜搜",
                        url: ""
                    },
                    {
                        name: "360",
                        url: ""
                    }
                ]
            }
        }
    };
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";
.search-web{
    width: 100%;
    position: relative;
    height: 15rem;
    // background: $body_background;
    .search{
        width: 46rem;
        height: 5.3rem;
        // background: #666666;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-36%);
        .search-ul{
            box-sizing: border-box;
            padding: 0 1rem;
            height: 2.3rem;
            // margin-bottom: .2rem;
            li{
                height: 100%;
                line-height: 2.2rem;
                float: left;
                font-size: .85rem;
                display: block;
                padding: 0 1.5rem;
                color: $header_selected;
                transition: all .2s;
            }
            li.selected{
                background: $search_background;
            }
            li:hover{
                cursor: pointer;
                background: $search_background_hover;
            }
        }
        // .search-ul:after{
        //     clear: both;
        //     content: " ";
        //     display: block
        // }
        .search-body{
            // background: $default_white;
            background: $search_background;
            border-radius: 4px;
            height: 3rem;
            width: 100%;
            box-sizing: border-box;
            .search-input{
                width: 40rem;
                height: 100%;
                border: none;
                background: none;
                outline: none;
                box-sizing: border-box;
                padding: 0 2rem;
                font-size: .95rem;
                color: $footer_default;
            }
            .search-input::-webkit-input-placeholder{
                color: $input_color;
            }
            button{
                width: 6rem;
                border: none;
                background: $search_background;
                height: 2.99rem;
                border-radius: 0 4px 4px 0;
                font-size: 1.4rem;
                outline: none;
                color: $body_background;
                transition: all .2s;
            }
            button:hover{
                cursor: pointer;
                background: $search_hover;
            }
            button:active{
                background: $search_active;
            }
        }
        .quick-search{
            width: 100%;
            height: 3.5rem;
            // margin-top: 1rem;
            &>div{
                float: left;
                height: 100%;
                // line-height: 3.5rem;
                box-sizing: border-box;
                padding: 1.5rem 0;
                color: $line_background;
                margin-right: .5rem;
                font-size: .85rem;
            }
            &>ul{
                float: left;
                height: 100%;
                li{
                    float: left;
                    height: 100%;
                    box-sizing: border-box;
                    text-decoration: underline;
                    padding: 1.5rem .7rem;
                    box-sizing: border-box;;
                    color: $line_background;
                    font-size: .85rem;
                    // line-height: 3.5rem;
                    position: relative;
                    top: 0;
                    transition: all .2s;
                }
                li:hover{
                    cursor: pointer;
                    top: -2px;
                    color: $header_color;
                }
            }
        }
        // .quick-search{
        //     clear: both;
        //     content: " ";
        //     display: block
        // }
    }
}
</style>
