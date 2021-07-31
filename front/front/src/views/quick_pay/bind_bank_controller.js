import cTitle from 'components/title';
import { MessageBox, Indicator, Toast } from "mint-ui";
export default {
  data() {
    return {
      payer_phone:'',
      card_id:'',
      start1: false,
    }
  },

  activated() {
    this.card_id=this.$route.params.card_id;
    this.getInfo();
  },

  mounted() {

  },
  methods: {
    verificationCode() {
      let that = this;
      
        this.$yddialog.loading.open("发送中...");
        //发送获取验证码的请求
        $http
          .get("plugin.converge_pay.frontend.controllers.quick-pay-bank-card.bind-card", {
            card_id:this.card_id
          })
          .then(
            response => {
              this.$yddialog.loading.close();
              if (response.result == 1) {
                that.sendCodeAnimation();
              } else {
                Toast(response.msg);
              }
            },
            response => {
              console.log(response.msg);
            }
          );
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
    confirm(){
      let json={
        card_id:this.card_id,
        sms_code:this.sms_code,
      }
      $http.get("plugin.converge_pay.frontend.controllers.quick-pay-bank-card.confirm-bind-card", json, "").then(response => {
        if (response.result == 1) {
          Toast(response.msg);
          this.$router.push(this.fun.getUrl("chooseBank",{order_pay_id:this.$route.params.order_pay_id}));
        } else {
          Toast(response.msg);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    getInfo(){
      $http.get("plugin.converge_pay.frontend.controllers.quick-pay-bank-card.get-card", {card_id:this.card_id}, "").then(response => {
        if (response.result == 1) {
          this.payer_phone=response.data.payer_phone;
        } else {
          Toast(response.msg);
        }
      }).catch(error => {
        console.log(error);
      });
    }
  },
  components: { cTitle }
}