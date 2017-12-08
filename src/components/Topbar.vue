<template>
  <div class="topbar">
      <img src="" alt="logo">
      <div class="buttons">
          <button>App 下载</button>
          <button>浏览内容</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style>
  .topbar{
    border:1px solid black;
    position: fixed;
    top:0;
    left: 0;
    right:0;
    height: 78px;
    width:960px;
    margin:0 auto;
  }
</style>