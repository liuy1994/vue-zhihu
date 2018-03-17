<template>
  <div class="content">
      <div class="head">
          <div>浏览内容</div>
          <div class="latest">最新内容</div>
      </div>
      <section>
        <router-link v-for="(item,index) in data" :key="item.id" :to="{path:'/detail?' + item.id}">
          <img :src="item.images[0].replace(/http\w{0,1}:\/\//g,'https://images.weserv.nl/?url=')" alt="tup">
          <p>{{item.title}}</p>
        </router-link>
        <router-link v-for="(item,index) in oldData" :key="item.id" :to="{path:'/detail?' + item.id}">
          <img :src="item.images[0].replace(/http\w{0,1}:\/\//g,'https://images.weserv.nl/?url=')" alt="tup">
          <p>{{item.title}}</p>
        </router-link>
        <router-link v-for="(item,index) in oldest" :key="item.id" :to="{path:'/detail?' + item.id}">
          <img :src="item.images[0].replace(/http\w{0,1}:\/\//g,'https://images.weserv.nl/?url=')" alt="tup">
          <p>{{item.title}}</p>
        </router-link>
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
  name: 'Mycontent',
  data () {
    return {
      date: '',
      data: '',
      oldData: '',
      oldest: ''
    }
  },
  created: function () {
    let that = this
    let year = new Date().getFullYear()
    let month = new Date().getMonth()
    let day = new Date().getDate() + 1
    month = month > 9 ? month : '0' + month
    day = day > 9 ? day : '0' + day
    that.date = '' + year + month + day

    let ajax1 = new XMLHttpRequest()
    ajax1.onreadystatechange = function (res) {
      if (ajax1.readyState === 4) {
        if (ajax1.status === 200) {
          let result = JSON.parse(ajax1.responseText)
          let { date, stories } = result
          that.date = date
          that.data = stories
        }
      }
    }
    ajax1.open('GET', 'http://173.213.88.44:8080/api/4/news/latest', true)
    ajax1.send()

    let ajax2 = new XMLHttpRequest()
    ajax2.onreadystatechange = function (res) {
      if (ajax2.readyState === 4) {
        if (ajax2.status === 200) {
          let result2 = JSON.parse(ajax2.responseText)
          that.oldData = result2.stories
        }
      }
    }
    ajax2.open('GET', 'http://173.213.88.44:8080/api/4/news/before/' + that.date, true)
    ajax2.send()

    let ajax3 = new XMLHttpRequest()
    ajax3.onreadystatechange = function (res) {
      if (ajax3.readyState === 4) {
        if (ajax3.status === 200) {
          let result3 = JSON.parse(ajax3.responseText)
          that.oldest = result3.stories
        }
      }
    }
    ajax3.open('GET', 'http://173.213.88.44:8080/api/4/news/before/' + (that.date - 1), true)
    ajax3.send()
  }
}
</script>

<style lang="scss" scoped>
.content {
  background: #f9f9f9;
  padding-bottom: 30px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 960px;
    div {
      line-height: 100px;
      font-size: 24px;
    }
    .latest {
      color: #ccc;
    }
  }
  section {
    margin: 0 auto;
    padding-left:20px;
    width: 960px;
    height: 3900px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow:hidden;
    a{
      display: inline-block;
      width:260px;
      padding:20px;
      background: white;
      margin-bottom: 20px;
      margin-right:20px;
      img{
        width:260px;
        height: 260px;
        margin-bottom: 10px;
      }
      p{
        line-height: 30px;
        font-size: 16px;
      }
    }
  }

  .footer {
    background: #e8eef2;
    color: #15527b;
    line-height: 62px;
    text-align: center;
    margin-top: 30px;
    margin: 0 auto;
    width: 960px;
  }
}
</style>



