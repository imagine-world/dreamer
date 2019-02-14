<template>
  <div>
    <div class="mask" v-show="is_takan" @click="tankuan()"></div>
    <div class="tnakuan" v-show="is_takan">弹框内容1</div>
    <!-- 弹框 -->
  </div>
</template>
<script>
export default {
  props: ['is_takan'],
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    tankuan () {
      this.is_takan = false
    }
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
  width: 100%;
  height: 7rem;
  background: white;
  z-index: 200;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  transition: all 10s;
}
</style>
