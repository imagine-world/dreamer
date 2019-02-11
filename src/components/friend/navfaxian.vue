<template>
  <div>
     <div class="nav">
       <div class="nav-dao">
          <div class="nav-left">
          <img :src="imgsezq" alt="">
         </div>
         <div class="caheas">
         <i>
          <img :src='imgshou' alt>
        </i>
        <span>给你推荐 faalis</span>
       </div>
       <div class="nav-right">
        <img :src="imgsza" alt="">
       </div>
       </div>
    <slidotab/>   <!-- 滑动组件 -->
    </div>
  </div>
</template>
<script>
import slidotab from '../../components/friend/slidotab.vue'
export default {
  components: {
    slidotab
  },
  data () {
    return {
      isSelected: 0,
      list: [
        {id: 0, name: '个性推荐'},
        {id: 1, name: '主播电台'}
      ],
      imgshou: require('../../assets/img/sousu.png'),
      imgsezq: require('../../assets/img/61ecf7fc80fadb2d77b05e7dc8f.png'),
      imgsza: require('../../assets/img/61ecf7fc80fadb2d77b05e7dc813dc.png'),
      startClient: 0,
      startTime: 0,
      endTime: 0,
      scrollX: 0,
      clientWidth: 0
    }
  }
}
</script>
<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 2.8rem;
  background: #f8f8f8;
}
.nav-dao {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.325rem;
}
.nav-left {
  color: white;
  font-size: 0.42666rem;
  padding: 0.2rem 0.2rem;
  font-size: 0.4rem;
  flex: 1;
}
.caheas {
  height: .3rem;
  flex: 6;
  color: #333;
  background: #ebebed;
  border-right: 0.1rem;
  font-size: 0.3733rem;
  padding: 0.3rem 0.2rem;
  border-radius: 1rem;
  text-align: center;
  color: #bebebe;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-right {
  font-size: 0.4rem;
  padding: 0.2rem 0.2rem;
  flex: 1;
  text-align: right;
}
.nav-left>img{
    height: .7125rem;
}
.nav-right>img{
     height: .6125rem;
}
.caheas img{
 height: .6125rem;
}
</style>
