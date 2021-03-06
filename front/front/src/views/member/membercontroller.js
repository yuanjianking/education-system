import { mapState, mapMutations } from "vuex";
import cTitle from "../../components/title";
import { Loadmore } from "mint-ui";
import { Lazyload, Button } from "mint-ui";
import { MessageBox } from "mint-ui";
import { setImmediate, setInterval } from "core-js";
import { Toast } from "mint-ui";

import showmembercenter from "components/member/member_head";
import showmemberhotelorder from "components/member/member_order";
import showmembercarorder from "components/member/member_carorder";
import showmemberleaseorder from "components/member/member_lease";
import showmembertool from "components/member/member_tool";
import showmembermerchant from "components/member/member_merchant";
import showmembermarket from "components/member/member_market";
import showmemberasset from "components/member/member_asset";
import showmembergrouporder from "components/member/member_fight_groups";
import showdiyform from "components/temp/form";
import showsign from "components/temp/showsign";
import showflashsale from "components/member/time_limit";
import showcoupon from "components/cupcon";
import showarticle from "components/article";
import showheadline from "components/topline";
import showassemble from "components/time_group";
import showbanner from "components/temp/banner";
import showmenu from "components/temp/menu";
import showtitle from "components/temp/title";
import showsearch from "components/temp/search";
import showline from "components/temp/line";
import showblank from "components/temp/blank";
import showrichtext from "components/temp/richtext";
import showpicture from "components/temp/picture";
import showcube from "components/temp/cube";
import showarea from "components/temp/area";
import showshop from "components/temp/shop";
import showgoods from "components/member/goods";
import shownearbygoods from "components/member/near_goods";
import shownotice from "components/temp/notice";
import showlocation from "components/temp/location";
import showstore from "components/temp/stores";
import showbusiness from "components/temp/business";
import showvideo from "components/temp/video";

let isMCreated = 0;

