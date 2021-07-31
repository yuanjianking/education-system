<template>
  <!-- <div id="supply_demand" style="overflow:hidden" :style="{height:sortContentShow?'100vh':''}"> -->
  <div
    id="supply_demand"
    :class="[this.fun.getPhoneEnv() == 3 ? 'pcStyle' : '']"
  >
    <c-title :hide="false" text="发布信息"></c-title>
    <div id="content">
      <div class="list-all">
        <div class="list" @click="gotoManage('supply')">
          <div class="img">
            <img src="../../assets/images/wn_gongying@2x.png" alt />
          </div>
          <div class="content">
            <div class="content-a">{{supply}}</div>
            <div class="content-b">已发布{{supplyCount}}条供应，已有{{supply_calls}}人联系您</div>
          </div>
          <div class="right">
            <i class="iconfont icon-advertise-next"></i>
          </div>
        </div>
        <div class="list" @click="gotoManage('demand')">
          <div class="img">
            <img src="../../assets/images/wn_caigou@2x.png" alt />
          </div>
          <div class="content">
            <div class="content-a">{{purchasing}}</div>
            <div class="content-b">已发布{{PurchasingCount}}条采购，已有{{demand_calls}}人联系您</div>
          </div>
          <div class="right">
            <i class="iconfont icon-advertise-next"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from "./my_publish_controller";
export default controller;
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
#supply_demand {
  #content {
    .list-all {
      min-height: 100vh;
      background: #fff;
      padding: 4rem 1rem;
      width: 100%;
      .list {
        display: flex;
        // justify-content: center;
        align-items: center;
        width: 100%;
        box-shadow: 0px 0px 5px #ccc;
        margin-bottom: 1rem;
        padding: 0.75rem;
        .img {
          height: 3.5rem;
          width: 3.5rem;
          text-align: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .content {
          padding-left: 0.5rem;
          text-align: left;
          flex: 6;
          .content-a {
            font-size: 0.9375rem;
            color: #000;
            font-weight: 600;
          }
          .content-b {
            font-size: 0.8125rem;
            color: #666;
          }
        }
        .right {
          width: 2rem;
          i {
            font-size: 2rem;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
