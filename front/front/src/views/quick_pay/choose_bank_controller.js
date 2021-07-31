import cTitle from 'components/title';
import { Indicator, Toast } from "mint-ui";
export default {
  data() {
    return {
      bank:[],
      show1:false,
      arr:[],
      amount:'',
      pay_sn:'',
      bank_name:'',
      code:'',
      order_pay_sn:'',
      payer_phone:'',
      pay_type:'',
      card_no:'',
      start1: false
    }
  },

  activated() {
    this.initData();
    this.getType();
   
  },

  mounted() {

  },
  methods: {
    initData(){
      this.bank=[];
      this.show1=false;
      this.arr=[];
      this.amount='';
      this.pay_sn='';
      this.bank_name='';
      this.code='';
      this.order_pay_sn='';
      this.payer_phone='';
      this.pay_type='';
      this.card_no='';
      this.start1=false;
    },
    toPay(item){
      if(item.status==0&&this.pay_type==2){
        this.$router.push(this.fun.getUrl("bindBank", { card_id: item.id,order_pay_id:this.$route.params.order_pay_id }));
      }else{
          this.show1=true;
          this.card_no=item.card_no;
          this.quick_pay();
          this.getInfo(item.id);
      }
    },
    getType(){
      $http.get("plugin.converge_pay.frontend.controllers.quick-pay-bank-card.get-pay-type", {}, "").then(response => {
        if (response.result == 1) {
            this.pay_type=response.data.pay_type;
            this.getBank();
        } else {
          Toast(response.msg);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    getIconUrl(item) {
      let icon_url = "";
      if(item.status==0&&this.pay_type==2){
        icon_url = "default";
        return icon_url;
      }else{
        switch (item.bank_name) {
          case "中国工商银行":
            icon_url = "gongshang";
          break;
          case "中国银行":
            icon_url = "zhongguo";
          break;
          case "中信银行":
            icon_url = "zhongxin";
          break;
          case "上海银行":
            icon_url = "shanghai";
          break;
          case "中国建设银行":
            icon_url = "jianshe";
          break;
          case "光大银行":
            icon_url = "guangda";
          break;
          case "民生银行":
            icon_url = "mingsheng";
          break;
          case "北京银行":
            icon_url = "beijing";
          break;
          case "平安银行":
            icon_url = "pingan";
          break;
          case "交通银行":
            icon_url = "jiaotong";
          break;
          case "招商银行":
            icon_url = "zhaoshang";
          break;
          case "广发银行":
            icon_url = "guangfa";
          break;
          case "浦发银行":
            icon_url = "pufa";
          break;
          case "邮政银行":
            icon_url = "youzheng";
          break;
        }
        return icon_url;
      }
    },

    toAdd(){
      this.$router.push(this.fun.getUrl("addBankFirst",{order_pay_id:this.$route.params.order_pay_id}));
    },
    deleteBank(item){
      $http.get("plugin.converge_pay.frontend.controllers.quick-pay-bank-card.del", {card_id:item.id}, "").then(response => {
        if (response.result == 1) {
          Toast(response.msg);
          this.show1=false;
          this.getBank();
        } else {
          Toast(response.msg);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    quick_pay(){
      let that = this;
      $http
        .get("plugin.converge_pay.frontend.controllers.quick-pay.pay", {
          order_pay_id: this.$route.params.order_pay_id
        },"loading")
        .then(
          function(response) {
            if (response.result == 1) {
              that.amount=response.data.order_pay.amount;
              that.pay_sn=response.data.order_pay.pay_sn;
            } else {
              that.$dialog.alert({
                message: response.msg
              });
            }
          },
          function(response) {
            // error callback
          }
        );
    },
    verificationCode() {
      let that = this;
      
        this.$yddialog.loading.open("发送中...");
        //发送获取验证码的请求
        $http
          .get("order.merge-pay.conberge-quick-pay", {
            order_pay_id: this.$route.params.order_pay_id,
            card_no:this.card_no
          })
          .then(
            response => {
              this.$yddialog.loading.close();
              if (response.result == 1) {
                this.code=response.data.sms_code;
                this.order_pay_sn=response.data.order_pay_sn;
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
    pay(){
      $http.post("plugin.converge_pay.frontend.controllers.quick-pay.sms-pay", {sms_code:this.code,order_pay_sn:this.pay_sn}, "").then(response => {
        if (response.result == 1) {
          Toast(response.msg);
          this.show1=false;
          this.$router.push(this.fun.getUrl("member"));
        } else {
          Toast(response.msg);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    getInfo(id){
      $http.get("plugin.converge_pay.frontend.controllers.quick-pay-bank-card.get-card", {card_id:id}, "").then(response => {
        if (response.result == 1) {
          this.payer_phone=response.data.payer_phone;
          this.bank_name=response.data.bank_name;
        } else {
          Toast(response.msg);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    changeBank(str){
      var m=str.split("");
      var num='*'.repeat(str.length-4)
      m.splice(0,str.length-4,num);
      var s=m.join("");
      return s;
    },
    getBank(){
      $http.get("plugin.converge_pay.frontend.controllers.quick-pay-bank-card.index", {}, "").then(response => {
        if (response.result == 1) {
          
          this.bank=response.data;
          if(this.pay_type==2){
           this.arr=this.bank.filter((item) => {
             return item.status==1;
            });
          }else if(this.pay_type==1){
            this.arr=this.bank;
            if(this.arr.length==1){
          
              this.show1=true;
              this.card_no=this.arr[0].card_no;
              this.quick_pay();
              this.getInfo(this.arr[0].id)
            }
          }
        } else {
          this.bank=response.data;
          Toast(response.msg);
        }
      }).catch(error => {
        console.log(error);
      });
    },
  },
  components: { cTitle }
}