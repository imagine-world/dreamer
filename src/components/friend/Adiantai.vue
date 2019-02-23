<template>
  <div class="tabs">
    <div class="tabs-item" v-for="(item,index) in listab" :key="index">
      <i><img :src="item.img" alt=""></i>
      <div class="tabs-item-text">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listab: [
        {img: require('../../assets/img/tingyong.png'), name: '电台分类'},
        {img: require('../../assets/img/dogeaz.png'), name: '电台排行'},
        {img: require('../../assets/img/hsaiosa.png'), name: 'D.I.FM'},
        {img: require('../../assets/img/xuekaosa.png'), name: '小冰电台'}
      ]
    }
  }
}
</script>
<style  scoped>
.tabs{
    margin-top:.1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: .4rem;
}
.tabs-item{
    flex: 1;
}
.tabs-item img{
    height: 1.5rem;
}
.tabs-item-text{
    font-size: .4rem;
    margin-top: .1rem;
}
</style>
