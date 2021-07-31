import cTitle from "components/title";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      supply: "供应信息管理",
      purchasing: "采购信息管理",
      supplyCount: 0,
      PurchasingCount: 0,
      supply_calls: 0,
      demand_calls: 0
    };
  },

  activated() {
    this.initData()
    this.getData();
  },
  watch: {},
  mounted() {},
  methods: {
    //初始化数据
    initData() {
      this.supply= "供应信息管理";
      this.purchasing= "采购信息管理";
      this.supplyCount= 0;
      this.PurchasingCount= 0;
      this.supply_calls= 0;
      this.demand_calls= 0;

    },
    getData() {
      let that = this;
      $http
        .post("plugin.supply-demand.api.index.InformationData", {
          myRelease: "myRelease"
        })
        .then(
          response => {
            if (response.result === 1) {
              // Toast(response.msg);
              let mypublish = response.data.myRelease;
              that.supply = mypublish.supply;
              that.purchasing = mypublish.purchasing;
              that.supplyCount = mypublish.supplyCount;
              that.PurchasingCount = mypublish.PurchasingCount;
              that.supply_calls = mypublish.list[0].has_many_supply?mypublish.list[0].has_many_supply[0].calls:0;
              that.demand_calls = mypublish.list[0].has_many_purchasing?mypublish.list[0].has_many_purchasing[0].calls:0;
            } else {
              console.error(response.msg);
              Toast(response.msg);
            }
          },
          function(response) {
            console.log(response);
          }
        );
    },
    gotoManage(type) {
      if (type == "supply") {
        this.$router.push(this.fun.getUrl("manage_supply"));
      } else if (type == "demand") {
        this.$router.push(this.fun.getUrl("manage_demand"));
      }
    }
  },
  components: { cTitle }
};
