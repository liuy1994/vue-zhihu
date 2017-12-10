<template>
  <div class="footer">
    <div class="more">
      <div class="about">左边</div>
      <div class="qr-bottom">右边</div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scoped>
    .footer {
      background: #e5e5e5;
      color:#666;
      border:1px solid red;
      .more{
        width:960px;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
      }
    }
</style>

