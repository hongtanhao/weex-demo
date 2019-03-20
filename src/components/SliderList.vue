<template>
    <div>
        <slider class="slider" interval="3000" auto-play="true" show-indicators="true">
            <div class="frame" v-for="(img, index) in imageList" :key="index">
                <image class="image" resize="cover" :src="img.pictureUrl"></image>
                <text class="text-style">{{img.title}}</text>
            </div>
        </slider>
    </div>
</template>
<script>
/* eslint-disable */
    export default {
        data() {
            return {
                imageList: [
                    {
                        title: 'Java',
                        pictureUrl: 'static/resources/images/java.png'
                    }, {
                        title: 'Objective C',
                        pictureUrl: 'static/resources/images/obj-c.png'
                    }, {
                        title: 'JavaScript',
                        pictureUrl: 'static/resources/images/js.png'
                    }
                ]
            }
        }
    }
</script>
<style scoped="scoped">
     .frame {
        width: 700px;
        height: 230px;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .slider {
        margin-top: 25px;
        margin-left: 25px;
        width: 700px;
        height: 230px;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
        border-radius: 16px;
    }
    .image {
        width: 230px;
        height: 230px;
    }

    .text-style {
        text-align: center;
        flex: 1;
        color: #808080;
        font-size: 50;
    }
    
</style>