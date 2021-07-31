<template>
  <div
    id="supply_demand"
    :class="[this.fun.getPhoneEnv() == 3 ? 'pcStyle' : '']"
  >
    <c-title :hide="false" :text="title"></c-title>
    <div id="content" v-html="content"></div>
    <div class="button">
      <div @click="gotoApply">立即申请</div>
    </div>
  </div>
</template>

<script>
import controller from "./financial_detail_controller";
export default controller;
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$red_color: #ff2c29;
#supply_demand {
  #content {
    padding-top: 40px;
    padding-bottom: 4rem;
    min-height: 100vh;
    background: #fff;
    img {
      width: 100%;
    }
  }
  .button {
    position: fixed;
    bottom: 0;
    height: 3.5rem;
    line-height: 2.5rem;
    width: 100%;
    border-top: 1px solid #ebebeb;
    div {
      width: 80%;
      margin: 0.5rem auto;
      background: #ff2c29;
      color: #fff;
      line-height: 2.5rem;
      border-radius: 2rem;
    }
  }
}
</style>
