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
          normal: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5ade110.png'),
          selected: require('../../assets/img/61ecf7fc80fadb2d77b05e7dc813dcf.png'),
          tshL: 0
        },
        {
          path: '/vide',
          texts: '视频',
          id: 1,
          normal: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5ade111.png'),
          selected: require('../../assets/img/8b2fda0651ab9220bdf0ff792f7ff66.png'),
          tshL: 0
        },
        {
          path: '/My',
          texts: '我的',
          id: 2,
          normal: require('../../assets/img/1847f17d5a0e4535b19ee569e979.png'),
          selected: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5ade116.png'),
          tshL: 0
        },
        {
          path: '/Friend',
          texts: '朋友',
          id: 3,
          normal: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5ade113.png'),
          selected: require('../../assets/img/6598234130921e12be8172535a09739.png'),
          tshL: 0
        },
        {
          tshL: 1,
          path: '/Account',
          texts: '账号',
          id: 4,
          normal: require('../../assets/img/6598234130921e12be8172535a097.png'),
          selected: require('../../assets/img/1847f17d5a0e4535b19ee569e9794e9.png'),
          tishi: 1
        }
      ]
    }
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
<style scoped>
.box {
  width: 100%;
  height: 1.70rem;
  background: #e0dedf;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.imgas {
    width: .6rem;
    height: .6rem;
}
.tab-bas {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  width: 6.25rem;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-size: .300rem;
}
.tab-bas > span {
  margin-top: .1rem;
  color: #959796;
}

.act {
  color: #d1403d !important;
}
.activc {
  color: #959796 !important;
}
.xiao {
  font-size: .3rem;
  line-height: .4rem;
  position: absolute;
  top: -.15rem;
  right: .600rem;
  font-style: normal;
  display: block;
  width:.4rem;
  height:.4rem;
  background: red;
  border-radius: 1rem;
  color: white;
  text-align: center;
}
</style>
