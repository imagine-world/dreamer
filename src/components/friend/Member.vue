<template>
  <div class="Member">
    <div class="Member_huan">
      <div class="Member_huan-text">会员专区</div>
    </div>
    <div class="lunbotu">
        <Sngwheel class="lunbotu-img"/>     <!-- 滑动轮播组件2 -->
    </div>
    <div class="Member_zhon">
      <div class="Member_zhon-bo">
        <span>进入会员中心</span>
        <img class="imgasa" src="../../assets/img/baise.png">
      </div>
    </div>
  </div>
</template>
<script>
import Sngwheel from '../../components/friend/Sngwheel.vue'
export default {
  components: {
    Sngwheel
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.Member {
  padding: 0 0.2rem;
  font-size: 0.4rem;
  background: #35443f;
  margin-top: 0.02rem;
}
.Member-item {
  border: 1px solid;
}
.Member_huan {
  width: 100%;
  color: white;
  font-size: 0.45rem;
  padding: 0.4rem;
  box-sizing: border-box;
}
.Member_huan-text {
  width: 3rem;
  margin: 0 auto;
  text-align: center;
  margin-top: -0.1rem;
}
.Member_zhon {
  color: white;
  font-size: 0.3rem;
  width: 100%;
  padding: 0.4rem;
}
.Member_zhon-bo {
  display: flex;
  margin: 0 3.2rem;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 3rem;
  border-radius: 1rem;
  padding: 0.1rem 0;
  padding-left: 0.2rem;
}
.imgasa {
  vertical-align: middle;
  height: 0.4rem;
}
.lunbotu {
  width: 100%;
}
.lunbotu-img {
  width: 9rem;
  height: 4.9rem;
  margin: 0 auto;
}
</style>
