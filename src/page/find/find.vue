<template>
  <div id="homePageTouch">
    <div class="shousuo">
      <search class="sas"/>
      <div class="nav">
        <div class="nav-item" v-for="(item,index) in list" :key="index" @click="btn(index)">
          <span :class="item.id === isSelected ? 'active' : ''">{{item.name}}</span>
          <i :class="item.id === isSelected ? 'line' : ''"></i>
        </div>
      </div>
    </div>
    <div class="zhans" ref="scrollView">
      <!-- <router-view></router-view> -->
      <div class="routerViewClass" :style="clientWidth">
          <Personality class="_personality"/>
          <Anchor class="_anchor"/>
      </div>
    </div>
  </div>
</template>
<script>
import search from '../../components/Discovery/search/search.vue'
// neo
import Anchor from '../../components/Discovery/Anchor/Anchor.vue'
import Personality from '../../components/Discovery/Personality/Personality.vue'
export default {
  name: 'Queue',
  components: {
    search,
    Anchor,
    Personality
  },
  mounted () {
    this._initDomEvent()
  },
  data () {
    return {
      isSelected: 0,
      list: [
        {id: 0, name: '个性推荐', path: '/find/Personality'},
        {id: 1, name: '主播电台', path: '/find/Anchor'}
      ],
      startClient: 0,
      startTime: 0,
      endTime: 0,
      scrollX: 0,
      clientWidth: 0
    }
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
<style>

/* neo */
._personality{
  width: 100%;
  height: 100%;
}
._anchor{
  width: 100%;
  height: 100%;
}
.routerViewClass{
  height: 100%;
  display: flex;
}
#homePageTouch{
  height: 500px;
}
.zhans {
  margin-top: 13vh;
  height: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
}
.shousuo {
  position: fixed;
  top: 0;
  width: 100%;
  background: #f8f8f8;
  padding-bottom: 2vh;
  height: 11vh;
}
.nav {
  width: 50vw;
  margin: 2px auto;
  display: flex;
  justify-content: space-around;
  font-size: 2vh;
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
  width: 20px;
  height: 4px;
  display: inline-block;
  background: #d63932;
  position: absolute;
  left: 50%;
  bottom: -8px;
  margin-left: -8px;
  border-radius: 15px;
  transition: all 1s;
}
.sas{
  height: 8vh;
  line-height: 8vh
}
</style>
