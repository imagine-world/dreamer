<template>
  <div>
    <div class="imghsaza" v-for="(item,index) in litz" :key="index">
        <img :src="item.imgs" alt="" class="imghzas">
      <div class="bianqian">
        <div class="tesaz">{{item.thies}}</div>
        <div class="bianqians">
            {{item.xiao}}
        </div>
        <div>
          <img :src="item.imgavbz" class="imhgzas">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      litz: [
        {
          imgs: require('../../../img/3a8c5dee3ece4c3a01a67d5c5ade116.png'),
          imgavbz: require('../../../img/jaintous.png'),
          thies: '本地音乐',
          xiao: 0
        },
        {
          imgs: require('../../../img/3a8c5dee3ece4c3a01a67d5c5adyin.png'),
          imgavbz: require('../../../img/jaintous.png'),
          thies: '最近播放',
          xiao: 1000
        },
        {
          imgs: require('../../../img/3a8c5dee3ece4c3a01a67d5c5adeyinyue.png'),
          imgavbz: require('../../../img/jaintous.png'),
          thies: '我的电台',
          xiao: 100
        },
        {
          imgs: require('../../../img/3a8c5dee3ece4c3a01a67d5c5aden.png'),
          imgavbz: require('../../../img/jaintous.png'),
          thies: '我的收藏',
          xiao: 100
        },
        {
          imgs: require('../../../img/3a8c5dee3ece4c3a01a67d5c5adeyues.png'),
          imgavbz: require('../../../img/jaintous.png'),
          thies: 'Sati 空间',
          xiao: 100
        }
      ]
    }
  }
}
</script>
<style>
.imghzas{
    width: 8%;
    margin-left: 15px;
}
.imghsaza{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: #fcfcfc;

}
.bianqian{
    border-bottom: 1px solid #e3e2e7;
    display: flex;
    align-items:center;
    height:8vh;
    justify-content: space-between;
    width:80%;
    margin-left: 18px;
}
.tesaz{
    width: 100vw;
    font-size:3vh;
}
.bianqians{
    width:100vw;
    color: #969799;
    font-size:20px;
    text-align: right;
    margin-right:5px;
}
.imhgzas{
    margin-left:6px;
    width: 66%;
    vertical-align: middle;
}
</style>
