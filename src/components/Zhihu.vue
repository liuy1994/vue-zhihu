<template>
  <div class="zhihu">
    <Topbar></Topbar>
    <Download></Download>
    <Mycontent></Mycontent>
    <Myfooter></Myfooter>
  </div>
</template>

<script>
  import Topbar from './Topbar'
  import Download from './Download'
  import Mycontent from './Mycontent'
  import Myfooter from './Myfooter'
  export default {
    name: 'Zhihu',
    data () {
      return {
      }
    },
    components: {
      Topbar, Download, Mycontent, Myfooter
    }
}
</script>

<style lang="scss" scoped>
  .zhihu{
    position: relative;
  }
</style>
