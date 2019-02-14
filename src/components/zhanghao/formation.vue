<template>
  <div>
      <div class="news">
        <div class="news-left"><img src="../../assets/img/xinfd.png" alt=""></div>
        <div class="news-certe">我的消息</div>
        <div class="news-right"><img src="../../assets/img/jaintous.png" alt=""></div>
      </div>
      <div class="bag"></div>
      <div class="imghsaza" v-for="(item,index) in litz" :key="index">
        <img :src="item.imgs" class="imghzas">
      <div class="bianqian" :class="item.id===is?'bia':''">
        <div class="item-left">{{item.thies}}</div>
        <div class="bianqians">{{item.xiao}}</div>
        <img :src="item.imgavbz" class="imhgzas">
      </div>
    </div>
    <div class="bag"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      is: 4,
      litz: [
        {
          id: 0,
          imgs: require('../../assets/img/huiyuan.png'),
          imgavbz: require('../../assets/img/jaintous.png'),
          thies: '会员中心'
        },
        {
          id: 1,
          imgs: require('../../assets/img/piaopoa.png'),
          imgavbz: require('../../assets/img/jaintous.png'),
          thies: '云村有票'
        },
        {
          id: 2,
          imgs: require('../../assets/img/gouwuca.png'),
          imgavbz: require('../../assets/img/jaintous.png'),
          thies: '商城'
        },
        {
          id: 3,
          imgs: require('../../assets/img/youxiji.png'),
          imgavbz: require('../../assets/img/jaintous.png'),
          thies: '精品游戏推荐'
        },
        {
          id: 4,
          imgs: require('../../assets/img/miansa.png'),
          imgavbz: require('../../assets/img/jaintous.png'),
          thies: '在线听歌面流量'
        }
      ]
    }
  }
}
</script>
<style  scoped>
.news{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem .2rem;
  box-sizing: border-box;
}
.news-left img{
  height: .6rem;
  margin-top: -.2rem;
}
.news-certe{
  flex: 1;
  margin-left: .6rem;
  font-size: .4rem;
}
.news-right img{
  height: .4rem;
  margin-top: -.15rem;
}
.bag{
  background: #eeeff1;
  height: .3rem;
}
.imghsaza{
    width: 100%;
    display: flex;
    align-items: center;
}
.bianqian{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:1.2rem;
    font-size: .4rem;
    border-bottom: .0125rem solid #e2e2e4;
    margin-left: .4rem
}
.bia{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:1.2rem;
    font-size: .4rem;
    border-bottom: none;
}
.imghzas{
  width: .66rem;
  margin-left: .2rem;
  height: .6rem;
}
.bianqians{
  flex: 1;
}
.imhgzas{
  height: .4rem;
  margin-right: .2rem;
}
</style>
