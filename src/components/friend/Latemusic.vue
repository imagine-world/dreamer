
<template>
  <div class="Latemusic">
    <div class="tuanj">
      <span>最新音乐</span>
      <img src="../../assets/img/jiantouz.png" alt>
    </div>
    <div class="tabs-list">
      <div class="feka" v-for="(item,index) in tabjan" :key="index">
        <img :src="item.imgs" class="item-imga">
        <!-- <div class="fudong">
          <img :src="item.imgg" class="imggg">
          <span class="span-ieam">{{item.num}}亿</span>
        </div> -->
        <div class="item-texts">
            <span>{{item.geming}}</span>
            <div class="item-text-sas">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabjan: [
        {
          name: '王三博',
          imgs: require('../../assets/img/eryuesa.png'),
          imgg: require('../../assets/img/yingyue.png'),
          geming: '二月'
        },
        {
          name: '王三博',
          imgs: require('../../assets/img/eryuesa.png'),
          imgg: require('../../assets/img/yingyue.png'),
          geming: '二月'
        },
        {
          name: '王三博',
          imgs: require('../../assets/img/eryuesa.png'),
          imgg: require('../../assets/img/yingyue.png'),
          geming: '二月'
        },
        {
          name: '王三博',
          imgs: require('../../assets/img/eryuesa.png'),
          imgg: require('../../assets/img/yingyue.png'),
          geming: '二月'
        },
        {
          name: '王三博',
          imgs: require('../../assets/img/eryuesa.png'),
          imgg: require('../../assets/img/yingyue.png'),
          geming: '二月'
        },
        {
          name: '王三博',
          imgs: require('../../assets/img/eryuesa.png'),
          imgg: require('../../assets/img/yingyue.png'),
          geming: '二月'
        }
      ]
    }
  }
}
</script>
<style scoped>
.Latemusic{
    margin-top: .2rem;
    padding: 0 .2rem;
    font-size: .4rem;
}
.tuijiange {
  margin-top: 0.4rem;
  padding: 0 0.2rem;
}
.tuanj {
  font-size: .4rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 0 auto;
}
.tuanj img {
  vertical-align: middle;
  height: 0.3rem;
  margin-top: -.05rem;
  margin-left: 0.2rem;
}
.tabs-list {
  width: 100%;
  overflow: hidden;
}
.feka {
  float: left;
  width: 33%;
  margin: 0.2rem auto;
  position: relative;
  word-wrap: break-word;
  margin-right: .03rem;
}
.item-imga {
  height: 3.3rem;
}
.fudong {
  position: absolute;
  top: 0;
  right: 0.3rem;
  font-size: 0.4rem;
  color: white;
}
.item-text-sas{
    color: #8e8e90;
}
.item-texts {
  margin-top: 0.1rem;
  font-size: 0.4rem;
  overflow:hidden;
 overflow: hidden;
 text-overflow: ellipsis;
 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
}
.imggg {
  height: 0.34rem;
}
.span-ieam {
  font-size: 0.3rem;
}
</style>
