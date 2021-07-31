import { Indicator, Toast } from "mint-ui";
import { MessageBox } from "mint-ui";
import cTitle from "components/title";

const SUBMIT_URL = "plugin.hotel.frontend.hotel.create";

export default {
  data() {
    return {
      start: "",
      end: "",
      total: 1,
      order_info: {},

      start_time: "",
      end_time: "",
      night_day: "",

      name: "",
      mobil: "",

      isInvoice: false,
      invoice_type: "1",

      el_invoice: "1",
      fp_tt: "",
      company_name: "",
      sbxd: "",
      bz: "",
      title: "",
      // 优惠券
      popupCouponSpecs: false,
      coupon_size: 0,
      checkCouponList: [],
      use_coupon_size: 0,
      // 优惠券标识
      cup_notice: true
    };
  },

  activated() {
    this.initData();

    if (this.fun.isTextEmpty(this.$route.params.id)) {
      this.$router.push(this.fun.getUrl("home", {}));
    }

    this.end = this.$route.params.end || "";
    this.start = this.$route.params.start || "";

    if (!this.fun.isTextEmpty(this.$route.params.exchangeData)) {
      this.getExchangeData();
    } else {
      this.getOrerData();
    }

    this.getCustomizeHotelHead();
  },

  mounted() {},
  methods: {
    assembleCoupons() {
      let coupons = [];
      for (let i = 0; i < this.checkCouponList.length; i++) {
        coupons.push(this.checkCouponList[i].id);
      }
      return coupons;
    },
    // 初始化优惠券
    initCoupon(coupon) {
      this.coupon_size = coupon.length;
      this.coupons = coupon;
    },

    //初始化带有默认选中优惠券
    DefaultSelectCoupon(coupon) {
      this.coupon_size = coupon.length;
      this.coupons = coupon;
      this.checkCouponList = [];
      coupon.forEach((item, ind) => {
        if (item.checked == true) {
          this.checkCouponList.push(item);
        }
      });
      this.use_coupon_size = this.checkCouponList.length;
    },
    // 选择优惠券
    selectCoupon(value, valObj) {
      // 处理选择
      this.screenCoupon(value, valObj);
      // 设置已经使用多少优惠券
      this.use_coupon_size = this.checkCouponList.length;
      // 重新计算
      this.getOrerData();
    },
    // 筛选数据优惠券状态
    screenCoupon(value, valObj) {
      var tarValue = valObj;
      if (value.target.checked) {
        // 选中添加
        this.cup_notice = false;
        if (this.checkCouponList.length > 0) {
          for (let i = 0; i < this.checkCouponList.length; i++) {
            if (this.checkCouponList[i].id == tarValue.id) {
              this.checkCouponList.splice(i, 1);
            }
          }
          this.checkCouponList.push(tarValue);
        } else {
          this.checkCouponList.push(tarValue);
        }
      } else {
        // 取消选中
        this.cup_notice = true;
        if (this.checkCouponList.length > 0) {
          for (let i = 0; i < this.checkCouponList.length; i++) {
            if (this.checkCouponList[i].id == tarValue.id) {
              this.checkCouponList.splice(i, 1);
            }
          }
        }
      }
    },
    chooseCoupon(index) {
      this.coupons[index].checked = true;
    },
    // 优惠券
    showCoupon() {
      if (this.coupon_size == 0) {
        Toast("暂无优惠券使用");
        return;
      }
      this.popupCouponSpecs = true;
    },
    //获取酒店自定义字段
    getCustomizeHotelHead() {
      var isQuestHotel = localStorage.getItem("customizeHotelHead");
      if (!this.fun.isTextEmpty(isQuestHotel)) {
        this.fun.setWXTitle(
          JSON.parse(localStorage.getItem("customizeHotelHead")).hotels
        );
      } else {
        $http
          .get(
            "plugin.hotel.frontend.hotel.get-hotel-info.get-custom-name",
            {},
            "加载中..."
          )
          .then(response => {
            if (response.result === 1) {
              this.fun.setWXTitle(response.data.hotels);
              localStorage.setItem(
                "customizeHotelHead",
                JSON.stringify(response.data)
              );
            } else {
              Toast(response.msg);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    getOrerData() {
      let ORDER_URL = "plugin.hotel.frontend.hotel.goods-buy";
      let json = {
        enter_at: this.start,
        leave_at: this.end,
        hotel_id: this.$route.params.id,
        goods_id: this.$route.params.goods_id,
        goods_option_id: "",
        total: this.total,
        dispatch_type_id: 4,
        member_coupon_ids: this.assembleCoupons()
      };
      $http
        .get(ORDER_URL, json, "加载中")
        .then(res => {
          if (res.result === 1) {
            console.log(res);
            this.order_info = res.data;
            this.title = res.data.orders[0].order_goods[0].title;
            this.getTime(res.data.orders[0].hotel_order);
            this.initCoupon(res.data.discount.member_coupons); // 设置优惠券信息
            this.cup_notice = true;
          } else {
            this.cup_notice = true;
            Toast(res.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getExchangeData() {
      this.total = this.$route.params.total;
      let ORDER_URL = "plugin.hotel.frontend.hotel.exchange-center";
      let json = {
        enter_at: this.start,
        leave_at: this.end,
        hotel_id: this.$route.params.id,
        goods_id: this.$route.params.goodsId,
        goods_option_id: "",
        total: this.total,
        dispatch_type_id: 4,
        member_coupon_ids: this.assembleCoupons(),
        data: this.$route.params.exchangeData
      };

      $http
        .post(ORDER_URL, json, "加载中")
        .then(res => {
          if (res.result === 1) {
            console.log(res);
            this.order_info = res.data;
            this.title = res.data.orders[0].order_goods[0].title;
            this.getTime(res.data.orders[0].hotel_order);
            this.DefaultSelectCoupon(res.data.discount.member_coupons); // 设置优惠券信息
            this.cup_notice = true;
          } else {
            this.cup_notice = true;
            Toast(res.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    getTime(obj) {
      let start = obj.enter_at.split(" ");
      let end = obj.leave_at.split(" ");
      let s = start[0].split("-");
      let e = end[0].split("-");

      this.start_time = `${s[1]}月${s[2]}日`;
      this.end_time = `${e[1]}月${e[2]}日`;
      console.log(start[0]);
      this.getDays(start[0], end[0]);
    },

    getDays(strDateStart, strDateEnd) {
      let strSeparator = "-"; //日期分隔符
      let oDate1, oDate2, iDays;
      oDate1 = strDateStart.split(strSeparator);
      oDate2 = strDateEnd.split(strSeparator);
      let strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
      let strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
      iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
      console.log(iDays);
      this.night_day = iDays;
    },

    addTotal() {
      console.log(this.value);
      if (this.total < 1) {
        this.total = 1;
      }

      this.getOrerData();
    },

    invoiceChange(value) {
      this.isInvoice = value;
    },

    eInvoiceChange(value) {
      this.el_invoice = value;
    },

    typeChange(value) {
      this.invoice_type = value;
    },

    submit() {
      if (this.fun.isTextEmpty(this.name)) {
        Toast("请填写入住人");
        return;
      }

      if (this.fun.isTextEmpty(this.mobil)) {
        Toast("请填写电话号码");
        return;
      }

      if (this.isInvoice) {
        if (this.invoice_type == "1") {
          if (this.fun.isTextEmpty(this.fp_tt)) {
            Toast("请输入发票抬头");
            return;
          }
        }

        if (this.invoice_type == "2") {
          if (this.fun.isTextEmpty(this.company_name)) {
            Toast("请填写单位名称");
            return;
          }

          if (this.fun.isTextEmpty(this.sbxd)) {
            Toast("请填写纳税人识别向导");
            return;
          }
        }
      }

      let json = {
        enter_at: this.start,
        leave_at: this.end,
        hotel_id: this.$route.params.id,
        dispatch_type_id: 4,
        member_coupon_ids: JSON.stringify(this.assembleCoupons()),
        goods: JSON.stringify([
          {
            goods_id: this.$route.params.goods_id,
            goods_option_id: "",
            total: this.total
          }
        ]),
        address: JSON.stringify({}),
        orders: JSON.stringify([
          {
            pre_id: this.order_info.orders[0].pre_id,
            deduction_ids: "",
            note: this.bz
          }
        ]),
        mobile: this.mobil,
        realname: this.name,
        invoice_type: this.el_invoice,
        rise_type: this.invoice_type,
        call: this.invoice_type == "1" ? this.fp_tt : this.company_name,
        ncompany_numberote: this.sbxd
      };
      if (this.$route.params.exchangeData) {
        json.hotel_id = this.$route.params.hotel_id;
      }
      $http
        .get(SUBMIT_URL, json, "提交中...")
        .then(res => {
          if (res.result == 1) {
            console.log(res);
            this.$router.push(
              this.fun.getUrl("orderpay", {
                status: "2",
                order_ids: res.data.order_ids
              })
            );
          } else {
            MessageBox.alert(res.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    initData() {
      this.start = "";
      this.end = "";
      this.total = 1;
      this.order_info = {};

      this.start_time = "";
      this.end_time = "";
      this.night_day = "";

      this.name = "";
      this.mobil = "";

      this.isInvoice = false;
      this.invoice_type = "1";

      this.el_invoice = "1";

      this.fp_tt = "";

      (this.company_name = ""), (this.sbxd = "");
      this.bz = "";

      this.title = "";

      // 优惠券
      this.popupCouponSpecs = false;
      this.coupon_size = 0;
      this.use_coupon_size = 0;
      this.checkCouponList = [];
      this.coupons = [];
    }
  },
  components: {
    cTitle
  }
};
