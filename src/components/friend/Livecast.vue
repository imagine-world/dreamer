<template>
  <div class="Livecast">
    <div class="tuanja">
      <img src="../../assets/img/zhibos.png" class="imghe">
      <span>Look直播</span>
      <img src="../../assets/img/jiantouz.png" class="imgge">
    </div>
    <div class="lov-list">
      <div class="listas" v-for="(item,index) in lovlist" :key="index">
        <img :src="item.touxian" class="touxia">
        <div class="listas-name">
          <img :src="item.shenimg" class="imhsa">
          <span class="liosttex">{{item.obo}}</span>
        </div>
        <div class="listas-ming">
          <img :src="item.imgs" class="imhsa">
          <span class="liosttex">{{item.name}}</span>
        </div>
        <div class="listas-jie">{{item.tihi}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lovlist: [
        {
          obo: '王星宇王星宇王星宇',
          name: '小霸王天使',
          tihi: '这世界有多少好人,偏偏有你在啊偏偏有你在啊',
          touxian: require('../../assets/img/meincsaas.png'),
          imgs: require('../../assets/img/wd.png'),
          shenimg: require('../../assets/img/shenyin.png')
        },
        {
          obo: '甜美',
          name: '小霸王天使',
          tihi: '这世界有多少好人,偏偏有你在啊偏偏有你在啊',
          touxian: require('../../assets/img/meincsaas.png'),
          imgs: require('../../assets/img/wd.png'),
          shenimg: require('../../assets/img/shenyin.png')
        },
        {
          obo: '川音姐姐',
          name: '小霸王天使',
          tihi: '这世界有多少好人,偏偏有你在啊偏偏有你在啊',
          touxian: require('../../assets/img/meincsaas.png'),
          imgs: require('../../assets/img/wd.png'),
          shenimg: require('../../assets/img/shenyin.png')
        }
      ]
    }
  }
}
</script>
<style scoped>
.Livecast {
  margin-top: .2rem;
  padding: 0rem .2rem;
  margin-bottom: .2rem;
}
.tuanja {
  display: flex;
  align-items: center;
}
.tuanja span {
  margin-left: 0.2rem;
  font-size: .4rem;
  font-weight: bold;
}
.imghe {
  height: 0.7rem;
}
.imgge {
  height: 0.4rem;
  margin-left: 0.2rem;
  margin-top: 0.06rem;
}
.lov-list {
  display: flex;
  align-items: center;
  margin-right: 0.1rem;
  margin-top: 0.2rem;
  overflow: hidden;
}
.listas {
  position: relative;
  width: 33.333%;
  margin-right: .2rem;
}
.touxia{
  height: 4.45rem;
}
.listas-name{
  display: flex;
  align-items: center;
  background: #ff2a4d;
  border-bottom-right-radius:.4rem;
  position: absolute;
  top: 0;
  color: white;
  width: 2rem;
  height: .5rem;
  padding-right: .3rem;
  overflow:hidden;
  text-overflow:ellipsis;
}
.imhsa{
  height: .4rem;
  margin-left: .1rem
}
.liosttex{
  margin-left: .1rem;
  font-size: .35rem;
}
.listas-ming{
  position: absolute;
  top: 3.8rem;
  font-size: .4rem;
  color: white;
  display: flex;
  align-items: center;
}
.listas-jie{
  font-size: .4rem;
 overflow: hidden;
 text-overflow: ellipsis;
 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
 margin-top: .1rem;
}
</style>
