<template>
  <div
    id="supply_demand"
    :class="[this.fun.getPhoneEnv() == 3 ? 'pcStyle' : '']"
  >
    <c-title :hide="false" :text="getSet.financial_services_custom_name+'申请'"></c-title>
    <div id="content">
      <div class="all">
        <div class="banner">
          <img :src="getSet.banner_thumb" alt="" />
        </div>
        <div class="list">
          <div class="title">请填写以下信息</div>
          <div class="type">
            <div
              class="type-a"
              @click="changeType(1)"
              :class="type_id == 1 ? 'type-a-selected' : ''"
            >
              {{ name1 }}
            </div>
            <div
              class="type-a"
              @click="changeType(2)"
              :class="type_id == 2 ? 'type-a-selected' : ''"
            >
              {{ name2 }}
            </div>
            <div
              class="type-a"
              @click="changeType(3)"
              :class="type_id == 3 ? 'type-a-selected' : ''"
            >
              {{ name3 }}
            </div>
          </div>
          <div class="form" v-if="!is_open_diyform">
            <div class="input-row">
              <div class="name">
                公司名称
              </div>
              <van-field
                v-model="corporate_name"
                placeholder="请输入公司名称"
              />
            </div>
            <div class="input-row">
              <div class="name">
                融资金额
              </div>
              <van-field v-model="amount" placeholder="请输入融资金额" />
            </div>
            <div class="input-row">
              <div class="name">
                联系人
              </div>
              <van-field v-model="name" placeholder="请输入联系人姓名" />
            </div>
            <div class="input-row">
              <div class="name">
                联系电话
              </div>
              <van-field v-model="telephone" placeholder="请输入联系电话" />
            </div>
          </div>
          <div v-else>
            <template v-for="item in diydata">
              <template v-if="item.type == 'diyinput'">
                <yd-cell-group>
                  <yd-cell-item>
                    <span slot="left">{{ item.data.tp_name }}：</span>
                    <yd-input
                      v-if="item.data.tp_must == 1"
                      slot="right"
                      required
                      v-model="item.value"
                      v-bind:placeholder="item.data.placeholder"
                    ></yd-input>
                    <yd-input
                      v-if="item.data.tp_must == 0"
                      slot="right"
                      v-model="item.value"
                      v-bind:placeholder="item.data.placeholder"
                    ></yd-input>
                  </yd-cell-item>
                </yd-cell-group>
              </template>

              <template v-if="item.type == 'diyusername'">
                <yd-cell-group>
                  <yd-cell-item>
                    <span slot="left">{{ item.data.tp_name }}：</span>
                    <yd-input
                      v-if="item.data.tp_must == 1"
                      slot="right"
                      required
                      v-model="item.value"
                      v-bind:placeholder="item.data.placeholder"
                    ></yd-input>
                    <yd-input
                      v-if="item.data.tp_must == 0"
                      slot="right"
                      v-model="item.value"
                      v-bind:placeholder="item.data.placeholder"
                    ></yd-input>
                  </yd-cell-item>
                </yd-cell-group>
              </template>

              <template v-if="item.type == 'diypwd'">
                <yd-cell-group>
                  <yd-cell-item>
                    <span slot="left">{{ item.data.tp_name }}：</span>
                    <yd-input
                      v-if="item.data.tp_must == 1"
                      slot="right"
                      type="password"
                      required
                      v-model="item.value"
                      v-bind:placeholder="item.data.placeholder"
                    ></yd-input>
                    <yd-input
                      v-if="item.data.tp_must == 0"
                      slot="right"
                      type="password"
                      v-model="item.value"
                      v-bind:placeholder="item.data.placeholder"
                    ></yd-input>
                  </yd-cell-item>
                </yd-cell-group>
              </template>

              <template v-if="item.type == 'diytextarea'">
                <yd-cell-group :title="item.data.tp_name">
                  <yd-cell-item>
                    <yd-textarea
                      slot="right"
                      v-model="item.value"
                      :placeholder="item.data.placeholder"
                      maxlength="100"
                    ></yd-textarea>
                  </yd-cell-item>
                </yd-cell-group>
              </template>

              <template v-if="item.type == 'diycheckbox'">
                <yd-cell-group :title="item.data.tp_name">
                  <yd-cell-item
                    type="checkbox"
                    v-for="(ck, index) in item.data.tp_text"
                    :key="ck"
                  >
                    <span slot="left">{{ ck }}</span>
                    <input
                      slot="right"
                      type="checkbox"
                      :value="ck"
                      v-model="item.value"
                    />
                  </yd-cell-item>
                </yd-cell-group>
              </template>

              <template v-if="item.type == 'diyselect'">
                <yd-cell-group>
                  <yd-cell-item arrow type="label">
                    <span slot="left">{{ item.data.tp_name }}：</span>
                    <select slot="right" v-model="item.value">
                      <option value="">请选择{{ item.data.tp_name }}</option>
                      <option
                        :value="sitem"
                        :key="sitem"
                        v-for="sitem in item.data.tp_text"
                        >{{ sitem }}
                      </option>
                    </select>
                  </yd-cell-item>
                </yd-cell-group>
              </template>

              <template v-if="item.type == 'diyradio'">
                <yd-cell-group :title="item.data.tp_name">
                  <yd-cell-item
                    type="radio"
                    :key="ritem"
                    v-for="ritem in item.data.tp_text"
                  >
                    <span slot="left">{{ ritem }}</span>
                    <input
                      slot="right"
                      type="radio"
                      :value="ritem"
                      v-model="item.value"
                    />
                  </yd-cell-item>
                </yd-cell-group>
              </template>

              <template v-if="item.type == 'diyimg'">
                <yd-cell-group :title="item.data.tp_name">
                  <div
                    class="clearfloat"
                    style="width:100%;text-align:left;line-height:5rem;"
                  >
                    <template
                      v-for="(val, index) in item[item.name + 'Value2']"
                    >
                      <div class="photobox" style="float:left;max-width: 25%;">
                        <img :src="val.url" style="max-width:5rem" />
                        <van-icon
                          @click="removeImg_1(item, index)"
                          name="close"
                          style="width: 1.2rem;height: 1.2rem;position: absolute;top: 0.1rem;right: 0.1rem;color:red;font-weight:900;"
                        />
                      </div>
                    </template>
                    <div @click="chooseUpload(item.name)">
                      <van-uploader
                        :disabled="
                          item[item.name + 'Length'].length >= item.data.tp_max
                        "
                        :after-read="onRead_2"
                      >
                        <div
                          style="padding-left:1rem;padding-top:1rem;width: 5rem;height: 5rem; border: 1px dashed #c0ccda;"
                        >
                          <img
                            :src="require('../../assets/images/up_icon.png')"
                            style="max-height:3rem;"
                            class="avatar"
                          />
                        </div>
                      </van-uploader>
                    </div>
                  </div>
                </yd-cell-group>
              </template>

              <template v-if="item.type == 'diycity'">
                <div>
                  <yd-cell-group>
                    <yd-cell-item arrow>
                      <span slot="left">{{ item.data.tp_name }}：</span>
                      <input
                        slot="right"
                        type="text"
                        @click.stop="showCity = true"
                        @click="openCity(item.name)"
                        v-model="item.value"
                        readonly
                        :placeholder="item.data.tp_name"
                      />
                    </yd-cell-item>
                  </yd-cell-group>
                </div>
              </template>

              <template v-if="item.type == 'diydate'">
                <yd-cell-group>
                  <yd-cell-item @click.native="openPicker(item.name)">
                    <span slot="left">{{ item.data.tp_name }}</span>
                    <span slot="right">{{ item.value }}</span>
                  </yd-cell-item>
                </yd-cell-group>
              </template>
            </template>
          </div>
          <div v-if="!is_open_diyform" class="submit" @click="submitForm">
            立即申请
          </div>
          <div v-else class="submit" @click="submit">
            立即申请
          </div>
        </div>
      </div>
    </div>
    <div class="report-success" v-show="is_submit_success" @click="gotoLast">
      <div class="left"></div>
      <div class="content" @click.stop>
        <div class="icon">
          <i class="iconfont icon-pm_auction_success"></i>
        </div>
        <div class="success">提交成功</div>
        <div class="success-tip">申请提交成功！</div>
        <div class="back" @click="gotoLast">
          返回
        </div>
      </div>
      <div class="left"></div>
    </div>
    <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="setDate"
      v-model="pickerValue"
    >
    </mt-datetime-picker>

    <yd-cityselect
      v-model="showCity"
      :callback="setCity"
      :items="district"
    ></yd-cityselect>
  </div>
