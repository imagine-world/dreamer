<template>
  <div>
    <div class="navzhangao">
      <div class="nav-left"></div>
      <div class="navcert">账号</div>
      <div class="nav-right"><img :src="as" alt=""></div>
    </div>
    <pheader/>
    <formation/>
  </div>
</template>
<script>
import pheader from '../../components/zhanghao/pheader.vue'
import formation from '../../components/zhanghao/formation.vue'
export default {
  name: 'zhanghao',
  components: {
    pheader,
    formation
  },
  data () {
    return {
      as: require('../../assets/img/61ecf7fc80fadb2d77b05e7dc813dc.png')
    }
  }
}
</script>
<style scoped>
.navzhangao{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .1rem;
  box-sizing: border-box;
  background: #f8f8f8;
  border-bottom: 1px solid #dfdfdf;
}
.nav-left{
  flex: 3;
}
.navcert{
  flex: 4;
  text-align: center;
  font-size: .6rem;
  color: #313133;
}
.nav-right{
  flex: 3;
  text-align: right;
}
.nav-right img{
  height: .621rem;
}
</style>
