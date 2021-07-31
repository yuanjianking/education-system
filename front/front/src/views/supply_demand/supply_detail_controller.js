import cTitle from "components/title";
import { MessageBox, Indicator, Toast } from "mint-ui";

export default {
  data() {
    return {
      datas: {
        province:'',
        city:'',
      },
      mobile: "", //联系电话
      product_state: [], //["现货", "期货"]
      unit_price: [], //元/斤
      unit_price_word: "", //重量后缀
      purchasing_count: 1, //发布总数
      store_info: {}, //
      id: 0, //信息id
      is_share_tip: false, //分享引导页是否显示
      is_report: false, //是否显示举报页
      is_report_success: false, //是否显示举报成功
      report_content: "", //举报原因
      describe: "", //问题描述
      cservice: "", //客服链接
      product_describe:'',//产品说明
      district: district,
      problem_list: [
        "虚假广告（变相推广、收费）",
        "重复推广",
        "中介收费",
        "虚假（如价格、品质虚假）",
        "诈骗信息（纯骗钱，没产品）",
        "质量问题",
        "其他问题"
      ],

      photosize: 1024 * 1024 * 4, // 图片大小限制,
      picture: [],
      fileList2: [],

      supplyCount:0,
    };
  },

  activated() {
    this.initData();
    this.id = this.$route.params.id;
    this.initCservice("");
    this.getData();
    this.browseNum();

  },
  destroyed() {
    document.querySelector("body").removeAttribute("class");
  },
  watch: {
    is_share_tip() {
      if (this.is_share_tip == true) {
        document
          .querySelector("body")
          .setAttribute("class", "van-overflow-hidden");
      } else {
        document.querySelector("body").removeAttribute("class");
      }

      // class="van-overflow-hidden"
      // overflow: hidden !important;
    },
    is_report_success() {
      if (this.is_report_success == true) {
        document
          .querySelector("body")
          .setAttribute("class", "van-overflow-hidden");
      } else {
        document.querySelector("body").removeAttribute("class");
        this.is_report = false;
      }

      // class="van-overflow-hidden"
      // overflow: hidden !important;
    }
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    //初始化数据
    initData() {
      this.datas= {
        province:'',
        city:'',
      };
      this.mobile='';//联系电话
      this.product_state= []; //["现货", "期货"]
      this.unit_price= []; //元/斤
      this.unit_price_word= ""; //重量后缀
      this.purchasing_count= 1; //发布总数
      this.store_info= {};
      this.is_share_tip= false; //分享引导页是否显示
      this.is_report= false; //是否显示举报页
      this.is_report_success= false; //是否显示举报成功
      this.report_content= ""; //举报原因
      this.describe= "";//问题描述
      this.cservice= ""; //客服链接
      this.product_describe = "";

      this.photosize= 1024 * 1024 * 4; // 图片大小限制,
      this.picture= [];
      this.fileList2= [];

      this.supplyCount = 0;
    },
    handleClick(x) {},
    getData() {
      let that = this;
      let json = {
        supplyDetails: "supplyDetails",
        supply_id: this.id
      };
      $http.post("plugin.supply-demand.api.index.supplyData", json, "").then(
        response => {
          if (response.result === 1) {
            let supplyDetails = response.data.supplyDetails;
            this.datas = supplyDetails.supply;
            this.product_describe = this.datas.product_describe.replace(/\n|\r/g,"<br/>");//文本域换行处理
            this.unit_price = supplyDetails.unit_price;
            this.supplyCount = supplyDetails.supplyCount;
            this.product_state = supplyDetails.product_state;

            this.datas.times = this.timeStyle(this.datas.created_at);
            let obj = this.district.find(n => {
              return this.datas.province_id == n.v;
            });
            this.datas.province = obj;
            console.log(this.datas.province)
            let obj2 = this.datas.province.c.find(n => {
              return this.datas.city_id == n.v;
            });
            this.datas.city = obj2;

            // 重量后缀
            let arr = this.unit_price[this.datas.unit_price].split("/");
            this.unit_price_word = arr[arr.length - 1];
            this.purchasing_count = supplyDetails.purchasing_count;
            this.store_info.type_id = supplyDetails.type_id;
            this.store_info.type_name = supplyDetails.type_name
              ? supplyDetails.type_name
              : "";
            this.store_info.id = supplyDetails.id ? supplyDetails.id : "0";
            // 电话号码
            this.mobile = this.datas.mobile
              ? this.datas.mobile
              : this.datas.has_one_member.mobile;
            this.mobile = "tel:" + this.mobile;
            this.initShare();
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
    //初始化客服参数
    initCservice(newCservice) {
      if (!this.fun.isTextEmpty(newCservice)) {
        this.cservice = newCservice;
        return;
      }

      if (
        !this.fun.isTextEmpty(this.$store.state.temp.mailInfo) &&
        !this.fun.isTextEmpty(this.$store.state.temp.mailInfo.cservice)
      ) {
        this.cservice = this.$store.state.temp.mailInfo.cservice;
        return;
      }
    },
    // 打开分享
    openShareTip(x) {
      this.is_share_tip = true;
    },
    // 关闭分享
    closeShareTip() {
      this.is_share_tip = false;
    },
    // 打开举报
    openReport() {
      this.is_report = true;
    },
    // 提交举报
    submitReport() {
      let that = this;
      let json = {
        reportNotes: "reportNotes",
        supply_id: this.id,
        report_content: this.report_content,
        describe: this.describe,
        member_id: this.datas.member_id,
        product_id:this.id,
        pictures:this.picture,
      };
      $http
        .post("plugin.supply-demand.api.index.InformationData", json, "")
        .then(
          response => {
            if (response.result === 1) {
              this.is_report_success = true;
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
    // 打电话
    submitCall() {
      let that = this;
      let json = {
        call: "call",
        supply_id: this.id,
        call_null: 1
      };
      $http.post("plugin.supply-demand.api.index.InformationData", json).then(
        response => {
          if (response.result === 1) {
            this.$refs.call.click();
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
    // 浏览次数，进一次页面统计一次
    browseNum() {
      let that = this;
      let json = {
        browse: "browse",
        supply_id: this.id,
        browse_null: 1
      };
      $http.post("plugin.supply-demand.api.index.InformationData", json).then(
        response => {
          if (response.result === 1) {
          } else {
          }
        },
        function(response) {
          console.log(response);
        }
      );
    },
    // 跳转店铺
    gotoStore() {
      // 0位门店。1供应商，2采购员
      if (this.store_info.type_id == 2) {
        Toast("暂无店铺");
        return false;
      }
      if (this.store_info.type_id == 0) {
        this.$router.push(
          this.fun.getUrl("o2oStore_v2", { store_id: this.store_info.id })
        );
      } else if (this.store_info.type_id == 1) {
        this.$router.push(
          this.fun.getUrl("SupplierShop", { id: this.store_info.id })
        );
      }
    },

    //初始化分享设置
    initShare() {
      let json = {
        url:
          this.fun.isIosOrAndroid() === "android"
            ? window.location.href
            : window.initUrl,
        mid: this.fun.getKeyByMid()
      };
      $http.post("member.member.wxJsSdkConfig", json).then(
        response => {
          if (response.result === 1) {
            // var cs = data.shop.cservice;
            if (response.data.config) {
              this.share(response.data);
            }
            if (!this.fun.isTextEmpty(response.data.shop)) {
              this.initCservice(response.data.shop.shop.cservice); //重新赋值
            }
          } else {
            console.error(response.msg);
          }
        },
        function(response) {
          console.log(response);
        }
      );
    },

    //分享
    shareWeixin() {
      //不是微信端 不访问
      if (this.fun.getTyep() == 5) {
        return;
      } else if (this.fun.getTyep() == 7) {
        this.appSharesinit();
        return;
      }
      MessageBox({
        title: "提示",
        message: "请点击右上角微信分享",
        showCancelButton: true
      });
    },
    //组装分享设置
    share(data) {
      let that = this;
      wx.config(data.config);
      wx.ready(function() {
        let _title = "";
        let _imgUrl = "";
        let _desc = "";
        if (!that.fun.isTextEmpty(that.datas.title)) {
          _title = that.datas.title;
        } else {
          _title = data.shop.share.title;
        }
        _imgUrl = this.datas.product_pictures[0];
        _desc = data.shop.share.desc;

        let _link = document.location.href + "&share_tag=2";
        _link = that.fun.isMid(_link, data.info.uid);

        wx.showOptionMenu();
        wx.onMenuShareTimeline({
          title: _title, // 分享标题
          link: _link, // 分享链接
          imgUrl: _imgUrl, // 分享图标
          success: function() {
            Toast("分享成功");
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
            Toast("分享成功");
          },
          cancel: function() {
            Toast("取消分享");
          }
        });
      });
    },
    // 时间格式
    timeStyle(times) {
      let time = times;
      time = time.substring(0, 19);
      time = time.replace(/-/g, "/"); //必须把日期'-'转为'/'
      var timestamp = new Date(times).getTime();
      console.log(timestamp);
      return this.timeStyle2(times, timestamp);
      // return timestamp;
    },
    // 时间格式
    timeStyle2(times, timestamp) {
      var time = times;
      var now_time = new Date().getTime();
      var used_time = now_time - timestamp;
      console.log("used_time:" + used_time);
      // 大于两天
      if (used_time >= 172800000) {
        let arr = times.split(" ");
        return arr[0];
      }
      // 1-2天间
      else if (used_time >= 86400000 && used_time < 172800000) {
        return "1天前";
      }
      // 小于1分钟
      else if (used_time <= 60000) {
        return "1分钟前";
      }
      // 2-59分钟
      else if (used_time > 60000 && used_time < 3600000) {
        let min_time = parseInt(used_time / 60000);
        return min_time + "分钟前";
      }
      // 小时
      else if (used_time >= 3600000 && used_time <= 172800000) {
        let min_time = parseInt(used_time / 3600000);
        console.log("used_time1111111:" + min_time);

        return min_time + "小时前";
      }
    },

    // vant 多图片上传
    onRead_1(e, flag) {
      Indicator.open("上传中");
      let fd = new FormData();
      if (flag) {
        fd.append("file", e);
      } else {
        fd.append("file", e.file); // 第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
      }
      var That = this;
      axios
        .post(this.fun.getRealUrl("upload.uploadPic"), fd, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          var responseData = response.data;
          if (responseData.result === 1) {
            Indicator.close();
            if (flag) {
              That.fileList2.push({
                url: URL.createObjectURL(e)
              });
            } else {
              That.fileList2.push({
                url: URL.createObjectURL(e.file)
              });
            }
            That.picture.push(responseData.data.img_url);
          } else {
            Indicator.close();
            Toast(responseData.msg);
          }
        })
        .catch(error => {
          Indicator.close();
          console.log(error);
        });
    },
    // 判断多图上传，循环onRead_1方法
    multipleMethod_1(e, flag) {
      if (e && e.length) {
        for (let i = 0; i < e.length; i++) {
          this.onRead_1(e[i], flag);
        }
      } else {
        this.onRead_1(e, flag);
      }
    },
    // 超出压缩
    onphotosize(e) {
      this.imgPreview(e.file, 2);
    },
    imgPreview(file, callback) {
      let self = this;
      // 判断支不支持FileReader
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader();
        // 将图片转成base64格式
        reader.readAsDataURL(file);
        // 读取成功后的回调
        reader.onloadend = function() {
          let result = this.result;
          let img = new Image();
          img.src = result;
          img.onload = function() {
            // 图片原始尺寸
            var originWidth = this.width;
            var originHeight = this.height;
            // 最大尺寸限制
            var maxWidth = 400,
              maxHeight = 400;
            // 目标尺寸
            var targetWidth = originWidth,
              targetHeight = originHeight;
            // 图片尺寸超过400x400的限制
            if (originWidth > maxWidth || originHeight > maxHeight) {
              if (originWidth / originHeight > maxWidth / maxHeight) {
                // 更宽，按照宽度限定尺寸
                targetWidth = maxWidth;
                targetHeight = Math.round(
                  maxWidth * (originHeight / originWidth)
                );
              } else {
                targetHeight = maxHeight;
                targetWidth = Math.round(
                  maxHeight * (originWidth / originHeight)
                );
              }
            }

            // canvas对图片进行缩放
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            // 清除画布
            context.clearRect(0, 0, targetWidth, targetHeight);
            // 图片压缩
            context.drawImage(img, 0, 0, targetWidth, targetHeight);
            // canvas转为blob并上传
            canvas.toBlob(function(blob) {
              // 图片ajax上传
              if (callback === 1) {
                self.onRead(blob, true);
              } else {
                // self.onRead_1(blob, true)
                self.multipleMethod_1(blob, true);
              }
            }, file.type || "image/png");
          };
        };
      }
    },
    // 删除图片

    removeImg: function(delIndex) {
      this.picture.splice(delIndex, 1);
    }
  },
  components: { cTitle }
};
