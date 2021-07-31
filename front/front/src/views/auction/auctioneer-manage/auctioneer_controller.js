import cTitle from "components/title";
import { Toast, MessageBox, Indicator } from 'mint-ui'
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
    toPage(url) {
      this.$router.push(this.fun.getUrl(url));
    },   
    toOrder(){
      this.$router.push(this.fun.getUrl('auctionOrderlist',{ status: '0', orderType: 'auctioneer' }));
    },
    toMoney(){
      this.$router.push(this.fun.getUrl( 'myMoney',{},{from: 'auction'}));
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
