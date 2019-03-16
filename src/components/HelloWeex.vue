<template>
 <div class="container">
   <div class="logoContainer">
     <image class="logo" src="static/resources/images/weexLogo.png"></image>
     <text class="desc">A framwork for building Mobile cross-palform UI</text>
     <div class="textContainer">
       <text class="text">Hello Weex</text>
     </div>
   </div>
   <div style="margin: 50px"><button  style="font-size: 44px;" @click="jumpToList">jumpToList</button></div>
 </div>
</template>
<script>
const { router } = require('./../router')
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    jumpToList () {
      console.log(router)
      this.$router.replace('/slider')
    }
  }
}
</script>
<style scoped>
.logoContainer {
  width: 750px;
  height: 500px;
  align-items: center;
  justify-content: center;
  background-color: #0054dc;
}

.logo {
  width: 378px;
  height: 84px;
}

.desc {
  margin-top: 40px;
  font-size: 24px;
  color: #cccccc;
}

.textContainer {
  width: 750px;
  padding-top: 200px;
  align-items: center;
  justify-content: center;
}

.text {
  font-size: 48px;
}
</style>
