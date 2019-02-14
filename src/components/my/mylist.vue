<template>
  <div>
    <div class="imghsaza" v-for="(item,index) in litz" :key="index">
        <img :src="item.imgs" alt="" class="imghzas">
      <div class="bianqian" :class="item.id===is?'bia':''">
        <div class="item-left">{{item.thies}}</div>
        <div class="bianqians item-cehas">
            {{item.xiao}}
        </div>
        <div class="item-right">
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
      is: 4,
      litz: [
        {
          id: 0,
          imgs: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5ade116.png'),
          imgavbz: require('../../assets/img/jaintous.png'),
          thies: '本地音乐',
          xiao: 0
        },
        {
          id: 1,
          imgs: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5adyin.png'),
          imgavbz: require('../../assets/img/jaintous.png'),
          thies: '最近播放',
          xiao: 1000
        },
        {
          id: 2,
          imgs: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5adeyinyue.png'),
          imgavbz: require('../../assets/img/jaintous.png'),
          thies: '我的电台',
          xiao: 100
        },
        {
          id: 3,
          imgs: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5aden.png'),
          imgavbz: require('../../assets/img/jaintous.png'),
          thies: '我的收藏',
          xiao: 100
        },
        {
          id: 4,
          imgs: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5adeyues.png'),
          imgavbz: require('../../assets/img/jaintous.png'),
          thies: 'Sati 空间'
        }
      ]
    }
  }
}
</script>
<style scoped>
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
    height:1.5rem;
    font-size: .4rem;
    border-bottom: .0125rem solid #e2e2e4;
}
.bia{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:1.5rem;
    font-size: .4rem;
    border-bottom: none;
}
.imghzas{
    height: .6rem;
    margin-right: .6rem;
    margin-left: .2rem;
}
.imhgzas{
    width: .4rem;
    height: .4rem;
}
.item-left{
    flex: 1;
}
.item-right{
    margin: 0 .2rem;
}
.bianqians{
  font-size: .38rem;
}
</style>
