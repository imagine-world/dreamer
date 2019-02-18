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
          imgs: require('../../assets/img/diantai.png'),
          num: '穿山甲爱喝水穿山甲爱喝水'
        },
        {
          name: '人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/diantai.png'),
          num: '穿山甲爱喝水'
        },
        {
          name: '人这一辈子，最怕突然听懂了一首歌人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/diantai.png'),
          num: '穿山甲爱喝水'
        },
        {
          name: '人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/diantai.png'),
          num: '穿山甲爱喝水'
        },
        {
          name: '人这一辈子，最怕突然听懂了一首歌人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/diantai.png'),
          num: '穿山甲爱喝水'
        },
        {
          name: '人这一辈子，最怕突然听懂了一首歌人这一辈子，最怕突然听懂了一首歌',
          imgs: require('../../assets/img/diantai.png'),
          num: '穿山甲爱喝水'
        }
      ]
    }
  }
}
</script>
<style scoped>
.tuijiange {
  margin-top: .2rem;
  padding: 0 .2rem;
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
  bottom: 1.2rem;
  left: .12rem;
  font-size: .5rem;
  color: white;
  width: 3rem;
 overflow: hidden;
 text-overflow: ellipsis;
 display: -webkit-box;
 -webkit-line-clamp: 1;
 -webkit-box-orient: vertical;
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
.span-ieam {
  font-size: 0.3rem;
}
</style>
