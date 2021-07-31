import { Field, Button } from "mint-ui";
import { MessageBox } from "mint-ui";
import cTitle from "components/title";

export default {
  data() {
    return {
      subquotient: "",
      legalpersonName: "",
      idNumber: "",
      handset: "",
      cardNumber: "",
      networktype: "",
      auditRemarks: "",
      btnStatusText: "",
      protocolBtnshow: false,
      bankCardbtnshow: false,
      reapplyBtnshow: false,
      //入网申请状态
      mer_type: "",
      show2: false,
      beizhushow: false,
      //协议内容
      protocol_content: "",
      // status: 1 和 3是成功  2 和-1  -2 失败
      status: 1
    };
  },
  methods:{
      getAccessDetails() {
        $http.get("plugin.yop-pro.frontend.yop-apply.get-merchant", {}).then(response => {
          if (response.result == 1) {
            let requestData = response.data.request_parameter;
            let mark = response.data.mark;
            this.status = response.data.status;
            this.subquotient = response.data.merchantNo;
            this.legalpersonName = requestData.legalName;
            this.idNumber = requestData.legalIdCard;
            this.handset = requestData.merLegalPhone;
            this.cardNumber = requestData.cardNo;
            this.mer_type = response.data.mer_type;
            if (response.data.mer_type == 1) {
              this.protocolBtnshow = false;
              this.networktype = "企业 ";
            } else if (response.data.mer_type == 2) {
              this.protocolBtnshow = true;
              this.networktype = "个体商户 ";
            } else if (response.data.mer_type == 3) {
              this.protocolBtnshow = true;
              this.networktype = "个人 ";
            }
            this.auditRemarks = requestData.remark;
            this.btnStatusText = response.data.status_name;
            if (mark == 1) {
              this.reapplyBtnshow = false;
              this.bankCardbtnshow = false;
            } else if (mark == 2) {
              this.reapplyBtnshow = false;
              this.bankCardbtnshow = true;
            } else if (mark == 3) {
              this.protocolBtnshow = false;
              this.beizhushow = true;
              this.reapplyBtnshow = true;
              this.bankCardbtnshow = false;
            }
          } else {
            MessageBox.alert(response.msg);
          }
        }).catch(error => {
          console.log(error);
        });
      },
      //数据初始化
      init() {
        this.subquotient = "";
        this.legalpersonName = "";
        this.idNumber = "";
        this.handset = "";
        this.cardNumber = "";
        this.networktype = "";
        this.auditRemarks = "";
        this.btnStatusText = "";
        this.protocolBtnshow = false;
        this.bankCardbtnshow = false;
        this.reapplyBtnshow = false;
        //入网申请状态
        this.status = 1;
        this.mer_type = "";
        this.show2 = false;
      },
      sendCode() {
        $http.get("plugin.yop-pro.frontend.yop-apply.fa", {}, "数据加载中").then(response => {
          if (response.result == 1) {
            MessageBox.alert(response.msg);
          } else {
            MessageBox.alert(response.msg);
          }
        }).catch(error => {
          console.log(error);
        });
      },
      //重新申请
      reapplyBtn() {
        if (this.mer_type == 1) {
          this.$router.push(this.fun.getUrl("CompanyEdit", {}));
        } else if (this.mer_type == 2) {
          this.$router.push(this.fun.getUrl("IndividualEdit", {}));
        }
      },
      //修改结算银行卡
      bankCardbtn() {
        this.$router.push(this.fun.getUrl("AggregateBankCardSet", {}));
      },
      //协议内容
      protocolBtn() {
        $http.get("plugin.yop-pay.api.merchant.agreementContent", {}, "数据加载中").then(response => {
          this.show2 = true;
          if (response.result == 1) {
            let responseData = response.data;
            this.protocol_content = responseData;
          } else {
            MessageBox.alert(response.msg);
          }
        }).catch(error => {
          this.show2 = true;
          console.log(error);
        });
      },
      //
      popClose() {
        this.show2 = false;
      }
    },
  activated() {
    this.init();
    this.getAccessDetails();
  },
  components: { cTitle }
};
