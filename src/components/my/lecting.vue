<template>
  <div>
    <div class="lecting" @click="btnaz">
      <div class="tupian">
        <img :src="imgsac" class="left-img" v-if="is_imgs">
         <img :src="imgsassz" class="left-imgs" v-else>
      </div>
      <div class="lecting-left">
        <div class="lecting-left-texr">我收藏的歌单 (2)</div>
      </div>
      <div @click.stop="dianz" class="diandain">
        <img :src="imhza" class="ihjya">
      </div>
    </div>
    <songlist v-show="is_show" />
    <Elastic :is_takan='is_takan' v-show="is_takan" v-on:childClick="chileEvent($event)"/>      <!-- 弹框组件 -->
  </div>
</template>
<script>
import Elastic from '../../components/my/Elastic.vue'
import songlist from '../../components/my/songlist.vue'
export default {
  components: {
    Elastic,
    songlist
  },
  data () {
    return {
      is_takan: false,
      is_show: false,
      is_imgs: true,
      imhza: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5ade110az.png'),
      imgsassz: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5adejians.png'),
      imgsac: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5adesx.png')
    }
  },
  methods: {
    btnaz () {
      this.is_show = !this.is_show
      this.is_imgs = !this.is_imgs
    },
    dianz () {
      this.is_takan = !this.is_takan
    },
    chileEvent (msg) {
      this.is_takan = msg
      console.log(msg)
    }
  }
}
</script>
<style scoped>
.lecting {
  background: #eeeff1;
  font-size: .4rem;
  padding: .3rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lecting-left{
    display: flex;
    align-items: center;
    flex: 1;
}
.left-img{
    width: .2rem;
    height: .3rem;
    vertical-align: middle;
}
.left-imgs{
    height: .2rem;
    vertical-align: middle;
}
.lecting-left-texr{
    font-size: .36rem;
    color: #8d8d8f;
    margin-left: .4rem;
}
.tupian{
    width: .4rem;
    height: .56rem;
}
.ihjya{
    height: .4rem;
}
.diandain{
    width: .6rem;
}
</style>
