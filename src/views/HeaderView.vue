<template>
  <div class="header">
    <nav-list :title="title" @liClick="liClick" :selected="number"></nav-list>
    <search-input @filterContent="filterContent"></search-input>
  </div>
</template>

<script>
import NavList from "@/components/NavList";
import SearchInput from "@/components/SearchInput";
import { children } from "@/router/index.js"

export default {
  name: "HeaderView",
  data() {
    return {
      title: [
        {
            name: "网站导航"
        },

        {
            name: "作品集"
        },
        {
            name: "我的简历"
        },
        {
            name: "CSDN",
            icon: "icon-CN_csdnnet",
            link: "https://blog.csdn.net/zy21131437"
        },
        {
            name: "GitHub",
            icon: "icon-github1",
            link: "https://github.com/Oliveryinlearn"
        }
      ],
      number: 0,
      searchMsg: ""
    };
  },
  components: {
    NavList,
    SearchInput
  },
  methods:{
      liClick(item, index){
          if(item.link){
              window.open(item.link);
          }
          else{
              this.$router.push(children[index].path);
          }
      },
      filterContent(msg){
          this.$router.push("/works")
          if(this.searchMsg !== msg){
              this.searchMsg = msg;
              let arr = this.$store.getters.worksList.filter((item) => {
                return item.dataTittle.indexOf(msg)>-1
              })
              this.$store.dispatch("actionFilterWorks",arr)
          }
      },
      filterNum(arr, target){
        if(!Array.isArray(arr)) return;

        for(let i in arr){
          if(arr[i].path === target){
            return i
          }
        }
        
        if(target.indexOf("detail")){
          return 1
        }
        console.log("no route path");
        return 0;
      }
  },
  created(){
      this.number = Number(this.filterNum(children,this.$route.path));
  },
  watch:{
    $route(to){
      this.number = Number(this.filterNum(children,to.path));
    }
  }
};
</script>

<style scoped lang='scss'>
@import "@/style/color.scss";

.header {
  width: 100%;
  height: 3.5rem;
  position: fixed;
  z-index: 1000;
  box-sizing: border-box;
  padding: 0 2rem;
  background: $header_background;
}
</style>
