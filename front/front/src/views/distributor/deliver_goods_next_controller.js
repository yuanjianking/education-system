import cTitle from "components/title";
import { Toast, MessageBox } from "mint-ui";

let cart_ides = [];
export default {
  data() {
    return {
      list:[],
    };
  },
  activated() {
    cart_ides = [];
    this.getData();
  },
  methods: {
    getData() {
      $http
        .post('plugin.channel.frontend.freedom-cart.index',{},"").then(response => {
          if (response.result === 1) {
            this.list = response.data;
            for (var i = 0; i < this.list.length; i++) {
              cart_ides.push(this.list[i].id);
            }
          } else {
            MessageBox.alert(response.msg, "提示");
            this.$router.go(-1);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //提交订单
    submitGoods() {
      this.$router.push(
        this.fun.getUrl("placeOrder", {
          tag: 'channel_freedom',
          cart_ids: cart_ides
        })
      );
    },
    changeCount(goods, _num, index) {
      console.log(goods);
      let that = this;
      let json = {
        id: goods,
        num: _num,
        i: this.fun.getKeyByI(),
        type: this.fun.getTyep()
      };

      $http.get("plugin.channel.frontend.freedom-cart.updateNum", json, "").then(
        function(response) {
          console.log(response);
          if (response.result === 1) {
            if(_num== 1){
              that.list[index].total = Number(that.list[index].total) + 1;
            }else if(_num == -1){
              that.list[index].total = Number(that.list[index].total) - 1;
            }
          } else {
            Toast(response.msg);
            that.list[index].total = 1;
          }
        },
        function(response) {
          console.log(response);
        }
      );
    },
    numberLeft(index) {
      let lNum = Number(this.list[index].total) - 1;
      if (lNum <= 0) {
        Toast("商品数量不能为负数或零");
        this.list[index].total = 1;
        return;
      }
      this.changeCount(this.list[index].id, -1,index);
    },
    numberRight(index) {

      this.changeCount(this.list[index].id, 1,index);
    },
    delCart(index){
      let that = this;
      that.$dialog.confirm({
        message: '确认删除该商品吗',
        confirmButtonText:'确定'
      }).then(() => {
        $http.get("plugin.channel.frontend.freedom-cart.destroy", {ids:that.list[index].id}, "").then(
          function(response) {
            console.log(response);
            if (response.result === 1) {
              Toast("移除成功！");
              that.getData();
            } else {
              Toast(response.msg);
            }
          },
          function(response) {
            console.log(response);
          }
        );
      }).catch(() => {
        // on cancel
      });
    },
    goBack() {
      if (window.history.length <= 1) {
        this.$router.push(this.fun.getUrl("home", {}));
      } else {
        this.$router.go(-1);
      }
    }
  },
  components: { cTitle }
};
