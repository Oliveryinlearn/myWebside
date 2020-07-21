<template>
  <div class="home">
    <header-view></header-view>

    <transition name="an" mode="out-in">
      <router-view ></router-view>
    </transition>

    <footer-view></footer-view>
  </div>
</template>

<script>
import HeaderView from "@/views/HeaderView.vue";
import FooterView from "@/views/FooterView.vue"

export default {
  name: 'Home',
  data(){
    return {
      fontSize:null
    }
  },
  components: {
      HeaderView,
      FooterView
  },
  computed:{
    minHeight(){
      return (document.body.clientHeight - 10*this.fontSize) / this.fontSize + 'rem';
    }
  },
  created(){
      this.$axios.get("data.json").then((res)=>{
          this.$store.dispatch("actionWorksList",res.data)
      }).catch((err)=>{
          console.log(err)
      })

      this.fontSizeComputed();
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
    }
  },
  mounted(){
    window.onresize = () => {
      this.fontSizeComputed();
    }
  }
}
</script>

<style scope lang="scss">
@import "@/style/color.scss";

.home{
  // width: 100%;
  min-width: 1000px;
  // height: 100%;
  // background: $body_background;
  .body{
    width: 100%;
    box-sizing: border-box;
    padding-top: 3rem;
  }
}
.an-enter-active,.an-leave-active{
  transition: all 0.1s;
}
.an-enter,.an-leave-to{
  opacity: 0;
}
</style>
