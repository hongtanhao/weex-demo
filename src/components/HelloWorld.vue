<template>
  <div class="weex-demo">
    <h3 style="text-align:center; padding: 40px;">Now，let's use weex building apps</h3>
    <div style="height: 1px; width: 90%;background-color:green;margin: 10px auto;"></div>
    <div>
      <div v-for="(item, index) in routes" :key="index">
        <router-link :to="item.path" class="btn-groups">
          <text class="btn">{{item.text}}</text>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable */
export default {
  name: 'weex-demo',
  data() {
    return {
      routes: [
        {  
          path: '/',
          text: 'helloworld'
        },
        {
          path: '/hiweex',
          text: 'text'
        },
        {
          path: '/slider',
          text: 'slider'
        },
        {
          path: '/list',
          text: 'List'
        },
        {
          path: '/loading',
          text: 'Loading'
        }
      ]
    }
  }
}
</script>

<style scoped>

.btn-groups {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}

.btn {
  padding: 10px 30px;
  color: #ffffff;
  background-color: #f78989;
  border-radius: 6px;
  margin: 30px;
}

.weex-demo {
  font-size: 40px;
}
</style>
