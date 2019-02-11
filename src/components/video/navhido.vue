<template>
  <div>
    <div class="nav">
      <div class="nav-dao">
        <div class="nav-left">
          <img :src="imgsezq" alt>
        </div>
        <div class="caheas">
          <i>
            <img :src="imgshou" alt>
          </i>
          <span>Shape Of you</span>
        </div>
        <div class="nav-right">
          <img :src="imgsza" alt>
        </div>
      </div>
         <Slidetab/> <!-- 滑动组件 -->
    </div>
  </div>
</template>
<script>
import Slidetab from '../../components/video/Slidetab'
export default {
  components: {
    Slidetab
  },
  data () {
    return {
      imgshou: require('../../assets/img/sousu.png'),
      imgsezq: require('../../assets/img/8b2fda0651ab9220bdf0ff792f7fzz.png'),
      imgsza: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5ade110a.png')
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
  height: 0.3rem;
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
.nav-left > img {
  height: 0.5125rem;
}
.nav-right > img {
  height: 0.525rem;
}
.caheas img{
 height: .6125rem;
}
</style>
