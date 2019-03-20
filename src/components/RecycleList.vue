<template>
  <recycle-list class="list column" for="(group, i) in lists" switch="type">
    <cell-slot case="box" class="row box large">
      <div class="column box medium" v-for="(numbers, j) in group.boxes" :key="j">
        <div class="row box small" v-for="(n, k) in numbers" :key="k">
          <text class="text">{{n}}</text>
        </div>
      </div>
    </cell-slot>
  </recycle-list>
</template>

<script>
  export default {
    data () {
      return {
        lists: [
          { type: 'box', boxes: [[1, 2], [3, 4], [5, 6]] },
          { type: 'box', boxes: [[7, 8], [9, 10], [11, 12]] },
          { type: 'box', boxes: [[13, 14], [15, 16], [17, 18]] }
        ]
      }
    }
  }
</script>

<style scoped>
  .list { width: 750px; }
  .row {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .column {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .box {
    border-width: 2px;
    border-style: solid;
    border-color: rgb(79, 192, 141);
    background-color: rgba(79, 192, 141, 0.2);
  }
  .large {
    width: 700px;
    height: 350px;
    margin: 25px;
  }
  .medium {
    width: 180px;
    height: 300px;
  }
  .small {
    width: 100px;
    height: 100px;
  }
  .text {
    color: rgb(79, 192, 141);
    font-size: 50px;
  }
</style>
