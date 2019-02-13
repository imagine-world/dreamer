<template>
  <div id="homePageTouch">
    <div class="navsa" ref="navsa">
      <div class="nav-item" v-for="(item,index) in list" :key="index" @click="tabasr(index)">
        <span :class="item.id === isSelected ? 'active' : ''">{{item.title}}</span>
        <i :class="item.id === isSelected ? 'line' : ''"></i>
      </div>
    </div>
    <div class="zhans" ref="scrollView">
      <div class="routerViewClass" :style="clientWidth + 'left:' + position + 'px;'">
        <broadcast/>
        <Look/>
        <Popular/>
        <Remend/>
        <square/>
        <sceneg/>
        <coverup/>
        <MV/>
        <acgyin/>
        <playing/>
      </div>
    </div>
  </div>
</template>
<script>
import broadcast from '../../components/video/broadcast.vue'
import Look from '../../components/video/Look.vue'
import Popular from '../../components/video/Popular.vue'
import Remend from '../../components/video/Remend.vue'
import square from '../../components/video/square.vue'
import sceneg from '../../components/video/sceneg.vue'
import coverup from '../../components/video/coverup.vue'
import hererup from '../../components/video/hererup.vue'
import MV from '../../components/video/MV.vue'
import acgyin from '../../components/video/acgyin.vue'
import playing from '../../components/video/playing.vue'
export default {
  components: {
    broadcast,
    Look,
    Popular,
    Remend,
    square,
    sceneg,
    coverup,
    hererup,
    MV,
    acgyin,
    playing
  },
  data () {
    return {
      isSelected: 0,
      list: [
        {id: 0, title: '推荐'},
        {id: 1, title: 'Look直播'},
        {id: 2, title: '广场'},
        {id: 3, title: '21 Guns'},
        {id: 4, title: '听歌轨迹'},
        {id: 5, title: '现场'},
        {id: 6, title: '翻唱'},
        {id: 7, title: '听BGM'},
        {id: 8, title: 'MV'},
        {id: 9, title: 'ACG音乐'},
        {id: 10, title: '演奏'}
      ],
      startClient: 0,
      startTime: 0,
      endTime: 0,
      scrollX: 414,
      clientWidth: '',
      position: 0,
      memorySliding: 0
    }
  },
  mounted () {
    this._initDomEvent({
      scrollWidth: 'clientWidth', // 滚动条的总宽度
      tabArr: 'list',
      screenWidth: 'scrollView', // 屏幕宽度
      startClient: 'startClient', // 用户开始点击屏幕的坐标
      startTime: 'startTime', // 用户开始点击屏幕开始的时间
      endTime: 'endTime', // 用户开始点击屏幕结束的时间
      scrollX: 'scrollX', // scroll的偏移量
      index: 'isSelected',
      posi: 'position' // 移动距离
    })
    //  console.log(this.$router.options.routes)
  },
  methods: {
    _initDomEvent ({scrollWidth, tabArr, screenWidth, startClient, startTime, endTime, scrollX, index, posi}) {
      this[scrollWidth] = 'width:' + (this.$refs[screenWidth].clientWidth * this[tabArr].length) + 'px;'
      let that = this
      let halfWidth = Math.ceil(this.$refs[screenWidth].clientWidth / 2)
      this.$refs[screenWidth].addEventListener('touchstart', function (e) {
        that[startClient] = e.changedTouches[0].clientX
        that.memorySliding = e.changedTouches[0].clientX
        that[startTime] = new Date().valueOf()
      }, false)
      this.$refs[screenWidth].addEventListener('touchend', function (e) {
        let endClient = e.changedTouches[0].clientX
        let judge = that[startClient] - endClient
        let abs = Math.abs(judge)
        that[endTime] = new Date().valueOf()
        let resTime = that[endTime] - that[startTime]
        if (abs > halfWidth) {
          console.log('if')
          if (judge > 0) {
            if (that[index] < that[tabArr].length - 1) {
              that[index] = that[index] + 1
            } else {
              that[index] = that[index]
            }
          }
          if (judge < 0) {
            if (that[index] > 0) {
              that[index] = that[index] - 1
            } else {
              that[index] = that[index]
            }
          }
          that[scrollX] = that.$refs[screenWidth].clientWidth * that[index]
          // that.$refs[screenWidth].scroll(that[scrollX], 0)
          // that.$refs[screenWidth].
          that[posi] = -that[scrollX]
          console.log(that[posi], abs)
        } else if (resTime < 300 && abs > that.$refs[screenWidth].clientWidth * 0.15) {
          console.log(' else if ', that.$refs[screenWidth].clientWidth * 0.15)
          if (judge > 0) {
            if (that[index] < that[tabArr].length - 1) {
              that[index] = that[index] + 1
            } else {
              that[index] = that[index]
            }
          }
          if (judge < 0) {
            if (that[index] > 0) {
              that[index] = that[index] - 1
            } else {
              that[index] = that[index]
            }
          }
          that[scrollX] = that.$refs[screenWidth].clientWidth * that[index]
          // that.$refs[screenWidth].scroll(that[scrollX], 0)
          that[posi] = -that[scrollX]
        } else {
          that[posi] = -that[scrollX]
          // that.$refs[screenWidth].scroll(that[scrollX], 0)
        }
      }, false)
      this.$refs[screenWidth].addEventListener('touchmove', function (e) {
        let moveDistance = e.changedTouches[0].clientX - that.memorySliding
        // console.log(e, 'in', that.memorySliding, moveDistance, that.scrollX)
        // that.position = that.position + moveDistance - that.scrollX
        that.position += moveDistance
        console.log(e.changedTouches[0].clientX, that.memorySliding, moveDistance)
        that.memorySliding = e.changedTouches[0].clientX
      }, false)
    },
    tabasr (index) {
      this.isSelected = index
      this.scrollX = this.$refs.scrollView.clientWidth * index
      // this.$refs.scrollView.scroll(this.scrollX, 0)
      this.position = -this.scrollX
    },
    _tabNavigationScrolled (selectedIndex, tabNavigationArr, clientWidth, tabNavigationScroll) {
      // console.log(selectedIndex, this[tabNavigationArr].length, this.$refs[clientWidth].clientWidth, this.$refs[tabNavigationScroll].scrollWidth)
      let _tabW = this.$refs[tabNavigationScroll].scrollWidth // 选项卡tab的总宽度
      let _clientW = this.$refs[clientWidth].clientWidth // 目前屏幕的宽度
      let _index = selectedIndex // 用户选择的tab
      let _len = this[tabNavigationArr].length // 总共tab的length
      let _judge = this.$refs[tabNavigationScroll].scrollWidth / _len // 平均一份tab的宽度
      if (_tabW > _clientW) {
        // 当选项卡tab的总宽度大于目前屏幕的宽度 保证选项卡tab连续出现在屏幕上
        this.$refs[tabNavigationScroll].scroll((_index - 2) * _judge, 0)
      }
    }
  },
  watch: {
    isSelected () {
      this._tabNavigationScrolled(this.isSelected, 'list', 'scrollView', 'navsa')
      return this.isSelected
    }
  }
}
</script>
<style scoped>
.navsa {
  overflow: scroll;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  display: -webkit-box;
  cursor: pointer;
  scroll-behavior: smooth;
  font-size: 0.45rem;
  padding: .28rem .4rem;
  margin-top: .22rem;
  margin-right: .2rem;
}
.nav-item {
  color: #343436;
  position: relative;
  margin-right: .5rem;
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
  margin-left: -.38rem;
  border-radius: 1rem;
  transition: all 1s;
}
.zhans{
  margin-top:.18rem;
  height: 100%;
  position: relative;
  /* overflow-x: scroll; */
  /* scroll-behavior: smooth; */
  }
.routerViewClass{
  height: 100%;
  display: flex;
  position: absolute;
  top: 0px;
}
#homePageTouch{
    height:12500px;
}
</style>
