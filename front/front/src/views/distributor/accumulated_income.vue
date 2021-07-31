<template>
  <div id="distributor">
    <c-title :hide="false" :text="'累计收入'">
    </c-title>
    <div style="height: 40px"></div>
    <van-tabs v-model="activeName" @click="handleClick" sticky :ellipsis='false' swipeable>
      <van-tab :title="items" v-for="(items, ind) in titleArr" :key="ind">
        <ul class="content" v-if="!fun.isTextEmpty(dataList[ind].list)">
          <li v-for="(item, index) in dataList[ind].list" :key="index">
            <p><span class="left">{{item.order_sn}}</span><span class="red right">{{item.amount}}</span></p>
            <p><span class="time left">{{item.created_at}}</span><span class="right">{{item.status_name}}</span></p>
          </li>
        </ul>
        <img v-if="fun.isTextEmpty(dataList[ind].list)" src="../../assets/images/blank.png" alt="" style="width:5rem;margin:2rem auto;">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import accumulated_income_controller from "./accumulated_income_controller";

  export default accumulated_income_controller;
</script>
<style lang="scss" rel="stylesheet/scss">
#distributor {
  .van-tab{
    padding: 0 10px;
  }
}
</style>
<style lang="scss" rel="stylesheet/scss" scoped>
  #distributor {
  background: #FFFFFF;
  .red {
    color: #f0201f;
  }

  .time {
    color: #8e8e8e;
  }

  .content {
    font-size: 15px;
    padding-bottom: 1rem;
    li {
      padding: 1rem  1rem 0 1rem;
      line-height: 1rem;
      display: flex;
      flex-direction: column;
      p {
        display: flex;
        margin-bottom: 0.3rem;
        span {
          display: inline-block;
        }
      }
      .right {
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>
