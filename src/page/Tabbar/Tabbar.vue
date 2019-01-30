<template>
  <div class="box">
    <div class="tab-bas" v-for="(item, index) in tabBarImgArr" :key="index" @click="tabar(index)">
      <img class="imgas" :src="item.id===isSelected?item.selected:item.normal">
      <span :class="item.id===isSelected?isA:isB">{{item.texts}}</span>
      <i class="xiao" v-if="item.tshL===1">{{item.tishi}}</i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      isSelected: 0,
      isshow: false,
      isA: 'act',
      isB: 'activc',
      tabBarImgArr: [
        {
          path: '/find',
          texts: '发现',
          id: 0,
          normal: require('../../img/3a8c5dee3ece4c3a01a67d5c5ade110.png'),
          selected: require('../../img/61ecf7fc80fadb2d77b05e7dc813dcf.png'),
          tshL: 0
        },
        {
          path: '/vide',
          texts: '视频',
          id: 1,
          normal: require('../../img/3a8c5dee3ece4c3a01a67d5c5ade111.png'),
          selected: require('../../img/8b2fda0651ab9220bdf0ff792f7ff66.png'),
          tshL: 0
        },
        {
          path: '/My',
          texts: '我的',
          id: 2,
          normal: require('../../img/1847f17d5a0e4535b19ee569e979.png'),
          selected: require('../../img/3a8c5dee3ece4c3a01a67d5c5ade116.png'),
          tshL: 0
        },
        {
          path: '/Friend',
          texts: '朋友',
          id: 3,
          normal: require('../../img/3a8c5dee3ece4c3a01a67d5c5ade113.png'),
          selected: require('../../img/6598234130921e12be8172535a09739.png'),
          tshL: 0
        },
        {
          tshL: 1,
          path: '/Account',
          texts: '账号',
          id: 4,
          normal: require('../../img/6598234130921e12be8172535a097.png'),
          selected: require('../../img/1847f17d5a0e4535b19ee569e9794e9.png'),
          tishi: 1
        }
      ]
    }
  },
  mounted () {
    //  console.log(this.$router.options.routes)
  },
  methods: {
    tabar (index) {
      this.isSelected = index
      this.$router.push({
        path: this.tabBarImgArr[index].path
      })
    }
  }
}
</script>
<style>
.box {
  width: 100%;
  height: 66px;
  background: #e0dedf;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.imgas {
  width: 26%;

}
.tab-bas {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100px;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.tab-bas > span {
  margin-top: 5px;
  color: #959796;
}

.act {
  color: #d1403d !important;
}
.activc {
  color: #959796 !important;
}
.xiao {
  font-size: 10px;
  position: absolute;
  top: -1vw;
  right: 5.5vw;
  font-style: normal;
  display: block;
  width: 14px;
  height: 14px;
  background: red;
  border-radius: 50px;
  color: white;
  text-align: center;
  line-height: 14px;
}
</style>
