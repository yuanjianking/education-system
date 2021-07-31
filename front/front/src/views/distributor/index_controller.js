import cTitle from "components/title";
import { Toast, MessageBox } from "mint-ui";

export default {
  data() {
    return {
      memberInfo:{},
      statistic:{},
      recommend_award_name:'',
      contribute_award_name:'',
      service_award_name:'',
      equal_award_name:'',
      surpass_award_name:'',
      manage_award_name:'',
      is_open_freedom:1,
      is_open_exchange:1,
      is_open_recommend:0
    };
  },
  created(){
    this.getOpen();
    this.getData();
    this.getOpenRecommend();
  },
  activated() {
  },
  methods: {
    getData(){
      $http
        .post('plugin.channel.frontend.center.index',{},"").then(response => {
          if (response.result === 1) {
            this.memberInfo = response.data.member;
            this.statistic = response.data.statistic;
          } else {
            MessageBox.alert(response.msg, "提示");
            this.$router.push(this.fun.getUrl('member'));
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getOpenRecommend(){
      let that = this;
      $http
      .post('plugin.channel.frontend.recommend.set.getOpen',{},"").then(response => {
        if (response.result === 1) {
         if(response.data.is_open == '1'){
          that.is_open_recommend = '1';
         }
        } else {
          Toast(response.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
    getOpen(){
      $http
      .post('plugin.channel.frontend.setting.index',{},"").then(response => {
        if (response.result === 1) {
          this.is_open_freedom = response.data.is_open_freedom;
          this.is_open_exchange = response.data.is_open_exchange;
          this.recommend_award_name = response.data.recommend_award_name;
          this.contribute_award_name = response.data.contribute_award_name;
          this.service_award_name = response.data.service_award_name;
          this.equal_award_name = response.data.equal_award_name;
          this.surpass_award_name = response.data.surpass_award_name;
          this.manage_award_name = response.data.manage_award_name;
          this.fun.setWXTitle(response.data.plugin_name)
        } else {
          Toast(response.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
    gotoUrl(str, params) {
      this.$router.push(this.fun.getUrl(str, params));
    },
  },
  components: { cTitle }
};
