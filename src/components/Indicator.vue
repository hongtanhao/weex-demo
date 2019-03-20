<template>
  <div>
    <slider class="slider size" auto-play="true" interval="5000">
      <div v-for="(post, index) in posts" :key="index">
        <image class="size" resize="cover" :src="post.urls.regular" @load="onload" placeholder="https://img.alicdn.com/tfs/TB1CWnby7yWBuNjy0FpXXassXXa-32-32.gif" ></image>
        <text class="author">Photo by {{post.user.name}}</text>
        <text class="source">On Unsplash</text>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
    <div class="loading-wrapper" v-if="loading">
      <image class="loading" resize="cover" src="https://img.alicdn.com/tfs/TB1CWnby7yWBuNjy0FpXXassXXa-32-32.gif" ></image>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  const stream = weex.requireModule('stream') || {};
  const modal = weex.requireModule('modal') || {};
  const API = 'https://api.unsplash.com/search/photos?page=1&query=ocean&orientation=landscape&client_id=8cd8d9f168aa2f3f57edfd5a883305df7f7ba96a9fb414231d77c244213efce8';
  
  export default {
    data () {
      return {
        posts: [],
        loading: true
      }
    },
    created: function() {
      const self = this;
      stream.fetch({
        method: 'GET',
        url: API,
        type:'json'
      }, function(ret) {
        if(!ret.ok){
          modal.toast({
            message: 'Network Error!',
            duration: 3
          });
        }else{
          self.posts = self.posts.concat(ret.data.results);
        }
      });
    },
    methods: {
      onload: function(e) {
        if (e.success && this.loading) {
          this.loading = false;
        }
      }
    }
  }
</script>

<style scoped>
  .scroller {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .loading-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    justify-content: center;
    align-items: center;
  }
  .loading {
    width: 60px;
    height: 60px;
  }
  .size {
    width: 750px;
    height: 400px;
  }
  .slider {
    position: relative;
  }
  .author {
    padding: 5px 10px;
    position: absolute;
    right: 0px;
    bottom: 65px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
  .source {
    padding: 5px 10px;
    position: absolute;
    right: 0px;
    bottom: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    background-color: rgba(0, 0, 0, 0);
    item-color: #ddd;
    item-selected-color: rgb(0, 180, 255);
  }
</style>