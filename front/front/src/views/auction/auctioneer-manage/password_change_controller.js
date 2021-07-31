import cTitle from "components/title";
import { MessageBox } from "mint-ui";
import {
  Indicator,
  Toast
} from 'mint-ui';
export default {
  data() {
    return {
      switch1:false
    };
  },
  activated() {
    this.getData();
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    toSet(){
      this.$router.push(this.fun.getUrl("setPassword"));
    },
    //获取数据
    getData() {
      let json={
        art:'auctioneer'
      }
      $http
        .get(
          "plugin.auction.api.index.getAuctionData",json,"获取中"
        )
        .then(response => {
          if (response.result == 1) {
            this.switch1=response.data.auctioneer.is_pass==1?true:false;
          } else {
            MessageBox.alert(response.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    changePWD() {
      let json={status:this.switch1?1:0,art:'updateStatus'}
      $http
        .get(
          "plugin.auction.api.index.getAuctionData",json,"获取中"
        )
        .then(response => {
          if (response.result == 1) {
            Toast(response.data.updateStatus)
          } else {
            MessageBox.alert(response.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  components: {
    cTitle
  }
};
