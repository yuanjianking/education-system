import { Toast, MessageBox } from "mint-ui";
import Fun from "../../../fun";

let videoFirst = 0; //第一次初始化
export default {
  data() {
    let that = this;
    return {
      swiperOption: {
        direction: "vertical",
        observer: true,
        width: window.innerWidth,
        height: window.innerHeight,
        watchOverflow: true,
        autoHeight: true,
        autoplay: false,
        pagination: false,
        on: {
          reachEnd() {
            if (videoFirst === 1) {
              that.getMoreData();
            }
            // console.log(that.popularVideo, "popularVideo");
            // 手指触碰拖动最后一张时执行
          },
          slideChangeTransitionEnd() {
            // that.$refs.video.pause();
            that.show = false;
            that.showVideo = that.popularVideo[this.realIndex];
            if (this.realIndex === 0) {
              that.popularVideo[this.realIndex].show = false;
              that.popularVideo[this.realIndex + 1].show = false;
            } else {
              that.popularVideo[this.realIndex - 1].show = false;
              that.popularVideo[this.realIndex].show = false;
              if (that.popularVideo[this.realIndex + 1]) {
                that.popularVideo[this.realIndex + 1].show = false;
              }
            }
            that.fun.setWXTitle(that.showVideo.title);
            window.localStorage.setItem("vid", that.showVideo.id);

            setTimeout(() => {
              that.$nextTick(() => {
                that.clickSwiper(this.realIndex);
              });
            }, 300);
            //切换结束时
          }
        }
      },
      popularVideo: [],
      showVideo: {},
      show: false,
      like: false,
      likeNum: 0,
      isPlay: false,
      amount_id: "",
      url: "",
      status: "",
      showShare: false,
      //more
      isLoadMore: true,
      page: 1,
      total_page: 0,
      minStyle: true,
      wxJsSdkConfig: {},
      card_id: ''
    };
  },
  activated() {
    this.initData();
    this.amount_id = this.$route.query.vid;
    if (this.$route.query.from && this.$route.query.from == 'card') {
      this.url = "plugin.business-card.frontend.controllers.card.paging.videos";
      this.card_id = this.$route.query.card_id;
    }else if (this.$route.query.from && this.$route.query.from == 'me') {
      this.url = "plugin.video-share.frontend.video.my-video";
      this.status = this.$route.query.activeName;
    } else {
      this.url = "plugin.video-share.frontend.video.getList";
    }
    window.localStorage.setItem("vid", this.amount_id);
    if (this.$route.query.page) {
      this.page = this.$route.query.page;
      this.getData();
    }else {
      this.getDetail();
    }
    window.scrollTo(0, 0);
  },
  mounted() {
    videoFirst = 1;
  },
  computed: {
    VideoItemHeightStyle() {
      let clientWidth = window.innerWidth;
      let clientHeight = window.innerHeight;
      let params = {};
      if (this.fun.getPhoneEnv() == 3) {
        params = {
          height: "auto",
          width: 375 + "px",
          margin: "0 auto",
          top: "50%",
          transform: "translateY(-50%)"
        };
      } else {
        params = {
          height: clientHeight + "px",
          width: clientWidth + "px"
        };
      }
      return params;
    }
  },
  methods: {
    initData() {
      this.popularVideo = [];
    },
    shareVideo() {
      this.showShare = true;
    },
    close() {
      this.showShare = false;
    },
    toGood(item) {
      this.$router.push(
        this.fun.getUrl("goods", { id: item.goods_id }, { vid: item.id })
      );
    },
    toggleLike(item) {
      item.member_like = !item.member_like;
      !item.member_like ? item.like_num++ : item.like_num--;

      $http
        .post("plugin.video-share.frontend.video.like", {
          video_goods_id: item.id
        })
        .then(response => {
          if (response.result === 1) {
          } else {
            Toast(response.msg);
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    chooseUser(item) {
      if (item.member.business_card != 0) {
        this.$router.push(
          this.fun.getUrl(
            "BusinessCard",
            {},
            { mark_id: item.member.business_card, mark: "card" }
          )
        );
      }
    },
    clickSwiper(index) {
      if (
        this.popularVideo[index].show &&
        this.amount_id === this.popularVideo[index].id
      ) {
        this.show = false;
        this.popularVideo[index].show = false;
        this.$refs.video.pause();
        return;
      }
      this.show = true;
      this.amount_id = this.popularVideo[index].id;
      this.$set(this.popularVideo[index], "show", true);

      this.$refs.video.play();
      this.$refs.pic[index].offsetHeight > Math.ceil(window.innerHeight / (4/3))
        ? (this.minStyle = false)
        : (this.minStyle = true);
      this.share(this.wxJsSdkConfig);
      // console.log(this.$refs.pic[index].offsetHeight);
    },
    getDetail() {
      $http
        .get('plugin.video-share.frontend.video.getVideoGoods', {video_goods_id: this.amount_id}, "load")
        .then(response => {
          if (response.result === 1) {
            this.showVideo = response.data.video_goods;
            this.getData(true);
          } else {
            Toast(response.msg);
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    getData(flag) {
      let json = {};
      if (this.$route.query.from && this.$route.query.from == 'card') {
        json = { page: this.page, card_id: this.card_id };
      }else if (this.$route.query.from && this.$route.query.from == 'me') {
        json = { page: this.page, status: this.status };
      } else {
        json = { page: this.page };
      }
      $http
        .get(this.url, json, "load")
        .then(response => {
          if (response.result === 1) {
            this.isLoadMore = true;
            if (this.$route.query.from && this.$route.query.from == 'card') {
              this.total_page = response.data.last_page;
              this.popularVideo = response.data.data;
            }else if (this.$route.query.from && this.$route.query.from == 'me') {
              this.total_page = response.data.video.last_page;
              this.popularVideo = response.data.video.data;
            } else {
              this.total_page = response.data.list.last_page;
              this.popularVideo = response.data.list.data;
            }

            if (!this.total_page) {
              this.total_page = 0;
            }
            if(!flag) {
              if (this.$route.query.vid) {
                for (let i = 0; i < this.popularVideo.length; i++) {
                  if (this.popularVideo[i].id == this.amount_id) {
                    this.showVideo = this.popularVideo[i];
                    this.popularVideo.splice(0, i);
                    break;
                  }
                }
              } else {
                this.showVideo = this.popularVideo[0];
              }
            }else {
              if (this.$route.query.vid) {
                for (let i = 0; i < this.popularVideo.length; i++) {
                  if (this.popularVideo[i].id == this.amount_id) {
                    this.popularVideo.splice(i, 1);
                    break;
                  }
                }
                this.popularVideo.unshift(this.showVideo);
              }
            }

            this.fun.setWXTitle(this.showVideo.title);
            this.initShare();
          } else {
            Toast(response.msg);
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    getMoreData() {
      const that = this;
      that.isLoadMore = false; // 防止多次请求分页数据
      if (this.page >= this.total_page) {
        return;
      } else {
        this.page = this.page + 1;
        let json = {};
        if (this.$route.query.from && this.$route.query.from == 'card') {
          json = { page: this.page, card_id: this.card_id };
        }else if (this.$route.query.from && this.$route.query.from == 'me') {
          json = { page: this.page, status: this.status };
        } else {
          json = { page: this.page };
        }
        $http.get(this.url, json, "加载中").then(
          (response)=> {
            that.isLoadMore = true;
            if (response.result === 1) {
              let myData = [];
              if (this.$route.query.from && this.$route.query.from == 'card') {
                myData = response.data.data;
              }else if (this.$route.query.from && this.$route.query.from == 'me') {
                myData = response.data.video.data;
              } else {
                myData = response.data.list.data;
              }

              that.popularVideo = that.popularVideo.concat(myData); //数组拼接
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
    //初始化分享设置
    initShare() {
      let json = {
        url:
          this.fun.isIosOrAndroid() === "android"
            ? window.location.href
            : window.initUrl
      };
      $http.post("member.member.wxJsSdkConfig", json).then(
        response => {
          if (response.result === 1) {
            this.wxJsSdkConfig = response.data;
            this.share(this.wxJsSdkConfig);
          } else {
          }
        },
        function(response) {
          console.log(response);
        }
      );
    },

    //组装分享设置
    share(data) {
      let that = this;
      wx.config(data.config);
      wx.ready(function() {
        let _title = that.fun.isTextEmpty(that.showVideo.title)
          ? "视频分享"
          : that.showVideo.title;
        let _link = Fun.getSiteRoot() + "/addons/yun_shop/" + "?menu#" + "/videoDetail?i=" + Fun.getKeyByI()+'&vid='+ that.amount_id;
        _link = that.fun.isMid(_link, data.info.uid);

        let _imgUrl = that.fun.isTextEmpty(that.showVideo.cover)
          ? data.share.icon
          : that.showVideo.cover;
        let _desc = that.fun.isTextEmpty(that.showVideo.title)
          ? data.share.desc
          : `这是${that.showVideo.title}`;
        wx.showOptionMenu();
        wx.onMenuShareTimeline({
          title: _title, // 分享标题
          link: _link, // 分享链接
          imgUrl: _imgUrl, // 分享图标
          success: function() {
            $http
              .get("plugin.video-share.frontend.video.share", {
                video_goods_id: that.showVideo.id
              })
              .then(response => {
                // console.log(response);
              })
              .catch(err => {
                console.error(err);
              });
          },
          cancel: function() {
            Toast("取消分享");
          }
        });

        wx.onMenuShareAppMessage({
          title: _title, // 分享标题
          desc: _desc, // 分享描述
          link: _link, // 分享链接
          imgUrl: _imgUrl, // 分享图标
          type: "link", // 分享类型,music、video或link，不填默认为link
          dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            $http
              .get("plugin.video-share.frontend.video.share", {
                video_goods_id: that.showVideo.id
              })
              .then(response => {
                // console.log(response);
              })
              .catch(err => {
                console.error(err);
              });
          },
          cancel: function() {
            Toast("取消分享");
          }
        });
      });
    },
    watchHandler() {
      // 观看次数
    }
  },
  components: {}
};
