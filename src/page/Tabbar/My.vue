<template>
  <div>
    <navmy/>
    <mylist/>
    <ceong/>
    <lecting/>
  </div>
</template>
<script>
import navmy from '../../components/my/navmy.vue'
import mylist from '../../components/my/mylist.vue'
import ceong from '../../components/my/ceong.vue'
import lecting from '../../components/my/lecting.vue'
export default {
  name: 'wd',
  components: {
    navmy,
    mylist,
    ceong,
    lecting
  }
}
</script>
