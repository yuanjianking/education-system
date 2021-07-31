import {Toast, MessageBox} from 'mint-ui';
export default {
  data() {
    return {
      title: "搜索",
      inputs: "",
      userPhone:'',
      shopName:'',
      datas: [],
    };
  },
  activated() {
    this.initData();
    this.city = this.$route.params.city;
    this.point = JSON.parse(this.$route.params.point);
    this.getData();
  },
  
  mounted() {
   
  },
  methods: {
    initData(){
      this.title="搜索";
      this.inputs="";
      this.userPhone="";
      this.shopName="";
      this.datas=[];
    },
    enterSearch(event) {
      if (event.keyCode === 13) {
        //如果按的是enter键
        event.preventDefault();
        this.search();
      }
    },
    search() {
      let p = this.fun.bd_encrypt(this.point.lng, this.point.lat);
      let json={
            name: this.inputs,
            lng: p.lng,
            lat: p.lat,
      };
      $http.post("plugin.easy-refuel.frontend.index.searchByName", json, " ").then(
        (response) => {
          if (response.result === 1) {   
            this.datas=response.data.data;
            this.shopName=response.data.shopName;
            this.userPhone=response.data.userPhone;
          } else {
              Toast(response.msg);
          }
        },
        function (response) {
          console.log(response);
        }
      );
    },
    goback() {
      this.$router.go(-1);
    },
    toDetail(item) {
      let json={
        userPhone:this.userPhone,
        latitude:item.latitude,
        longitude:item.longitude,
        stationId:item.stationId
      }
      $http.post("plugin.easy-refuel.frontend.index.detail", json, " ").then(
        (response) => {
          if (response.result === 1) {
           window.location.href=response.data;
          } else {
            Toast(response.msg);
          }
        },
        function (response) {
          console.log(response);
        }
      );
    },
    getData() {
      let p = this.fun.bd_encrypt(this.point.lng, this.point.lat);
      let json={
            name: '',
            lng: p.lng,
            lat: p.lat,
      };
      $http.post("plugin.easy-refuel.frontend.index.index", json, " ").then(
        (response) => {
          if (response.result === 1) {   
            this.datas=response.data.data;
            this.shopName=response.data.shopName;
            this.userPhone=response.data.userPhone;
          } else {
            if(response.data.hasOwnProperty('bindPhone')){
              Toast(response.msg);
              this.$router.push(this.fun.getUrl('editmobile'));
            }else{
              Toast(response.msg);
            }
          }
        },
        function (response) {
          console.log(response);
        }
      );
    },
  },

  components: {  }
};
