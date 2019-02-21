<template>
  <div id="app">
    <router-view/>
    <Tabbar v-if="nav"/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Tabbar from './page/Tabbar/Tabbar'
export default {
  components: {
    Tabbar
  },
  computed: {
    ...mapState(['nav'])
  }
}
</script>
