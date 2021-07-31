<template>
  <div id="supply" :class="[this.fun.getPhoneEnv() == 3 ? 'pcStyle' : '']">
    <c-title :hide="false" text="供应信息详情"></c-title>
    <div style="height:2.5rem;"></div>
    <div id="content">
      <div class="title-row" style="background:#fff;display:flex;">
        <div class="title">
          {{ datas.title }}
        </div>
        <div class="title-right">
          <div class="title-logo">{{ product_state[datas.product_type] }}</div>
          <div class="time" style>{{ datas.times }}</div>
        </div>
      </div>
      <div class="price-row" style="background:#fff">
        <div class="price">
          <div class="price-title">价格</div>
          <div class="price-num" style="color:#ff2c29">
            {{ datas.product_price }} {{ unit_price[datas.unit_price] }}
          </div>
        </div>
        <div class="price">
          <div class="price-title">数量</div>
          <div class="price-num">
            {{ datas.product_total }} {{ unit_price_word }}
          </div>
        </div>
        <div class="price">
          <div class="price-title">状态</div>
          <div class="price-num">{{ product_state[datas.product_type] }}</div>
        </div>
        <div class="price">
          <div class="price-title">仓库</div>
          <div class="price-num">{{ datas.province.n }} {{ datas.city.n }}</div>
        </div>
        <div class="price">
          <div class="price-title">产地</div>
          <div class="price-num">{{ datas.product_origin }}</div>
        </div>
      </div>
      <div class="member-row">
        <div class="title">联系人</div>
        <div class="member">
          <div class="left">
            <div class="img">
              <img
                :src="
                  datas.has_one_member ? datas.has_one_member.avatar_image : ''
                "
              />
            </div>
            <div class="name">
              <div class="store-name">{{ store_info.type_name }}</div>
              <div class="message">
                <i class="iconfont icon-pinglun"></i>供应信息{{supplyCount}}条
              </div>
            </div>
          </div>
          <div class="right">
            <div
              class="title-logo"
              @click="gotoStore"
              v-if="store_info.type_id != 2"
            >
              浏览店铺
            </div>
          </div>
        </div>
      </div>
      <div class="product-row">
        <div class="title">产品说明</div>
        <div class="content" v-html="product_describe">
          <!-- {{ datas.product_describe }} -->
        </div>
        <div class="img-lst" style="">
          <img
            v-for="(item, index) in datas.product_pictures"
            :key="index"
            :src="item"
            alt=""
          />
        </div>
        <div class="none">~~暂无更多产品说明~~</div>
      </div>
      <div
        class="bottom"
        :class="[this.fun.getPhoneEnv() == 3 ? 'pcStyle' : '']"
      >
        <div class="list">
          <div class="list-a" @click="openShareTip">
            <div>
              <i class="iconfont icon-bc_share_card"></i>
            </div>
            <div>分享</div>
          </div>
          <div class="list-a" @click="openReport">
            <div>
              <i class="iconfont icon-zb_jubao"></i>
            </div>
            <div>举报</div>
          </div>
          <div class="list-a">
            <a :href="cservice">
              <div>
                <i class="iconfont icon-service"></i>
              </div>
              <div>客服</div>
            </a>
          </div>
          <div class="list-b" @click="gotoStore" v-if="store_info.type_id != 2">
            <div>浏览店铺</div>
          </div>
          <div class="list-b" style="background:#ff7f29">
            <div @click="submitCall">拨打电话</div>
            <a v-show="false" :href="mobile" ref="call"> </a>
          </div>
        </div>
      </div>
      <div class="share-fixed" v-show="is_share_tip">
        <div class="img">
          <img src="../../assets/images/wn_zhishi@2x.png" alt />
        </div>
        <div class="word">
          <div>点击右上角···按钮,</div>
          <div>发送给好友或分享朋友圈</div>
          <div @click="closeShareTip" class="button">我知道了</div>
        </div>
      </div>
      <!-- 举报 -->
      <van-popup
        v-model="is_report"
        position="left"
        style="width:100%;background:#f5f5f5"
        :style="{ height: '100%' }"
        class="report"
      >
        <div class="title">
          <div class="left" @click="is_report = false">
            <i class="iconfont icon-back"></i>
          </div>
          <div class="content">举报</div>
          <div class="left"></div>
        </div>
        <div class="member">
          <div class="list">
            <div class="img">
              <img
                :src="
                  datas.has_one_member ? datas.has_one_member.avatar_image : ''
                "
                alt
              />
            </div>
            <div class="name">{{ store_info.type_name }}</div>
          </div>
        </div>
        <div class="form">
          <div class="radio">
            <van-radio-group v-model="report_content">
              <van-radio
                v-for="(item, index) in problem_list"
                :key="index"
                :name="item"
                style="margin-bottom:0.5rem"
                >{{ item }}</van-radio
              >
            </van-radio-group>
          </div>
          <div class="text">
            <div class="title-a">问题描述</div>
            <div>
              <van-field
                v-model="describe"
                rows="4"
                autosize
                type="textarea"
                placeholder="请输入描述的问题"
              />
            </div>
          </div>
          <div class="photo-all">
            <div class="title-a">上传截图</div>
            <div></div>
            <div class="photo">
              <div
                class="photoBox"
                v-for="(item, index) in picture"
                :key="index"
              >
                <img :src="item" style="width: 100%" />
                <i @click="removeImg(index)"></i>
              </div>
              <van-uploader
                :after-read="multipleMethod_1"
                :max-size="photosize"
                @oversize="onphotosize"
                multiple
              >
                <div class="upload-add" style="">
                  <img
                    :src="require('../../assets/images/up_icon.png')"
                    style="max-height:3rem;"
                    class="avatar"
                  />
                </div>
              </van-uploader>
            </div>
          </div>
          <div class="submit" @click="submitReport">提 交</div>
        </div>
      </van-popup>
      <!-- 举报提交成功 -->
      <div
        class="report-success"
        v-show="is_report_success"
        @click="is_report_success = false"
      >
        <div class="left"></div>
        <div class="content" @click.stop>
          <div class="icon">
            <i class="iconfont icon-pm_auction_success"></i>
          </div>
          <div class="success">提交成功</div>
          <div class="success-tip">您的举报已提交成功！</div>
          <div
            class="back"
            @click="
              is_report_success = false;
              is_report = false;
            "
          >
            返回
          </div>
        </div>
        <div class="left"></div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from "./supply_detail_controller";
