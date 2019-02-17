<template>
  <div>
    <div class="mask" v-show="is_takan" @click="tankuan()"></div>
    <div class="tnakuan" v-show="is_takan">弹框内容1 {{ hi }}</div>
    <!-- 弹框 -->
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
  },
  props: ['is_takan'],
  ...mapMutations(['CONTROL_PLAYLIST']),
  data () {
    return {
      localCount: 'dsa'
    }
  },
  mounted () {
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    hi: state => {
      console.log(state)
      return state.hi
    }
  }),
  methods: {
    tankuan () {
      this.$emit('childClick', false)
      this.$store.state.hi = 'false'
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
