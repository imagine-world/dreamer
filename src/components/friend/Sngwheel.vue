<template>
  <div class="quanjia">
    <div v-for="(item,index) in list" :key="index" class="item-sepir">
      <div class="item-sng">
        <img class="item-imgs" :src='item.imghs'>
        <div class="item-vip">{{item.vip}}</div>
        <div class="item-name">
          <div class="item-name-texsz">
            <span>{{item.gemin}}</span>
            <span>{{item.name}}</span>
          </div>
          <div class="item-name-texs">{{item.ming}}</div>
        </div>
       <div class="item-bobo"><img class="shanjia" :src="item.shan"></div>
      </div>
      <div class="item-bag">{{item.jies}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          id: 0,
          vip: 'VIP专项',
          imghs: require('../../assets/img/yintyuuea.png'),
          shan: require('../../assets/img/sanjiao.png'),
          name: '张三丰',
          gemin: '单曲',
          ming: 'A-TTENION',
          jies: '符合冬日气氛悲伤的情歌'
        }
      ]
    }
  }
}
</script>
<style scoped>
.quanjia{
}
.item-sepir{}
.item-sng {
  position: relative;
}
.item-vip {
  position: absolute;
  color: white;
  background: #f9736a;
  top: 0;
  left: 0;
  width: 1.5rem;
  font-size: 0.3rem;
  text-align: center;
  padding: 0.1rem 0;
  border-bottom-right-radius: 0.2rem;
}
.item-name-texs {
  color: #d6d6d6;
}
.item-name {
  position: absolute;
  bottom: 0;
  left: 0.1rem;
}
.item-imgs {
  width: 100%;
  height: 3.45rem;
}
.item-bag {
  background: white;
  font-size: 0.4rem;
  height: 1.48rem;
  line-height: 1.48rem;
  padding-left: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom-right-radius: 0.15rem;
  border-bottom-left-radius: 0.15rem;
}
.item-name-texsz span:nth-child(1) {
  color: #ccc;
  display: inline-block;
  border: 1.2px solid white;
  padding: 0.05rem;
  font-size: 0.4rem;
}
.item-name-texsz span:nth-child(2) {
  color: #ccc;
  font-size: 0.4rem;
}
.item-bobo{
    position: absolute;
    bottom: .1rem;
    right:.2rem;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: #f0f0f0;
}
.shanjia{
    height: .7rem;
    margin-left: .25rem;
    margin-top: .15rem;
}
</style>
