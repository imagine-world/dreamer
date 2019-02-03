<template>
 <div>
    <div class="shou">
         <vdesearch  class="shoucha" />
      <div class="navsa">
        <div class="nav_zaza" v-for="(item,index) in tabArr" :key="index" @click="tabasr(index)">
          <span :class="item.id==isSelected?'active':''">{{item.title}}</span>
          <i :class="item.id==isSelected?'line':''"></i>
        </div>
      </div>
    </div>
    <div class="tuij">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import vdesearch from '../../components/Videoarea/vdesearch/vdesearch.vue'
export default {
  components: {
    vdesearch
  },
  data () {
    return {
      isSelected: 0,
      tabArr: [
        {id: 0, title: '推荐', path: '/vide/Remend'},
        {id: 1, title: '热点', path: '/vide/Popula'},
        {id: 2, title: 'Look直播', path: ''},
        {id: 3, title: 'Please', path: ''},
        {id: 4, title: '朋友圈', path: ''}
      ]
    }
  },
  mounted () {
    //  console.log(this.$router.options.routes)
  },
  methods: {
    tabasr (index) {
      this.isSelected = index
      this.$router.push({
        path: this.tabArr[index].path
      })
    }
  }
}
</script>
<style>
.shou{
  position: fixed;
  top: 0;
  width: 100%;
  background: #f8f8f8;
  padding-bottom: 2vh;
  height: 10vh;
  padding-top: 8px;
}
.navsa {
  width:100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  font-size:14px;
  display: -webkit-box;
  cursor: pointer;
}
.nav_zaza {
  color: #343436;
  position: relative;
  margin-right: 20px;
}
.active {
  color: #d63932;
  transition: all 500ms;
}
.line {
  width: 20px;
  height: 4px;
  display: inline-block;
  background: #d63932;
  position: absolute;
  left: 50%;
  bottom: -8px;
  margin-left: -8px;
  border-radius: 15px;
  transition: all 1s;
}
.sas {
  height: 8vh;
  line-height: 8vh;
}
.shoucha{
    height: 5.8vh;
    line-height: 5.8vh;
}
.tuij{
   margin-top: 13vh;
}
</style>
