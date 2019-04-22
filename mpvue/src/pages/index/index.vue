<template>
<div class="wrap">
<!-- 首页地图模块 -->
  <map
  id="map"
  longitude="116.300278"
  latitude="40.040848"
  :markers="markers"
  scale="17"
  style="width: 100%; height: 800px;"
></map>
 <!-- 重新定位图标 -->
    <cover-view class="current">
      <cover-image class="location" @tap="goCurrent" src="/static/images/location.png" />
      <button class="add" @tap="goAdd">添加面试</button>
      <cover-view class="my" @tap="goMy">
        <cover-image src="/static/images/ren.png" />
      </cover-view>
    </cover-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        {
          iconPath: "/static/images/dingwei.png",
          id: 0,
          longitude: 116.300278,
          latitude: 40.040848,
          width: 30,
          height: 30
        }
      ]
    };
  },

  components: {},

  methods: {
    goAdd() {  //添加面试
      wx.navigateTo({
        url: "/pages/Interview/main"
      });
    },
    goMy(){  //我的页面
       wx.navigateTo({
        url: "/pages/my/main"
      });
    }, 
    goCurrent(){   //重新定位
   
}
  },

  created() {}
};
</script>

<style scoped>
.wrap {
  height: 100%;
}
map {
  width: 100%;
  height: 100%;
  padding-bottom: 100rpx;
  box-sizing: border-box;
}
.location {
  position: fixed;
  bottom: 160rpx;
  width: 80rpx;
  height: 80rpx;
  left: 20rpx;
}
.add {
  position: fixed;
  width: 100%;
  height: 100rpx;
  background: #000;
  color: #fff;
  font-weight: 500;
  bottom: 0;
  left: 0;
  font-size: 40rpx;
}
.my {
  position: fixed;
  background: #fff;
  border-top-left-radius: 50rpx;
  border-bottom-left-radius: 50rpx;
  bottom: 150rpx;
  width: 120rpx;
  height: 100rpx;
  right: 0;
}
.my cover-image {
  width: 80rpx;
  height: 80rpx;
  margin-top: 10rpx;
  margin-left: 10rpx;
  background: #eee;
  border-radius: 50%;
}
</style>
