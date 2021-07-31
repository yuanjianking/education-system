import cTitle from "components/title";
import { Indicator, Toast, MessageBox } from "mint-ui";
export default {
  data() {
    return {
      status: "",
      info: "",
      list: [],
      formData: {
        userSts: 4
      }
    };
  },

  activated() {
    this.getData();
    // this.getStatus();
  },

  methods: {
    gotoMember() {
      this.$router.push(this.fun.getUrl("member", {}));
    },
    // getStatus() {
    //   $http
    //     .get("plugin.dragon-deposit.frontend.index.getConsumer", {}, " ")
    //     .then(response => {
    //       if (response.result === 1) {
    //         if (!this.fun.isTextEmpty(response.data)) {
    //           this.formData = response.data;
    //         }
    //       } else {
    //         MessageBox.alert(response.msg, "提示");
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    getData() {
      $http
        .get("plugin.dragon-deposit.frontend.lcg-merchant.balance", {}, " ")
        .then(response => {
          if (response.result === 1) {
            this.list = response.data.balance;
            this.info = response.data.member;
            this.formData = response.data.merchant;
          } else {
            MessageBox.alert(response.msg, "提示");
            MessageBox({
              title: "提示",
              message: "是否开通电子簿",
              showCancelButton: true
            }).then(action => {
              if (action == "confirm") {
                this.$router.push(this.fun.getUrl("chooseStatus"));
              } else {
                this.$router.push(this.fun.getUrl("member"));
              }
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    toChoose() {
      if (this.formData.userSts == 4) {
        this.$router.push(this.fun.getUrl("chooseStatus"));
      } else {
        if (this.formData.platRoleID == "001" && this.formData.userSts == 0) {
          this.$router.push(this.fun.getUrl("personModify"));
        } else if (
          this.formData.platRoleID != "001" &&
          this.formData.userSts == 0
        ) {
          this.$router.push(this.fun.getUrl("companyModify"));
        } else if (this.formData.userSts == -1 || this.formData.userSts == 3) {
          this.$router.push(this.fun.getUrl("checking"));
        } else if (this.formData.userSts == 6) {
          this.$router.push(
            this.fun.getUrl("failApply", {
              info: this.formData.rstMess
            })
          );
        }
      }
    },
    toPwd() {
      this.$router.push(this.fun.getUrl("changePwd"));
    },
    toDetail() {
      this.$router.push(this.fun.getUrl("walletDetail"));
    },
    towithdraw() {
      this.$router.push(this.fun.getUrl("dragonWithdraw"));
    },
    toDeposit() {
      this.$router.push(this.fun.getUrl("dragonDeposit"));
    },
    toBank() {
      this.$router.push(this.fun.getUrl("myBank"));
    },
    toInfo() {
      this.$router.push(this.fun.getUrl("infoChange"));
    }
  },
  components: { cTitle }
};
