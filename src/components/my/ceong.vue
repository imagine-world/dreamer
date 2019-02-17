<template>
  <div>
    <div class="lecting" @click="btnaz">
      <div class="tupian">
        <img :src="imgsac" class="left-img" v-if="is_imgs">
        <img :src="imgsassz" class="left-imgs" v-else>
      </div>
      <div class="lecting-left">
        <div class="lecting-left-texr">我创建的歌单 (2)</div>
      </div>
      <div class="diandain"  @click.stop="dianz" >
        <img :src="imhza" class="ihjya">
      </div>
    </div>
    <yoection v-show="is_show"/>
    <lastic v-show="$store.state.is_takan"/>  <!-- 弹框组件 -->
  </div>
</template>
<script>
import yoection from '../../components/my/yoection.vue'
import lastic from '../../components/my/lastic.vue'
export default {
  components: {
    yoection,
    lastic
  },
  data () {
    return {
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
      this.$store.commit('CONTROL_PLAYLIST', !this.$store.state.is_takan)
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
.mask {
  transition: all 10s;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  opacity: 0.5;
}
.tnakuan {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7rem;
  background: white;
  z-index: 200;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  transition: all 10s;
}
</style>
