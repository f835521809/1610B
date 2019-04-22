<template>
    <div class="wrap">
    <header>
      <span  v-for="(item, index) in list" :key="index" :class="active===index?'active':''">{{item}}</span>
    </header>
 
  </div>
</template>
<script>
export default {
    data() {
        return {
            list: ['全部','未开始','已打卡','已放弃']
        }
    },
  methods: {
  
  }
};
</script>
<style scoped>
.wrap{
  height: 100%;
}
header{
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;
  width: 100%;
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
}
header span{
    line-height: 88rpx;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 2rpx solid #fff;
  }
header span.active{
    color: #197DBF;
    font-weight: 500;
    border-bottom: 3rpx solid #197DBF;
  }

</style>



