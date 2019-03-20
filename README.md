# weex-demo
a weex  + vue2.0 demo 
# weex 的内置组件
## `<text> `
+ `<text>` 是 Weex 内置的组件，用来将文本按照指定的样式渲染出来.
```html
<text>i am a text...</text>
```
## `<slider> `
+ 轮播图
+ 通常和`indicator`一起使用，而且也只能在 slider 中使用。
```html
<slider  interval="3000" auto-play="true">
  <div>
      <text>轮播内容</text>
  </div>
  <indicator></indicator>
</slider>
```
## `<a>`
+ `<a>` 组件用于实现页面间的跳转。
+ 不可以在标签内部直接添加文本，需要使用 <text> 标签来显示文本。
```html
<a href="">
  <text>Jump</text>
</a>
```
## `<div>`
+ <div> 是通用容器。
+ 不要在 `<div>` 中直接添加文本，而要使用 `<text>` 组件。
+ 在 Weex 中，`<div>` 不可滚动。
+ 要控制 `<div>` 的层级，建议不要超过14层，否则会很影响页面性能。

## `<image>`
+ `<image>` 用于在界面中显示单个图片。
+ `注意：` 必须指定宽度和高度
+ `save()` 保存图片内容到本地文件或相册，此操作可能需要设备相关权限
```html
<image style="width:500px;height:500px" @load="onImageLoad" ref="poster" src="path/to/image.png"></image>
<script>
onst $image = this.$refs.poster
// 获取组件引用并使用 save 方法:
$image.save(result => {
  if (result.success) {
    // Do something to hanlde success
  } else {
    console.log(result.errorDesc)
    // Do something to hanlde failure
  }
})
// 增加事件处理函数：
export default {
  methods: {
    onImageLoad (event) {
      if (event.success) {
        // Do something to hanlde success
      }
    }
  }
}
</script>
```
## `<list>`
+ 提供垂直列表功能
+ 自带属性和方法名
```html
<list class="list" @loadmore="loadmore" @scroll="scroll" offset-accuracy=100 show-scrollbar=false>
    <cell class="cell" v-for="(num, index) in lists" :key="index">
      <div class="panel">
        <text class="text">{{num}}</text>
      </div>
    </cell>
  </list>
```
## `<cell>`
+ `<loading>` 为容器提供上拉加载功能
+ `<loading>` 是 `<scroller>`、`<list>`、`<waterfall>` 的子组件，只能在被它们包含时才能被正确渲染
```html
<loading>
  <text>Loading</text>
  <loading-indicator></loading-indicator>
</loading>
```
## `<refresh>`
+ `<refresh>` 为容器提供下拉刷新功能。
+ `<refresh>` 是 `<scroller>`、`<list>`、`<waterfall>` 的子组件，只能在被它们包含时才能被正确渲染。

## '<recycle-list>'
+ `<recycle-list>` 一个列表容器，具有回收和复用的能力，可以大幅优化内存占用和渲染性能。
+ `<recycle-list>` 只能使用 <cell-slot> 作为其直接子节点，使用其他节点无效。
