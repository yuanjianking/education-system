<template>
  <div
    id="supply_demand"
    :class="[this.fun.getPhoneEnv() == 3 ? 'pcStyle' : '']"
  >
    <c-title :hide="false" text="供应信息管理"></c-title>
    <mt-tab-container-item>
      <div @touchmove.prevent @mousewheel.prevent>
        <mt-navbar v-model="activeName" fixed="true" style="top:2.5rem;">
          <mt-tab-item id="first" @click.native="handleClick('0')"
            >已发布</mt-tab-item
          >
          <mt-tab-item id="second" @click.native="handleClick('1')"
            >待审核</mt-tab-item
          >
          <mt-tab-item id="third" @click.native="handleClick('2')"
            >已下架</mt-tab-item
          >
        </mt-navbar>
      </div>

      <mt-tab-container v-model="activeName" style="text-align:left;">
        <!-- 列表 -->
        <div v-if="list.length<=0" style="text-align:center;width:100%;padding-top:4rem">
          <img src="../../assets/images/blank.png" alt="">
        </div>
        <div class="list" v-else>
          <div class="list-li" v-for="(item,index) in list" :key="index">
            <div class="time-row">
              <div class="time">
                {{item.created_at}}
              </div>
              <div class="num">
                浏览：{{item.browse}}
              </div>
            </div>
            <mt-cell-swipe
              :right="[
                {
                  content: '删除',
                  style: {
                    background: '#ff2c29',
                    color: '#fff',
                    lineHeight: '5.625rem'
                  },
                  handler: () => {
                    delRow(item.id);
                  }
                }
              ]"
            >
              <div class="content-row">
                <div class="img">
                  <img
                    :src="item.product_pictures[0]"
                    alt
                  />
                </div>
                <div class="content">
                  <div class="title">
                    <div class="title-a">
                      <div class="title-logo">{{product_state[item.product_type]}}</div>
                      {{item.title}}
                    </div>
                  </div>
                  <div class="price">
                    <div class="price-word">单价</div>
                    <div class="price-num" style>{{item.product_price}} {{unit_price[item.unit_price]}}</div>
                  </div>
                </div>
              </div>
            </mt-cell-swipe>

            <div class="number-row">
              <div class="number">数量：{{item.product_total}} {{item.word}}</div>
              <div class="address">仓库地址：{{item.province.n}} {{item.city.n}}</div>
              <div class="product">产地：{{item.product_origin}}</div>
            </div>
            <div class="button-row">
              <div class="btn-a" @click="reFresh">刷新</div>
              <div class="btn-a" @click="gotoEdit(item.id)">修改</div>
              <div class="btn-a btn-b" @click="putAway(item.id)" v-if="activeName=='first'">下架</div>
            </div>
          </div>
        </div>
        
      </mt-tab-container>
    </mt-tab-container-item>
    <div class="publish" @click="gotoPublish">
      <div><i class="iconfont icon-edit"></i></div>
      <div>发布</div>
    </div>
  </div>
</template>

<script>
import controller from "./manage_supply_controller";
export default controller;
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$red_color: #ff2c29;
#supply_demand {
  width: 100%;
  .list {
    padding-top: 5rem;
    background: #fff;
    min-height: 100vh;
    width:100%;
    .list-li {
      border-bottom: 0.75rem #f5f5f5 solid;
      padding: 1rem;
      .time-row {
        display: flex;
        align-items: center;
        width: 100%;
        color: #333333;
        font-size: 0.75rem;
        line-height: 1.75rem;
        padding-bottom: 0.25rem;
        .time {
          flex: 1;
          text-align: left;
        }
        .num {
          text-align: right;
          flex: 1;
        }
      }
      .content-row {
        display: flex;
        width: 100%;
        color: #000;
        .img {
          flex: 0 0 5.625rem;
          width: 5.625rem;
          height: 5.625rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
          }
        }
        .content {
          margin-left: 0.5rem;
          .title {
            height: 2.5rem;
            line-height: 1.25rem;
            font-size: 0.8125rem;
            .title-a {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              font-weight: 600;
              .title-logo {
                font-size: 0.75rem;
                display: inline-block;
                color: #fff;
                background: #ff6333;
                border-radius: 1rem;
                padding: 0rem 0.625rem;
                margin-right: 0.5rem;
              }
            }
          }

          .price {
            line-height: 1.5rem;
            margin-top: 1.625rem;
            .price-word {
              font-size: 0.75rem;
              display: inline-block;
            }
            .price-num {
              color: #f01818;
              font-size: 1rem;
              display: inline-block;
            }
          }
          .product {
            .product-word {
              color: #f01818;
              font-size: 0.75rem;
              display: inline-block;
            }
            .time {
              display: inline-block;
              color: #666666;
              font-size: 0.75rem;
              padding-left: 0.5rem;
            }
          }
        }
      }
      .number-row {
        font-size: 0.6875rem;
        color: #666666;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1.875rem;
        border-bottom: 1px solid #ebebeb;
        .number {
          flex: 2;
          text-align: left;
        }
        .address {
          text-align: center;
          flex: 4;
        }
        .product {
          text-align: right;
          flex: 2;
        }
      }
      .button-row {
        width: 100%;
        text-align: right;
        padding-top: 0.5rem;
        .btn-a {
          display: inline-block;
          padding: 0.25rem 1rem;
          background: $red_color;
          color: #fff;
          margin-left: 0.25rem;
        }
        .btn-b {
          border: 1px solid #ccc;
          background: #fff;
          color: #000;
        }
      }
    }
  }
  .publish {
    color: #fff;
    position: fixed;
    bottom: 6rem;
    right: 0.5rem;
    border-radius: 50%;
    background: $red_color;
    box-shadow: 0px 0px 5px $red_color;
    padding: 0.25rem 0.5rem;
    font-size: 0.8125rem;
  }

  /deep/ .mint-cell-wrapper {
    background-size: 120% 0px !important;
    padding: 0 !important;
    color: #000 !important;
  }
}
.pcStyle {
  width:375px !important;
}
.pcStyle .publish{
  right: auto !important;
  left: calc(50% + 125px) !important;
}
.pcStyle /deep/ .mint-msgbox {
  width:350px !important;
}
</style>
