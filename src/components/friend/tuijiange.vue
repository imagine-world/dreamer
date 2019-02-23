<template>
  <div class="tuijiange">
    <div class="tuanj">
      <span>推荐歌单</span>
      <img src="../../assets/img/jiantouz.png" alt>
    </div>
    <div class="tabs-list">
      <div class="feka" v-for="(item,index) in tabjan" :key="index">
        <img :src="item.imgs" class="item-imga">
        <div class="fudong">
          <img :src="item.imgg" class="imggg">
          <span class="span-ieam">{{item.num}}亿</span>
        </div>
        <div class="item-texts">{{item.name}}</div>
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
          name: '人这一辈子，最怕突然听懂了一首歌人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/gejiga.png'),
          imgg: require('../../assets/img/yingyue.png'),
          num: 1.6
        },
        {
          name: '人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/gejiga.png'),
          imgg: require('../../assets/img/yingyue.png'),
          num: 2.6
        },
        {
          name: '人这一辈子，最怕突然听懂了一首歌人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/gejiga.png'),
          imgg: require('../../assets/img/yingyue.png'),
          num: 5.6
        },
        {
          name: '人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/gejiga.png'),
          imgg: require('../../assets/img/yingyue.png'),
          num: 4.6
        },
        {
          name: '人这一辈子，最怕突然听懂了一首歌人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/gejiga.png'),
          imgg: require('../../assets/img/yingyue.png'),
          num: 12.6
        },
        {
          name: '人这一辈子，最怕突然听懂了一首歌人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/gejiga.png'),
          imgg: require('../../assets/img/yingyue.png'),
          num: 10.6
        }
      ]
    }
  }
}
</script>
<style scoped>
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
.item-texts {
  margin-top: 0.1rem;
  font-size: 0.4rem;
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
