<template>
    <div class="introduction">
        <div class="msg">
            <div class="header">
                <img class="portrait" src="@/assets/de_portrait.png">
                <h2>你好，我叫‘尹竹群’，很高兴认识你~</h2>
                <h4>目前在岗，岗位是前端开发和UI设计，以及参与部分设计工作，以下是部分作品集，如果想要更多了解，请浏览“我的简历”</h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";

.introduction{
    width: 100%;
    position: relative;
    height: 28rem;
    background: $body_background;
    .header{
        width: 38rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-46%);
        .portrait{
            width:9rem;
            height: 9rem;
            background:$default_background;
            display: block;
            margin: 0 auto;
            border-radius: 50%;
        }
        h2{
            font-size: 1.2rem;
            color: #f1f1f1;
            margin: 1.8rem 0 0;
            text-align: center;
        }
        h4{
            margin-top: .6rem;
            font-size: .9rem;
            color: #b1b1b1;
            line-height: 1.5rem;
            text-align: center;
        }
    }
}
</style>