</template>

<script>
import controller from "./financial_apply_controller";
export default controller;
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$red_color: #ff2c29;
#tool ul li {
  width: 100% !important;
  padding-left: 0.75rem !important;
}

.yd-cell-title {
  height: 2.5rem !important;
  line-height: 2.5rem !important;
}

.yd-cell-box {
  margin-bottom: 0 !important;
}

.yd-btn-block {
  margin-top: 0.1875rem;
}

.introTitle {
  border-top: 0.0625rem solid #dedddd;
}

.yd-checkbox {
  padding-bottom: 0.625rem;
}

.intro {
  padding: 1.25rem;
}

.checkbox {
  background: #fff;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  border-bottom: 0.0625rem solid #ece9e9;
  text-align: left;
  padding-left: 0.75rem;
}

.photobox {
  position: relative;
  width: 5rem;
  height: 5rem;
  border: 1px dashed #c0ccda;
  /*float: left;*/
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  margin-bottom: 0.2rem;
  img {
    width: 100%;
    height: 100%;
  }
}

/*清除浮动代码*/
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}

.clearfloat {
  zoom: 1;
}
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
      .list {
        text-align: left;
        .title {
          font-size: 0.875rem;
          font-weight: 600;
          padding-bottom: 0.25rem;
        }
        .type {
          .type-a {
            padding: 0rem 0.75rem;
            margin-right: 0.5rem;
            border-radius: 2rem;
            display: inline-block;
            background: #fbfbfb;
            max-width: 30%;
            overflow: hidden;
            height: 1.75rem;
            line-height: 1.75rem;
            text-align: center;
          }
          .type-a-selected {
            background: $red_color;
            color: #fff;
          }
        }
        .form {
          padding: 0.5rem;
          font-size: 0.8125rem;
          /deep/ .van-cell {
            padding: 10px 0px;
            border-bottom: 1px solid #ebebeb;
          }

          .input-row {
            margin: 0.75rem 0;
            .name {
              font-size: 0.75rem;
              font-weight: 600;
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
</style>
