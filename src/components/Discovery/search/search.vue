<template>
  <div>
    <div class="shzazs">
      <div class="shzas_a"><img class="imghzaq" :src="imgs" alt=""></div>
      <div class="shzas_b">
      <div><img class="shouchas" :src="imgsasou" alt=""></div>
      <div>Shape oY</div>
      </div>
      <div class="shzas_c"><img class="imghzaq" :src="imgse" alt=""></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: require('../../../img/61ecf7fc80fadb2d77b05e7dc8f.png'),
      imgse: require('../../../img/61ecf7fc80fadb2d77b05e7dc813dc.png'),
      imgsasou: require('../../../img/sousu.png')
    }
  },
  methods: {}
}
</script>
<style>
.shzazs {
  display: flex;
  align-items: center;
  justify-content:space-between;
  width: 100%;
  text-align: center;
  padding-top: 2px;
}
.shzas_a{
  width: 15%;
}
.shzas_b{
  width: 50%;
  height: 4.5vh;
  background: #ececee;
  border-radius: 20px;
  line-height: 4.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #bdbdbf;
}
.shzas_c{
  width: 15%;
}
.imghzaq{
  width: 3.8vw;
  vertical-align: middle;
}
.shouchas{
  width:3vw;
  margin-right: 10px;
  vertical-align: middle;
}
</style>
