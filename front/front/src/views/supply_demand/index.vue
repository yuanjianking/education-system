<template>
  <!-- <div id="supply_demand" style="overflow:hidden" :style="{height:sortContentShow?'100vh':''}"> -->
  <div
    id="supply_demand"
    :class="[this.fun.getPhoneEnv() == 3 ? 'pcStyle' : '']"
  >
    <div @touchmove.prevent @mousewheel.prevent>
      <c-title :hide="false" text="供需信息"></c-title>
    </div>
    <div id="content">
      <div id="tabs">
        <div @touchmove.prevent @mousewheel.prevent>
          <mt-navbar v-model="activeName" fixed="true" style="top:2.5rem;">
            <mt-tab-item id="first" @click.native="handleClick('0')"
              >供应信息</mt-tab-item
            >
            <mt-tab-item id="second" @click.native="handleClick('1')"
              >采购信息</mt-tab-item
            >
          </mt-navbar>
        </div>

        <mt-tab-container v-model="activeName" style="text-align:left;">
          <div class="choose" @touchmove.prevent @mousewheel.prevent>
            <div class="choose-head">
              <div
                class="choose-li"
                style=""
                @click="chooseSort('1')"
                :class="sortSelectedWhich == 1 ? 'selected' : ''"
              >
                <div class="van-ellipsis">
                  {{ category_word == "" ? "产品分类" : category_word }}
                </div>
                <div class="icon">
                  <i
                    style="font-size:12px"
                    class="iconfont icon-member-bottom"
                    :class="sortSelectedWhich == 1 ? 'icon-member-top' : ''"
                  ></i>
                </div>
              </div>
              <div
                class="choose-li"
                @click="chooseSort('2')"
                :class="sortSelectedWhich == 2 ? 'selected' : ''"
              >
                <div class="van-ellipsis">
                  {{ entrepot_word == "" ? "仓库位置" : entrepot_word }}
                </div>
                <div class="icon" style="flex:0 0 0.75rem;">
                  <i
                    style="font-size:12px"
                    class="iconfont icon-member-bottom"
                    :class="sortSelectedWhich == 2 ? 'icon-member-top' : ''"
                  ></i>
                </div>
              </div>
              <div
                v-if="activeName == 'first'"
                class="choose-li"
                @click="chooseSort('3')"
                :class="sortSelectedWhich == 3 ? 'selected' : ''"
              >
                <div class="van-ellipsis">
                  {{ country_word == "" ? "产地国家" : country_word }}
                </div>
                <div class="icon">
                  <i
                    style="font-size:12px"
                    class="iconfont icon-member-bottom"
                    :class="sortSelectedWhich == 3 ? 'icon-member-top' : ''"
                  ></i>
                </div>
              </div>
              <div
                v-if="activeName == 'second'"
                class="choose-li"
                @click="chooseSort('4')"
                :class="sortSelectedWhich == 4 ? 'selected' : ''"
              >
                <div class="van-ellipsis">{{country_demand_word==''?'产地要求':country_demand_word}}</div>
                <div class="icon">
                  <i
                    style="font-size:12px"
                    class="iconfont icon-member-bottom"
                    :class="sortSelectedWhich == 4 ? 'icon-member-top' : ''"
                  ></i>
                </div>
              </div>
              <div
                class="choose-li"
                @click="chooseSort('5')"
                :class="sortSelectedWhich == 5 ? 'selected' : ''"
              >
                <div class="van-ellipsis">{{product_type_word==""?'是否现货':product_type_word}}</div>
                <div class="icon">
                  <i
                    style="font-size:12px"
                    class="iconfont icon-member-bottom"
                    :class="sortSelectedWhich == 5 ? 'icon-member-top' : ''"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <mt-tab-container-item id="first">
            <!-- 列表 -->
            <div v-if="recordsList.length<=0" style="text-align:center;padding-top:4.5rem">
              <img src="../../assets/images/blank.png" alt="">
            </div>
            <div class="list" v-else>
              <div
                class="list-li"
                v-for="(item, index) in recordsList"
                :key="index"
                @click="gotoDetail(item.id)"
              >
                <div class="img" v-if="activeName == 'first'">
                  <img
                    :src="item.product_pictures ? item.product_pictures[0] : ''"
                    alt
                  />
                </div>
                <div class="content">
                  <div class="title">
                    <div class="title-a">
                      <div class="title-logo">
                        {{ product_state[item.product_type] }}
                      </div>
                      {{ item.title }}
                    </div>
                  </div>
                  <div class="address">
                    <div>
                      {{ item.province.n }} {{ item.city.n }} {{ item.name }}
                    </div>
                  </div>
                  <div class="price">
                    <div class="price-word">单价</div>
                    <div class="price-num">
                      {{ item.product_price }} {{ unit_price[item.unit_price] }}
                    </div>
                  </div>
                  <div class="product">
                    <div class="product-word" style>
                      产地：{{ item.product_origin }}
                    </div>
                    <div class="time" style>{{ item.times }}</div>
                  </div>
                </div>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="second">
            <div v-if="recordsList.length<=0" style="text-align:center;padding-top:4.5rem">
              <img src="../../assets/images/blank.png" alt="">
            </div>
            <div class="demand-list" v-else>
              <div
                class="list-li"
                v-for="(item, index) in recordsList"
                :key="index"
                @click="gotoDetail(item.id)"
              >
                <div class="title-row">
                  <div class="title">
                    {{ item.title }}
                  </div>
                  <div class="title-right">
                    <div class="title-logo">采购</div>
                    <div class="time" style>{{ item.times }}</div>
                  </div>
                </div>
                <div class="price-row">
                  <div class="price">
                    意向价格：
                    <span style="color:#ff2c29;font-size:0.75rem"
                      >{{ item.purchasing_price }}
                      {{ unit_price[item.unit_price] }}</span
                    >
                  </div>
                  <div class="product">
                    产地要求：{{
                      item.origin_requirement == 2
                        ? "不限"
                        : item.origin_requirement == 0
                        ? "国内"
                        : "国外"
                    }}
                  </div>
                </div>
                <div class="price-row">
                  <div class="price">
                    我的位置：{{ item.province.n }} {{ item.city.n }}
                  </div>
                  <div class="product">
                    状态要求：{{
                      item.product_type == 2
                        ? "不限"
                        : product_state[item.product_type]
                    }}
                  </div>
                </div>
                <div class="content-row">要求：{{ item.product_describe }}</div>
              </div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <!-- 底部发布按钮 -->
    <div class="fiexd-bottom">
      <div class="button" @click="gotoPublish">发布</div>
    </div>

    <!-- 遮罩层 -->
    <div class="choose-content" v-show="sortContentShow">
      <!-- 分类 -->
      <div class="content-a" v-show="sortSelectedWhich == 1">
        <div class="top">
          <div>
            <div class="top-main">
              <div class="left">
                <div
                  class="left-list"
                  v-for="(item, index) in category_list"
                  :key="index"
                  @click="changeCategoryFirst(index, item.id)"
                  :class="
                    pre_category_menus.parentid == item.id
                      ? 'title-selected'
                      : ''
                  "
                >
                  <div class="title">{{ item.name }}</div>
                  <div class="icon">
                    <i
                      style="font-size:12px"
                      class="iconfont icon-advertise-next"
                    ></i>
                  </div>
                </div>
              </div>
              <!-- 二级分类样式 -->
              <div class="right" v-if="catlevel == 2">
                <div class="right-list">
                  <div
                    class="title"
                    v-for="(item, index) in second_list"
                    :key="index"
                    @click="changeCategorySecond(index, item.id)"
                    :class="
                      pre_category_menus.childid == item.id
                        ? 'title-selected'
                        : ''
                    "
                  >
                    {{ item.name }}
                  </div>
                </div>
              </div>
              <!-- 三级分类样式 -->
              <div class="right" v-if="catlevel == 3">
                <div v-for="(item, index) in second_list" :key="index">
                  <div
                    style="font-size: 0.75rem;
                    font-weight: 600;
                    text-align: left;
                    padding: 0.5rem;
                    background: #fbfbfb;"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    class="right-list"
                    v-for="(item1, index1) in item.children"
                    :key="index1"
                    @click="
                      changeCategoryThird(index, index1, item.id, item1.id)
                    "
                  >
                    <div
                      class="title"
                      :class="
                        pre_category_menus.thirdid == item1.id
                          ? 'title-selected'
                          : ''
                      "
                    >
                      {{ item1.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          @click="closeSort"
          class="cover"
          style="background:#000;height:calc(100vh - 7.725rem - 45vh);width:100%;opacity: 0.7;"
        ></div>
      </div>
      <!-- 仓库位置 -->
      <div class="content-b" v-show="sortSelectedWhich == 2">
        <div class="top">
          <div class="list">
            <div
              class="title"
              v-for="(item, index) in province_list"
              :key="index"
              @click="changeEntrepot(item, item.v)"
              :class="
                supply_search.province_id == item.v ? 'title-selected' : ''
              "
            >
              {{ item.n }}
            </div>
          </div>
        </div>

        <div
          @click="closeSort"
          class="cover"
          style="background:#000;height:calc(100vh - 7.725rem - 45vh);width:100%;opacity: 0.7;"
        ></div>
      </div>
      <!-- 产地国家 -->
      <div
        v-if="activeName == 'first'"
        class="content-b"
        v-show="sortSelectedWhich == 3"
      >
        <div class="top">
          <div class="list">
            <div
              class="title"
              v-for="(item, index) in country_list"
              :key="item"
              @click="changeCountry(item, index)"
              :class="
                supply_search.product_origin == item ? 'title-selected' : ''
              "
            >
              {{ item }}
            </div>
          </div>
        </div>

        <div
          @click="closeSort"
          class="cover"
          style="background:#000;height:calc(100vh - 7.725rem - 45vh);width:100%;opacity: 0.7;"
        ></div>
      </div>
      <!-- 注：选项中包含0，只能通过文字判断回显选择的值 -->
      <!-- 产地要求 -->
      <div class="content-d" v-else v-show="sortSelectedWhich == 4">
        <div class="top">
          <div class="list">
            <div
              class="title"
              :class="
                country_demand_word == '不限' ? 'title-selected' : ''
              "
              @click="changeCountryDemand(2)"
            >
              不限
            </div>
            <div
              class="title"
              :class="
                country_demand_word == '国内' ? 'title-selected' : ''
              "
              @click="changeCountryDemand(0)"
            >
              国内
            </div>
            <div
              class="title"
              :class="
                country_demand_word == '国外' == 1 ? 'title-selected' : ''
              "
              @click="changeCountryDemand(1)"
            >
              国外
            </div>
          </div>
        </div>

        <div
          @click="closeSort"
          class="cover"
          style="background:#000;height:calc(100vh - 7.725rem - 5.625rem);width:100%;opacity: 0.7;"
        ></div>
      </div>
      <!-- 是否现货 -->
      <div class="content-d" v-show="sortSelectedWhich == 5">
        <div class="top">
          <div class="list">
            <div
              class="title"
              @click="changeState(2)"
              :class="product_type_word == '不限' ? 'title-selected' : ''"
            >
              不限
            </div>
            <div
              class="title"
              v-for="(item, index) in product_state"
              :key="index"
              @click="changeState(index)"
              :class="
                product_type_word == item ? 'title-selected' : ''
              "
            >
              {{ item }}
            </div>
          </div>
        </div>

        <div
          @click="closeSort"
          class="cover"
          style="background:#000;height:calc(100vh - 7.725rem - 5.625rem);width:100%;opacity: 0.7;"
        ></div>
      </div>
    </div>
    <!-- 遮罩层 -->
  </div>
</template>

<script>
import controller from "./index_controller";
export default controller;
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$red_color: #f15353;
#supply_demand {
  padding-top: 40px;
  #content {
    .choose {
      .choose-head {
        font-weight: 600;
        z-index: 997;
        position: fixed;
        top: 5.25rem;
        width: 100%;
        display: flex;
        height: 2.5rem;
        line-height: 2.5rem;
        justify-content: center;
        padding: 0 0.5rem;
        background: #fff;
        font-size: 0.6875rem;
        .choose-li {
          display: flex;
          flex: 1;
          margin: 0 0.2rem;
          justify-content: center;
          height: 2.5rem;
          min-width: 0;
          .icon {
            flex: 0 0 0.75rem;
          }
        }
      }
    }
    .list {
      padding: 5.525rem 0.5rem 0rem 0.5rem;
      background: #fff;
      min-height: calc(100vh - 6.25rem);
      margin-bottom: 3.75rem;
      .list-li {
        display: flex;
        margin-bottom: 0.75rem;
        .img {
          flex: 0 0 7.8125rem;
          width: 7.8125rem;
          height: 7.8125rem;
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
          .address {
            color: #666666;
            font-size: 0.75rem;
            line-height: 1.25rem;
            height: 1.25rem;
            overflow: hidden;
            margin: 0.25rem 0 1.25rem 0;
          }
          .price {
            line-height: 1.5rem;
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
    }
    .demand-list {
      padding: 5.525rem 0.5rem 0rem 0.5rem;
      background: #fff;
      min-height: calc(100vh - 6.25rem);
      margin-bottom: 3.75rem;
      .list-li {
        box-shadow: 0px 0px 5px #ddd;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        padding: 0.25rem 0.75rem;
        .title-row {
          height: 2.5rem;
          line-height: 1.25rem;
          font-size: 0.8125rem;
          display: flex;
          .title {
            flex: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-weight: 600;
          }
          .title-right {
            flex: 0 0 4.5rem;
            text-align: right;
            .title-logo {
              text-align: right;
              font-size: 0.75rem;
              display: inline-block;
              color: #fff;
              background: #ff6333;
              border-radius: 1rem;
              padding: 0rem 0.625rem;
            }
            .time {
              font-size: 0.75rem;
            }
          }
        }
        .price-row {
          font-weight: 600;
          font-size: 0.6875rem;
          color: #999;
          height: 1.25rem;
          line-height: 1.25rem;
          margin-top: 0.625rem;
          .price {
            display: inline-block;
            text-align: left;
            width: 59%;
          }
          .product {
            display: inline-block;
            text-align: right;
            width: 39%;
          }
        }
        .content-row {
          font-weight: 600;
          font-size: 0.6875rem;
          color: #999;
          line-height: 1rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
  .fiexd-bottom {
    z-index: 2000;
    position: fixed;
    width: 100%;
    height: 3.75rem;
    background: #fff;
    bottom: 0;
    // left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 18px #ccc;
    .button {
      height: 2.75rem;
      line-height: 2.75rem;
      background: #ff2c29;
      color: #fff;
      padding: 0rem 7rem;
      display: inline-block;
      border-radius: 2rem;
    }
  }
  .choose-content {
    z-index: 2003;
    position: fixed;
    top: 7.725rem;
    // left: 0;
    width: 100%;
    .content-a {
      .top {
        background: #fff;
        height: 45vh;
        .top-main {
          display: flex;
          font-size: 0.75rem;
          .left {
            flex: 1;
            height: 45vh;
            overflow-y: auto;
            .left-list {
              display: flex;
              background: #fbfbfb;
              .title {
                flex: 0 0 4.5rem;
                line-height: 1.875rem;
                height: 1.875rem;
                overflow: hidden;
                padding-left: 0.25rem;
              }
              .icon {
                flex: 0 0 1rem;
                line-height: 1.875rem;
                height: 1.875rem;
                text-align: right;
              }
            }
          }
          .right {
            flex: 3;
            height: 45vh;
            overflow-y: auto;
            .right-list {
              text-align: left;
              padding: 0 0.5rem;
              .title {
                overflow: hidden;
                padding-right: 0.2rem;
                line-height: 1.875rem;
                height: 1.875rem;
                font-size: 0.75rem;
                width: 5.25rem;
                display: inline-block;
                text-align: center;
              }
            }
          }
          .right-third {
            flex: 2;
            height: 45vh;
            overflow-y: auto;
            .left-list {
              background: #fbfbfb;
              .title {
                text-align: left;
                line-height: 1.875rem;
                height: 1.875rem;
                overflow: hidden;
                padding-left: 0.25rem;
              }
              .icon {
                flex: 0 0 1rem;
                line-height: 1.875rem;
                height: 1.875rem;
                text-align: right;
              }
            }
          }
        }
      }
    }
    .content-b {
      .top {
        background: #fff;
        height: 45vh;
        .list {
          height: 45vh;
          overflow-y: auto;
          padding: 0 0.5rem;
          text-align: left;
          font-size: 0.8125rem;
          .title {
            margin-bottom: 0.5rem;
            border-radius: 1rem;
            background: #fbfbfb;
            overflow: hidden;
            line-height: 1.875rem;
            height: 1.875rem;
            display: inline-block;
            text-align: center;
            width: calc(25% - 0.2rem);
            // border: 1px solid #333;
            margin-right: 0.1rem;
          }
          .title-selected {
            background: #fff;
            border: 1px solid $red_color;
          }
        }
      }
    }
    .content-d {
      .top {
        background: #fff;
        height: 5.625rem;
        .list {
          height: 45vh;
          overflow-y: auto;
          padding: 0 0.5rem;
          text-align: left;
          font-size: 0.8125rem;
          .title {
            padding-left: 0.5rem;
            line-height: 1.875rem;
            height: 1.875rem;
            border-bottom: 1px solid #ebebeb;
          }
        }
      }
    }
  }

  .selected {
    color: $red_color;
  }
  .title-selected {
    color: $red_color;
  }
}
.pcStyle .choose-head {
  width: 375px !important;
}
.pcStyle .fiexd-bottom {
  width: 375px !important;
}
.pcStyle .choose-content {
  width: 375px !important;
}
</style>
