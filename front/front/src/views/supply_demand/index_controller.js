import cTitle from "components/title";
import { scrollMixin } from "utils/mixin";
import { Toast } from "mint-ui";

export default {
  mixins: [scrollMixin], //加载更多
  data() {
    return {
      activeName: "first", //供应、需求信息tab切换
      sortContentShow: false, //是否显示筛选框
      sortSelectedWhich: 0, //哪个筛选条件，1，2，3，4,5
      listApi: "",
      // 分类数据
      categoty_list: [],
      second_list: [],
      catlevel: "2", //分类层级

      first_index: -1, //选中的第一级分类的索引值
      pre_first_index: -1,
      category_word: "", //选择分类，拼接的文字，如：'水果/苹果'
      //预选择的分类数据
      pre_category_word: "",
      pre_category_menus: {
        parentid: "",
        childid: "",
        thirdid: ""
      },
      category_menus: {
        parentid: "",
        childid: "",
        thirdid: ""
      },
      supply_search: {
        province_id: "",
        product_origin: "",
        product_type: ""
      },
      selected_province: -1, //选中的仓库位置
      entrepot_word: "", //仓库位置名称
      country_word: "", //产地国家名称
      product_type_word: "", //期货现货名称
      country_demand_word: "", //国内、国外、不限
      selected_country: "", //选择的产地国家
      district: district,
      unit_price: [], //元/吨
      product_state: [], //期货现货
      province_list: [
        { v: 0, n: "不限" },
        { v: 110000, n: "北京" },
        { v: 120000, n: "天津" },
        { v: 130000, n: "河北" },
        { v: 140000, n: "山西" },
        { v: 150000, n: "内蒙古" },
        { v: 210000, n: "辽宁" },
        { v: 220000, n: "吉林" },
        { v: 230000, n: "黑龙江" },
        { v: 310000, n: "上海" },
        { v: 320000, n: "江苏" },
        { v: 330000, n: "浙江" },
        { v: 340000, n: "安徽" },
        { v: 350000, n: "福建" },
        { v: 360000, n: "江西" },
        { v: 370000, n: "山东" },
        { v: 410000, n: "河南" },
        { v: 420000, n: "湖北" },
        { v: 430000, n: "湖南" },
        { v: 440000, n: "广东" },
        { v: 450000, n: "广西" },
        { v: 460000, n: "海南" },
        { v: 500000, n: "重庆" },
        { v: 510000, n: "四川" },
        { v: 520000, n: "贵州" },
        { v: 530000, n: "云南" },
        { v: 540000, n: "西藏" },
        { v: 610000, n: "陕西" },
        { v: 620000, n: "甘肃省" },
        { v: 630000, n: "青海" },
        { v: 640000, n: "宁夏" },
        { v: 650000, n: "新疆" },
        { v: 710000, n: "台湾" },
        { v: 810000, n: "香港" },
        { v: 820000, n: "澳门" }
      ],
      country_list: [
        "不限",
        "中国",
        "加拿大",
        "德国",
        "美国",
        "巴西",
        "澳大利亚",
        "新西兰",
        "墨西哥",
        "英国",
        "荷兰",
        "意大利",
        "西班牙",
        "爱尔兰",
        "俄罗斯",
        "法国",
        "捷克",
        "智利",
        "阿根廷",
        "乌克兰",
        "瑞士",
        "挪威",
        "芬兰",
        "丹麦",
        "冰岛",
        "苏格兰",
        "巴基斯坦",
        "印度尼西亚",
        "日本",
        "韩国",
        "菲律宾",
        "泰国",
        "新加坡",
        "马来西亚",
        "缅甸"
      ],
      recordsList: [],

      //more
      isLoadMore: true,
      page: 1,
      total_page: 0
    };
  },

  activated() {
    this.activeName = "first";
    this.unit_price = [];
    this.product_state = [];
    this.recordsList = [];
    this.category_list = [];
    this.second_list = [];
    this.catlevel = "2";
    this.initData();
    this.getData();
    console.log(this.district);
  },
  watch: {
    sortContentShow() {
      if (this.sortContentShow == true) {
        document
          .querySelector("body")
          .setAttribute("class", "van-overflow-hidden");
      } else {
        document.querySelector("body").removeAttribute("class");
      }
    }
  },
  mounted() {},
  methods: {
    //初始化数据
    initData() {
      this.first_index = -1; //选中的第一级分类的索引值
      this.pre_first_index = -1;
      this.category_word = ""; //选择分类，拼接的文字，如：'水果/苹果'
      //预选择的分类数据
      this.pre_category_word = "";
      this.pre_category_menus = {
        parentid: "",
        childid: "",
        thirdid: ""
      };
      this.category_menus = {
        parentid: "",
        childid: "",
        thirdid: ""
      };
      this.supply_search = {
        province_id: "",
        product_origin: "",
        product_type: ""
      };
      this.sortContentShow = false;
      this.sortSelectedWhich = 0;
      this.listApi = "";
      this.selected_province = -1;
      this.entrepot_word = "";
      this.product_type_word = "";
      this.country_demand_word = "";
      this.country_word = "";
      this.selected_country = "";
      this.district = district;
      this.page = 1;
      this.total_page = 0;
      this.isLoadMore = true;
    },
    //获取数据
    getData() {
      let that = this;
      this.isLoadMore = false;
      this.page = 1;
      var json = {};
      if (this.activeName == "first") {
        this.listApi = "plugin.supply-demand.api.index.supplyData";
        json = {
          supplyInformation: "supplyInformation",
          search: this.supply_search,
          category: {
            parentid: [this.category_menus.parentid],
            childid: [this.category_menus.childid],
            thirdid: [this.category_menus.thirdid]
          },
          page: 1
        };
      } else {
        this.listApi = "plugin.supply-demand.api.index.purchasingData";
        json = {
          purchasingInformation: "purchasingInformation",
          search: {
            province_id: this.supply_search.province_id,
            origin_requirement: this.supply_search.product_origin,
            product_type: this.supply_search.product_type
          },
          category: {
            parentid: [this.category_menus.parentid],
            childid: [this.category_menus.childid],
            thirdid: [this.category_menus.thirdid]
          },
          page: 1
        };
      }
      $http
        .post(this.listApi, json, "加载中")
        .then(
          response => {
            if (response.result === 1) {
              if (this.activeName == "first") {
                var list = response.data.supplyInformation.list;
                this.unit_price = response.data.supplyInformation.unit_price;
                this.product_state =
                  response.data.supplyInformation.product_state;
                this.category_list = response.data.supplyInformation.categoty;
                this.catlevel = response.data.supplyInformation.catlevel;
                console.log(this.category_list, this.catlevel);
              } else {
                var list = response.data.purchasingInformation.list;
              }
              this.isLoadMore = true;
              this.total_page = list.last_page;
              if (!this.total_page) {
                this.total_page = 0;
              }
              this.recordsList = list.data;
              console.log(this.recordsList);
              this.recordsList.forEach((item, index) => {
                this.recordsList[index].times = this.timeStyle(item.created_at);
                let obj = this.district.find(n => {
                  return item.province_id == n.v;
                });
                this.recordsList[index].province = obj;
                console.log(obj);
                let obj2 = item.province.c.find(n => {
                  return item.city_id == n.v;
                });
                this.recordsList[index].city = obj2;
                console.log(this.recordsList[index].times);
              });
            } else {
              Toast(response.msg);
            }
          },
          response => {
            console.log(response);
          }
        )
        .catch(err => {
          console.error(err);
        });
    },
    //获取更多数据
    getMoreData() {
      this.isLoadMore = false; // 防止多次请求分页数据
      if (this.page >= this.total_page) {
        return;
      } else {
        this.page = this.page + 1;
        var json = {};
        if (this.activeName == "first") {
          this.listApi = "plugin.supply-demand.api.index.supplyData";
          json = {
            supplyInformation: "supplyInformation",
            search: this.supply_search,
            category: {
              parentid: [this.category_menus.parentid],
              childid: [this.category_menus.childid],
              thirdid: [this.category_menus.thirdid]
            },
            page: this.page
          };
        } else {
          this.listApi = "plugin.supply-demand.api.index.purchasingData";
          json = {
            purchasingInformation: "purchasingInformation",
            search: {
              province_id: this.supply_search.province_id,
              origin_requirement: this.supply_search.product_origin,
              product_type: this.supply_search.product_type
            },
            category: {
              parentid: [this.category_menus.parentid],
              childid: [this.category_menus.childid],
              thirdid: [this.category_menus.thirdid]
            },
            page: this.page
          };
        }
        $http
          .get(this.listApi, json, "加载中")
          .then(
            response => {
              this.isLoadMore = true;
              if (response.result === 1) {
                if(this.activeName == "first") {
                  let list = response.data.supplyInformation.list.data;
                  this.recordsList = this.recordsList.concat(list); //数组拼接
                }
                else {
                  let list = response.data.purchasingInformation.list.data;
                  this.recordsList = this.recordsList.concat(list); //数组拼接
                }
              } else {
                this.page = this.page - 1;
                this.isLoadMore = false;
              }
            },
            response => {
              // error callback
            }
          )
          .catch(err => {
            console.error(err);
          });
      }
    },
    // 选择仓库位置
    changeEntrepot(item, code) {
      this.supply_search.province_id = code;
      console.log(this.supply_search);
      this.entrepot_word = item.n;
      this.getData();
      this.closeSort();
    },
    // 选中的产地国家
    changeCountry(code, index) {
      this.supply_search.product_origin = code;
      console.log(this.supply_search);
      this.country_word = code;
      this.getData();
      this.closeSort();
    },
    // 选择产品状态
    changeState(code) {
      this.supply_search.product_type = "" + code;
      console.log(this.supply_search);
      if (code == "2") {
        this.product_type_word = "不限";
      } else {
        this.product_type_word = this.product_state[code];
      }
      this.getData();
      this.closeSort();
    },
    // 产地要求
    changeCountryDemand(code) {
      this.supply_search.product_origin = "" + code;
      if (code == 2) {
        this.country_demand_word = "不限";
      } else if (code == 0) {
        this.country_demand_word = "国内";
      } else if (code == 1) {
        this.country_demand_word = "国外";
      }
      this.getData();
      this.closeSort();
    },
    handleClick(x) {
      this.closeSort(); //关闭排序
      this.initData();
      this.getData();
    },
    // 打开排序
    chooseSort(x) {
      if (this.sortSelectedWhich == 0) {
        this.sortSelectedWhich = x;
        this.sortContentShow = true;
        return;
      }
      // 点击相同选项
      if (this.sortSelectedWhich == x) {
        this.sortContentShow = !this.sortContentShow;
        this.sortSelectedWhich = 0;
      } else {
        this.sortSelectedWhich = x;
      }
    },
    // 关闭排序
    closeSort() {
      this.sortContentShow = false;
      this.sortSelectedWhich = 0;
    },
    changeCategoryFirst(index, id) {
      let that = this;
      that.pre_first_index = index;
      that.pre_category_menus.parentid = id;
      that.second_list = that.category_list[index].children;
      // that.pre_category_word = that.category_list[index].name + "/";
    },
    // 选择二级分类
    changeCategorySecond(index, id) {
      let that = this;
      that.pre_category_word = "";
      that.pre_category_menus.childid = id;
      that.category_menus = JSON.parse(JSON.stringify(that.pre_category_menus));
      console.log(that.category_menus);
      that.first_index = that.pre_first_index;
      that.pre_category_word =
        that.category_list[that.first_index].name +
        "/" +
        that.second_list[index].name;
      console.log(that.pre_category_word);
      that.category_word = that.pre_category_word;
      this.getData();
      this.closeSort();
    },

    // 选择三级
    changeCategoryThird(index, index1, id, id1) {
      let that = this;
      that.pre_category_word = "";

      that.pre_category_menus.childid = id;
      that.pre_category_menus.thirdid = id1;

      console.log(that.pre_category_word);
      that.category_menus = JSON.parse(JSON.stringify(that.pre_category_menus));
      console.log(that.category_menus);
      that.first_index = that.pre_first_index;
      that.pre_category_word =
        that.category_list[that.first_index].name +
        "/" +
        that.second_list[index].name +
        "/" +
        that.second_list[index].children[index1].name;
      that.category_word = that.pre_category_word;
      this.getData();
      this.closeSort();
    },
    // 跳至详情页
    gotoDetail(id) {
      if (this.activeName == "first") {
        this.$router.push(this.fun.getUrl("supply_detail", { id: id }));
      } else if (this.activeName == "second") {
        this.$router.push(this.fun.getUrl("demand_detail", { id: id }));
      }
    },
    // 跳转至发布页
    gotoPublish() {
      if (this.activeName == "first") {
        this.$router.push(this.fun.getUrl("publish_supply"));
      } else if (this.activeName == "second") {
        this.$router.push(this.fun.getUrl("publish_demand"));
      }
    },
    // 时间格式
    timeStyle(times) {
      let time = times;
      time = time.substring(0, 19);
      time = time.replace(/-/g, "/"); //必须把日期'-'转为'/'
      var timestamp = new Date(times).getTime();
      console.log(timestamp);
      return this.timeStyle2(times, timestamp);
    },
    // 时间格式
    timeStyle2(times, timestamp) {
      var time = times;
      var now_time = new Date().getTime();
      var used_time = now_time - timestamp;
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
        return min_time + "小时前";
      }
    }
  },
  components: { cTitle }
};
