<template>
  <div id="distributor">
    <c-title :hide="false" :text="'下单'">
    </c-title>
    <div style="height: 40px"></div>
    <div class="head-bg">
      <p style="font-weight: bold;font-size: 16px;">下单</p>
      <p>共{{order_data.length}}件商品</p>
    </div>

    <div class="address-box" @click="showAddress">
      <div>
        <p class="name"><span>收件人:{{realname}}</span> <span>{{mobile}}</span></p>
        <p class="address">地址：{{address}}</p>
      </div>
      <div style="display: flex;align-self: center;">
        <i class="iconfont icon-advertise-next"></i>
      </div>
    </div>
    <div v-for="(item, index) in order_data" :key="index">
      <ul class="goods-box">

          <li v-for="(items, indexs) in item.order_goods" :key="indexs">
            <div class="left">
              <img
                :src="items.thumb"
                alt="">
            </div>
            <div class="right">
              <p class="title">{{items.title}}</p>
              <p class="bottom"><span class="stock">规格:{{items.goods_option_title}}</span> <span class="number">x{{items.total}}</span></p>
            </div>
          </li>
      </ul>
      <div class="talk-box">
        <p class="title">留言</p>
        <input placeholder="50字以内（选填）"
              v-model.lazy="note[item.pre_id]"
              @change="noteHandle($event, item, note[item.pre_id])"
              maxlength="50"
              type="text"
              title="" />
      </div>
    </div>


    <div class="car-btn" :style="{width: fun.getPhoneEnv() == 3 ?'375px':''}"
         :class="[fun.getPhoneEnv() == 3 ? 'pcStyle':'']">
      <div class="buy" @click="submit">确认下单</div>
    </div>
    <yd-popup v-model="popupSpecs"
              position="bottom"
              class="mint-popup-4"
              closeOnClickModal="true">
      <div class="add-info">
        <ul>
          <li v-for="(item,i) in addressData"
              :key='i'
              @click="selectAddress(item)">
            <div class="liia">
              <span class="name"
                    style="">
                {{ item.username + " " + item.mobile }}
              </span>
              <p class="address"
                 style=""
                 v-if="item.street">
                {{
                item.province +
                " " +
                item.city +
                " " +
                item.district +
                "" +
                item.street
                }}
                {{ item.address }}
              </p>
              <p class="address"
                 style=""
                 v-else>
                {{ item.province + " " + item.city + " " + item.district }}
                {{ item.address }}
              </p>
            </div>
            <p class="edit_btn"
               v-if="item.isdefault"
               @click="editAddress">
              编辑
            </p>
            <!--<i class="fa fa-trash-o"></i>-->
          </li>
        </ul>
      </div>
      <button class="address-plus"
              type="button"
              @click="addAddress">
        新增地址
      </button>
    </yd-popup>
    <transition name="scale">
      <div class="m-dialog"
           v-if="popAddAddress"
           :style="isResize ? 'position: absolute' : 'position: fixed'">
        <div>
          <div class="popHeader">
            <i class="mintui mintui-back"
               @click="popAddressClose"></i>
            <p>添加地址</p>
          </div>
          <div style="height: 2.5rem;"></div>
          <div class="address_a">
            <ul>
              <li>
                <span>收件人：</span>
                <input type="text"
                       v-model="form.username"
                       maxlength="20"
                       placeholder="请输入收件人" />
              </li>
              <li>
                <span>联系电话：</span>
                <input type="tel"
                       v-model="form.mobile"
                       placeholder="请输入联系电话" />
              </li>
            </ul>
          </div>
          <yd-cell-group>
            <yd-cell-item>
              <span slot="left">设置默认地址：</span>
              <span slot="right">
                <mt-switch v-model="form.isDefault"></mt-switch>
              </span>
            </yd-cell-item>
          </yd-cell-group>

          <yd-cell-group>
            <yd-cell-item arrow>
              <span slot="left">所在地区：</span>
              <input slot="right"
                     type="text"
                     @click.stop="addressShow = true"
                     v-model="addressName"
                     readonly
                     placeholder="请选择收货地址"
                     onfocus="blur();" />
            </yd-cell-item>
            <yd-cell-item arrow
                          v-if="strShow">
              <span slot="left">街道：</span>
              <input slot="right"
                     type="text"
                     @click.stop="streetChoose"
                     v-model="form.street"
                     readonly
                     placeholder="请选择街道"
                     onfocus="blur();" />
            </yd-cell-item>
          </yd-cell-group>

          <div class="text_adderss">
            <input @focus="isFocus()"
                   @blur="isBlur"
                   placeholder="请输入详细地址"
                   v-model="form.address"
                   maxLength="100" />
          </div>

          <div class="adderss_btn"
               v-if="create"
               @click="appendAddress">
            <button type="button"><i class="fa fa-plus-circle"></i>保存</button>
          </div>
          <div class="adderss_btn"
               v-if="!create"
               @click="appendAddress('update')">
            <button type="button">编辑</button>
          </div>
        </div>
      </div>
    </transition>

    <yd-cityselect v-model="addressShow"
                   :callback="addressCallback"
                   :items="district"></yd-cityselect>

    <transition name="move">
      <div class="m-dialog1"
           v-if="streetShow">
        <yd-navbar title="选择街道"
                   height="2.5rem"
                   fontsize="14px"
                   fixed>
          <span slot="left">
            <yd-navbar-back-icon @click.native="streetShow = false"></yd-navbar-back-icon>
          </span>
        </yd-navbar>
        <div style="clear:both;margin-top:2.5rem;"></div>

        <yd-cell-item v-for="(item,i) in districtVal"
                      :key='i'
                      @click.native="streetConfirm(item.areaname)">
          <span slot="left">{{ item.areaname }}</span>
        </yd-cell-item>
      </div>
    </transition>
  </div>
