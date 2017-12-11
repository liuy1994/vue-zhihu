<template>
  <div class="topbar">
    <section>
      <a href=""><img src="../../static/top_logo.png" alt="logo"></a>
      <div class="buttons">
          <a href="#"><span class="app">App 下载</span></a>
          <a href="#"><span>浏览内容</span></a>
      </div>
    </section>
      
  </div>
</template>

<script>
  export default {
    name: 'Topbar'
  }
</script>

<style lang="scss" scoped>
  .topbar {    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width:100%;
    background: #fff;
    z-index: 10;
    section{
      height: 78px;    
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 960px;
      margin: 0 auto;
      img {
        height: 60px;
      }
      .buttons {
        display: flex;
        a {
          display: block;
          width: 140px;
          line-height: 78px;
          text-align: center;
          span {
            padding: 10px;
          }
          span.app {
            background: #f0f9ff;
            color: #008bed;
            border-radius: 3px;
          }
        }
      }
    }

    


  }
</style>