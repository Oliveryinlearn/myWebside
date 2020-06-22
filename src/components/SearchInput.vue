<template>
    <div class="search">
        <el-dropdown trigger="click" class="search-type" v-if="searchType === 0" @command="handleCommand">
            <span class="el-dropdown-link">
                {{searchEngines.name || ""}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in search" :key="index" :command="item.type">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <input type="text" v-model='inputContent' v-bind:placeholder='placeholderTxt' @keyup.enter="upFilter">
        <button class="icon iconfont icon-magnifier" @click="upFilter"></button>
    </div>
</template>

<script>
    export default {
        name: "SearchInput",
        data(){
            return {
                inputContent:"",
                path:[ "/webview" ],
                searchType:0,
                searchEngines:null,
                search:[
                    {
                        name: "百度",
                        type: 0
                    },
                    {
                        name: "谷歌",
                        type: 1
                    }
                ]
            }
        },
        methods:{
            upFilter(){
                switch(this.searchType){
                    case 0:
                        this.searchContent(this.inputContent,this.searchEngines);
                        break;
                    case 1:
                        this.$emit("filterContent", this.inputContent);
                        break;
                    default:
                        this.$emit("filterContent", this.inputContent);
                        break;
                }
            },
            changeSearchType(arr, path){
                if(arr.indexOf(path)>-1){
                    return 0;
                }
                else{
                    return 1;
                }
            },
            searchContent(text,obj){
                const searchEnginesContent = {
                    baidu:`https://www.baidu.com/s?wd=${text}`,
                    google:`https://www.google.com/search?q=${text}&oq=${text}`
                }
                switch(obj.type || 0){
                    case 0:
                        window.open(searchEnginesContent.baidu);
                        break;
                    case 1:
                        window.open(searchEnginesContent.google);
                        break;
                    default:
                        window.open(searchEnginesContent.baidu);
                        break;
                }
            },
            handleCommand(num){
                this.searchEngines = this.search[num];
                localStorage.setItem("oliverWebSearch", JSON.stringify({
                    name: this.search[num].name,
                    type: this.search[num].type
                }))
            }
        },
        computed:{
            placeholderTxt(){
                return this.path.indexOf(this.$route.path)>-1 ? "请输入搜索内容" : "请输入作品集名称";
            }
        },
        created(){
            this.searchType = this.changeSearchType(this.path, this.$route.path);

            //查看本地上次保存的搜索引擎类型
            // this.searchEngines = localStorage.getItem("oliverWebSearch") || this.search[0];
            this.searchEngines = localStorage.getItem("oliverWebSearch") ? JSON.parse(localStorage.getItem("oliverWebSearch")) : this.search[0];
            // console.log(lastSearch)
        },
        watch:{
            $route(to){
                this.searchType = this.changeSearchType(this.path, to.path);
            }
        }
    };
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";

.search{
    float:right;
    // width: 18rem;
    height: 2.4rem;
    background: $search_background;
    border-radius: 4px;
    right: 6rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all .2s;
    .search-type{
        width: 4rem;
        padding-left: 1rem;
        float: left;
        height: 100%;
        box-sizing: border-box;
        line-height: 2.4rem;
        transition:  all .2s;
        color: $input_placeholder;
    }
    .search-type:hover{
        cursor: pointer;
        color: $input_color;
    }
    input{
        float:left;
        background: none;
        height: 100%;
        width: 14rem;
        box-sizing: border-box;
        padding: 0 1rem 0 1rem;
        border: none;
        font-size: .8rem;
        font-weight: inherit;
        color: $input_color;
    }
    input::-webkit-input-placeholder{
        color: $input_placeholder;
    }
    input:focus{
        outline: none;
    }
    button{
        width: 3rem;
        height: 100%;
        color: $header_color;
        border: none;
        font-size: 1.3rem;
        background-color: transparent;
        background-position: -2px 0px;
        outline: none;
    }
    button:hover{
        cursor: pointer;
        background-position: -56px 0px;
    }
}
.search:hover{
    background: $search_background_hover;
}
</style>
