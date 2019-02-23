<template>
  <div class="Anchor">
    <Alunbotu/>     <!-- 轮播图 -->
    <Adiantai/>     <!-- 选项5 -->
    <Ajinrtuij/>     <!-- 今天优选 -->
    <Astation/>      <!-- 电台推荐 -->
   <ABoutique/>      <!-- 精品推荐 -->
    <AMusic/>      <!-- 音乐故事 -->
  </div>
</template>
<script>
import Adiantai from '../../components/friend/Adiantai.vue'
import Alunbotu from '../../components/friend/Alunbotu.vue'
import Ajinrtuij from '../../components/friend/Ajinrtuij.vue'
import Astation from '../../components/friend/Astation.vue'
import ABoutique from '../../components/friend/ABoutique.vue'
import AMusic from '../../components/friend/AMusic.vue'
export default {
  components: {
    Adiantai,
    Alunbotu,
    Ajinrtuij,
    Astation,
    ABoutique,
    AMusic
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.Anchor {
  width: 100%;
  height: 14.6rem;
  overflow: scroll;
}
</style>
