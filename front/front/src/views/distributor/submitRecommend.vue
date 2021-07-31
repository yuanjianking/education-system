<!-- 提交推荐升级 -->
<template>
  <div id="submitRecommend">
    <c-title :hide="false" text="提交推荐"></c-title>
    <div class="box">
      <div class="left_b">会员ID</div>
      <input type="number" placeholder="输入会员id（必填）" v-model="memberId">
    </div>
    <div class="box">
      <div class="left_b">选择等级</div>
      <div @click="ishowDropdown" style="display: flex;align-items: center;">
        <div class="dropdown" style="color:#999;" v-show="!select_levelName">选择等级</div>
        <div class="dropdown" v-show="select_levelName">{{select_levelName}}</div>
        <van-icon name="arrow-down" v-show="showLevel"/>
        <van-icon name="arrow-up" v-show="!showLevel"/>
      </div>
    </div>
    <div class="btn" @click="submit">提交</div>
    <div class="level_list" v-if="showLevel">
      <van-radio-group v-model="level_id">
        <van-cell-group>
          <van-cell :title="item.level_name" clickable  v-for="(item, index) in level_list" :key="index">
            <template #right-icon>
              <van-radio :name="item.id" @click="selectLevel(item.level_name)" checked-color="#f20f0f"/>
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
import cTitle from "components/title";
import { Toast } from "mint-ui";

export default {
  data () {
    return {
      memberId:null,
      level_id: '',
      select_levelName: null,
      level_list:[],
      showLevel: false
    }
  },
  components: {
    cTitle
  },
  computed: {
  },
  mounted() {
    this.getLevel();
  },
  methods: {
    getLevel(){
      $http.post('plugin.channel.frontend.recommend.handle.index',{},"").then(response => {
        if (response.result === 1) {
         this.level_list = response.data.levels;
        } else {
          Toast(response.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
    selectLevel(_name){
      this.select_levelName = _name;
    },
    ishowDropdown(){
      this.showLevel = !this.showLevel;
    },
    submit(){
      if(this.fun.isTextEmpty(this.memberId)){
        Toast("请填写会员id!");
        return;
      }
      if(this.fun.isTextEmpty(this.level_id)){
        Toast("请选择会员等级!");
        return;
      }
      $http.post('plugin.channel.frontend.recommend.handle.sub',{child_uid:this.memberId,level_id:this.level_id},"").then(response => {
        if (response.result === 1) {
         Toast("提交推荐升级成功！");
        } else {
          Toast(response.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>
<style lang='scss' scoped>
#submitRecommend{
  padding-top: 40px;
  background: #fff;
  .box{
    height: 3rem;
    line-height: 3rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    // border-bottom: 0.0625rem solid #e0e0e0;
    font-size: 1.125rem;
    .left_b{
      font-weight: bold;
      color: #000;
    }
    input{
      border: none;
      text-align: right;
    }
  }
  .btn{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.75rem;
    line-height: 2.75rem;
    background: #f20f0f;
    text-align: center;
    color: #fff;
  }
  .level_list{
    text-align: left;
    max-height: 14rem;
    overflow-y: scroll;
  }
}
</style>
