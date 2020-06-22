<template>
    <div class="nav-list">
        <ul class="nav-ul" v-if="title">
            <li v-for="(item, index) in title" :class="{'selected':selected===index}" :key="index" @click="liClick(item, index)">
                <i v-if="item.icon" :class="`icon iconfont icon-style ${item.icon}`"></i>
                <span>{{ item.name }}</span>
            </li>
        </ul>
        <div class="line" id="line"></div>
    </div>
</template>

<script>
    import '@/assets/font/iconfont.css';
    export default {
        name: "NavList",
        props: {
            title: Array,
            selected: Number
        },
        methods:{
            liClick(item,index){
                this.$emit("liClick", item, index);
            },
            mvLine(index){
                if(typeof index !== "number") return;

                let li = document.querySelector(".nav-ul").children[index],
                    line = document.getElementById("line");
                let width = (li.offsetWidth-line.offsetWidth)/2;

                //移动下划线移动
                line.style.display = "block";
                line.style.marginLeft = li.offsetLeft + width + 'px'
            }
        },
        mounted(){
            this.mvLine(this.selected);
        },
        watch:{
            selected(){
                this.mvLine(this.selected)
            }
        }
    };
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";

.nav-list{
    height: 100%;
    position: relative;
    .nav-ul{
        height: 100%;
        float: left;
        &>li{
            float: left;
            padding: 0 .4rem;
            margin: 0 .5rem;
            height: 100%;
            color: $header_color;
            line-height: 3.5rem;
            position: relative;
            top: 0;
            transition: all .2s;
            box-sizing: border-box;
            .icon-style{
                font-size: .9rem;
                display: inline-block;
                margin-right: .4rem;
            }
            span{
                display: inline-block;
            }
        }
        &>li:hover{
            cursor: pointer;
            top: -2px;
            color: $header_selected;
        }
    }
    .nav-ul:after{
       clear: both;
       display: block;
       content:" " 
    }
    .line{
        width: 2rem;
        height: .25rem;
        position: absolute;
        background: $line_background;
        bottom: 0;
        transition: all .2s
    }
    .selected{
        top: -2px !important;
        color: $header_selected !important;
    }
}
</style>
