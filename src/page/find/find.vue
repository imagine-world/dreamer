<template>
  <div>
    <div class="shousuo">
      <search class="sas"/>
      <div class="nav">
        <div class="nav-item" v-for="(item,index) in list" :key="index" @click="btn(index)">
          <span :class="item.id==isSelected?'active':''">{{item.name}}</span>
          <i :class="item.id==isSelected?'line':''"></i>
        </div>
      </div>
    </div>
    <div class="zhans">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import search from '../../components/Discovery/search/search.vue'
export default {
  name: 'Queue',
  components: {
    search
  },
  data () {
    return {
      isSelected: 0,
      list: [
        {id: 0, name: '个性推荐', path: '/find/Personality'},
        {id: 1, name: '主播电台', path: '/find/Anchor'}
      ]
    }
  },
  methods: {
    btn (index) {
      this.isSelected = index
      this.$router.push({
        path: this.list[index].path
      })
    }
  }
}
</script>
<style>
.zhans {
  margin-top: 14.5vh;
  padding-top: 0.5vh;
}
.shousuo {
  position: fixed;
  top: 0;
  width: 100%;
  background: #f2f2f2;
  padding-bottom: 2vh;
  height: 13vh;
}
.nav {
  width: 50vw;
  margin: 14px auto;
  display: flex;
  justify-content: space-around;
  font-size: 2vh;
  cursor: pointer;
}
.nav-item {
  color: #343436;
  position: relative;
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
</style>
