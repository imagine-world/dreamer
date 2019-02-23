<template>
  <div class="youxuan">
    <div class="tuanj">
      <span>今日优选</span>
    </div>
    <div class="textyou" v-for="(item,index) in lists" :key="index">
      <div class="textyou-box">
        <img :src="item.imgse">
      </div>
      <div class="textyou-boxs">
        <div>
          <div>{{item.thie}}</div>
          <div class="touxai">
            <div class="touxai-lerft">
              <img :src='item.imgst' class="letfr-imgs">
              <span>{{item.name}}</span>
            </div>
            <div class="touix-right">
              <img src="../../assets/img/huo.png" class="right-imgs">
              <span>{{item.num}}</span>
            </div>
          </div>
        </div>
        <div>
          <img src="../../assets/img/bifangza.png" class="imgheaas">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lists: [
        {
          imgse: require('../../assets/img/shuaiza.png'),
          thie: '一首故事《夜空中最亮的星星》',
          imgst: require('../../assets/img/huo.png'),
          name: '小三',
          num: 123
        },
        {
          imgse: require('../../assets/img/shuaiza.png'),
          thie: '一首故事《夜空中最亮的星星》',
          imgst: require('../../assets/img/huo.png'),
          name: '小三',
          num: 123
        }
      ]
    }
  }
}
</script>
<style scoped>
.youxuan {
  padding: 0 0.2rem;
}
.tuanj span {
  font-size: 0.5rem;
  font-weight: bold;
}
.textyou {
  display: flex;
  align-items: center;
  font-size: 0.4rem;
  margin-bottom: .2rem;
}
.textyou-box {
  width: 2rem;
  height: 2rem;
}
.textyou-box img {
  height: 2rem;
}
.textyou-boxs {
  width: 100%;
  margin-left: 0.6rem;
  height: 2rem;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.imgheaas {
  height: 1rem;
}
.touxai {
  display: flex;
  align-items: center;
  margin-top: 0.1rem;
}
.touxai-lerft {
  border-right: 1px solid #f5f5f5;
  padding-right: 0.2rem;
}
.letfr-imgs {
  width: 1rem;
  height: 1rem;
  border: 1px solid;
  border-radius: 1rem;
}
.touix-right {
  padding-left: 0.2rem;
}
.right-imgs {
  height: 0.5rem;
  vertical-align: middle;
}
.touix-right span {
  color: #9e9e9e;
}
</style>
