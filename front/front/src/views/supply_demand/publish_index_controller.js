import cTitle from "components/title";



export default {
  data() {
    return {
      activeName: 'second',      //供应、需求信息tab切换
      sortContentShow: false,   //是否显示筛选框
      sortSelectedWhich: 0,       //哪个筛选条件，1，2，3，4
    };
  },

  activated() {


  },
  watch:{
    sortContentShow() {
      console.log("hhhh")
      if(this.sortContentShow == true) {
        document.querySelector('body').setAttribute('class', 'van-overflow-hidden')
      }
      else {
        document.querySelector('body').removeAttribute('class')
      }

      // class="van-overflow-hidden"
      // overflow: hidden !important;
    }
  },
  mounted() { },
  methods: {
    //初始化数据
    initData() {
    },
    handleClick(x) {

    },
    // 打开排序
    chooseSort(x) {
      if(this.sortSelectedWhich == 0) {
        this.sortSelectedWhich = x;
        this.sortContentShow =true;
        return;
      }
      // 点击相同选项
      if(this.sortSelectedWhich == x) {
        this.sortContentShow = !this.sortContentShow;
        this.sortSelectedWhich = 0;
      }
      else {
        this.sortSelectedWhich = x;
      }
    },
    // 关闭排序
    closeSort() {
      this.sortContentShow =false;
      this.sortSelectedWhich = 0;
    },


  },
  components: { cTitle }
};
