import cTitle from "components/title";
import { MessageBox, Indicator, Toast } from "mint-ui";

export default {
  data() {
    return {
      getSet: {}
    };
  },

  activated() {
    this.getData();
  },
  watch: {},
  mounted() {},
  methods: {
    //初始化数据
    initData() {},

    getData() {
      let that = this;
      $http
        .post(
          "plugin.supply-demand.api.index.InformationData",
          {
            getSet: "getSet"
          },
          ""
        )
        .then(
          response => {
            if (response.result === 1) {
              let getSet = response.data.getSet;
              this.getSet = getSet;
              this.fun.setWXTitle(getSet.financial_services_custom_name);
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
    gotoDetail(type) {
      this.$router.push(this.fun.getUrl("financial_detail",{type:type}));
    },
    gotoApply(x) {
      this.$router.push(this.fun.getUrl("financial_apply",{type:x}));
    }
  },
  components: { cTitle }
};
