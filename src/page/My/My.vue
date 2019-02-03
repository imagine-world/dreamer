<template>
  <div>
    <div class="yumz">
      <img class="imhsazs" :src="imgseaz" alt >
      <div class="yinha">我的音乐</div>
      <img class="imshazsa" :src="imgsassz" alt>
    </div>
     <Music class="muusa"/>
     <Creaong/>
     <Eollecgs/>
     <frame/>
  </div>
</template>
<script>
import Music from '../../components/Mymusi/Music/Music'
import Creaong from '../../components/Mymusi/Creaong/Creaong'
import Eollecgs from '../../components/Mymusi/Eollecgs/Eollecgs'
export default {
  name: 'Tabbaz',
  components: {
    Music,
    Creaong,
    Eollecgs
  },
  data () {
    return {
      imgseaz: require('../../img/3a8c5dee3ece4c3a01a67d5c5adeyun.png'),
      imgsassz: require('../../img/3a8c5dee3ece4c3a01a67d5c5ade110a.png')
    }
  },
  methods: {}
}
</script>
<style>
.yumz{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  background: #f8f8f8;
}
.imhsazs{
   width: 4.6%;
  vertical-align: middle;
}
.imshazsa{
  width: 4.6%;
  vertical-align: middle;
}
.yinha{
  width: 78%;
  text-align: center;
}

</style>
