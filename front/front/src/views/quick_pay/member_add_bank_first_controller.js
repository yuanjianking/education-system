import cTitle from 'components/title';
import { MessageBox, Indicator, Toast } from "mint-ui";
export default {
  data() {
    return {
      name:'',
      num:'',
      bank:[],
      info:{},
    }
  },

  activated() {
    this.initData();
    this.getInfo();
    this.getBank();
  },

  mounted() {

  },
  methods: {
    initData(){
      this.name='';
      this.num='';
      this.bank=[];
      this.info={};
    },
    getBank(){
      $http.get("plugin.converge_pay.frontend.controllers.quick-pay-bank-card.index", {}, "").then(response => {
        if (response.result == 1) {
          this.bank=response.data;
        } else {
          this.bank=[];
        
        }
      }).catch(error => {
        console.log(error);
      });
    },
    next(){
      if (this.fun.isTextEmpty(this.num)) {
        Toast("请输入卡号");
        return 
      }
      this.$router.push(this.fun.getUrl("memberaddBankSecond", { card_no: this.num , order_pay_id:this.$route.params.order_pay_id }));
    },
    getInfo(){
      $http.get("plugin.converge_pay.frontend.controllers.quick-pay-bank-card.get-payer-info", {}, "").then(response => {
        if (response.result == 1&&response.data) {
          this.info=response.data;
        } else {
        }
      }).catch(error => {
        console.log(error);
      });
    },
  },
  components: { cTitle }
}