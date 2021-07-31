<template>
  <div>
    <c-title :hide="false" :text="'合同列表'">
    </c-title>
    <div style="height: 40px"></div>
    <div class="content">
      <div class="item-box" v-for="item in recordsList" :key="item.id" @click="toSign(item)">
        <p class="head">{{item.name}}</p>
        <div class="item-bottom">
          <div class="title">
            发起人：{{item.account_name}}
          </div>
          <div class="status">
            <span class="tag">{{item.status_desc}}</span>
          </div>
        </div>
        <div class="item-bottom">
          <div class="title">
            参与人：<span v-for="(role,index) in item.has_many_role" :key="role.id">{{role.name}}<em v-if="index < item.has_many_role.length-1">，</em></span>
          </div>
          <div class="status">
            <span style="margin-right: 0.5rem" v-if="item.status <= 0" @click.stop="stopUse(item)">取消</span>
            <!--<span @click.stop="downpdf(item)">下载</span>-->
          </div>
        </div>
      </div>
    </div>

    <div class="fixed-box" v-if="showBox">
      <router-link class="fixed-item" :to="fun.getUrl('home')">
        <i class="iconfont icon-zhuye2" style="font-size: 28px;"></i>
        <span>首页</span>
      </router-link>
      <router-link class="fixed-item" :to="fun.getUrl('signIndex')">
        <i class="iconfont icon-yq_hetongzhongxin" style="padding: 4px;"></i>
        <span>合同中心</span>
      </router-link>
      <div class="triangle"></div>
    </div>
    <div class="fixed-img" @click="showBox = !showBox">
      <img src="../../../assets/images/sign/yht_exprot@2x.png" alt="">
    </div>
  </div>
</template>

<script>
  import cTitle from "components/title";
  import { Toast, MessageBox } from "mint-ui";
  import { scrollMixin } from "utils/mixin";

  export default {
    mixins: [scrollMixin], //加载更多
    data() {
      return {
        showBox: false,
        recordsList: [],
        //more
        isLoadMore: true,
        page: 1,
        total_page: 0,
      };
    },
    activated() {
      this.showBox = false;
      this.getData();
    },
    methods: {
      toSign(item) {
        this.$router.push(this.fun.getUrl("signPage",{id: item.id}));
      },
      stopUse(item) {
        MessageBox.confirm("确定取消吗").then(action => {
          $http
            .get("plugin.yun-sign.frontend.h5.contract.cancel", { id: item.id }, "正在取消")
            .then(response => {
              if (response.result === 1) {
                this.recordsList = [];
                this.getData();
                Toast('取消成功!');
              } else {
                Toast('取消失败!');
              }
            })
            .catch(err => {
              console.error(err);
            });
        }).catch(err => {
        });
      },
      downpdf(item) {
        window.open(item.download_url);
      },
      getData() {
        this.page = 1;
        // contract_type  1我发起的，2我收到的，3抄送我的
        $http
          .get(
            "plugin.yun-sign.frontend.h5.contract.get-list",
            { page: 1,contract_type: 2 },
            "加载中"
          )
          .then(response => {
            if (response.result === 1) {
              this.dataInfo = response.data;
              this.isLoadMore = true;
              this.total_page = response.data.last_page;
              if (!this.total_page) {
                this.total_page = 0;
              }
              this.recordsList = response.data.data;
            } else {
              Toast(response.msg);
            }
          })
          .catch(error => {
            console.log(error);
          });
      },
      //获取更多数据
      getMoreData() {
        const that = this;
        that.isLoadMore = false; // 防止多次请求分页数据
        if (this.page >= this.total_page) {
          return;
        } else {
          this.page = this.page + 1;
          $http
            .get(
              "plugin.yun-sign.frontend.h5.contract.get-list",
              {
                page: that.page,
                contract_type: 2
              },
              "加载中"
            )
            .then(
              function(response) {
                that.isLoadMore = true;
                if (response.result === 1) {
                  var myData = response.data.data;
                  that.recordsList = that.recordsList.concat(myData); //数组拼接
                } else {
                  that.page = that.page - 1;
                  that.isLoadMore = false;
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

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .item-box {
    background: #FFFFFF;
    padding: 1rem;
    margin-bottom: 0.5rem;
    text-align: left;
  }
  .head {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    margin-bottom: 0.5rem;
  }
  .item-bottom {
    display: flex;
    margin-bottom: 0.3rem;
    .title {
      flex: 1;
      color: #666666;
    }
    .status {
      flex: 0 0 5rem;
      color: #377aff;
      text-align: center;
    }
    .tag {
      border: 1px solid #377aff;
      border-radius: 15px;
      padding: 0.1rem 0.3rem;
    }
  }

  .fixed-img {
    position: fixed;
    bottom: 8rem;
    right: 2%;
    img {
      width: 3rem;
      height: 3rem;
    }
  }

  .fixed-box {
    background: #FFFFFF;
    position: fixed;
    bottom: 12rem;
    right: 2%;
    color: #518bff;
    width: 4rem;
    border-radius: 5px;
    padding: 2px;
    box-shadow: 0 0.25rem 0.5625rem 0.0625rem rgba(0, 0, 0, 0.06);
    .triangle {
      position: fixed;
      bottom: 11.1rem;
      right: 8%;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-top-color: #FFFFFF;
    }
    .fixed-item {
      display: flex;
      flex-direction: column;
      i {
        font-size: 21px;
      }
    }
  }

</style>
