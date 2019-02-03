<template>
  <div>
    <div class="donga">
      <div class="dongtans">
        <img class="imaza" :src="aa" alt>
      </div>
      <div class="yinhaqa" @click="tanza">
        <div id="yinhaqa_a" :class="islected==0?'axbag':''">动态</div>
        <div id="yinhaqa_b" :class="islected==1?'axbag':''">附近</div>
      </div>
      <div class="dongtza">
        <img class="imaza" :src="bb" alt>
      </div>
    </div>
    <div class="pozas">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      islected: 0,
      aa: require('../../img/6598234130921e12be817253peng.png'),
      bb: require('../../img/6598234130921e12beada.png')
    }
  },
  methods: {
    tanza () {
      this.islected = !this.islected
      if (this.islected === false) {
        this.$router.push('/Friend/dynam')
      } else {
        this.$router.push('/Friend/nearby')
      }
    }
  }
}
</script>
<style>
.donga {
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  box-sizing: border-box;
  background: #f8f8f8;
  position: fixed;
  top: 0;
}
.imaza {
  width: 35%;
}
.dongtans {
  width: 10vw;
}
.dongtza {
  width: 10vw;
  text-align: right;
}
.yinhaqa {
  cursor: pointer;
  width: 40%;
  font-size: 14px;
  border: 1px solid #c3c3c5;
  display: flex;
  align-items: center;
  border-radius: 20px;
  height: 4vh;
  justify-content: space-between;
  color: #656565;
}
#yinhaqa_a {
  width: 50%;
  height: 100%;
  text-align: center;
  border-radius: 20px;
  line-height: 4vh;
}
#yinhaqa_b {
  width: 50%;
  height: 100%;
  text-align: center;
  border-radius: 20px;
  line-height: 4vh;
}
.axbag {
  background: #c3c3c5;
  color: white;
}
.pozas{
    margin-top: 8vh;
}
</style>
