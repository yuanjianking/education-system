import cTitle from "components/title";
import {
  Indicator,
  Toast
} from 'mint-ui';
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      info:{},
    };
  },
  activated() {
    this.getData();
  },
  methods: {
    toIntergal(){
      this.$router.push(this.fun.getUrl("auctionLove"));
    },
    toCollect(){
      this.$router.push(this.fun.getUrl("auctionCollect"));
    },
    toAuction(id){
      this.$router.push(this.fun.getUrl("myAuction",{id:id}));
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
            this.info=response.data.auctioneer;
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
