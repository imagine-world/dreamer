<template>
  <div class="ABoutique">
    <div class="ABoutique-box">
      <div class="ABoutique-box-text">精品推荐</div>
      <div class="ABoutique-textsa">你值得拥有的优质内容</div>
    </div>
    <div class="ABoutique-box1">
      <div class="ABoutique-clkea" v-for="(item,index) in tabjan" :key="index">
        <img src="../../assets/img/diantais.png" class="tjimgs">
        <div class="clkea-top">{{item.vip}}</div>
        <div class="clkea-texts">{{item.name}}</div>
        <div class="bag-clkea">{{item.jiesaL}}</div>
        <div class="jieke">￥{{item.num}}</div>
      </div>
    </div>
    <div class="ABoutique-box2">
      <span>全部精品电台</span>
      <img src="../../assets/img/baise.png" class="imghsa">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabjan: [
        {
          name: '刘哥你好啊实打实的',
          vip: '付费精品',
          imgs: require('../../assets/img/diantais.png'),
          num: 88,
          jiesaL: '最原汁原味·贴近原著的红楼梦解读最原汁原味·贴近原著的红楼梦解读'
        },
        {
          name: '刘哥你好啊实打实的',
          vip: '付费精品',
          imgs: require('../../assets/img/diantais.png'),
          num: 88,
          jiesaL: '最原汁原味·贴近原著的红楼梦解读最原汁原味·贴近原著的红楼梦解读'
        },
        {
          name: '刘哥你好啊实打实的',
          vip: '付费精品',
          imgs: require('../../assets/img/diantais.png'),
          num: 88,
          jiesaL: '最原汁原味·贴近原著的红楼梦解读最原汁原味·贴近原著的红楼梦解读'
        }
      ]
    }
  }
}
</script>
<style scoped>
.ABoutique {
  background: #8e959f;
  padding-bottom: 0.5rem;
}
.ABoutique-box {
  width: 5rem;
  margin: 0 auto;
  text-align: center;
}
.ABoutique-box-text {
  color: white;
  font-size: 0.6rem;
  padding-top: 0.4rem;
  box-sizing: border-box;
}
.ABoutique-textsa {
  color: #bbc2cc;
  font-size: 0.4rem;
  padding-bottom: 0.2rem;
  box-sizing: border-box;
}
.ABoutique-box1 {
  width: 100%;
  padding: 0.2rem 0.2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: .4rem;
}
.ABoutique-box2 {
  color: white;
  font-size: 0.3rem;
  width: 3rem;
  border: 1px solid white;
  border-radius: 1rem;
  margin: 0 auto;
  padding: 0.2rem 0.1rem;
  text-align: center;
}
.imghsa {
  height: 0.4rem;
  vertical-align: middle;
}
.ABoutique-clkea {
  width: 30%;
  position: relative;
}
.tjimgs {
  width: 3.2rem;
  height: 3.4rem;
}
.clkea-top {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.2rem;
  color: white;
  background: #e84e4d;
  padding: 0.1rem;
  border-bottom-right-radius: 0.3rem;
}
.clkea-texts {
  width: 3rem;
  color: white;
  font-size: 0.4rem;
  position: absolute;
  top: 2.8rem;
  left: 0.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.bag-clkea {
  background: white;
  font-size: 0.35rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.jieke {
  color: red;
  font-size: 0.4rem;
  background: white;
  border-bottom-right-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
</style>
