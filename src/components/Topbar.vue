<template>
  <div class="topbar">
      <img src="../assets/img/top_logo.png" alt="logo">
      <div class="buttons">
          <a href="/123"><span class="app">App 下载</span></a>
          <a href="/321"><span>浏览内容</span></a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style lang="scss" scoped>
  .topbar{
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    right:0;
    height: 78px;
    width:960px;
    margin:0 auto;
    img{
      height: 60px;
    }
    .buttons{
      display: flex;
      a{
        display: block;
        width:140px;
        line-height: 78px;
        text-align: center;
        span{
          padding: 10px;
        }
        span.app{
          background: #f0f9ff;
          color: #008bed;
          border-radius: 3px;
        }
      }
    }
    

  }
</style>