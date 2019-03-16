<template>
    <div style="flex-direction: column;">
        <slider class="slider" :interval="intervalValue" auto-play="true">
            <div class="slider-pages" v-for="(item, index) in itemList" :key="index" @click="goWeexSite">
                <image class="thumb" :src="item.pictureUrl"></image>
                <text class="title">{{item.title}}</text>
            </div>
        </slider>
        <!-- <div class="container" @click="goWeexSite">
            <div class="cell">
                <image class="thumb" src="static/resources/images/js.png"></image>
                <text class="title">JavaScript</text>
            </div>
            <div class="cell">
                <image class="thumb" src="static/resources/images/java.png"></image>
                <text class="title">Java</text>
            </div>
            <div class="cell">
                <image class="thumb" src="static/resources/images/obj-c.png"></image>
                <text class="title">Objective C</text>
            </div>
        </div> -->
    </div>
</template>
<script>
/*eslint-disable */
export default {
  data() {
    return {
      intervalValue: '1000',
      isShowIndicators: 'true',
      isAutoPlay: 'true',
      itemList: [
      {
        title: 'Java',
        pictureUrl: 'static/resources/images/java.png'
      },
      {
        title: 'Objective C',
        pictureUrl: 'static/resources/images/obj-c.png'
      },
      {
        title: 'JavaScript',
        pictureUrl: 'static/resources/images/js.png'
      }]
    }
  },
  methods: {
    goWeexSite: function () {
      this.$openURL('http://alibaba.github.io/weex/')
    }
  }
}
</script>
<style>
    .cell {
        margin-top: 30px;
        margin-left: 10px;
        flex-direction: row;
        border-width:  1px;
        border-style: solid;
        border-color: #cccccc;
        border-radius: 10px;
    }
    .thumb {
        width: 200px;
        height: 200px;
    }
    .title {
        text-align: center;
        line-height: 200px;
        flex: 1;
        color: #808080;
        font-size: 50;
    }
    .slider {
        margin: 18;
        width: 714;
        height: 230;
    }
    .slider-pages {
        flex-direction: row;
        width: 714;
        height: 200;
    }
</style>
