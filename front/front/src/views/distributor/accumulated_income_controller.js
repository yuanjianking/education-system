import cTitle from "components/title";
import { Toast, MessageBox } from "mint-ui";
import { scrollMixin } from "utils/mixin";

export default {
  mixins: [scrollMixin], //加载更多
  data() {
    return {
      activeName: 0,
      dataList:[],
      questUrl: null,
      titleArr: ['出货收入','直推奖','贡献奖','平级服务奖','平级奖','超越奖','管理奖']
    };
  },
  created(){
    this.setNewArr();
    this.getSetName();
  },
  activated() {
    this.handleClick();
  },
  methods: {
    getSetName(){
      $http
      .post('plugin.channel.frontend.setting.index',{},"").then(response => {
        if (response.result === 1) {
          this.titleArr[1] = response.data.recommend_award_name;
          this.titleArr[2] = response.data.contribute_award_name;
          this.titleArr[3] = response.data.service_award_name;
          this.titleArr[4] = response.data.equal_award_name;
          this.titleArr[5] = response.data.surpass_award_name;
          this.titleArr[6] = response.data.manage_award_name;
        } else {
          Toast(response.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
    setNewArr(){
      this.titleArr.forEach((val, index) => {
        this.dataList.push({
          isLoadMore: true,
          page: 1,
          total_page: 0,
          list: []
        });
      });
    },
    handleClick() {
      let that = this;
      if(!this.fun.isTextEmpty(this.dataList[that.activeName].list)){
        return;
      }
      switch (this.activeName) {
        case 0:
          that.questUrl = 'plugin.channel.frontend.award.getShipmentList';
          break;
        case 1:
          that.questUrl = 'plugin.channel.frontend.award.getRecommendList';
          break;
        case 2:
          that.questUrl = 'plugin.channel.frontend.award.getContributeList';
          break;
        case 3:
          that.questUrl = 'plugin.channel.frontend.award.getServiceList';
          break;
        case 4:
          that.questUrl = 'plugin.channel.frontend.award.getEqualList';
          break;
        case 5:
          that.questUrl = 'plugin.channel.frontend.award.getSurpassList';
          break;
        case 6:
          that.questUrl = 'plugin.channel.frontend.award.getManageList';
          break;
        default:
          console.log("error;;;;;");
          break;
      }
      $http
        .post(that.questUrl,{page:1},"").then(response => {
          if (response.result === 1) {
            that.$set(this.dataList[that.activeName], "isLoadMore", true);
            that.$set(this.dataList[that.activeName], "total_page", response.data.list.last_page);
            if (!this.dataList[that.activeName].total_page) {
              that.$set(this.dataList[that.activeName], "total_page", 0);
              this.dataList[that.activeName].total_page = 0;
            }
            that.$set(this.dataList[that.activeName], "list", response.data.list.data);
          } else {
            MessageBox.alert(response.msg, "提示");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //获取更多数据
    getMoreData() {
      const that = this;
      that.dataList[that.activeName].isLoadMore = false; // 防止多次请求分页数据
      if (that.dataList[that.activeName].page >= that.dataList[that.activeName].total_page) {
        return;
      } else {
        let _url = null;
        let _json ={};
        that.dataList[that.activeName].page = that.dataList[that.activeName].page + 1;
        switch (this.activeName) {
          case 0:
            that.questUrl = 'plugin.channel.frontend.award.getShipmentList';
            break;
          case 1:
            that.questUrl = 'plugin.channel.frontend.award.getRecommendList';
            break;
          case 2:
            that.questUrl = 'plugin.channel.frontend.award.getContributeList';
            break;
          case 3:
            that.questUrl = 'plugin.channel.frontend.award.getServiceList';
            break;
          case 4:
            that.questUrl = 'plugin.channel.frontend.award.getEqualList';
            break;
          case 5:
            that.questUrl = 'plugin.channel.frontend.award.getSurpassList';
            break;
          case 6:
            that.questUrl = 'plugin.channel.frontend.award.getManageList';
            break;
          default:
            console.log("error;;;;;");
            break;
        }
        _json.page = that.dataList[that.activeName].page;
        $http.get(that.questUrl,_json,"加载中").then((response)=> {
          that.dataList[that.activeName].isLoadMore = true;
              if (response.result === 1) {
                var myData = response.data.data;
                that.dataList[that.activeName].list = that.dataList[that.activeName].list.concat(myData); //数组拼接
              } else {
                that.dataList[that.activeName].page = that.dataList[that.activeName].page - 1;
                that.dataList[that.activeName].isLoadMore = false;
              }
            },
            function(response) {
              // error callback
            }
          );
      }
    },
  },
  components: { cTitle }
};
