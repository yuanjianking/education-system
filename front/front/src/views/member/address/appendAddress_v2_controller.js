import { Field } from "mint-ui";
import { Picker } from "mint-ui";
import addre from "assets/address/addressinfo";
import cTitle from "components/title";
import { MessageBox } from "mint-ui";
import Vue from "vue";
import { CitySelect } from "vue-ydui";
// import District from "src/gov_province_city_area_id";
import { NavBar, NavBarBackIcon, NavBarNextIcon } from "vue-ydui";

import { Popup } from "vue-ydui";

import { Switch } from "mint-ui";

// Vue.component(Switch.name, Switch);

//Vue.component(CitySelect.name, CitySelect);
// Vue.component(Popup.name, Popup);
// Vue.component(NavBar.name, NavBar);
// Vue.component(NavBarBackIcon.name, NavBarBackIcon);
// Vue.component(NavBarNextIcon.name, NavBarNextIcon);

const address = addre;
export default {
  data() {
    return {
      form: {
        username: "",
        mobile: "",
        province: "",
        city: "",
        district: "",
        address: "",
        isDefault: false,
        street: ""
      },

      // 是否可不添加区域
      is_region: 0,

      addressShow: false,
      addressName: "",
      district: district,

      //省市区id值
      districtVal: [],
      streetShow: false,
      strShow: false,

      isResize: false
    };
  },
  methods: {
    isFocus() {
      this.isResize = true;
    },
    isBlur() {
      this.isResize = false;
    },

    appendAddress() {
      var that = this;

      if (this.fun.isTextEmpty(this.form.username)) {
        MessageBox.alert("请输入收件人");
        return;
      }

      if (this.fun.isTextEmpty(this.form.mobile)) {
        MessageBox.alert("请输入联系电话");
        return;
      }

      if(!/^[0-9]{1,}$/.test(this.form.mobile)) {
        MessageBox.alert("请输入正确的联系电话");
        return;
      }

      // if (this.fun.isMoblie(this.form.mobile)) {
      //   MessageBox.alert("请输入正确的手机号");
      //   return;
      // }

      if (this.is_region==1 && this.fun.isTextEmpty(this.addressName)) {
        MessageBox.alert("请输入所在地区");
        return;
      }

      if (this.is_region==1 && this.strShow && this.fun.isTextEmpty(this.form.street)) {
        MessageBox.alert("请输入所在街道");
        return;
      }

      if (this.fun.isTextEmpty(this.form.address)) {
        MessageBox.alert("请输入详细地址");
        return;
      }

      $http
        .get("member.member-address.store", {
          username: this.form.username,
          mobile: this.form.mobile,
          city: this.form.city,
          address: this.form.address,
          province: this.form.provice == undefined ? '' : this.form.provice,
          isdefault: this.form.isDefault ? 1 : 0,
          district: this.form.district,
          street: this.form.street
        })
        .then(
          function(response) {
            if (response.result == 1) {
              MessageBox.alert(response.msg);
              that.$router.go(-1);
            } else {
              MessageBox.alert(response.msg);
            }
          },
          function(response) {
            // error callback
          }
        );
    },
    //地址回调
    addressCallback(obj) {
      this.form.street = "";
      this.districtVal = "";
      this.addressName =
        obj.itemName1 + " " + obj.itemName2 + " " + obj.itemName3;
      this.form.provice = obj.itemName1;
      this.form.city = obj.itemName2;
      this.form.district = obj.itemName3;
      this.getStreet(obj.itemValue3);
    },

    streetChoose() {
      if (this.is_region==1 && this.fun.isTextEmpty(this.addressName)) {
        MessageBox.alert("请先选择所在地区");
      } else {
        this.streetShow = true;
      }
    },

    streetConfirm(name) {
      this.form.street = name;
      this.streetShow = false;
    },

    getStreet(param) {
      $http
        .get("member.memberAddress.street", { district_id: param })
        .then(response => {
          if (response.result == 1) {
            if (
              !this.fun.isTextEmpty(response.data) &&
              response.data.length > 0
            ) {
              this.districtVal = response.data;
              this.strShow = true;
            } else {
              this.strShow = false;
            }
          } else {
            this.strShow = false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getIsOpenAddress() {
      $http
        .get("member.member-address.is-region")
        .then(response => {
          if (response.result == 1) {
            this.is_region = response.data.is_region;
          } else {
            console.log(response.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  activated() {
    this.form.username = "";
    this.form.mobile = "";
    this.form.province = "";
    this.form.city = "";
    this.form.district = "";
    this.form.street = "";
    this.form.address = "";
    this.form.isDefault = false;
    this.addressName = "";
    this.isResize = false;

    this.district = [];
    this.strShow = false;
    this.getIsOpenAddress();
  },
  mounted() {},
  components: { cTitle }
};
