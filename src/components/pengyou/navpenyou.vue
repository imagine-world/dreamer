<template>
  <div>
    <div class="Friend">
      <div class="Friendbox">
        <div class="Friend-left">
          <img :src="aa">
        </div>
        <div class="certg" @click="tanza">
          <div class="certg-left" :class="islected==0?'axbag':''">动态</div>
          <div class="certg-right" :class="islected==1?'axbag':''">附近</div>
        </div>
        <div class="Friend-right">
          <img :src="bb">
        </div>
      </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      islected: 0,
      aa: require('../../assets/img/6598234130921e12be817253peng.png'),
      bb: require('../../assets/img/6598234130921e12beada.png')
    }
  },
  methods: {
    tanza () {
      this.islected = !this.islected
      if (this.islected === false) {
        this.$router.push('/Friend/dynamic')
      } else {
        this.$router.push('/Friend/nearby')
      }
    }
  }
}
</script>

<style scoped>
.Friend {
  background: #f5f5f7;
  padding: 0.2rem;
  box-sizing: border-box;
}
.Friendbox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Friend-left {
  flex: 4;
  text-align: left;
  margin-top: -0.2rem;
}
.certg {
  flex: 4;
  border-radius: 1rem;
  border: 0.0155rem solid #b3b6bd;
  text-align: center;
  font-size: 0.4rem;
  color: #616161;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.Friend-right {
  flex: 4;
  text-align: right;
  margin-top: -0.2rem;
}
.certg-left {
  width: 50%;
  text-align: center;
  color: #606060;
  height: 100%;
  border-radius: 1rem;
  padding: 0.2rem;
  box-sizing: border-box;
}
.Friend-left img {
  height: 0.721rem;
}
.Friend-right img {
  height: 0.721rem;
}
.certg-right {
  width: 50%;
  text-align: center;
  height: 100%;
  border-radius: 1rem;
  padding: 0.2rem;
  box-sizing: border-box;
  color: #606060;
}
.axbag {
  background: #c3c3c5;
  color: white;
}
</style>
