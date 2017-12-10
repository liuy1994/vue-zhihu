<template>
  <div class="content">
      <div class="head">
          <div>浏览内容</div>
          <div class="latest">最新内容</div>
      </div>
      <section >
          <img src="" alt="1">
          <img src="" alt="2">
          <img src="" alt="3">
          <img src="" alt="4">
          <img src="" alt="5">
          <img src="" alt="6">
          <img src="" alt="7">
          <img src="" alt="8">
          <img src="" alt="9">
          <img src="" alt="0">
          <img src="" alt="11">
          <img src="" alt="12">
      </section>
      <a href="">
        <div class="footer">
          更多精彩内容可在知乎日报应用中查看
        </div>
      </a>
  </div>
</template>

<script>
export default {
  name: 'Mycontent'
}
</script>

<style lang="scss" scoped>
  .content {
    background: #f9f9f9;
    padding-bottom:30px;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    margin:0 auto;
    width: 960px;
      div{
        line-height: 100px;
        font-size: 24px;
      }
      .latest{
        color:#ccc;
      }
    }
    section{
      
      margin:0 auto;
      width: 960px;
    }
    
    .footer{
      background: #e8eef2;
      color:#15527b;
      line-height: 62px;
      text-align: center;
      margin-top: 30px;
      margin:0 auto;
      width: 960px;
    }
    
  }
</style>



