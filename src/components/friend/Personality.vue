<template>
  <div class="Personality">
    <div class="lunbo">
      <Rotation/>
      <!-- 轮播图组件 -->
    </div>
    <div class="optionlist">
      <optionlist/>  <!-- 5个tab -->
    </div>
    <div class="tuijiange">
      <tuijiange/> <!-- 推荐歌单 -->
    </div>
    <div class="bag"></div>
   <div class="Livecast">
     <Livecast/> <!-- 直播 -->
    </div>
    <div class="bag"></div>
   <div class="Latemusic">
     <Latemusic/> <!-- 最新音乐 -->
    </div>
  </div>
</template>
<script>
import Rotation from '../../components/friend/Rotation.vue'
import optionlist from '../../components/friend/optionlist.vue'
import tuijiange from '../../components/friend/tuijiange.vue'
import Livecast from '../../components/friend/Livecast.vue'
import Latemusic from '../../components/friend/Latemusic.vue'
export default {
  components: {
    Rotation,
    optionlist,
    tuijiange,
    Livecast,
    Latemusic
  }
}
</script>
<style scoped>
.Personality {
  width: 100%;
  height: 14.6rem;
  overflow: scroll;
}
.lunbo {
  width: 10.75rem;
}
.optionlist{
  width: 10.75rem;
}
.tuijiange{
  width: 10.4rem;
}
.Livecast{
  width: 10.3rem;
}
.bag{
  background: #f4f4f4;
  height: .1rem;
}
.Latemusic{
    width: 10.3rem;
}
</style>
