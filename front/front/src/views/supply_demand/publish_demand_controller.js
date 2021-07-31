import cTitle from "components/title";
import { MessageBox, Indicator, Toast } from "mint-ui";

export default {
  data() {
    return {
      id: 0,
      is_edit: false,
      category_show: false,
      product_show: false,
      district: district,
      city_show: false,
      unit_price_word: "", //总量后缀
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
      // 产地国家列表
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

      to_examine: "1", //是否审核，暂时用不上
      product_state: [], //期货现货
      unit_price: [], //元/吨
      category_list: [], //分类
      second_list: [],
      third_list: [],
      catlevel: "2", //分类层级

      product_type: 0, //状态要求
      title: "",
      purchasing_total: "", //供应信息总数
      purchasing_price: "", //供应信息金额
      product_origin: "", //供应信息产地
      province_id: "", //省
      city_id: "", //城市
      product_describe: "", //供应信息名称描述
      unit_price_value: 0, //,
      origin_requirement: "2",
      category_menus: {
        parentid: "",
        childid: "",
        thirdid: ""
      },

      photosize: 1024 * 1024 * 4, // 图片大小限制,
      address: "",
      uploadUrl: "", //上传接口
      picture: [],
      fileList2: []
    };
  },

  activated() {
    this.initData();
    this.getData();
    if (this.$route.params.id) {
      this.is_edit = true;
      this.id = this.$route.params.id;
      this.getEditData(this.$route.params.id);
    } else {
      this.is_edit = false;
      this.id = 0;
    }
  },
  destroyed() {
    // document.querySelector("body").removeAttribute("class");
  },
  watch: {
    unit_price_value() {
      console.log(this.unit_price[this.unit_price_value]);
      let arr = this.unit_price[this.unit_price_value].split("/");
      this.unit_price_word = arr[arr.length - 1];
    }
  },
  mounted() {},
  methods: {
    //初始化数据
    initData() {
      this.category_show = false;
      this.product_show = false;
      this.district = district;
      this.city_show = false;
      this.unit_price_word = ""; //总量后缀
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

      this.to_examine = "1"; //是否审核，暂时用不上
      this.product_state = []; //期货现货
      this.unit_price = []; //元/吨
      this.category_list = []; //分类
      this.second_list = [];
      this.third_list = [];
      this.catlevel = "2"; //分类层级

      this.product_type = 0; //状态要求
      this.title = "";
      this.purchasing_total = ""; //供应信息总数
      this.purchasing_price = ""; //供应信息金额
      this.product_origin = ""; //供应信息产地
      this.province_id = ""; //省
      this.city_id = ""; //城市
      this.product_describe = ""; //供应信息名称描述
      this.unit_price_value = 0; //,
      this.origin_requirement = "2";
      (this.category_menus = {
        parentid: "",
        childid: "",
        thirdid: ""
      }),
        (this.photosize = 1024 * 1024 * 4); // 图片大小限制,
      this.address = "";
      this.uploadUrl = ""; //上传接口
      this.picture = [];
      this.fileList2 = [];
    },
    getData() {
      let that = this;
      $http
        .post("plugin.supply-demand.api.index.InformationData", {
          InformationAdd: "InformationAdd"
        })
        .then(
          response => {
            if (response.result === 1) {
              // Toast(response.msg);
              let InformationAdd = response.data.InformationAdd;
              that.unit_price = InformationAdd.unit_price;
              InformationAdd.product_state.forEach((item, index) => {
                that.product_state.push({ id: index, name: item });
              });
              that.product_state.unshift({ id: 2, name: "不限" });

              that.category_list = InformationAdd.result;
              that.catlevel = InformationAdd.catlevel;
              console.log(that.product_state, that.unit_price);
              // 重量后缀
              let arr = this.unit_price[this.unit_price_value].split("/");
              this.unit_price_word = arr[arr.length - 1];
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

    // 获得修改数据
    getEditData(id) {
      let that = this;
      let json = {
        purchasingInformationEdit: "purchasingInformationEdit",
        purchasing_id: id
      };
      $http
        .post("plugin.supply-demand.api.index.purchasingData", json, "")
        .then(
          response => {
            if (response.result === 1) {
              let purchasingInformationEdit =
                response.data.purchasingInformationEdit;
              let item = response.data.purchasingInformationEdit.item;

              this.title = item.title;
              this.product_type = item.product_type;
              this.unit_price_value = item.unit_price;
              // 重量后缀
              let arr = this.unit_price[this.unit_price_value].split("/");
              this.unit_price_word = arr[arr.length - 1];

              this.purchasing_price = item.purchasing_price;
              this.origin_requirement = item.origin_requirement;
              this.purchasing_total = item.purchasing_total;
              this.product_describe = item.product_describe;
              this.province_id = item.province_id;
              this.city_id = item.city_id;

              //地区回显
              let obj = this.district.find(n => {
                return this.province_id == n.v;
              });
              let province = obj;
              console.log(obj);
              let obj2 = province.c.find(n => {
                return this.city_id == n.v;
              });
              let city = obj2;
              this.address = province.n + " " + city.n + " ";

              // 分类回显
              this.category_menus.parentid =
                purchasingInformationEdit.category_menus[0].id;
              this.category_menus.childid =
                purchasingInformationEdit.category_menus[0].children[0].id;
              this.pre_category_menus.parentid =
                purchasingInformationEdit.category_menus[0].id;
              this.pre_category_menus.childid =
                purchasingInformationEdit.category_menus[0].children[0].id;
              this.category_word =
                purchasingInformationEdit.category_menus[0].name +
                "/" +
                purchasingInformationEdit.category_menus[0].children[0].name;
              if (this.catlevel == 3) {
                if (
                  purchasingInformationEdit.category_menus[0].children[0]
                    .children
                ) {
                  this.category_word =
                    this.category_word +
                    "/" +
                    purchasingInformationEdit.category_menus[0].children[0]
                      .children[0].name;
                  this.category_menus.third =
                    purchasingInformationEdit.category_menus[0].children[0].children[0].id;
                  this.pre_category_menus.third =
                    purchasingInformationEdit.category_menus[0].children[0].children[0].id;
                }
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
    chooseCategory() {
      let that = this;
      console.log("change");
      this.category_show = true;
      if (this.first_index == -1) {
        this.second_list = [];
      } else {
        this.second_list = this.category_list[this.first_index].children;
      }
    },

    // 关闭选择分类
    closeCategory() {
      let that = this;
      that.pre_category_menus = JSON.parse(JSON.stringify(that.category_menus));
      that.pre_category_word = "";
      that.category_show = false;
      // that.first_index = that.pre_first_index;
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
      that.category_show = false;
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
      that.category_show = false;
    },
    submitForm() {
      let that = this;
      if (!this.validation()) {
        console.log("表单验证不通过");
        return false;
      }
      var json = {};
      if (this.is_edit == true) {
        json = {
          purchasingEdit: "purchasingEdit",
          purchasing_id: this.id,
          title: that.title,
          purchasing_total: that.purchasing_total, //供应信息总数
          purchasing_price: that.purchasing_price, //供应信息金额
          origin_requirement: that.origin_requirement, //供应信息产地
          // product_pictures: that.picture,
          province_id: that.province_id, //省
          city_id: that.city_id, //城市
          product_describe: that.product_describe, //供应信息名称描述
          unit_price: that.unit_price_value, //,
          product_type: that.product_type,
          category: that.category_menus
        };
      } else {
        json = {
          purchasingAdd: "purchasingAdd",
          title: that.title,
          purchasing_total: that.purchasing_total, //供应信息总数
          purchasing_price: that.purchasing_price, //供应信息金额
          origin_requirement: that.origin_requirement, //供应信息产地
          // product_pictures: that.picture,
          province_id: that.province_id, //省
          city_id: that.city_id, //城市
          product_describe: that.product_describe, //供应信息名称描述
          unit_price: that.unit_price_value, //,
          product_type: that.product_type,
          category: that.category_menus
        };
      }
      console.log(json);

      $http
        .post("plugin.supply-demand.api.index.purchasingData", json, "")
        .then(
          response => {
            if (response.result === 1) {
              Toast("操作成功");
              that.$router.go(-1);
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
    validation() {
      if (!this.title) {
        Toast("请输入产品名称");
        return false;
      }
      if (!this.category_menus.parentid) {
        Toast("请选择产品分类");
        return false;
      }
      if (!this.purchasing_price) {
        Toast("请输入单价");
        return false;
      }
      if (!/^([1-9][0-9]*)+(.[0-9]{1,})?$/.test(this.purchasing_price)) {
        Toast("请输入正确单价");
        return false;
      }
      if (!this.purchasing_total) {
        Toast("请输入数量");
        return false;
      }
      if (!/^([1-9][0-9]*)+(.[0-9]{1,})?$/.test(this.purchasing_total)) {
        Toast("请输入正确数量");
        return false;
      }
      if (!this.province_id) {
        Toast("请选择我的位置");
        return false;
      }
      if (!this.city_id) {
        Toast("请选择我的位置");
        return false;
      }
      if (!this.product_describe) {
        Toast("请输入产品描述");
        return false;
      }
      if (!this.origin_requirement) {
        Toast("请选择产地");
        return false;
      }
      return true;
    },
    // 选择城市回调
    changeCity(res) {
      console.log(res);
      this.province_id = res.itemValue1;
      this.city_id = res.itemValue2;
      this.address = res.itemName1 + " " + res.itemName2 + " ";
    }
  },
  components: { cTitle }
};
