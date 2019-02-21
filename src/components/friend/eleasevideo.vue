<template>
  <div class="eleasevideo">
    <div class="hergle">
      <div class="her-top">
        <div class="her-topimg">
          <div>
            <img src="../../assets/img/touxiang.png" class="imghe">
            <img src="../../assets/img/yinyues.png" class="imgha">
          </div>
          <div class="her-text">琳大侠</div>
        </div>
        <div class="her-top-left">发布视频 :</div>
        <div class="her-top-right">+ 关注</div>
      </div>
      <div class="jiesao">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</div>
      <div class="video">
        <div class="video-chuie">
          <img src="../../assets/img/shipunza.png" class="chuie-img">
        </div>
        <div class="imgdas">
          <img src="../../assets/img/shanjiaos.png" class="imhusazz">
        </div>
        <div class="video-bottm">
          <div class="video-bottm-tu">
            <div class="video-bottm-tuleft">
              <img src="../../assets/img/shipim.png" class="tuleft-imgs">
              <span class="teawzs">10万</span>
            </div>
            <div class="video-bottm-bittom">
              <img src="../../assets/img/shenghjiang.png" class="tuleft-imgs">
              <span class="teawzs">01:59</span>
            </div>
          </div>
        </div>
      </div>
      <div class="vioe-botton">
        <div class="vioea-left">
          <div>
            <img src="../../assets/img/zhuanfa.png" class="zhuanfaimg">
            <span class="textimha">24</span>
          </div>
          <div>
            <img src="../../assets/img/pingluns.png" class="zhuanfaimg">
            <span class="textimha">241</span>
          </div>
          <div @click="dianzhan">
            <img :src="thumbs?imgab:imgas" class="zhuanfaimg">
            <span class="textimha" :class="thumbs?'text':''">{{thumbs}}</span>
          </div>
        </div>
        <div class="vioea-right">
          <div class="vioea-boxs" @click="tank">
            <img src="../../assets/img/fenxiangchu.png" class="diandimg">
          </div>
        </div>
      </div>
    </div>
    <tankuan :is_takan="is_takan" v-show="is_takan" @childClick="chileEvent"/>
    <!-- 弹框 -->
  </div>
</template>
<script>
import tankuan from '../../components/friend/tankuan.vue'
import { mapState } from 'vuex'
export default {
  components: {
    tankuan
  },
  data () {
    return {
      is_takan: false,
      imgas: require('../../assets/img/dianzan.png'),
      imgab: require('../../assets/img/dianzhan.png')
    }
  },
  methods: {
    tank () {
      this.is_takan = !this.is_takan
      this.$store.commit('Navigation', false)
    },
    dianzhan () {
      if (this.thumbs === 0) {
        this.$store.commit('thumbs', 1)
      } else {
        this.$store.commit('thumbs', 0)
      }
    },
    chileEvent (msg) {
      this.is_takan = msg
      console.log(msg)
    }
  },
  computed: {
    ...mapState(['nav', 'thumbs'])
  }
}
</script>
<style scoped>
.eleasevideo {
  padding: 0 0.2rem;
  font-size: 0.4rem;
}
.her-top {
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.her-topimg {
  width: 3.4rem;
  position: relative;
  display: flex;
  align-items: center;
}
.her-top-left {
  flex: 1;
  margin-left: 0.2rem;
}
.her-top-right {
  width: 1.5rem;
  height: 0.5rem;
  background: #f44437;
  color: white;
  border-radius: 1rem;
  text-align: center;
  font-size: 0.4rem;
  padding: 0.1rem;
}
.her-text {
  color: #4e7cae;
  font-weight: 600;
}
.imghe {
  height: 1.8rem;
}
.imgha {
  height: 0.6rem;
  position: absolute;
  right: 1.5rem;
  bottom: 0.02rem;
}
.her-text {
  margin-left: 0.4rem;
}
.video {
  margin-top: 0.3rem;
  width: 100%;
  background: #ccc;
  height: 5rem;
  border-radius: 0.2rem;
  position: relative;
}
.video-chuie {
  left: 0%;
  position: absolute;
  top: 0%;
}
.chuie-img {
  width: 100%;
  height: 5rem;
}
.video-bottm {
  position: absolute;
  bottom: 0.1rem;
  width: 100%;
}
.imgdas {
  position: absolute;
  top: 40%;
  left: 43%;
}
.video-bottm-tu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.video-bottm-tuleft {
  margin-left: 0.2rem;
}
.video-bottm-bittom {
  margin-right: 0.2rem;
}
.tuleft-imgs {
  height: 0.3rem;
}
.teawzs {
  color: white;
  font-size: 0.3rem;
}
.vioe-botton {
  margin-top: 0.1rem;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 0.2rem;
}
.vioea-left {
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vioea-right {
  flex: 2;
}
.vioea-boxs {
  width: 1rem;
  vertical-align: middle;
  margin-left: 4rem;
  overflow: hidden;
}
.diandimg {
  float: right;
  height: 0.5rem;
  margin-right: 0.1rem;
}
.zhuanfaimg {
  height: 0.4rem;
}
.textimha {
  font-size: 0.4rem;
  color: #969696;
}
.jiesao {
  font-size: 0.4rem;
  margin-top: 0.1rem;
}
.imhusazz {
  height: 1.2rem;
}
.text {
  color: red;
}
</style>
