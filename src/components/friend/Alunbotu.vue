<template>
  <div class="slide">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(item, index) in imgArray" v-show="index===mark" :key="item+index">
          <img :src="item.normal">
        </li>
      </transition-group>
    </div>
    <div class="bar" ref="scrollView">
      <div class="routerViewClass" :style="clientWidth">
        <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index" @click="change(index)" ></span>
      </div>
    </div>
    <!-- <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index" @click="change(index)" ></span>
    </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      timer: null,
      mark: 0,
      startClient: 0,
      startTime: 0,
      endTime: 0,
      scrollX: 0,
      clientWidth: 0,
      isSelected: 0,
      imgArray: [
        {
          normal: require('../../assets/img/1.jpg')
        },
        {
          normal: require('../../assets/img/2.jpg')
        },
        {
          normal: require('../../assets/img/3.jpg')
        },
        {
          normal: require('../../assets/img/4.jpg')
        }
      ]
    }
  },
  mounted () {
    this._initDomEvent()
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark === 4) {
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 4000)
    },
    change (index) {
      this.mark = index
      this.isSelected = index
      this.scrollX = this.$refs.scrollView.clientWidth * index
      this.$refs.scrollView.scroll(this.scrollX, 0)
    },
    created () {
      this.play()
    },
    _initDomEvent () {
      this.clientWidth = 'width:' + (this.$refs.scrollView.clientWidth * this.list.imgArray) + 'px;'
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
    }
  }
}
</script>
<style scoped>
.slide {
  height: 4.8rem;
  font-size: 0;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.slideshow {
  height: 4.8rem;
}
li {
  position: absolute;
}
img {
  width: 100%;
  height: 4.8rem;
}
.bar {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
}
.bar span {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50rem;
  background: rgba(254, 254, 254, 0.7);
  display: inline-block;
  margin-right: 10px;
}
.active {
  background: red !important;
}
.image-enter-active {
  transform: translateX(0);
  transition: all 1.5s ease;
}
.image-leave-active {
  transform: translateX(-100%);
  transition: all 1.5s ease;
}
.image-enter {
  transform: translateX(100%);
}
.image-leave {
  transform: translateX(0);
}
</style>
