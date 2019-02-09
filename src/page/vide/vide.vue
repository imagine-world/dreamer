<template>
 <div class="homePageTouch">
    <div class="shou">
         <vdesearch  class="shoucha"/>
      <div class="navsa" ref="navsa">
        <div class="nav_zaza" v-for="(item,index) in list" :key="index" @click="tabasr(index)">
          <span :class="item.id==isSelected?'active':''">{{item.title}}</span>
          <i :class="item.id==isSelected?'line':''"></i>
        </div>
      </div>
    </div>
    <div class="tuij" ref="scrollView">
      <div class="routerViewClass" :style="clientWidth">
          <Remend/>
          <Popula/>
          <Look/>
          <Look/>
          <Look/>
          <Look/>
          <Remend/>
          <Popula/>
          <Popula/>
      </div>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>
<script>
import vdesearch from '../../components/Videoarea/vdesearch/vdesearch.vue'
// neo
import Remend from '../../components/Videoarea/Remend/Remend'
import Popula from '../../components/Videoarea/Popula/Popula'
import Look from '../../components/Videoarea/Look/Look'
export default {
  components: {
    vdesearch,
    Remend,
    Popula,
    Look
  },
  data () {
    return {
      isSelected: 0,
      list: [
        {id: 0, title: '推荐', path: '/vide/Remend'},
        {id: 1, title: '热点', path: '/vide/Popula'},
        {id: 2, title: 'Look直播', path: ''},
        {id: 3, title: 'Please', path: ''},
        {id: 4, title: '朋友圈', path: ''},
        {id: 5, title: '朋友圈', path: ''},
        {id: 6, title: '朋友圈', path: ''},
        {id: 7, title: 'Look直播', path: ''},
        {id: 8, title: 'Please', path: ''}
      ],
      startClient: 0,
      startTime: 0,
      endTime: 0,
      scrollX: 0,
      clientWidth: 0
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
      index: 'isSelected'
    })
    //  console.log(this.$router.options.routes)
  },
  methods: {
    _initDomEvent ({scrollWidth, tabArr, screenWidth, startClient, startTime, endTime, scrollX, index}) {
      this[scrollWidth] = 'width:' + (this.$refs[screenWidth].clientWidth * this[tabArr].length) + 'px;'
      let that = this
      let halfWidth = Math.ceil(this.$refs[screenWidth].clientWidth / 2)
      this.$refs[screenWidth].addEventListener('touchstart', function (e) {
        that[startClient] = e.changedTouches[0].clientX
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
          that.$refs[screenWidth].scroll(that[scrollX], 0)
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
          that.$refs[screenWidth].scroll(that[scrollX], 0)
        } else {
          that.$refs[screenWidth].scroll(that[scrollX], 0)
        }
      }, false)
    },
    tabasr (index) {
      this.isSelected = index
      this.scrollX = this.$refs.scrollView.clientWidth * index
      this.$refs.scrollView.scroll(this.scrollX, 0)
    },
    _tabNavigationScrolled (selectedIndex, tabNavigationArr, clientWidth, tabNavigationScroll) {
      console.log(selectedIndex, this[tabNavigationArr].length, this.$refs[clientWidth].clientWidth, this.$refs[tabNavigationScroll].scrollWidth)
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
<style>
.shou{
  position: fixed;
  top: 0;
  width: 100%;
  background: #f8f8f8;
  padding-bottom: 2vh;
  height: 10vh;
  padding-top: 8px;
}
.homePageTouch{
  height: 500px;
}
.routerViewClass{
  height: 100%;
  display: flex;
}
.navsa {
  overflow: scroll;
  /* width: 375px; */
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  font-size:14px;
  display: -webkit-box;
  cursor: pointer;
  scroll-behavior: smooth;
  font-size: 18px;
}
.nav_zaza {
  color: #343436;
  position: relative;
  margin-right: 20px;
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
.sas {
  height: 8vh;
  line-height: 8vh;
}
.shoucha{
    height: 5.8vh;
    line-height: 5.8vh;
}
.tuij{
   height: 100%;
   margin-top: 16vh;
   overflow-x: scroll;
   scroll-behavior: smooth;
}
</style>
