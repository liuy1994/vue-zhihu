<template>
  <div class="zhihu">
    <Topbar></Topbar>
    <Download></Download>
    <Content></Content>
    <Footer></Footer>
    <div style="width:100px;height:120vh;background:red;"></div>
  </div>
</template>

<script>
  import Topbar from './Topbar'
  import Download from './Download'
  import Content from './Content'
  import Footer from './Footer'
  export default {
    name: 'Zhihu',
    data () {
      return {
      }
    },
    components: {
      Topbar, Download, Content,Footer
    }
}
</script>

<style lang="scss" scoped>
  .zhihu{
    border:1px solid red;
    position: relative;
  }
</style>
