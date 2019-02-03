<template>
    <div>
        <div>
            <div class="chuan" @click="btnaz">
                <div class="chauns_img"><img class="imgazsq" :src="is_imgs?imhza:imgsassz">
                </div>
                <div class="vhuans">我收藏的歌单(2)</div>
                <div class="diandain" @click.stop="dianz"><img :src="imgsac" class="oiza"></div>
            </div>
        </div>
        <div v-show="is_show" class="yuanq">2</div>
        <div class="mask" v-show="is_takan" @click="tankzas"></div>
        <frame v-show="is_takan" class="tnakuan"/>
    </div>
</template>
<script>
import frame from '../../../components/Mymusi/frame/frame'
export default {
  components: {
    frame
  },
  data () {
    let a = require('../../../img/3a8c5dee3ece4c3a01a67d5c5adesx.png')
    let b = require('../../../img/3a8c5dee3ece4c3a01a67d5c5adejians.png')
    let c = require('../../../img/3a8c5dee3ece4c3a01a67d5c5ade110az.png')
    return {
      is_show: false,
      is_imgs: true,
      is_takan: false,
      imhza: a,
      imgsassz: b,
      imgsac: c
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
    tankzas () {
      this.is_takan = false
    }
  }
}
</script>
<style>
.chuan{
    background: #eeeff1;
    padding:10px 20px;
    box-sizing: border-box;
    font-size: 2vw;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.imhuaza{
    width: 2vw;
    vertical-align: middle;
}
.vhuans{
    font-size: 14px;
    color: #8e8c8f;
    width:82vw;
}
.chauns_img{
    width: 6vw;
    vertical-align: middle;
}
.imgazsq{
    width: 2.8vw;
}
.diandain{
    font-size: 4vw;
    color: #aeafb1;
}
.oiza{
    width: 4vw;
    vertical-align: middle;
}
.tnakuan{
  position: fixed;
  bottom: 0;
  width: 100%;
  height:35vh;
  background: white;
  z-index: 200;
  border-top-left-radius:15px;
  border-top-right-radius:15px;
  transition: all 10s
}
.mask{
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
.yuanq{
    padding: 5px;
    box-sizing: border-box;
}
</style>
