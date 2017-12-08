<template>
  <div class="download">
      <section>
          <img src="../../static/phone_sample.png" alt="mobile">
          <div class="loaded">
            <h2>每天三次 每次七分钟</h2>
            <p>在中国，资讯类移动应用的人均阅读时长是 5 分钟，而</p>
            <p>在知乎日报，这个数字是 21。</p>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Download'
}
</script>

<style lang="scss" scoped>
  .download{
    border:1px solid black;
    margin-top:78px;
    height: 460px;
    width:100%;
    background: #008bed;
    section{
      width:960px;
      margin:0 auto;
      position: relative;
      img{
        margin-top: 12px;
      }
      .loaded{
        position: absolute;
        right: 0;
        bottom:0;
      }
    }
  }
</style>


