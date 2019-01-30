<template>
  <div style="height:700px">
    <div class="yumz">
      <img :src="imgseaz" alt class="imhsazs">
      <div class="yinha">我的音乐</div>
      <img :src="imgsassz" alt class="imhsazs">
    </div>
    <Music class="muusa"/>
  </div>
</template>
<script>
import Music from '../../components/Mymusi/Music/Music'
export default {
  components: {
    Music
  },
  data () {
    return {
      imgseaz: require('../../img/3a8c5dee3ece4c3a01a67d5c5adeyun.png'),
      imgsassz: require('../../img/61ecf7fc80fadb2d77b05e7dc813dc.png')
    }
  },
  methods: {}
}
</script>
<style>
.yumz{
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  background: #f8f8f8;
}
.imhsazs {
  width: 10%;
}
.yinha{
  width: 80%;
  text-align: center;
}
.muusa{
  margin-top: 8vh;
}
</style>
