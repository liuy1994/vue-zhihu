<template>
  <div class="detail">
    <div class="myContent">
      加载中......
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      body: ''
    }
  },
  created () {
    var that = this
    var url = window.location.href
    var index = url.indexOf('?')
    var id = url.substr(index + 1)

    var ajax1 = new XMLHttpRequest()
    ajax1.onreadystatechange = function (res) {
      if (ajax1.readyState === 4) {
        if (ajax1.status === 200) {
          var result = JSON.parse(ajax1.responseText)
          console.log(result)
          var body = result.body
          that.body = body
          var myContent = document.getElementsByClassName('myContent')[0]
          console.log(myContent)
          myContent.innerHTML = that.body
        }
      }
    }
    ajax1.open('GET', 'http://173.213.88.44:8080/api/4/news/' + id, true)
    ajax1.send()
  }
}
</script>

<style lang="scss" scoped>
.detail {
  position: relative;
}
</style>