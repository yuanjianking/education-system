<template>
  <div
    id="supply_demand"
    :class="[this.fun.getPhoneEnv() == 3 ? 'pcStyle' : '']"
  >
    <c-title :hide="false" text="发布采购信息"></c-title>
    <div id="content">
      <div class="all">
        <div class="list">
          <div class="form">
            <div class="input-row">
              <div class="name">
                产品名称
              </div>
              <van-field v-model="title" placeholder="请输入产品名称" />
            </div>
            <div class="input-row" @click="chooseCategory">
              <div class="name">
                产品分类
              </div>
              <div class="value">
                <div class="word">
                  {{ category_word ? category_word : "请选择产品分类" }}
                </div>
                <div class="icon">
                  <i class="iconfont icon-advertise-next"></i>
                </div>
              </div>
            </div>
            <div class="input-row">
              <div class="name name-a">
                状态要求
              </div>
              <div class="radio">
                <van-radio-group
                  class="van-radio-group--horizontal"
                  v-model="product_type"
                  direction="horizontal"
                >
                  <van-radio
                    v-for="(item, index) in product_state"
                    :name="item.id"
                    :key="index"
                    checked-color="#ff2c29"
                    style="display:inline-block;padding-right:0.35rem;"
                    >{{ item.name }}</van-radio
                  >
                </van-radio-group>
                <!-- <yd-radio-group v-model="product_type" color="#ff2c29" size="15">
                  <yd-radio :val="2" style="font-size: 0.75rem;">不限</yd-radio>
                  <yd-radio
                    v-for="(item, index) in product_state"
                    :val="item.id"
                    :key="index"
                    style="font-size: 0.75rem;"
                    >{{ item.name }}</yd-radio
                  >
                </yd-radio-group> -->
              </div>
            </div>
            <div class="input-row">
              <div class="name name-a">
                意向价格
              </div>
              <div class="radio">
                <van-radio-group
                  class="van-radio-group--horizontal"
                  v-model="unit_price_value"
                  direction="horizontal"
                >
                  <van-radio
                    v-for="(item, index) in unit_price"
                    :name="index"
                    :key="index"
                    checked-color="#ff2c29"
                    style="display:inline-block;padding-right:0.35rem;"
                    >{{ item }}</van-radio
                  >
                </van-radio-group>
                <!-- <yd-radio-group v-model="unit_price_value" color="#ff2c29" size="15">
                  <yd-radio
                    v-for="(item, index) in unit_price"
                    :val="item"
                    :key="index"
                    style="font-size: 0.75rem;"
                    >{{ item }}</yd-radio
                  >
                </yd-radio-group> -->
              </div>
              <van-field
                v-model="purchasing_price"
                placeholder="请输入意向价格"
              />
            </div>
            <div class="input-row">
              <div class="name">
                采购重量
              </div>
              <van-field
                v-model="purchasing_total"
                placeholder="请输入采购重量"
              >
                <div slot="button">{{unit_price_word}}</div>
              </van-field>
            </div>
            <div class="input-row">
              <div class="name name-a">
                产地要求
              </div>
              <div class="radio">
                <van-radio-group
                  class="van-radio-group--horizontal"
                  v-model="origin_requirement"
                  direction="horizontal"
                >
                  <van-radio
                    name="2"
                    checked-color="#ff2c29"
                    style="display:inline-block;padding-right:0.35rem;"
                    >不限</van-radio
                  >
                  <van-radio
                    name="0"
                    checked-color="#ff2c29"
                    style="display:inline-block;padding-right:0.35rem;"
                    >国内</van-radio
                  >
                  <van-radio
                    name="1"
                    checked-color="#ff2c29"
                    style="display:inline-block;padding-right:0.35rem;"
                    >国外</van-radio
                  >
                </van-radio-group>
                <!-- <yd-radio-group v-model="origin_requirement" color="#ff2c29" size="15">
                  <yd-radio val="2" style="font-size: 0.75rem;">不限</yd-radio>
                  <yd-radio val="0" style="font-size: 0.75rem;">国内</yd-radio>
                  <yd-radio val="1" style="font-size: 0.75rem;">国外</yd-radio>
                </yd-radio-group> -->
              </div>
            </div>
            <div class="input-row" @click="city_show = true">
              <div class="name">
                我的位置
              </div>
              <div class="value">
                <div class="word">
                  {{ address ? address : "请选择仓库位置" }}
                </div>
                <div class="icon">
                  <i class="iconfont icon-advertise-next"></i>
                </div>
              </div>
            </div>
            <div class="input-row">
              <div class="name">
                采购要求
              </div>
              <van-field
                v-model="product_describe"
                rows="4"
                autosize
                type="textarea"
                placeholder="请输入采购要求"
              />
            </div>
          </div>
          <div class="submit" @click="submitForm">
            提交
          </div>
        </div>
      </div>
    </div>
    <!-- 选择位置弹窗 -->
    <div>
      <yd-cityselect
        v-model="city_show"
        :callback="changeCity"
        :items="district"
        columns="2"
      ></yd-cityselect>
    </div>
    <!-- 选择分类弹窗 -->
    <van-popup
      :close-on-click-overlay="false"
      class="category-show"
      v-model="category_show"
      round
      position="bottom"
      style="border-top-right-radius: 1rem;border-top-left-radius: 1rem;"
      :style="{ height: '54vh' }"
    >
      <div class="title-row">
        <div class="title">请选择分类</div>
        <div class="close" @click="closeCategory">
          <i class="iconfont icon-close11"></i>
        </div>
      </div>
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
                    ? 'left-list-selected'
                    : ''
                "
              >
                <!-- <div class="title">精选零食精选零食</div> -->
                <div class="title">
                  {{ item.name }}
                </div>

                <div class="icon">
                  <i
                    style="font-size:12px"
                    class="iconfont icon-advertise-next"
                  ></i>
                </div>
              </div>
            </div>
            <div class="right" v-if="catlevel == 2">
              <div class="right-list">
                <div
                  v-for="(item, index) in second_list"
                  :key="index"
                  @click="changeCategorySecond(index, item.id)"
                  class="title"
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
                  @click="changeCategoryThird(index, index1, item.id, item1.id)"
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
    </van-popup>
  </div>
