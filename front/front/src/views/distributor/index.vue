<template>
  <div id="distributor">
    <div class="header">
      <div class="head-left">
        <img
          :src="memberInfo.avatar"
          alt="">
      </div>
      <div class="head-right">
        <p class="name">{{memberInfo.nickname}}</p>
        <div>
          <p class="red">{{memberInfo.level_name}}</p>
        </div>
      </div>
    </div>

    <div class="profit" @click="gotoUrl('accumulatedIncome')">
      <p>累计收益 <span class="red-color">￥{{statistic.amount_total}}</span></p><i class="iconfont icon-advertise-next"></i>
    </div>

    <ul class="flex-box money">
      <li>
        <p>{{statistic.shipment_total}}</p>
        <span>出货收入</span>
      </li>
      <li>
        <p>{{statistic.recommend_total}}</p>
        <span>{{recommend_award_name}}</span>
      </li>
      <li>
        <p>{{statistic.contribute_total}}</p>
        <span>{{contribute_award_name}}</span>
      </li>
      <li>
        <p>{{statistic.service_total}}</p>
        <span>{{service_award_name}}</span>
      </li>
      <li>
        <p>{{statistic.equal_total}}</p>
        <span>{{equal_award_name}}</span>
      </li>
      <li>
        <p>{{statistic.surpass_total}}</p>
        <span>{{surpass_award_name}}</span>
      </li>
      <li>
        <p>{{statistic.manage_total}}</p>
        <span>{{manage_award_name}}</span>
      </li>
    </ul>

    <ul class="flex-box red-box">
      <li  @click="gotoUrl('myRepertory')">
        <i class="iconfont icon-kc_wodekucun"></i>
        <span>我的库存</span>
      </li>
      <li @click="gotoUrl('orderGoods')">
        <i class="iconfont icon-kc_dinghuo"></i>
        <span>订货</span>
      </li>
      <li @click="gotoUrl('deliverGoods')" v-if="is_open_freedom =='1'">
        <i class="iconfont icon-kc_fahuo"></i>
        <span>发货</span>
      </li>
      <li @click="gotoUrl('exchangeGoods')" v-if="is_open_exchange == '1'">
        <i class="iconfont icon-kc_huanhuo"></i>
        <span>换货</span>
      </li>
    </ul>

    <p class="title">客户管理</p>

    <ul class="flex-box flex-warp">
      <li @click="gotoUrl('myReferrals')">
        <i class="iconfont icon-kc_line_client"></i>
        <span>我的客户</span>
      </li>
      <li @click="gotoUrl('clientOrder', {status: '0'})">
        <i class="iconfont icon-kc_line_order"></i>
        <span>客户订单</span>
      </li>
      <li @click="gotoUrl('myDeliver', {status: '0', orderType:'myDeliver'})">
        <i class="iconfont icon-kc_line_fahuo"></i>
        <span>我的发货</span>
      </li>
      <li @click="gotoUrl('myExchange')">
        <i class="iconfont icon-kc_line_huanhuo"></i>
        <span>换货记录</span>
      </li>
      <li @click="gotoUrl('address')">
        <i class="iconfont icon-kc_line_locate"></i>
        <span>地址管理</span>
      </li>
      <li @click="gotoUrl('dismyReplenishment', {status: '0', orderType:'dismyReplenishment'})">
        <i class="iconfont icon-kc_line_buhuo"></i>
        <span>我的补货</span>
      </li>
      <li @click="gotoUrl('recommendUp')" v-if="is_open_recommend == '1'">
        <i class="iconfont icon-kc_line_update"></i>
        <span>推荐升级</span>
      </li>
    </ul>

  </div>
</template>

<script>
  import index_controller from "./index_controller";

  export default index_controller;
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  #distributor {
    background: #FFFFFF;
    padding: 1rem;
    min-height: 100vh;
  }

  .title {
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 1rem
  }

  .header {
    display: flex;
    margin-top: 1rem;
    .head-left {
      flex: 0 0 4rem;
      img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
      }
    }
    .head-right {
      margin: 0.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      .name {
        font-weight: bold;
        font-size: 16px;
      }
      .red {
        font-size: 12px;
        padding: 0.1rem 0.8rem;
        display: inline-block;
        text-align: center;
        color: #f24d4d;
        background-color: rgba(242, 77, 77, 0.1);
        border-radius: 15px;
      }
    }
  }

  .flex-box {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-bottom: 1rem;
      width: 25%;
      display: flex;
      flex-direction: column;
      i {
        font-size: 27px;
      }
    }
  }

  .flex-warp {
    flex-wrap: wrap;
  }

  .profit {
    display: flex;
    margin: 1rem 0;
    font-size: 16px;
    font-weight: bold;
    p {
      flex: 1;
      text-align: left;
    }
    i {
      flex: 0 0 2rem;
    }
    .red-color {
      font-size: 14px;
      color: #f42929;
    }
  }

  .money {
    p {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 0.5rem;
    }
    span {
      color: #999999;
    }
  }

  .red-box {
    i {
      color: #f42929;
    }
  }
</style>
