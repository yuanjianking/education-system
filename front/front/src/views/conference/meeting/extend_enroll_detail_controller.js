import { Loadmore } from 'mint-ui';
import { Indicator, Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import cTitle from 'components/title';




export default {
  data() {
    return {
      
    }
  },

  activated() {

   

  },

  mounted() {

    

  },
  methods: {
   routerGo(name){
    this.$router.push(this.fun.getUrl(name));
   }
  },
  components: {cTitle}
}