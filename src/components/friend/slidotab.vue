<template>
  <div id="homePageTouch">
    <div class="navg">
      <div class="nav-item" v-for="(item,index) in list" :key="index" @click="btn(index)">
        <span :class="item.id === isSelected ? 'active' : ''">{{item.name}}</span>
        <i :class="item.id === isSelected ? 'line' : ''"></i>
      </div>
    </div>
    <div class="zhans" ref="scrollView">
      <div class="routerViewClass" :style="clientWidth">
        <Personality class="_personality"/>
        <Anchor class="_anchor"/>
      </div>
    </div>
  </div>
</template>
<script>
import Anchor from '../../components/friend/Anchor.vue'
import Personality from '../../components/friend/Personality.vue'
export default {
  components: {
    Anchor,
    Personality
  },
  data () {
    return {
      isSelected: 0,
      list: [
        {id: 0, name: '个性推荐'},
        {id: 1, name: '主播电台'}
      ],
      startClient: 0,
      startTime: 0,
      endTime: 0,
      scrollX: 0,
      clientWidth: 0
    }
  },
  mounted () {
    this._initDomEvent()
  },
  methods: {
    _initDomEvent () {
      this.clientWidth = 'width:' + (this.$refs.scrollView.clientWidth * this.list.length) + 'px;'
      let that = this
      let halfWidth = Math.ceil(this.$refs.scrollView.clientWidth / 2)
      this.$refs.scrollView.addEventListener('touchstart', function (e) {
        that.startClient = e.changedTouches[0].clientX
        that.startTime = new Date().valueOf()
      }, false)
      this.$refs.scrollView.addEventListener('touchend', function (e) {
        let endClient = e.changedTouches[0].clientX
        let judge = that.startClient - endClient
        let abs = Math.abs(judge)
        that.endTime = new Date().valueOf()
        let resTime = that.endTime - that.startTime
        console.log(resTime, abs, judge)
        if (abs > halfWidth) {
          console.log('if')
          if (judge > 0) {
            that.scrollX = that.$refs.scrollView.clientWidth
            that.$refs.scrollView.scroll(that.scrollX, 0)
            that.isSelected = 1
          }
          if (judge < 0) {
            that.scrollX = 0
            that.$refs.scrollView.scroll(that.scrollX, 0)
            that.isSelected = 0
          }
        } else if (resTime < 300 && abs > that.$refs.scrollView.clientWidth * 0.16) {
          console.log(' else if ', that.$refs.scrollView.clientWidth * 0.16)
          if (judge > 0) {
            that.scrollX = that.$refs.scrollView.clientWidth
            that.$refs.scrollView.scroll(that.scrollX, 0)
            that.isSelected = 1
          }
          if (judge < 0) {
            that.scrollX = 0
            that.$refs.scrollView.scroll(that.scrollX, 0)
            that.isSelected = 0
          }
        } else {
          that.$refs.scrollView.scroll(that.scrollX, 0)
        }
      }, false)
    },
    btn (index) {
      this.isSelected = index
      this.scrollX = this.$refs.scrollView.clientWidth * index
      this.$refs.scrollView.scroll(this.scrollX, 0)
    }
  }
}
</script>
<style scoped>
/* neo */
._personality{
  width: 100%;
  height: 100%;
}
._anchor{
  width: 100%;
  height: 100%;
}
.navg {
  width:6rem;
  margin: .3rem auto;
  display: flex;
  justify-content: space-around;
  font-size: .45rem;
  cursor: pointer;
}
.nav-item {
  color: #343436;
  position: relative;
}
.active {
  color: #d63932;
  transition: all 500ms;
}
.line {
  width: .780rem;
  height: .12rem;
  display: inline-block;
  background: #d63932;
  position: absolute;
  left: 50%;
  bottom: -.225rem;
  margin-left: -.3rem;
  border-radius: 1rem;
  transition: all 1s;
}
.zhans{
  margin-top:.48rem;
  height: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  }
.routerViewClass{
  height: 100%;
  display: flex;
}
#homePageTouch{
    height:12500px;
}
</style>