export default controller;
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$red_color: #ff6333;
#supply {
  #content {
    .title-row {
      padding: 1rem 0.75rem;
      height: 4.5rem;
      line-height: 1.25rem;
      font-size: 0.8125rem;
      margin-bottom: 1rem;
      display: flex;
      .title {
        flex: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-weight: 600;
        text-align: left;
      }
      .title-right {
        flex: 0 0 4.5rem;
        text-align: right;
        .title-logo {
          text-align: right;
          font-size: 0.75rem;
          display: inline-block;
          color: #fff;
          background: $red_color;
          border-radius: 1rem;
          padding: 0rem 0.625rem;
        }
        .time {
          font-size: 0.75rem;
        }
      }
    }
    .price-row {
      padding: 1rem 0.75rem;
      line-height: 2rem;
      font-size: 0.8125rem;
      margin-bottom: 1rem;
      .price {
        display: flex;
        justify-content: center;
        .price-title {
          color: #333;
          flex: 1;
          text-align: left;
        }
        .price-num {
          color: #000;
          font-weight: 600;
          flex: 2;
          text-align: right;
        }
      }
    }
    .member-row {
      background: #fff;
      padding: 1rem 0.75rem;
      font-size: 0.8125rem;
      margin-bottom: 1rem;
      .title {
        text-align: left;
        font-size: 0.9375rem;
        font-weight: 600;
        padding-bottom: 0.5rem;
      }
      .member {
        display: flex;
        align-items: center;
        .left {
          display: flex;
          text-align: left;
          flex: 3;
          .img {
            text-align: left;
            flex: 0 0 2.75rem;
            height: 2.75rem;
            border-radius: 50%;
            img {
              width: 2.75rem;
              height: 2.75rem;
              border-radius: 50%;
            }
          }
          .name {
            padding-left: 0.5rem;
            line-height: 1.375rem;
            .store-name {
              height: 1.375rem;
              overflow: hidden;
              font-size: 0.875rem;
              color: #000;
            }
            .message {
              height: 1.375rem;
              overflow: hidden;
              color: #999;
              i {
                padding-right: 0.25rem;
                color: $red_color;
              }
            }
          }
        }
        .right {
          text-align: right;
          flex: 1;
          .title-logo {
            font-size: 0.8125rem;
            color: #fff;
            background: $red_color;
            border-radius: 1rem;
            display: inline-block;
            padding: 0.35rem 0.75rem;
          }
        }
      }
    }
    .product-row {
      background: #fff;
      padding: 1rem 0.75rem;
      font-size: 0.8125rem;
      margin-bottom: 1rem;
      .title {
        text-align: left;
        font-size: 0.9375rem;
        font-weight: 600;
        padding-bottom: 0.5rem;
      }
      .content {
        text-align: left;
        img {
          width: 100%;
        }
      }
      .img-lst {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .none {
        margin-top: 1rem;
        font-weight: 600;
        height: 5rem;
        line-height: 2rem;
      }
    }
    .bottom {
      text-align: left;
      background: #fff;
      border-top: 1px solid #ebebeb;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 3.125rem;
      .list {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        .list-a {
          text-align: center;
          flex: 0 0 3.5rem;
          font-size: 0.8125rem;
          font-weight: 600;
          i {
            font-size: 1.35rem;
            color: #999999;
          }
        }
        .list-b {
          text-align: center;
          flex: 2;
          background: #f99f2a;
          color: #fff;
          height: 100%;
          line-height: 3.125rem;
        }
      }
    }
    .share-fixed {
      position: fixed;
      color: #fff;
      font-size: 1.25rem;
      top: 0;
      opacity: 0.9;
      width: 100%;
      height: 100vh;
      z-index: 2003;
      text-align: right;
      background: #000;
      .img {
        width: 5rem;
        height: 7.6rem;
        text-align: right;
        margin-right: 2rem;
        margin-top: 1rem;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .word {
        font-size: 1rem;
        width: 12rem;
        line-height: 1.75rem;
        margin: 0 auto;
        text-align: left;
        .button {
          border: 2px solid #fff;
          border-radius: 0.5rem;
          padding: 0.375rem 1.5rem;
          text-align: center;
          margin-top: 10rem;
        }
      }
    }
    .report {
      .title {
        height: 2.5rem;
        line-height: 2.5rem;
        display: flex;
        width: 100%;
        border-bottom: 1px solid #ededed;
        background: #fff;
        color: #666;
        font-weight: 600;
        .left {
          padding-left: 0.5rem;
          flex: 1;
          text-align: left;
        }
        .content {
          flex: 2;
          text-align: center;
        }
      }
      .member {
        background: #fff;
        padding: 1.25rem 1rem;
        margin-bottom: 1rem;
        .list {
          display: flex;
          align-items: center;
          .img {
            flex: 0 0 2.5rem;
            height: 2.5rem;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .name {
            margin-left: 1rem;
            font-weight: 600;
            font-size: 0.875rem;
          }
        }
      }
      .form {
        background: #fff;
        padding: 1.25rem 1rem;
        text-align: left;
        .text {
          .title-a {
            height: 2.5rem;
            line-height: 2.5rem;
            background: #fff;
            color: #333;
            font-weight: 600;
          }
        }
        .photo-all {
          .title-a {
            height: 2.5rem;
            line-height: 2.5rem;
            background: #fff;
            color: #333;
            font-weight: 600;
          }
          .photo {
            display: flex;
            width: 100%;
            margin: 0.5rem 0;
            flex-wrap: wrap;
            .photoBox {
              width: 4.5rem;
              height: 4.5rem;
              border: 1px dashed #c0ccda;
              margin-right: 0.2rem;
              margin-left: 0.2rem;
              margin-bottom: 0.2rem;
              border-radius: 0.5rem;
              position: relative;
              img {
                border-radius: 0.5rem;
                width: 100%;
                height: 100%;
              }
              i {
                width: 1.2rem;
                height: 1.2rem;
                position: absolute;
                top: 0.1rem;
                right: 0.1rem;
                background: url("../../assets/images/close_iocn.png");
                background-size: 100%;
              }
            }
            .upload-add {
              border-radius: 0.5rem;
              padding-left: 0.75rem;
              padding-top: 0.75rem;
              width: 4.5rem;
              height: 4.5rem;
              border: 1px dashed #c0ccda;
            }
          }
        }
        .submit {
          width: 85%;
          margin: 1rem auto;
          padding: 0 0.5rem;
          color: #fff;
          border-radius: 2rem;
          background: #ff2b29;
          padding: 0.75rem 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          text-align: center;
        }
      }
    }
    .report-success {
      position: fixed;
      z-index: 2010;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      .left {
        flex: 1;
      }
      .content {
        border-radius: 1rem;
        flex: 5;
        height: 40%;
        background: #fff;
        padding: 1rem 0;
        .icon {
          i {
            font-size: 5rem;
            color: #ff2b29;
          }
        }
        .success {
          font-weight: 600;
          color: #000;
          font-size: 1.5rem;
          padding: 1rem 0;
        }
        .success-tip {
          color: #666;
          font-size: 0.875rem;
        }
        .back {
          width: 80%;
          margin: 1rem auto;
          background: $red_color;
          padding: 0.75rem 0;
          border-radius: 2rem;
          color: #fff;
        }
      }
    }
  }
}
.pcStyle .bottom {
  width: 375px !important;
}
</style>
