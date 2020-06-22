<template>
    <div class='label-main'>
        <span :class='showClass(labelSpanView)'>{{labelSpanView}}</span>
        <span :class='showClass(typeSpanView)'>{{typeSpanView}}</span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                labelMessage:{
                    type:null,
                    label:null
                }
            }
        },
        props:{
            labelSpan:Object
        },
        methods:{
            showClass(className){
                const text = [
                    {
                        name:'前端',
                        className:'label-blue'
                    },
                    {
                        name:'组件',
                        className:'label-green'
                    },
                    {
                        name:'UI设计',
                        className:'label-red'
                    },
                    {
                        name:'平面',
                        className:'label-yellow'
                    },
                    {
                        name:'原创',
                        className:'label-green'
                    },
                    {
                        name:'临摹',
                        className:'label-red'
                    },
                    {
                        name:'其他',
                        className:'label-yellow'
                    }
                ];
                let classStyle = {};

                let num = text.findIndex((item) => {
                    return item.name == className
                })
                
                if(num>-1){
                    classStyle[text[num].className] = true;

                    return classStyle;
                }
            }
        },
        computed:{
            labelSpanView(){
                return this.labelSpan.dataType.name;
            },
            typeSpanView(){
                return this.labelSpan.dataLabel;
            }  
        }
    };
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";

.label-main{
    float: left;
    & > span{
        color:$default_white;
        display: block;
        padding: .2rem .6rem;
        font-size: .8rem;
        float: left;
        border-radius: 4px;
        background: #999999;
    }
    & >span:nth-child(2){
        margin-left: .5rem;
    }
    .label-red{
        background: $red !important;
    }
    .label-yellow{
        background: $yellow !important;
    }
    .label-green{
        background: $green !important;
    }
    .label-blue{
        background: $blue !important;
    }
    .label-purple{
        background: $purple !important;
    }
}
</style>
