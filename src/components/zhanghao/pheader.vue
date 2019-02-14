<template>
  <div>
    <div class="personal">
      <div class="personal-top">
        <div class="personal-top-left">
          <img src="../../assets/img/touxa.png" class="touxian">
        </div>
        <div class="personal-top-certye">
          <div class="personal-top-xia">153282462731</div>
          <div class="personal-top-xiase">LV.8</div>
        </div>
        <div class="personal-top-right">
          <div class="personal-top-zi">
            <i>
              <img src="../../assets/img/jifen.png" class="imgasa">
            </i>
            <span>签到</span>
          </div>
        </div>
      </div>
      <div class="personal-bott">
        <div class="personal-bott-cloe">
          <div class="personal-bott-text">动态</div>
          <div class="personal-bott-foea">0</div>
        </div>
        <div class="personal-bott-cloe">
          <div class="personal-bott-text">关注</div>
          <div class="personal-bott-foea">0</div>
        </div>
        <div class="personal-bott-cloe">
          <div class="personal-bott-text">粉丝</div>
          <div class="personal-bott-foea">0</div>
        </div>
        <div class="personal-bott-loeh">
          <div class="personal-bott-text"><img src="../../assets/img/qianbi.png" class="imhjsas"></div>
          <div class="personal-bott-eaaz">我的资料</div>
        </div>
      </div>
      <div class="bag"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.personal-top {
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
}
.personal-bott {
  border-top: 1px solid #e3e2e7;
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.personal-top-left {
  flex: 3;
}
.personal-top-certye {
  flex: 9;
  text-align: left;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.personal-top-right {
  flex: 3;
  text-align: right;
  font-size: 0.4rem;
  padding-left: 1rem;
}
.personal-top-zi {
  width: 80%;
  display: flex;
  align-items: center;
  border: 1px solid #d33f35;
  padding: 0.1rem 0.2rem;
  border-radius: 1rem;
}
.personal-top-right span {
  margin-left: 0.15rem;
  color: #d33f35;
  font-size: 0.36rem;
  text-align: center;
  display: inline-block;
}
.touxian {
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
}
.personal-top-xia {
  font-size: 0.6rem;
}
.personal-top-xiase {
  margin-top: 0.2rem;
  border: 1px solid #999b9a;
  border-radius: 1rem;
  padding: 0.01rem;
  width: 1.5rem;
  box-sizing: border-box;
  font-size: 0.35rem;
  color: #999b9a;
  text-align: center;
}
.imgasa {
  height: 0.46rem;
  vertical-align: middle;
  margin-top: -0.12rem;
}
.personal-bott-cloe {
  width: 25%;
  border-right: 1px solid #e3e2e7;
  font-size: 0.4rem;
  text-align: center;
}
.personal-bott-loeh {
  width: 25%;
  font-size: 0.4rem;
  text-align: center;
}
.personal-bott-text {
  color: #94989b;
}
.personal-bott-foea {
  font-weight: bold;
  color: #333335;
}
.personal-bott-eaaz {
  color: #646665;
  font-size: .3rem;
}
.imhjsas{
    height: .4rem;
    margin-top: -.2rem;
}
.bag{
  background: #eeeff1;
  height: .3rem;
  width: 100%;
}
</style>
