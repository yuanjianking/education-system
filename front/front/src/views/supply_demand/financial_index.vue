<template>
  <div
    id="supply_demand"
    :class="[this.fun.getPhoneEnv() == 3 ? 'pcStyle' : '']"
  >
    <c-title :hide="false" :text="getSet.financial_services_custom_name"></c-title>
    <div id="content">
      <div class="all">
        <div class="banner">
          <img
            :src="getSet.banner_thumb"
            alt=""
          />
        </div>
        <div class="button">
          <div class="btn-a" @click="gotoDetail('1')">
            <div class="img">
              <img
                :src="getSet.service_introduction_thumb"
                alt=""
              />
            </div>
            <div class="word">{{getSet.service_introduction_name}}</div>
          </div>
          <div class="btn-a"  @click="gotoDetail('2')" style="text-align:center">
            <div class="img">
              <img
                :src="getSet.application_process_thumb"
                alt=""
              />
            </div>
            <div class="word">{{getSet.application_process_name}}</div>
          </div>
          <div class="btn-a"  @click="gotoDetail('3')" style="text-align:right">
            <div class="img">
              <img
                :src="getSet.preparation_information_thumb"
                alt=""
              />
            </div>
            <div class="word">{{getSet.preparation_information_name}}</div>
          </div>
        </div>
        <div class="apply">
          <div class="title">申请贷款</div>
          <div class="list-all">
            <div class="list">
              <div class="img">
                <img :src="getSet.loan.goods_mortgage_thumb" alt />
              </div>
              <div class="content">
                <div class="content-a">{{getSet.loan.goods_mortgage_name}}</div>
                <div class="content-b">{{getSet.loan.goods_mortgage_title}}</div>
              </div>
              <div class="right" @click.stop="gotoApply(1)">
                立即申请
              </div>
            </div>
            <div class="list">
              <div class="img">
                <img :src="getSet.loan.procurement_financing_thumb" alt />
              </div>
              <div class="content">
                <div class="content-a">{{getSet.loan.procurement_financing_name}}</div>
                <div class="content-b">{{getSet.loan.procurement_financing_title}}</div>
              </div>
              <div class="right" @click="gotoApply(2)">
                立即申请
              </div>
            </div>
            <div class="list">
              <div class="img">
                <img :src="getSet.loan.credit_loan_thumb" alt />
              </div>
              <div class="content">
                <div class="content-a">{{getSet.loan.credit_loan_name}}</div>
                <div class="content-b">{{getSet.loan.credit_loan_title}}</div>
              </div>
              <div class="right" @click="gotoApply(3)">
                立即申请
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from "./financial_index_controller";
export default controller;
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$red_color: #ff2c29;
#supply_demand {
  #content {
    min-height: 100vh;
    padding-top: 2.5rem;
    background: #fff;
    .all {
      padding: 0.75rem;
      .banner {
        width: 100%;
        height: 10rem;
        img {
          width: 100%;
          border-radius: 0.5rem;
          height: 100%;
        }
      }
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 0.75rem;
        .btn-a {
          flex: 1;
          text-align: left;
          .img {
            width: 100%;
            height: 3.125rem;
            img {
              width: 3.125rem;
              height: 100%;
              border-radius: 50%;
            }
          }
          .word {
            line-height: 1.5rem;
            font-size: 0.8125rem;
          }
        }
      }
      .apply {
        text-align: left;
        .title {
          font-size: 0.875rem;
          font-weight: 600;
          padding-bottom: 0.25rem;
        }
        .list-all {
          padding: 1rem 0;
          .list {
            display: flex;
            // justify-content: center;
            align-items: center;
            width: 100%;
            box-shadow: 0px 0px 5px #ccc;
            margin-bottom: 1rem;
            padding: 0.75rem;
            border-radius: 0.35rem;
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
              padding:0 0.5rem;
              text-align: left;
              flex: 6;
              .content-a {
                height:1.25rem;
                overflow: hidden;
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
              width: 5rem;
              text-align: center;
              background: $red_color;
              border-radius: 2rem;
              padding: 0.5rem;
              color: #fff;
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
}
</style>
