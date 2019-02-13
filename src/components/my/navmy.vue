<template>
  <div class="navmy">
        <div class="nav-leght"><img :src="imgheaez" alt=""></div>
        <div class="centrea">我的音乐</div>
        <div class="nav-right"><img :src="imgheyua" alt=""></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgheaez: require('../../assets/img/3a8c5dee3ece4c3a01a67d5c5adeyun.png'),
      imgheyua: require('../../assets/img/61ecf7fc80fadb2d77b05e7dc813dc.png')
    }
  }
}
</script>

<style scoped>
.navmy{
    width: 100%;
    height: 1.2rem;
    background: #f8f8f8;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-bottom: .1rem;
    box-sizing: border-box;
}
.nav-leght{
    flex: 1;
    text-align: center;
}
.nav-leght>img{
    height: .621rem;
    vertical-align: middle
}
.centrea{
    flex: 7;
    text-align: center;
    font-size: .5rem;
}
.nav-right{
     flex: 1;
    text-align: center;
}
.nav-right>img{
     height: .621rem;
     vertical-align: middle
}
</style>