export default {
  data() {
    return {
      city:'',
      point:{},
      address:'',
      Toast: "",
      myType: window.localStorage.type,
      // ?????????
      coin: false,

      pluginsList: [],

      coin_name: "",
      // ?????????????????????
      relation_switch: false,
      // ???????????????????????????
      isLove: false,
      // ???????????????
      love_name: "",
      // ??????????????????????????? 0-????????????1-?????????
      is_agent: 0,
      // ???????????????
      // MyReferrer: '',
      // ?????????
      qrcode: "",
      allLoaded: false,
      // ???????????????????????????
      topStatus: "",
      // ??????
      balance_value: "0.00",
      // ??????
      integral: "",
      // ?????????
      coupon: "",
      // ????????????
      username: "",
      // ??????
      avatar: "",
      createtime: "",
      // ??????
      credit: "",
      // ??????
      copyright: "",
      // 1???
      gender: 1,
      group_id: "",
      group_name: "",
      has_one_fans: {
        followed: 1,
        uid: 9
      },
      level_id: 2,
      // ????????????
      level_name: "",
      mobile: "",
      nickname: "",
      realname: "",
      uid: "",
      waitPay: 0,
      waitSend: 0,
      waitReceive: 0,
      waitrRefund: 0,
      // ???????????????
      supplier: "",
      haveShop: "",
      plugins: [],

      poster: "",

      store_set: {
        is_cash_pay: "",
        is_open_cashier: "",
        is_write_information: ""
      },

      is_custom: false, // ???????????????
      custom_title: "", // ?????????title
      custom_value: "", // ????????????

      is_validity: false, // ????????????????????????
      validity_value: "", // ???????????????????????? ??????

      isELive: false, // ??????????????????

      is_stroeWithdraw: false, // ????????????
      isApp: false,

      // is_extension: false, //??????

      signs: false,
      sign_name: "",

      // ????????????
      helps: false,
      help_name: "",

      isMemberGrade: false,

      // ?????????
      froze_name: "",
      is_froze: false,

      // ????????????????????????????????????
      is_o2oApply: true,
      is_supplierApply: true,
      supplier_id: "",

      // ????????????
      // isWithdraw: false,
      // ?????????
      inviteCode: "",
      isshowInvit: "",
      // ??????????????????
      isGeneralize: "",
      // ???????????????????????????
      isClick: true,
      // ?????????
      love_obj: {},
      integral_show: {},

      template: "",
      // ????????????
      activeNames: ["3"],
      // ??????????????????
      is_hotel: false,
      // ?????????????????????
      is_open_net_car: false,
      // ????????????
      hotel_order: {},
      //????????????
      groups_order: {},
      PageNameList: {},
      // ??????????????????
      is_open_lease_toy: false,
      lease_order: [], // ????????????????????????
      lease_order_one: {},
      lease_order_two: {},
      lease_order_three: {},
      lease_order_four: {},

      //??????
      designer: {},
      showDiy: [],
      designerStatus: false,
      // car: {},
      member_order: {},
      // ???????????????model
      member_item: {},
      wechat_login_mode: false,

      //????????????
      name_of_withdrawal_text: ""
    };
  },
  activated() {
    // var province = localStorage.getItem("province")
    // if (province == null) {
    // 	this.fun.getAddressInfo(); //????????????json??????
    // }
    this.isApp = this.fun.isApp();
    // if (isMCreated === 1) {
    //   this.designer = JSON.parse(window.localStorage.getItem("yzdesigner"));
      this.getMemberData();
    // }
    wx.miniProgram.postMessage({
      data: { goods_title: this.$store.state.temp.item.janst }
    });
    //????????????
    this.customizeIncome();
    // this.getMemberInfo()
    // this.getEnablePlugin()

    // this.getStroeWithdraw()
    // this.getExtension()
    // this.getMemberGrade()

    // this.getMemberCustom();//?????????????????????
  },
  deactivated() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  created() {
    // if (isMCreated === 0) {
    //   this.newTemplate();
    // }
  },
  updated() {
    isMCreated = 1;
  },
  /*
    ???????????????????????????
     ?????????????????????????????????????????????????????????
     ?????????????????????????????????????????????????????????????????????
  */
  mounted() {},
  methods: {
    newTemplate(data) {
      // $http.get("member.member-designer.index").then(
      //   response => {
      //     if (response.result === 1) {
            this.designer = data.data;
            this.showDiy = [];
            this.designer.map((item, index, key) => {
              if (item.temp === "showdiyform") {
                this.showDiy.push(item);
              }
            });
            for (let i in this.designer) {
              this.designer[i].temp = "show" + this.designer[i].temp;
              if (
                this.designer[i].temp === "showlocation" ||
                this.designer[i].temp === "showstore"
              ) {
                this.isLocation = true;
              }
            }
            window.localStorage.setItem(
              "yzdesigner",
              JSON.stringify(this.designer)
            );
            this.$store.commit("membertempIndex", data);
            this.designerStatus = data.status;
            window.yzdesignerStatus = this.designerStatus;
            // this.getMemberData();
      //     } else {
      //     }
      //   },
      //   response => {
      //     console.log(response.msg);
      //   }
      // );
    },
    // new
    getMemberData() {
      $http
        .post("member.member.member-data", { v: 2 }, " ")
        .then(
          response => {
            if (response.result === 1) {
              this.newTemplate(response.data.designer);
              this.getMemberInfo(
                response.data.member,
                response.data.order,
                response.data.plugins
              );

              this.lease_order = response.data.order.lease_order;
              if (!this.fun.isTextEmpty(this.lease_order)) {
                this.lease_order.map(item => {
                  if (item.status == "0") {
                    this.lease_order_one = item;
                  } else if (item.status == "1") {
                    this.lease_order_two = item;
                  } else if (item.status == "2") {
                    this.lease_order_three = item;
                  } else if (item.status == "3") {
                    this.lease_order_four = item;
                  }
                });
              }

              if (!this.fun.isTextEmpty(response.data.member.yz_member)) {
                this.custom_value = response.data.member.yz_member.custom_value;
                this.getMemberCustom(
                  this.custom_value,
                  response.data.member.yz_member.validity,
                  response.data.setting.custom
                ); // ?????????????????????
              }
              this.wechat_login_mode = response.data.setting.wechat_login_mode;
              this.getEnablePlugin(response.data.plugins);
              this.getStroeWithdraw(response.data.plugins.is_open);
              this.getExtension(response.data.relation);
              this.getMemberGrade(response.data.setting.level);
            } else {
              Toast(response.msg);
              this.template = "01";
              require("@/assets/css/member/02.scss");
            }
          },
          response => {
            console.log(response.msg);
            require("@/assets/css/member/02.scss");
          }
        )
        .catch(err => {
          console.error(err);
          require("@/assets/css/member/02.scss");
        });
    },
    // ???????????????????????????
    // getCustomizeHotelHead() {
    //   var isQuestHotel = localStorage.getItem("customizeHotelHead")
    //   if (!this.fun.isTextEmpty(isQuestHotel)) {
    //     this.PageNameList = JSON.parse(
    //       localStorage.getItem("customizeHotelHead")
    //     )
    //   } else {
    //     $http
    //       .get(
    //         "plugin.hotel.frontend.hotel.get-hotel-info.get-custom-name",
    //         {},
    //         "?????????"
    //       )
    //       .then(response => {
    //         if (response.result === 1) {
    //           this.PageNameList = response.data
    //           localStorage.setItem(
    //             "customizeHotelHead",
    //             JSON.stringify(response.data)
    //           )
    //         } else {
    //           console.log(response.msg)
    //         }
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //   }
    // },
    // ??????????????????
    getTemplate() {
      $http.get("plugin.designer.home.index.templateSet", {}, " ").then(
        response => {
          if (response.result === 1) {
            if (response.data.member) {
              this.template = response.data.member.name;
            }
            if (!this.template) {
              this.template = "01";
            }
            if (this.template === "02") {
              // ??????????????????
              require("@/assets/css/icon.scss");
              require("@/assets/css/member/01.scss");
            } else {
              // ?????????????????????
              require("@/assets/css/member/02.scss");
            }
          } else {
            this.template = "01";
            require("@/assets/css/member/02.scss");
          }
        },
        response => {
          require("@/assets/css/member/02.scss");
          console.log(response.msg);
        }
      );
    },
    // ????????????
    outInfo() {
      $http.get("member.logout.index").then(
        response => {
          if (response.result == 1) {
            this.$store.commit("savemodel", {});
            this.$store.commit("alerts", response.msg);
            localStorage.setItem("token", "");
            localStorage.setItem("loginUid", "");
            MessageBox.alert(response.msg).then(action => {
              this.$router.push(this.fun.getUrl("login"));
            });
          }
        },
        response => {
          console.log(response.msg);
        }
      );
    },

    openQrCode(e) {
      if (!this.poster && e !== "none") {
        if (!this.timer) {
          this.getPoster(e);
          this.timer = setInterval(() => {
            this.getPoster(e);
          }, 3000);
        } else {
          this.$refs.hook.style.display = e;
        }
      } else {
        this.$refs.hook.style.display = e;
        clearInterval(this.timer);
      }
    },
    getPoster(e) {
      $http.get("member.poster").then(
        response => {
          if (response.result === 1) {
            this.poster = response.data.image_url;
            this.$refs.hook.style.display = e;
            if (this.poster && this.timer) {
              clearInterval(this.timer);
            }
          } else {
            Toast(response.msg);
            if (this.timer) {
              clearInterval(this.timer);
            }
          }
        },
        response => {
          console.log(response.msg);
          if (this.timer) {
            clearInterval(this.timer);
          }
        }
      );
    },

    toOrderList(index) {
      // index: 0-???????????? 1-????????? 2-????????? 3- ?????????

      this.$router.push(
        this.fun.getUrl("orderlist", {
          status: index,
          member: this
        })
      );

      this.$emit("selectedstatus", {
        status: index
      });
    },
    // ??????????????????
    getMemberInfo(data, order, plugins) {
      var that = this;
      // $http
      //   .get(
      //     "member.member.getUserInfo",
      //     {
      //       i: this.fun.getKeyByI(),
      //       type: this.fun.getTyep(),
      //       v: 2
      //     },
      //     "?????????"
      //   )
      //   .then(
      //     function(response) {
      //       if (response.result === 1) {
      that.supplier_id = data.uid;
      if (plugins.merchant && plugins.merchant.cashier) {
        that.store_set.is_open_cashier = 1;
      }
      // if (data.sign != undefined) {
      //   that.signs = data.sign.status;
      //   that.sign_name = data.sign.plugin_name;
      // }
      // if (data.help_center != undefined) {
      //   that.helps = data.help_center.status;
      //   that.help_name = data.help_center.button_name;
      // }
      // if (!data.micro) {
      //   that.haveShop = "-1";
      // } else {
      //   that.haveShop = data.micro.status;
      // }
      // that.isLove = data.love.status;

      // ???????????????
      // that.love_name = data.love.love_name
      // that.relation_switch = data.relation_switch

      // ???????????????
      // that.supplier = data.supplier
      that.member_item = data;
      that.member_order = order;
      that.coupon = data.income;
      // ?????????
      that.inviteCode = data.inviteCode.code;
      that.isshowInvit = data.inviteCode.status;

      that.isGeneralize = data.is_agent;
      that.relation_switch = data.is_agent;
      that.$store.commit("savemodel", data);
      window.localStorage.uid = data.uid;

      // that.is_agent = data.is_agent.is_agent
      // that.qrcode = data.qr;//??????????????????
      // that.poster = data.poster; //??????????????????

      that.coin = data.coin ? data.coin.status : false;
      that.coin_name = data.coin ? data.coin.coin_name : "";
      // that.MyReferrer = data.referral
      that.avatar = data.avatar;
      that.nickname = data.nickname;
      that.integral = data.integral;
      window.localStorage.setItem("integral", that.integral.text);
      that.copyright = data.copyright;
      that.$store.commit("updateBanlace", {
        balance: data.credit2
      });
      that.uid = data.uid;
      that.level_name = data.level_name;
      that.credit = data.credit;
      for (let i = 0; i < order.order.length; i++) {
        // 0 ????????? 1????????? 2????????? 3??????
        var item = order.order[i];
        if (item.status == 0) {
          that.waitPay = item.total;
        } else if (item.status == 1) {
          that.waitSend = item.total;
        } else if (item.status == 2) {
          that.waitReceive = item.total;
        } else if (item.status == 11) {
          that.waitrRefund = item.total;
        }
      }

      // }
      that.mobile = data.mobile;

      //???????????? ????????????
      // that.isELive = data.elive.status;

      //?????????
      // that.is_froze = data.froze.status;
      // that.froze_name = data.froze.froze_name;

      that.love_obj = data.love_show;
      that.integral_show = data.integral_show;
      that.is_open_net_car =
        plugins.is_open.is_open_net_car == 1 ? true : false;
      that.is_hotel = plugins.is_open.is_open_hotel == 1 ? true : false;
      this.is_open_lease_toy =
        plugins.is_open.is_open_lease_toy == 1 ? true : false;
      that.is_open_fight_groups =
        plugins.is_open.is_open_fight_groups == 1 ? true : false;
      that.is_hotel = plugins.is_open.is_open_hotel == 1 ? true : false;
      that.is_open_lease_toy =
        plugins.is_open.is_open_lease_toy == 1 ? true : false;
      if (that.is_hotel) {
        that.PageNameList = plugins.hotel;
        localStorage.setItem(
          "customizeHotelHead",
          JSON.stringify(plugins.hotel)
        );
        // that.getCustomizeHotelHead()
      }
      // if (data.withdraw_status == 1) {
      // ????????????
      //   that.isWithdraw = true;
      // }
      if (order.hotel_order) {
        order.hotel_order.forEach(item => {
          if (item.status == 0) {
            that.hotel_order["waitPay"] = item.total;
          } else if (item.status == 1) {
            that.hotel_order["waitSure"] = item.total;
          } else if (item.status == 2) {
            that.hotel_order["waitEnter"] = item.total;
          } else if (item.status == 11) {
            that.hotel_order["waitCheckOut"] = item.total;
          }
        });
      }
      if (order.fight_groups_order) {
        order.fight_groups_order.forEach(item => {
          if (item.status == 0) {
            that.groups_order["waitPay"] = item.total;
          } else if (item.status == 1) {
            that.groups_order["waitSure"] = item.total;
          } else if (item.status == 2) {
            that.groups_order["waitEnter"] = item.total;
          } else if (item.status == 11) {
            that.groups_order["waitCheckOut"] = item.total;
          }
        });
      }
      //   },
      //   function(response) {
      //     console.error(response.msg);
      //   }
      // );
    },

    //????????????????????? validity????????????????????????
    getMemberCustom(value, validity, data) {
      let that = this;

      // $http
      //   .get("member.member.get-custom-field", {
      //     i: this.fun.getKeyByI(),
      //     type: this.fun.getTyep()
      //   })
      //   .then(
      //     function(response) {
      //       if (response.result === 1) {
      if (data.is_custom == "1" && !that.fun.isTextEmpty(value)) {
        that.custom_title = data.custom_title;
        that.is_custom = true;
      } else {
        that.is_custom = false;
      }

      //??????????????????????????????
      if (data.is_validity && data.term == 1) {
        if (that.fun.isTextEmpty(validity)) {
          that.validity_value = "";
        } else {
          that.validity_value = validity + "???";
        }
      } else {
        // console.error(response.msg);
        //MessageBox.alert(response.msg);
      }
      // }
      //   },
      //   function(response) {
      //     // error callback
      //     console.error(response.msg)
      //   }
      // )
    },

    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      this.getMemberData();
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      // load more data
      this.allLoaded = true; // if all data are loaded
      this.$refs.loadmore.onBottomLoaded();
    },

    // ??????????????????
    getStroeWithdraw(data) {
      // var that = this
      // $http
      //   .get("plugin.store-cashier.frontend.store.center.is-store.index", {})
      //   .then(
      //     function(response) {
      //       if (response.result === 1) {
      if (data) {
        this.is_stroeWithdraw = data.is_store == 1 ? true : false;
      }
      //     } else {
      //       console.error(response.msg)
      //       that.is_stroeWithdraw = false
      //     }
      //   },
      //   function(response) {
      //     console.error(response.msg)
      //     that.is_stroeWithdraw = false
      //   }
      // )
    },

    // ??????
    getExtension(data) {
      // var that = this
      // $http
      //   .get("member.member.isOpenRelation", {})
      //   .then(response => {
      //     if (response.result === 1) {
      //       this.is_extension = data.switch == 1 ? true : false;
      //       this.isWithdraw = data.switch == 1 ? true : false;
      //   } else {
      //     console.error(response.msg);
      //     that.is_stroeWithdraw = false;
      //   }
      // })
      // .catch(error => {
      //   console.log(error);
      //   that.is_stroeWithdraw = false;
      // });
    },

    // ?????????????????????
    gotoMemberGrade() {
      if (this.isClick) {
        this.$router.push(this.fun.getUrl("MemberGradeList"));
      }
    },

    // ???????????????????????????
    getEnablePlugin(data) {
      // $http
      //   .get("member.member.getEnablePlugins", {})
      //   .then(response => {
      //     if (response.result === 1) {
      this.pluginsList = data;

      if (data.ViewSet.member) {
        this.template = data.ViewSet.member.name;
      }
      if (window.yzdesignerStatus) {
        this.template = "03";
        require("@/assets/css/member/designer.scss");
      } else {
        if (!this.template) {
          this.template = "01"; //?????????01
        }
        if (this.template === "02") {
          // ??????????????????
          require("@/assets/css/icon.scss");
          require("@/assets/css/member/01.scss");
        } else if (this.template === "01") {
          // ?????????????????????
          require("@/assets/css/member/02.scss");
        }
      }
      //   } else {
      //     console.log("error:", response.data)
      //   }
      // })
      // .catch(error => {
      //   console.log(error)
      // })
    },

    // ??????????????????????????????
    getMemberGrade(data) {
      // $http
      //   .get("member.member-level.is-open", {})
      //   .then(response => {
      //     if (response.result == 1) {
      this.isMemberGrade = data.is_open == 1 ? true : false;
      // this.isClick = data.level_type == 2 ? true : false;
      //   } else {
      //     this.isMemberGrade = false
      //     this.isClick = false
      //   }
      // })
      // .catch(error => {
      //   console.log(error)
      // })
    },

    pluginGoto(item) {
      if (item.name == "article") {
        this.$router.push(
          this.fun.getUrl(item.url, {
            id: "0"
          })
        );
      } else if (item.url == "liveList") {
        this.$router.push(this.fun.getUrl(item.url,{from: 1}));
      } else if (item.name == "courier") {
        window.localStorage.setItem("couriername", item.title);
        this.$router.push(this.fun.getUrl(item.url));
      } else if (item.name == "supplier") {
        this.$router.push(
          this.fun.getUrl(item.url, {
            uid: this.supplier_id
          })
        );
      } else {
        this.$router.push(this.fun.getUrl(item.url, { fromHome: 1 }));
      }
    },
    // ???????????????
    onCopy: function(e) {
      Toast({
        message: "????????????",
        duration: 1000
      });
    },
    onError: function(e) {
      Toast({
        message: "????????????",
        duration: 1000
      });
    },
    //???????????????????????????
    customizeIncome() {
      let mailLanguage = this.fun.initMailLanguage();
      //?????????????????????
      if (mailLanguage) {
        this.name_of_withdrawal_text = mailLanguage.income.name_of_withdrawal;
      }
    },
  },
  components: {
    cTitle,
    Loadmore,
    showmembercenter,
    showmemberhotelorder,
    showmembercarorder,
    showmemberleaseorder,
    showmembertool,
    showmembermerchant,
    showmembermarket,
    showmemberasset,
    showmembergrouporder,
    showbanner,
    showsign,
    showmenu,
    showtitle,
    showsearch,
    showline,
    showblank,
    showrichtext,
    showpicture,
    showcube,
    showarea,
    showshop,
    showgoods,
    shownearbygoods,
    shownotice,
    showlocation,
    showstore,
    showcoupon,
    showheadline,
    showarticle,
    showflashsale,
    showbusiness,
    showassemble,
    showvideo,
    showdiyform
  }
};