</template>

<script>
  import place_order_controller from "./place_order_controller";
  export default place_order_controller;
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  #distributor {
    background: #FFFFFF;
    min-height: 100vh;
  }

  .head-bg {
    background-image: url("../../assets/images/kc_orderbg@2x.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 6.25rem;
    color: #FFFFFF;
    text-align: left;
    padding: 1rem;
  }

  .address-box {
    width: 90%;
    min-height: 5.844rem;
    background-color: #ffffff;
    box-shadow: 0rem 0rem 0.563rem 0rem rgba(120, 120, 120, 0.27);
    border-radius: 5px;
    position: absolute;
    top: 6.5rem;
    left: 5%;
    display: flex;
    text-align: left;
    padding: 0.7rem;
    .name {
      display: flex;
      margin-bottom: 0.5rem;
      font-weight: bold;
      span {
        flex: 1;
      }
      span:last-child {
        text-align: right;
      }
    }
    .icon-advertise-next {
      font-size: 24px;
      font-weight: bold;
      color: #999999;
    }
  }

  .goods-box {
    padding: 1rem;
    margin-top: 3.5rem;
    text-align: left;
    li {
      display: flex;
      margin-bottom: 0.5rem;
      .left {
        flex: 0 0 4rem;
        img {
          width: 4rem;
          height: 4rem;
          border-radius: 5px;
        }
      }
      .right {
        margin-left: 0.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0.2rem;
        justify-content: space-between;
        .title {
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .bottom {
          display: flex;
        }
        .stock {
          color: #9f9f9f;
          flex: 1;
        }
        .number {
          flex: 1;
          text-align: right;
        }
      }
    }

  }

  .talk-box {
    text-align: left;
    padding:0 1rem 1rem;
    .title {
      font-weight: bold;
    }
    input {
      background-color: #f8f8f8;
      border: none;
      outline: none;
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      margin-top: 0.5rem;
      padding: 0 0.5rem;
      border-radius: 5px;
    }
  }

  .car-btn {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    border-top: 1px solid #eeeeee;
    padding: 0.5rem 1rem;
    .buy {
      font-weight: bold;
      width: 5.125rem;
      height: 2rem;
      line-height: 2rem;
      background-image: linear-gradient(90deg,
        #f74c4c 0%,
        #f20b0b 100%),
      linear-gradient(
          #000000,
          #000000);
      background-blend-mode: normal,
      normal;
      border-radius: 1rem;
      color: #FFFFFF;
      margin-left: 75%;
    }
  }
  .add-info {
    overflow-y: scroll;
    width: 100%;
    background: #fff;
    max-height: 50vh;
    padding-top: 0.625rem;
  }
  .mint-popup-4 {
    width: 100%;
    .sure {
      background: #f15353;
      height: 2.5rem;
      line-height: 2.5rem;
      color: #fff;
      width: 50%;
      border: 0;
      float: left;
    }
    .close {
      background: #eee;
      height: 2.5rem;
      line-height: 2.5rem;
      color: #333;
      width: 50%;
      border: 0;
      float: left;
    }
    .address-plus {
      background: #f15353;
      height: 2.5rem;
      line-height: 2.5rem;
      color: #fff;
      width: 100%;
      border: 0;
    }
    ul {
      overflow-y: scroll;
    }
    li {
      padding: 0.625rem 0;
      display: flex;
      position: relative;
      .edit_btn {
        margin-top: 8px;
        margin-right: 2rem;
        height: 2rem;
        line-height: 2rem;
        flex: 0 0 3rem;
        background: #f15353;
        color: #fff;
        border-radius: 10px;
      }
      .liia {
        width: 100%;
        padding-right: 1.25rem;
        flex: 1;
        text-align: left;
        padding-left: 1.25rem;
        display: flex;
        flex-direction: column;
        .name {
          font-size: 18px;
          color: #222;
          line-height: 2rem;
        }
        .address {
          word-break: break-word;
          width: 100%;
          font-size: 12px;
          color: #666;
          line-height: 1.2rem;
        }
      }
      i {
        flex: 1;
      }
    }
  }
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .scale-enter,
  .scale-leave-to {
    transform: scale(1.5);
    opacity: 0;
  }

  .move-enter-active,
  .move-leave-active {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .move-enter,
  .move-leave-to {
    /*transform: translate(10px, 0);*/
    opacity: 0;
  }
  .m-dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 150%;
    z-index: 100;
    background: #f5f5f5;
  }
  .m-dialog1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 120%;
    z-index: 100;
    background: #ffffff;
  }
  .popHeader {
    position: absolute;
    top: 0;
    width: 100%;
    height: 2.5rem;
    background: white;
    display: flex;
    font-size: 16px;
    text-align: center;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    p {
      font-weight: bold;
      flex: 1;
      align-self: center;
    }
    i {
      padding: 0.5rem;
      align-self: center;
      flex: 0 0 1.5rem;
    }
  }
  input{
    border: none;
  }
  .text_adderss {
    background-color: #fff;
    input {
      text-wrap: unset;
      padding: 0.625rem 0.875rem;
      font-size: 14px;
      line-height: 1.5rem;
      width: 100%;
      min-height: 3.25rem;
    }
  }
  .adderss_btn {
    margin: 1.25rem auto;
    button {
      width: 18.75rem;
      height: 2.8125rem;
      border-radius: 0.3125rem;
      background: #f15353;
      color: #fff;
      padding: 0;
      border: none;
      i {
        font-size: 1.125rem;
        margin-right: 0.375rem;
      }
    }
  }
  // 新css
  .address_a,
  .address_b {
    background-color: #fff;
    padding-left: 14px;
    margin-top: 10px;
    li {
      height: 3.125rem;
      line-height: 3.125rem;
      padding-right: 14px;
      /*border-bottom:solid 0.0625rem #ebebeb;*/
      display: flex;
      align-items: center;
      font-size: 16px;
    }
    li:last-child {
      border: none;
    }
  }
  .pcStyle {
    left: 50%;
    transform: translateX(-50%);
  }
</style>
