import cTitle from "components/title";
import { MessageBox, Indicator, Toast } from "mint-ui";

export default {
  data() {
    var now = new Date();
    var year = now.getFullYear(); // 年
    var month = now.getMonth() + 1; // 月
    var day = now.getDate(); // 日
    let today = year + "-" + month + "-" + day;
    return {
      getSet: {},
      name1: "",
      form_id1: "",
      name2: "",
      form_id2: "",
      name3: "",
      form_id3: "",
      form_data_id:0,
      type_id: 1, //贷款类型
      corporate_name: "", //公司名称
      amount: "", //申请金额
      telephone: "", //电话
      name:'',//联系人
      title: "", //申请类型名字
      is_submit_success: false, //提交成功提示
      is_open_diyform:false,

      diyform: {},
      diydata: [],
      upload_name: "", // 点击上传图片的名字
      datas: [], // 已提交表单后,回显遍历的数组
      share_description: "", // 分享描述
      uploadUrl: "",
      status: 0, // 是否已提交
      types: {
        "0": "diyinput",
        "1": "diytextarea",
        "3": "diycheckbox",
        "4": "diyradio",
        "5": "diyimg",
        "2": "diyselect",
        "7": "diydate",
        "9": "diycity",
        "99": "diypwd",
        "88": "diyusername"
      },
      pickerValue: today,
      showCity: false,
      district: district,
      currentDateKey: "",
      currentCityKey: "",
      checks: [],
      isValidation: true,
      activity_id: "",
      form_id: "",
      conference: {},
      intro: false,
      thumb: "",
      description: "", // 详情信息

      loading: false,
      goodsId: "",
      optionsId: "",
      total: ""
    };
  },

  activated() {
    this.initData();
    this.diydata = [];
    this.datas = [];
    // this.form_id = this.$route.params.id;
    this.goodsId = this.$route.params.goodsId;
    this.optionsId = this.$route.params.optionsId;
    this.total = this.$route.params.total;
    this.type_id = this.$route.params.type;
    // if (!this.form_id) {
    //   Toast("该表单不存在！");
    //   this.$router.push(this.fun.getUrl("member"));
    // }
    // this.getDiyForm();
    // this.initShare();
    this.uploadUrl = this.fun.getRealUrl("upload.uploadPic", {});
    this.getData();

  },
  destroyed() {
    document.querySelector("body").removeAttribute("class");
  },
  watch: {
    is_submit_success() {
      if (this.is_submit_success == true) {
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
      this.getSet = {};
      this.name1 = "";
      this.form_id1 = "";
      this.name2 = "";
      this.form_id2 = "";
      this.name3 = "";
      this.form_id3 = "";

      this.type_id= 1; //贷款类型
      this.corporate_name= ""; //公司名称
      this.amount= ""; //申请金额
      this.telephone= ""; //电话
      this.name='';//联系人
      this.title= ""; //申请类型名字
      this.is_submit_success= false; //提交成功提示
      this.is_open_diyform=false;
    },
    getData() {
      let that = this;
      $http
        .post(
          "plugin.supply-demand.api.index.InformationData",
          {
            getSet: "getSet"
          },
          ""
        )
        .then(
          response => {
            if (response.result === 1) {
              let getSet = response.data.getSet;
              this.getSet = getSet;
              this.fun.setWXTitle(getSet.financial_services_custom_name);
              this.name1 = this.getSet.loan.goods_mortgage_name;
              this.form_id1 = this.getSet.loan.goods_mortgage_form_id;
              this.name2 = this.getSet.loan.procurement_financing_name;
              this.form_id2 = this.getSet.loan.procurement_financing_form_id;
              this.name3 = this.getSet.loan.credit_loan_name;
              this.form_id3 = this.getSet.loan.credit_loan_form_id;
              this.changeType(this.type_id);
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
    submitForm() {
      let that = this;
      let json = {};
      if(this.is_open_diyform) {
        json = {
          getFinancial: "getFinancial",
          type_id: this.type_id,
          corporate_name: this.corporate_name,
          amount: this.amount,
          name:this.name,
          telephone: this.telephone,
          title: this.title,
          form_id:this.form_data_id,
        };
        if(this.type_id == 1) {
          json.form_type = this.form_id1;
          json.title = this.name1;
        }
        if(this.type_id == 2) {
          json.form_type = this.form_id2;
          json.title = this.name2;
        }
        if(this.type_id == 3) {
          json.form_type = this.form_id3;
          json.title = this.name3;
        }
      }
      else {
        if(!this.myValidation()) {
          return false;
        }
        json = {
          getFinancial: "getFinancial",
          type_id: this.type_id,
          name:this.name,
          corporate_name: this.corporate_name,
          amount: this.amount,
          telephone: this.telephone,
          title: this.title,
          form_id:this.form_data_id,
        };
        if(this.type_id == 1) {
          json.form_type = this.form_id1;
          json.title = this.name1;
        }
        if(this.type_id == 2) {
          json.form_type = this.form_id2;
          json.title = this.name2;
        }
        if(this.type_id == 3) {
          json.form_type = this.form_id3;
          json.title = this.name3;
        }
      }
      // if (this.type_id == 1) {
      //   json.form_id = this.form_id1;
      // }
      // if (this.type_id == 2) {
      //   json.form_id = this.form_id2;
      // }
      // if (this.type_id == 3) {
      //   json.form_id = this.form_id3;
      // }
      $http
        .post("plugin.supply-demand.api.index.InformationData", json, "")
        .then(
          response => {
            if (response.result === 1) {
              this.is_submit_success = true;
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
    myValidation() {
      if (!this.corporate_name) {
        Toast("请输入公司名称");
        return false;
      }
      if (!this.amount) {
        Toast("请输入融资金额");
        return false;
      }
      if (!/^([1-9][0-9]*)+(.[0-9]{1,})?$/.test(this.amount)) {
        Toast("请输入正确的融资金额");
        return false;
      }
      if (!this.name) {
        Toast("请输入联系人");
        return false;
      }
      if (!this.telephone) {
        Toast("请输入联系电话");
        return false;
      }
      if (!/^[0-9]{1,}$/.test(this.telephone)) {
        Toast("请输入正确的联系电话");
        return false;
      }
      return true;
    },
    gotoLast() {
      this.is_submit_success = false;
      this.$router.go(-1);
    },
    // 改变贷款类型
    changeType(x) {
      this.type_id = x;
      this.diydata = [];
      this.datas = [];
      if(x==1) {
        if(this.form_id1!=0){
          this.getDiyForm(this.form_id1)
          this.is_open_diyform = true;
        }
        else{
          this.is_open_diyform = false;
        }
      }
      if(x==2) {
        if(this.form_id2!=0){
          this.getDiyForm(this.form_id2)
          this.is_open_diyform = true;
        }
        else{
          this.is_open_diyform = false;
        }
      }
      if(x==3) {
        if(this.form_id3!=0){
          this.getDiyForm(this.form_id3)
          this.is_open_diyform = true;
        }
        else{
          this.is_open_diyform = false;
        }
      }
    },
    showIntro() {
      this.intro = true;
    },
    setCity(ret) {
      var retCity = ret.itemName1 + " " + ret.itemName2 + " " + ret.itemName3;
      // console.log("retCity", retCity);
      // console.log("currentCityKey", this.currentCityKey);
      this.diydata.forEach(item => {
        if (item.name == this.currentCityKey) {
          this.$set(item, "value", retCity);
        }
      });
    },
    openPicker(name) {
      this.currentDateKey = name;
      this.$refs.picker.open();
    },
    setDate(ret) {
      // console.log(ret.Format("yyyy-MM-dd"));
      this.diydata.forEach(item => {
        if (item.name == this.currentDateKey) {
          this.$set(item, "value", ret.Format("yyyy-MM-dd"));
        }
      });
    },
    // 获得具体表单的名字
    chooseUpload(name) {
      this.upload_name = name;
      // console.log(this.upload_name);
      return true;
    },
    // vant 多其他图片上传
    onRead_2(e, flag) {
      if (!flag) {
        if (e.file.size > this.photosize) {
          this.imgPreview(e.file, 3);
          return false;
        }
      }
      var That = this;
      var real_length = 0;
      var max_length = 0;
      var real_list1 = [];
      var real_list2 = [];
      var index = 0;
      var real_name = "";
      for (let i = 0; i < this.diydata.length; i++) {
        if (this.upload_name == this.diydata[i].name) {
          real_name = this.diydata[i].name;
          // console.log(real_name);
          index = i;
          max_length = this.diydata[i].data.tp_max;
          real_list1 = this.diydata[i][real_name + "Value1"];
          real_list2 = this.diydata[i][real_name + "Value2"];
          // console.log(this.diydata[i][real_name + "Value1"]);
          break;
        }
      }
      let fd = new FormData();
      if (
        this.diydata[index][real_name + "Length"] ==
          this.diydata[index].data.tp_max ||
        this.diydata[index][real_name + "Length"] >=
          this.diydata[index].data.tp_max
      ) {
        this.$notify({
          background: "#fef0f0",
          message: "图片数量已达到上限",
          color: "#f56c6c"
        });
        return false;
      }
      if (flag) {
        fd.append("file", e);
      } else {
        fd.append("file", e.file); // 第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
      }
      fd.append("attach", "upload");

      // 添加加载提示
      Indicator.open(" ");
      axios
        .post(this.uploadUrl, fd, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          var responseData = response.data;
          if (responseData.result == 1) {
            this.diydata[index][real_name + "Length"]++;
            this.diydata[index][real_name + "Value1"].push({
              url: responseData.data.img
            });
            // console.log(this.diydata[index][real_name + "Value1"]);

            if (flag) {
              this.diydata[index][real_name + "Value2"].push({
                url: URL.createObjectURL(e)
              });
            } else {
              this.diydata[index][real_name + "Value2"].push({
                url: URL.createObjectURL(e.file)
              });
            }
            Indicator.close();
          } else {
            Toast(responseData.msg);
            Indicator.close();
          }
        })
        .catch(error => {
          console.log(error);
          Indicator.close();
        });
    },
    removeImg_1: function(item, delIndex) {
      // console.log(item);
      var index = 0;
      var real_name = "";
      for (let i = 0; i < this.diydata.length; i++) {
        if (item.name == this.diydata[i].name) {
          real_name = this.diydata[i].name;
          // console.log(real_name);
          index = i;
          break;
        }
      }
      this.diydata[index][real_name + "Value1"].splice(delIndex, 1);
      this.diydata[index][real_name + "Value2"].splice(delIndex, 1);
      this.diydata[index][real_name + "Length"] = this.diydata[index][
        real_name + "Value1"
      ].length;
    },
    openCity(name) {
      this.currentCityKey = name;
    },
    goback() {
      this.$router.go(-1);
    },
    validation() {
      this.isValidation = true;
      this.diydata.forEach(item => {
        if (item.data.tp_must == 1 && !item.value && item.type != "diyimg") {
          // console.log(item.data.tp_name, item.value);
          Toast(item.data.tp_name + "必须填写哦");
          this.isValidation = false;
        }
        if (item.data.tp_must == 1 && item.type == "diyimg") {
          if (item[item.name + "Length"] <= 0) {
            this.isValidation = false;
            Toast(item.data.tp_name + "必须填写哦");
          }
        }
        if (item.type == "diycheckbox" && item.value.length == 0) {
          console.log(item.data.tp_name, item.value);

          Toast(item.data.tp_name + "必须填写哦");
          this.isValidation = false;
        }
      });
    },
    submit() {
      // console.log("submit");
      // console.log(this.upload_name);
      this.validation();
      // console.log(this.diydata);
      if (!this.isValidation) {
        return;
      }

      this.submitConference();
    },

    submitConference() {
      var that = this;
      var formData = [];
      var formObject = {};
      this.diydata.forEach(item => {
        if (item.type == "diyimg") {
          var arr = [];
          for (let i = 0; i < item[item.name + "Value1"].length; i++) {
            arr.push(item[item.name + "Value1"][i].url);
          }
          formObject[item.name] = arr;
        } else {
          formObject[item.name] = item.value;
        }
      });

      // console.log("formObject", formObject);
      formData.push(formObject);
      console.log(formData);
      let form_id = 0;
      if(this.type_id == 1) {
        form_id = this.form_id1;
      }
      if(this.type_id == 2) {
        form_id = this.form_id2;
      }
      if(this.type_id == 3) {
        form_id = this.form_id3;
      }
      $http
        .post("plugin.diyform.api.diy-form.saveDiyFormData", {
          form_data: formData,
          form_id: form_id
        })
        .then(
          function(response) {
            if (response.result == 1) {
              that.form_data_id = response.data.form_data_id,
              // Toast("提交成功");
              that.submitForm();
              // if (that.goodsId) {
              //   that.$router.push(
              //     that.fun.getUrl("goodsorder", {
              //       tag: "-2", //立即购买,
              //       goodsId: that.goodsId,
              //       optionsId: that.optionsId,
              //       total: that.total
              //     })
              //   );
              // } else {
              //   that.getDiyForm();
              // }
            } else {
              Toast(response.msg);
              that.getDiyForm();
              return;
            }
          },
          function(response) {
            alert("fail");
          }
        );
    },

    getDiyForm(id) {
      var that = this;
      $http
        .get("plugin.diyform.api.diy-form.getDiyFormTypeMemberData", {
          form_id: id
        })
        .then(
          function(response) {
            if (response.result === 1) {
              that.loading = true;
              // if (response.data.status === 1) {
              //   that.status = response.data.status;
              //   that.diyform = response.data;
              //   that.thumb = response.data.thumb;
              //   that.share_description = response.data.share_description;
              //   that.description = response.data.description;
              //   const fields = that.diyform.fields;
              //   for (let field in fields) {
              //     var list = {
              //       title: fields[field].tp_name,
              //       value: fields[field].value,
              //       data_type: fields[field].data_type
              //     };
              //     if (list.data_type == "3") {
              //       list.value = fields[field].value.join(",");
              //     }
              //     that.datas.push(list);
              //   }
              //   return 0;
              // }
              that.diyform = response.data;
              var fields = that.diyform.fields;
              that.thumb = response.data.thumb;
              that.share_description = response.data.share_description;
              that.description = response.data.description;
              that.status = response.data.status;
              for (var field in fields) {
                if (that.types[fields[field].data_type] == "diycheckbox") {
                  var f = {
                    name: field,
                    data: fields[field],
                    value: [],
                    type: that.types[fields[field].data_type]
                  };
                } else if (that.types[fields[field].data_type] == "diydate") {
                  var f = {
                    name: field,
                    data: fields[field],
                    value: "",
                    type: that.types[fields[field].data_type]
                  };
                  if (f.data.default_time_type === 1) {
                    var now = new Date();
                    var year = now.getFullYear(); // 年
                    var month = now.getMonth() + 1; // 月
                    var day = now.getDate(); // 日
                    var today = year + "-" + month + "-" + day;
                    f.value = today;
                  } else if (f.data.default_time_type === 2) {
                    f.value = f.data.default_time;
                  }
                } else if (that.types[fields[field].data_type] == "diyimg") {
                  var f = {
                    name: field,
                    data: fields[field],
                    value: "",
                    type: that.types[fields[field].data_type]
                  };
                  f[field + "Length"] = 0;
                  f[field + "Value1"] = [];
                  f[field + "Value2"] = [];
                } else {
                  var f = {
                    name: field,
                    data: fields[field],
                    value: "",
                    type: that.types[fields[field].data_type]
                  };
                }

                that.diydata.push(f);
              }
            } else {
              // MessageBox.alert(response.msg)
            }
          },
          function(response) {
            console.log(response);
          }
        );
    },
  },
  components: { cTitle }
};
