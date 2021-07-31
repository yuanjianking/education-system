<template>
  <div id="distributor">
    <c-title :hide="false" :text="'我的下线客户'">
    </c-title>
    <div style="height: 40px"></div>
    <ul class="client-box">
      <li>
        <p class="word">客户数量 {{child_agent_count}}人</p>
        <van-progress
          :show-pivot="false"
          color="#f21010"
          stroke-width="8"
          :percentage="child_agent_count_percentage"
        />
      </li>
      <li>
        <p class="word">订单总额 {{child_order_price}}元</p>
        <van-progress
          :show-pivot="false"
          color="#f21010"
          stroke-width="8"
          :percentage="child_order_price_percentage"
        />
      </li>
      <li>
        <p class="word">订单数 {{child_order_count}}单</p>
        <van-progress
          :show-pivot="false"
          color="#f21010"
          stroke-width="8"
          :percentage="child_order_count_percentage"
        />
      </li>
    </ul>

    <div>
      <p class="title">我的客户</p>
      <div class="member-box">
            <div class="member-item" v-for="(item, index) in info" :key="index">
              <div style="display: flex">
                <div class="left">
                  <img
                    :src="item.member?item.member.avatar_image:''"
                    alt="">
                </div>
                <div class="right">
                  <p class="name">
                    {{item.member?item.member.nickname:''}}
                  </p>
                </div>
              </div>
              <div class="stock">
                <p><em>{{item.stock_count}}</em><span>库存(件)</span></p>
                <p><em>{{item.order_count}}</em><span>订单数(个)</span></p>
                <p><em>{{item.order_price_total}}</em><span>订单总额(元)</span></p>
              </div>
            </div>
            <img v-if="fun.isTextEmpty(info)" src="../../assets/images/blank.png" alt="" style="width:5rem;margin:2rem auto;display: block;">
          </div>
      <!-- <van-tabs v-model="active" animated swipeable sticky>
        <van-tab title="直推客户（一级客户）">
          <div class="member-box">
            <div class="member-item" v-for="(item, index) in info" :key="index">
              <div style="display: flex">
                <div class="left">
                  <img
                    :src="item.member?item.member.avatar_image:''"
                    alt="">
                </div>
                <div class="right">
                  <p class="name">
                    {{item.member?item.member.nickname:''}}
                  </p>
                </div>
              </div>
              <div class="stock">
                <p><em>{{item.stock_count}}</em><span>库存(件)</span></p>
                <p><em>{{item.order_count}}</em><span>订单数(个)</span></p>
                <p><em>{{item.order_price_total}}</em><span>订单总额(元)</span></p>
              </div>
            </div>
            <img v-if="fun.isTextEmpty(info)" src="../../assets/images/blank.png" alt="" style="width:5rem;margin:2rem auto;display: block;">
          </div>
        </van-tab>
        <van-tab title="间推客户（二级客户）">内容 2</van-tab>
      </van-tabs> -->

    </div>
  </div>
</template>

<script>
  import my_referrals_controller from "./my_referrals_controller";

  export default my_referrals_controller;
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  #distributor {
    background: #FFFFFF;
    padding: 1rem;
    min-height: 100vh;
    text-align: left;
  }

  .client-box {
    li {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.5rem;
      .word {
        margin-bottom: 0.4rem;
      }
    }
  }

  .title {
    font-weight: bold;
    font-size: 18px;
    margin: 1rem 0 0.5rem 0;
  }

  .member-item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eeeeee;
    padding: 0.5rem 0;
    .left {
      width: 3rem;
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
    }
    .right {
      flex: 1;
      align-self: center;
      margin-left: 0.5rem;
      .name {
        font-weight: bold;
      }
    }
    .stock {
      display: flex;
      text-align: center;
      p {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      span {
        color: #999999;
      }
    }
  }
</style>
