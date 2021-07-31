import { Field, Button } from "mint-ui";
import { MessageBox,Toast } from "mint-ui";
import cTitle from "components/title";
export default {
  //name: 'login',
  data() {
    return {
      start1: false,
      imgcode: "",
      form: {
        country: "86",
        mobile: "",
        password: "",
        confirm_password: "",
        captcha: ""
      },
      mydata: ""
    };
  },

  components: {
    cTitle
  },
  mounted() {},

  methods: {
    verificationCode() {
      let that = this;
      if (this.fun.isTextEmpty(this.form.mobile)) {
        Toast("请填写手机号");
        return;
      }

      if (this.form.country == "86" && this.fun.isMoblie(this.form.mobile)) {
        Toast("请填写正确的手机号");
        return;
      }

      if (this.fun.isTextEmpty(this.form.captcha) && this.imgcode) {
        Toast("请填图形验证码");
      } else {
        this.$yddialog.loading.open("发送中...");
        //发送获取验证码的请求
        $http
          .get("member.register.sendCodeV2", {
            mobile: this.form.mobile,
            state: this.form.country,
            captcha: this.form.captcha,
            code: this.form.code,
            reset: "1",
            sms_type: 2
          })
          .then(
            response => {
              console.log(response);
              console.log("打印response");
              this.$yddialog.loading.close();
              if (response.result == 1) {
                that.sendCodeAnimation();
              } else {
                //刷新图形验证码
                this.form.captcha = "";
                this.getimgdata();
                Toast(response.msg);
                console.log("22");
              }
            },
            response => {
              console.log(response.msg);
            }
          );
      }
    },

    //发送验证码 倒计时
    sendCodeAnimation() {
      setTimeout(() => {
        this.start1 = true;
        this.$yddialog.loading.close();
        this.$yddialog.toast({
          mes: "已发送",
          icon: "success",
          timeout: 1500
        });
      }, 1000);
    },

    confirm() {
      if (this.fun.isTextEmpty(this.form.mobile)) {
        Toast("请填写手机号");
        return;
      }

      if (this.form.country == "86" && this.fun.isMoblie(this.form.mobile)) {
        Toast("请填写正确的手机号");
        return;
      }

      if (this.fun.isTextEmpty(this.form.code)) {
        Toast("请填验证码");
        return;
      }

      if (this.fun.isTextEmpty(this.form.password)) {
        Toast("请填写密码");
        return;
      }

      if (this.fun.isTextEmpty(this.form.password)) {
        Toast("请填写确认密码");
        return;
      }

      if (this.form.password != this.form.confirm_password) {
        Toast("两次密码不一致");
        return;
      }

      if (this.imgcode) {
        if (this.fun.isTextEmpty(this.form.captcha)) {
          Toast("图形验证码不能为空");
          return;
        }
      }
      let json={
        art:'setPassword',
        repeat:this.form.confirm_password,
        passwd:this.form.password,
        mobile:this.form.mobile,
        code:this.form.code
      }
      $http.post("plugin.auction.api.index.getAuctionData", json).then(
        response => {
          if (response.result == 1) {
            Toast(response.msg)
            this.$router.push(this.fun.getUrl("auctioneer"));
          } else {
            Toast(response.msg)
          }
        },
        response => {
          // error callback|
        }
      );
    },

    //获取图片验证码
    getimgdata() {
      $http
        .get("home-page.getCaptcha")
        .then(res => {
          this.imgcode = res.data.captcha.img;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  activated() {
    this.getimgdata();
  }
};
