<template>
  <div id="app">
    <router-view/>
    <Tabbar/>
  </div>
</template>
<script>
import Tabbar from './page/Tabbar/Tabbar'
export default {
  components: {
    Tabbar
  }
}
</script>
