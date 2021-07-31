<template>
  <div id="search" transition="fadeInLeft">
    <div id="soso" class="uou" :class="{ mout: amout }">
      <div class="search">
        <mt-button
          slot="prepend"
          icon="back"
          style="background: #fff;box-shadow: none;"
          @click="goback"
        ></mt-button>
        <div class="searchBox">
          <form @submit.prevent action="#">
            <input
              type="search"
              placeholder="请输入内容"
              @keypress="enterSearch"
              v-model="inputs"
            />
          </form>
          <div class="img-icon" @click="search">
            <div class="img-icon-btn"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
        <div class="item" v-for="(item,index,key) in datas" @click="toDetail(item)">
          <div class="top">
            <div class="left" >
              <img :src="item.stationPic">
            </div>
            <div class="right">
              <div class="title">
                <span>{{item.stationName}}</span>
                <span style="color: #fda804;">{{item.starNum}}分</span>
              </div>
              <div class="distance">
                <span class="location">{{item.location}}</span>
                <span>{{item.distance}}km</span>
              </div>
              <div class="down">
                  <span class="jian">减</span>
                  <span class="txt">{{shopName}}专属价↓↓↓</span>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="wrap">
              <template v-for="(list,index,key) in item.prices">
                  <div style="text-align: left;"><span style="font-size:12px;margin-right: 0.5rem;">{{list.oilCode}}</span><del style="margin-right: 0.5rem;font-size:12px;">{{list.stationPrice}}元/升</del><span style="color: #fe2d03;font-size:12px;">{{list.discountPrice}}元/升</span></div>
                  <div style="font-size: 12px;color:#666666;margin-top:0.5rem;margin-bottom: 0.5rem;">低于国家价{{(Number(list.discountPrice)-Number(list.countryPrice)).toFixed(2)}}元,普通车无该特惠</div>
              </template>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import search_controller from "./search_controller";
export default search_controller;
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
#search {
  .osll {
    min-height: 100vh;
    overflow: scroll;
  }
  .uou {
    // position: fixed;
    // z-index: 99;
    // top: 0px;
    // transition: 0.2s;
    // -webkit-transition: 0.2s;
    width: 100%;
  }
  .mout {
    top: -2.25rem;
  }
}
.search {
  overflow: hidden;
  background: #fff;
  border-bottom: 0.0625rem solid #f5f5f5;
  width: 100%;
  /*.el-button.el-button--default {*/
  /*float: left;*/
  /*width: 10%;*/
  /*border: none;*/
  /*padding-top: 1rem;*/
  /*}*/
  .mint-button.mint-button--default {
    float: left;
    width: 10%;
    border: none;
    padding-top: 0;
    box-shadow: none;
  }
  .el-input.el-input-group.el-input-group--append {
    float: left;
    width: 80%;

    margin-left: 2%;
    height: 2.8125rem;
  }
  .el-input-group__append .el-button.el-button--default {
    background: #f5f5f5;
    padding-top: 0.5625rem;
    line-height: 1rem;
    padding-right: 1.8125rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .el-input.el-input-group.el-input-group--append .el-input-group__append {
    background: #f5f5f5;
  }
  .el-col-1 {
    margin: 0.75rem 0rem;
    color: #666;
    font-size: 16px;
  }
  .searchBox {
    position: relative;
    font-size: 14px;
    display: inline-table;
    float: left;
    width: 80%;
    margin-left: 2%;
    height: 2.8125rem;
    input {
      vertical-align: middle;
      border: none;
      background: #f2f2f2 none;
      box-sizing: border-box;
      outline: 0;
      padding: 0.1875rem 0.625rem;
      padding-right: 2.625rem;
      height: 1.875rem;
      line-height: 1.875rem;
      margin-top: 0.5rem;
      color: #8c8c8c;
      font-size: 14px;
      width: 17.75rem;
      border-radius: 0.9375rem;
      z-index: 10;
    }
    .img-icon {
      border: none;
      color: #a9a9a9;
      display: table-cell;
      position: relative;
      border-radius: 0;
      height: 1.875rem;
      top: 0.0625rem;
      opacity: 2;
      left: -2.25rem;
      .img-icon-btn {
        position: absolute;
        z-index: 12;
        width: 1rem;
        height: 1rem;
        top: 50%;
        left: 50%;
        margin-left: -0.5rem;
        margin-top: -0.5rem;
        background: url("../../assets/images/search.png") no-repeat center
          center;
        background-size: 80% 80%;
      }
    }
  }
}
.content{
      width:100%;
      padding-top:1.375rem;
      padding-bottom:1.375rem;
      padding-left:1rem;
      padding-right:1rem;
      background-color: #ffffff;
      z-index: 999;
      position: relative;
      .item{
        margin-top: 1rem;
        .top{
          display: flex;
          .left{
            width: 5.6875rem;
            height: 5.75rem;  
            border-radius: 50%;
            border: solid 0.0625rem #fda804;
            img{
              width:100%;
              height:100%;
              border-radius: 50%;
            }
          }
          .right{
            flex:1;
            margin-left:0.75rem;
            flex-direction: column;
            display: flex;
            justify-content: space-between;
            .title{
              display:flex;
              justify-content:space-between;
             
            }
            .distance{
              text-align: left;
              color: #666666;
              font-size:12px;
              overflow: hidden;
              display:flex;
              justify-content: space-between;
              align-items: center;
                .location{
                  width:70%;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                }
            }
            .down{
              
              text-align: left;
              display: flex;
              .jian{
                width: 0.875rem;
                height: 0.875rem;
                background-color: #ff3000;
                border-radius: 0.1875rem;
                display:flex;
                align-items:center;
                justify-content:center;
                color:#fff;
                font-size:12px;
                margin-right:0.5rem;
              }
              .txt{
                color: #ff3000;
                font-size: 12px;
              }
            }
          }
        }
        .bottom{
          display: flex;
          justify-content: flex-end;
          margin-top:1rem;
          .wrap{
            width: 15.25rem;
           padding:0.5rem;
            background-color: #f8f8f8;
            border-radius: 0.3125rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
          }
        }
      }
    }
</style>
