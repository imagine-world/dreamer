<template>
  <div>
    <div class="shzas">
      <div>
        <img class="imghza" :src="imgs" alt/>
      </div>
      <div class="shouzas">
        <img :src="imgsasou" alt class="shousa">
        <span>Things l DOu 很好听</span>
      </div>
      <div>
        <img class="imghza" :src="imgse" alt/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: require('../../../img/8b2fda0651ab9220bdf0ff792f7fzz.png'),
      imgse: require('../../../img/61ecf7fc80fadb2d77b05e7dc813dc.png'),
      imgsasou: require('../../../img/sousu.png')
    }
  },
  methods: {}
}
</script>
<style>
.shzas {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.imghza {
  width: 50%;
  vertical-align: middle;
}
.shouzas {
  width: 60%;
  height: 4.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebebed;
  border-radius: 40px;
  color: #bcbcbc;
  font-size: 2vh;
  margin-left: -6.4%;
}
.shousa {
  margin-right: 10px;
  width: 8%;
  vertical-align: middle;
}
</style>