</template>

<script>
import controller from "./publish_demand_controller";
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
      .list {
        text-align: left;
        .form {
          padding: 0.5rem;
          font-size: 0.9375rem;
          /deep/ .van-cell {
            padding: 10px 0px;
          }
          .input-row {
            border-bottom: 1px solid #ebebeb;
            margin: 0.75rem 0;
            .name {
              font-size: 0.8125rem;
              font-weight: 600;
            }
            .name-a {
              padding: 0.75rem 0;
              display: inline-block;
              width: 30%;
              text-align: left;
            }
            .radio {
              width: 68%;
              display: inline-block;
              text-align: right;
              /deep/ .yd-radio-text {
                font-size: 0.75rem;
                color: #000;
              }
            }
            .value {
              display: flex;
              width: 100%;
              color: #999;
              padding: 0.625rem 0;
              font-size: 0.8125rem;
              .word {
                flex: 1;
                text-align: left;
              }
              .icon {
                flex: 0 0 2rem;
                text-align: right;
              }
            }
          }
        }
        .submit {
          width: 70%;
          margin: 0 auto;
          border-radius: 2rem;
          background: $red_color;
          color: #fff;
          padding: 0.75rem 0;
          text-align: center;
        }
      }
    }
  }
  .category-show {
    .title-row {
      padding: 0 0.75rem;
      display: flex;
      height: 3rem;
      align-items: center;
      color: #000;
      .title {
        flex: 1;
        padding-left: 1rem;
      }
      .close {
        text-align: left;
        flex: 0 0 2rem;
      }
    }
    .top {
      overflow: hidden;
      .top-main {
        display: flex;
        font-size: 0.75rem;
        .left {
          flex: 1;
          height: 47vh;
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
          .left-list-selected {
            color: $red_color;
            background: #fff;
          }
        }
        .right {
          flex: 3;
          height: 47vh;
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
      }
    }
    .top-b {
      text-align: left;
      .list {
        display: inline-block;
        width: 24%;
        margin-bottom: 0.5rem;
        .list-li {
          font-size: 12px;
          overflow: hidden;
          height: 2rem;
          line-height: 2rem;
          background: #ebebeb;
          width: 80%;
          border-radius: 2rem;
          margin: 0 auto;
          text-align: center;
        }
        .list-li-selected {
          border: 1px solid $red_color;
          color: $red_color;
          background: #fff;
        }
      }
    }
  }
}
</style>
