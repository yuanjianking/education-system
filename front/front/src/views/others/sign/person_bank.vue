<template>
  <div class="form">
    <c-title :hide="false" :text="showPhone? '个人手机号认证':'个人银行卡号认证'">
    </c-title>
    <div style="height: 40px"></div>
    <div class="agree-box" v-if="step === 1">
      <img style="width: 8rem;height: 8rem;margin: 1.5rem 1.5rem 1rem 1.5rem" src="../../../assets/images/sign/yq_sign_renzheng@2x.png" alt="">
      <div style="padding: 10px" v-html="agreement.auth_notice_desc"></div>
      <div style="display: inline-block;margin-top: 1rem">
        <van-checkbox-group v-model="checkboxGroup" direction="horizontal" style="display: flex;font-size: 12px">
          <van-checkbox name="1">我已阅读并同意</van-checkbox><span class="link" @click="protocolShow = true">《实名认证服务协议》</span>
        </van-checkbox-group>
      </div>
      <div class="btn" :class="[checkboxGroup.length >= 1?'':'disabled']" @click="toStep">开始认证</div>
    </div>
    <template v-if="step === 2">
      <div class="content">
        <van-form @submit="onSubmit">
          <van-field
            v-model="form.name"
            name="姓名"
            label="姓名"
            placeholder="请填写姓名"
            :rules="[{ required: true, message: '请填写姓名' }]"
          />
          <van-field
            v-model="form.id_no"
            name="身份证号"
            label="身份证号"
            placeholder="请填写身份证号"
            :rules="[{ required: true, message: '请填写身份证号' }]"
          />
          <van-field
            v-if="!showPhone"
            v-model="bank_no"
            name="个人银行卡号"
            label="个人银行卡号"
            placeholder="请填写个人银行卡号"
            :rules="[{ required: true, message: '请填写个人银行卡号' }]"
          />
          <van-field
            v-model="form.tel"
            name="手机号"
            label="手机号"
            placeholder="请填写手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
          />
          <van-field
            v-model="authcode"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" size="small" round plain type="info" @click="sureIdentify" v-show="this.count<= 0">
              获取验证码
            </van-button>
            <van-button slot="button" size="small" round plain type="info" disabled v-show="this.count> 0">
              {{count}}秒后重新获取
            </van-button>
          </van-field>

        </van-form>
      </div>
      <div class="btn" @click="sendCode">立即认证</div>
      <p class="blue-txt" v-if="!showPhone" @click="clear">使用手机号码认证</p>
      <p class="blue-txt" v-if="showPhone" @click="clear">使用银行卡认证</p>
    </template>

    <van-popup :overlay="false" v-model="protocolShow" position="right" style="width: 100%;height: 100%">
      <div class="protocolcontent">
        <van-nav-bar
          title="实名认证服务协议"
          left-text="返回"
          right-text=""
          left-arrow
          @click-left="protocolShow = false"
          style="position: sticky;top: 0;"
        />
        <div style="padding: 10px" v-html="agreement.auth_agreement_desc">

        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import cTitle from "components/title";
  import { Toast, MessageBox } from "mint-ui";

  export default {
    data() {
      return {
        step: 1,
        checkboxGroup: [],
        protocolShow: false,
        agreement: {},
        showPhone: false,
        form: {
          name: "",
          id_no: "",
          tel: ""
        },
        authcode: "",
        bank_no: "",
        flow_id: "",
        count: "",
        timer: null
      };
    },
    activated() {
      this.step = 1;
      this.checkboxGroup = [];
      this.getPersonData();
      this.getAgreement();
      this.clear();
      this.showPhone = true;
    },
    methods: {
      clear() {
        this.form = {
          name: "",
          id_no: "",
          tel: ""
        };
        this.authcode = "";
        this.bank_no = "";
        this.flow_id = "";
        this.count = 0;
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.showPhone = !this.showPhone;
      },
      toStep() {
        if(this.checkboxGroup.length >= 1) {
          this.getMemberData();
          this.step = 2;
        }else {
          MessageBox.alert('请先同意并勾选协议')
        }
      },
      onSubmit() {
        console.log("submit", this.form);
      },
      getMemberData() {
        $http
          .post("plugin.yun-sign.frontend.h5.person.get-person-auth-info", {}, "...").then(response => {
            if (response.result === 1) {
              this.form.name = response.data.name;
              this.form.tel = response.data.tel;
            } else {
              Toast(response.msg);
            }
          },
          response => {
            console.log(response.msg);
          }
        );
      },
      getPersonData() {
        $http
          .get("plugin.yun-sign.frontend.person.check-person-approve", {}, "...").then(response => {
            if (response.result === 1) {
              this.person = response.data;
              if(this.person.status == 'SUCCESS') {
                this.$router.push(this.fun.getUrl("identifyResult",{show: 'person'}));
              }
            } else {
              Toast(response.msg);
            }
          },
          response => {
            MessageBox.alert(response.msg);
          }
        );
      },
      getAgreement() {
        $http
          .post("plugin.yun-sign.frontend.person.get-agreement").then(response => {
            if (response.result === 1) {
              this.agreement = response.data;
            } else {
              Toast(response.msg);
            }
          },
          response => {
            MessageBox.alert(response.msg);
          }
        );
      },
      sureIdentify() {
        let url = "";
        let json = {};
        const TIME_COUNT = 60;
        if (this.showPhone) {
          url = "plugin.yun-sign.frontend.person.auth-tel";
          json = this.form;
        } else {
          url = "plugin.yun-sign.frontend.person.auth-bank-card";
          this.form.bank_no = this.bank_no;
          json = this.form;
        }
        $http
          .post(url, json, "...").then(response => {
            if (response.result === 1) {
              Toast("已发送");
              this.flow_id = response.data.data.flowId;
              if (!this.timer) {
                this.count = TIME_COUNT;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000);
              }
            } else {
              Toast(response.msg);
            }
          },
          response => {
            MessageBox.alert(response.msg);
          }
        );
      },
      sendCode() {
        if (!this.flow_id) {
          Toast("请先获取验证码");
          return;
        }
        let url = "";
        let json = {};
        if (this.showPhone) {
          url = "plugin.yun-sign.frontend.person.check-tel-sms-code";
          json = {
            flow_id: this.flow_id,
            authcode: this.authcode
          };
        } else {
          url = "plugin.yun-sign.frontend.person.check-bank-sms-code";
          this.form.bank_no = this.bank_no;
          json = {
            flow_id: this.flow_id,
            authcode: this.authcode
          };
        }
        $http
          .post(url, json, "...").then(response => {
            if (response.result === 1) {
              MessageBox.alert(response.msg);
              this.$router.push(this.fun.getUrl("identifyResult",{show: 'person'}));
            } else {
              Toast(response.msg);
            }
          },
          response => {
            MessageBox.alert(response.msg);
          }
        );
      }
    },
    components: { cTitle }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .form {
    background: #FFFFFF;
    height: 100vh;
  }

  .content {
    font-weight: bold;
  }

  .btn {
    margin: 40px auto 20px auto;
    color: #FFFFFF;
    width: 18.75rem;
    height: 2.25rem;
    line-height: 2.25rem;
    background-image: linear-gradient(0deg, #377aff 0%, #679aff 100%);
    border-radius: 20px;
  }

  .blue-txt {
    text-align: center;
    color: #377aff;
  }

  .link {
    color: #4784ff;
  }

  .disabled {
    background-image: linear-gradient(0deg, #d2d2d2 0%, rgba(210, 210, 210, 0.64) 100%)!important;
  }
</style>
