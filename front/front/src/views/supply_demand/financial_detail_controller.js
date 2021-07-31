import cTitle from "components/title";

export default {
  data() {
    return {
      getSet:{},
      type:0,
      title:'',
      content:'',
    };
  },

  activated() {
    this.initData();
    this.type = this.$route.params.type
    this.getData();
  },
  watch: {},
  mounted() {},
  methods: {
    //初始化数据
    initData() {
      this.getSet = {};
      this.type = 0
      this.title= ''
      this.content =''
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
              console.log(this.type)
              if(this.type == 1) {
                this.title = getSet.service_introduction_name;
                this.content = getSet.service_introduction_agreement
              }
              if(this.type == 2) {
                this.title = getSet.application_process_name;
                this.content = getSet.application_process_agreement
              }
              if(this.type == 3) {
                this.title = getSet.preparation_information_name;
                this.content = getSet.preparation_information_agreement
              }
              this.fun.setWXTitle(this.title);
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
    gotoApply() {
      this.$router.push(this.fun.getUrl("financial_apply"));
    }
  },
  components: { cTitle }
};
