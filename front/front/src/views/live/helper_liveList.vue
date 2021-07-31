<!-- 直播助手 直播列表 -->
<template>
  <div id="helper_liveList">
    <c-title :hide="false" text="主播助手"></c-title>
    <ul class="list">
      <li class="childs" v-for="(item, index) in list" :key="item.id" @click="gotoRoom(item.status,item.id)">
        <div class="top_box">
          <div class="live_status" :class="`status_color${item.status}`">{{ item.status | statusName }}</div>
          <div class="live_Countdown" v-if="item.status==1||item.status==2">距离开始时间：<div style="color:#ea0404;"><yd-countdown :time="item.live_time" timetype="timestamp"></yd-countdown></div></div>
        </div>
        <div class="main_box">
          <img :src="item.cover" alt="">
          <div class="left_info">
            <div class="title">{{item.title}}</div>
            <div class="store_name">{{item.shop_name}}</div>
          </div>
        </div>
        <div class="bottom_box">
          <div class="time">直播时间：{{item.live_time | timestampToTime}}</div>
          <div class="goods_number">商品：{{item.goods_num}}</div>
        </div>
      </li>
    </ul>
    <img src="../../assets/images/blank.png" alt="" style="width:5rem;margin:2rem 0;" v-if="fun.isTextEmpty(list)">
  </div>
</template>

<script>
import cTitle from "components/title";
import { scrollMixin } from "utils/mixin";
export default {
  mixins: [scrollMixin], //加载更多
  data () {
    return {
      list:[],
      //more
      isLoadMore: true,
      page: 1,
      total_page: 0,
    }
  },
  components: {
    cTitle
  },
  filters: {
    statusName: function (value) {
      if (!value) return ''
      switch (value) {
        case 1:
          return '待审核'
          break;
        case 2:
          return '等待直播'
          break;
        case 3:
          return '直播中'
          break;
        case 4:
          return '已结束'
          break;
        default:
          console.log("error:: src\views\live\helper_liveList.vue ")
          break;
      }
    },
    //将时间戳转换成正常时间格式
    timestampToTime: function(timestamp) {
      let date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '.';
      let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
      let D = date.getDate() + ' ';
      let h = date.getHours() + ':';
      let m = date.getMinutes();
      return Y+M+D+h+m;
    }
  },
  computed: {
  },
  mounted() {
    this.getData();
  },
  methods: {
    gotoRoom(_status,_id){
      if(_status ==1||_status == 2){
        return;
      }
      this.$router.push(this.fun.getUrl("helperLiveRoom", {id:_id}));
    },
    getData(){
      $http
        .post('plugin.room.frontend.anchor-aide.get-list',{},"").then(response => {
          if (response.result === 1) {
            this.list = response.data.data;
            this.isLoadMore = true;
            this.total_page = response.data.last_page;
            if (!this.total_page) {
              this.total_page = 0;
            }
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
        $http.get('plugin.room.frontend.anchor-aide.get-list',{page:this.page},"").then((response)=> {
          that.isLoadMore = true;
          if (response.result === 1) {
            var myData = response.data.data;
            that.list = that.list.concat(myData); //数组拼接
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
    }
  }
}
</script>
<style lang='scss' scoped>
#helper_liveList{
  padding-top: 40px;
  background: #fdfdfd;
  min-height: 100vh;
  .list{
    padding: 0.875rem;
    .childs{
      display: flex;
      flex-direction:column;
      padding: 0 0.5rem;
      margin-bottom: 0.875rem;
      background: #fff;
      border-radius: 0.375rem;
      box-shadow: 0rem 0rem 0.781rem 0rem rgba(0, 0, 0, 0.05);
      .top_box{
        height: 1.875rem;
        line-height: 1.875rem;
        display: flex;
        justify-content:space-between;
        align-items: center;
        .live_status{
          border-top-right-radius: 0.625rem;
          border-bottom-right-radius: 0.625rem;
          overflow: hidden;
          padding: 0 0.5rem;
          height: 1.25rem;
          line-height: 1.25rem;
          color: #fff;
          margin-left: -0.5rem;
        }
        .status_color1{
          background-color: #7e02e7;
        }
        .status_color2{
          background-color: #01d5ba;
        }
        .status_color3{
          background-color: #ffae00;
        }
        .status_color4{
          background-color: #999999;
        }
        .live_Countdown{

        }
      }
      .main_box{
        display: flex;
        padding: 0.5rem 0;
        border-bottom: 0.0625rem solid #e2e2e2;
        img{
          width: 3.75rem;
          height: 3.75rem;
          border-radius: 0.375rem;
          margin-right: 0.5rem;
        }
        .left_info{
          flex: 1;
          text-align: left;
          .title{
            color: #000000;
            font-size: 1rem;
            font-weight: bold;
            line-height: 1.25rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .store_name{
            margin-top: 0.5rem;
            font-size: 0.875rem;
            color: #666666;
          }
        }
      }
      .bottom_box{
        height: 2rem;
        line-height: 2rem;
        display: flex;
        justify-content: space-between;
        color: #000;
        font-size: 0.875rem;
      }
    }
  }
}
</style>
