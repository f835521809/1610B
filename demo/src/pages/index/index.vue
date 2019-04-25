<template>
  <div @click="clickHandle" class="container">
   <map
    id="map"
    longitude="116.300278"
    latitude="40.040848"
    scale="14"
    :markers='markers'
    show-location
    style="width: 100%; height: 100%;"
   ></map>
   <cover-view>
     <cover-image src="/static/images/location.png" class="location">
     </cover-image>
     <cover-image src="/static/images/my.png" class="my" @click="goMy">
     </cover-image>;;
     <button class="add" @click="goAdd">添加面试</button>
   </cover-view>
  </div>
</template>

<script>


export default {
  data () {
    return {
       markers: [{
        iconPath: '/static/images/dingwei.png',
        id: 0,
        longitude: 116.300278,
        latitude: 40.040848,
        width: 40,
        height: 40
      }]
    }
  },

  components: {
  },

  methods: {
    goAdd(){
      wx.navigateTo({
        url:'/pages/add/main'
      })
    },
    goMy(){
      wx.navigateTo({
        url:'/pages/my/main'
      })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.location{
  position: fixed;
  bottom:200rpx;
  left:20rpx;
  width:80rpx;
  height: 80rpx;
}
.my{
  position: fixed;
  bottom:200rpx;
  right:20rpx;
  width:80rpx;
  height: 80rpx;
}
.add{
  position: fixed;
  bottom:0;
  left:0;
  right:0;
  background: #000;
  color:#fff;
}
</style>
