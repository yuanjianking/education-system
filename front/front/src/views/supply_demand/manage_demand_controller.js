import cTitle from "components/title";
import { MessageBox, Indicator, Toast } from "mint-ui";

export default {
  data() {
    return {
      activeName: "first",
      hasBeen: [], //已发布
      toExamine: [], //待审核
      noBeen: [], //已下架
      list:[],
      product_state: [], //["现货", "期货"]
      unit_price: [] //["元/吨", "元/公顷"]
    };
  },

  activated() {
    this.initData();
    this.getData();
  },
  watch: {},
  mounted() {},
  methods: {
    //初始化数据
    initData() {
      this.activeName =  "first";
      this.hasBeen=[]; //已发布
      this.toExamine= []; //待审核
      this.noBeen= []; //已下架
      this.list=[];
      this.product_state= []; //["现货", "期货"]
      this.unit_price= []; //["元/吨", "元/公顷"]
    },

    handleClick(x) {
      console.log(x);
      if(this.activeName == 'first') {
        this.list = this.hasBeen;
      }
      else if(this.activeName == 'second') {
        this.list = this.toExamine;
      }
      else if(this.activeName == 'third') {
        this.list = this.noBeen;
      }

    },
    // 获得初始化数据
    getData() {
      let that = this;
      $http
        .post("plugin.supply-demand.api.index.purchasingData", {
          purchasingRelease: "purchasingRelease"
        },'')
        .then(
          response => {
            if (response.result === 1) {
              // Toast(response.msg);
              let purchasingRelease = response.data.purchasingRelease;
              this.hasBeen = purchasingRelease.hasBeen;
              this.toExamine = purchasingRelease.toExamine;
              this.noBeen = purchasingRelease.noBeen;
              this.product_state = purchasingRelease.product_state;
              this.unit_price = purchasingRelease.unit_price;
              if(this.activeName == 'first') {
                this.list = this.hasBeen;
              }
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
    // 删除
    delRow(id) {
      MessageBox.confirm('确定执行删除操作?').then(action => {
        $http.post("plugin.supply-demand.api.index.InformationData",{purchasing_id:id,delete:'delete'},"删除中...").then(response =>{
          if(response.result == 1){
            console.log(response)
            MessageBox("提示",'删除成功');
            this.reFresh();
          }
        }).catch(error =>{
          console.log(error);
          MessageBox("提示",response.msg);
        })
  
      }).catch(error =>{
        
        
      });;
    },
    // 下架
    putAway(id) {
      MessageBox.confirm('确定执行下架操作?').then(action => {
        $http.post("plugin.supply-demand.api.index.purchasingData",{purchasingLowerShelf:'purchasingLowerShelf',purchasing_id:id},"下架中...").then(response =>{
          if(response.result == 1){
            console.log(response)
            MessageBox("提示",'下架成功');
            this.reFresh();
          }
        }).catch(error =>{
          console.log(error);
          MessageBox("提示",response.msg);
        })
  
      }).catch(error =>{
        
        
      });;
    },
    // 刷新
    reFresh() {
      this.initData();
      this.getData();
    },
    // 修改
    gotoEdit(id) {
      this.$router.push(this.fun.getUrl("edit_demand", { id: id }));
    },
    // 发布
    gotoPblish() {
      this.$router.push(this.fun.getUrl("publish_demand"));
    }
  },
  components: { cTitle }
};
