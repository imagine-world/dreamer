<template>
  <div>
    <div class="mask" v-show="is_takan" @click="tanka()"></div>
    <transition name="slide-fade">
      <div class="tnakuan" v-show="is_takan">弹框分享</div>
    </transition>
    <!-- 弹框 -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: ['is_takan'],
  data () {
    return {}
  },
  methods: {
    tanka () {
      this.$emit('childClick', false)
      this.$store.commit('Navigation', true)
    }
  },
  computed: {
    ...mapState(['nav'])
  }
}
</script>

<style scoped>
.mask {
  transition: all 10s;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  opacity: 0.5;
}
.tnakuan {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  background: white;
  z-index: 300;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  transition: all 10s;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translatey(200px);
  opacity: 0;
}
</style>
