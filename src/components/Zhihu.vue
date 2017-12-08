<template>
  <div class="zhihu">
    <Topbar></Topbar>
    <!-- <Download>2</Download>
    <Content>3</Content>
    <Footer>4</Footer> -->
    <div style="width:100px;height:120vh;background:red;"></div>
  </div>
</template>

<script>
import Topbar from './Topbar'
// import Download from './Download'
// import Content from './Content'
// import Footer from './Footer'
export default {
  name: 'Zhihu',
  data () {
    return {
    }
  },
  components: {
    Topbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .zhihu{
    border:1px solid red;
    position: relative;
  }
</style>
