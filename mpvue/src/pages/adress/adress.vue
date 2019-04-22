<template>
    <div>
    <header>
      <span>北京</span>
      <input type="text" placeholder="面试地址" v-model="address">
    </header>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
header {
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 88rpx;
}
header span {
  width: 26%;
  text-align: center;
  box-sizing: border-box;
  border-right: 1px solid #eee;
}
header input {
  padding: 0 20rpx;
}
</style>
