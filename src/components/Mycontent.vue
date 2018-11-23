<template>
  <div class="content">
    <div class="head">
      <div>浏览内容</div>
      <div class="latest">最新内容</div>
    </div>
    <section>
      <router-link v-for="item in data" :key="item.id" :to="{path:'/detail/' + item.id}">
        <img :src="item.images[0]" alt="tup">
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
  import AJAXService from '@/service/ajax.js'

  export default {
    name: 'Mycontent',
    data () {
      return {
        data: []
      }
    },
    methods: {
      getList () {
        let year = new Date().getFullYear()
        let month = new Date().getMonth()
        let day = new Date().getDate() + 1
        month = month > 9 ? month : '0' + month
        day = day > 9 ? day : '0' + day
        let date = '' + year + month + day
        let arr = [AJAXService.getContent('latest'), AJAXService.getContent('before/' + date), AJAXService.getContent('before/' + (parseInt(date) - 1))]
        Promise.all(arr).then(data => {
          if (data.length) {
            let latest = data[0] ? data[0].stories : []
            let old = data[1] ? data[1].stories : []
            let oldest = data[2] ? data[2].stories : []
            this.data = [...latest, ...old, ...oldest]
          }
        }, (msg) => {
          alert(msg.error_message)
        })
      }
    },
    mounted () {
      this.getList()
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: 920px;
      padding:0 20px;
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
      background: #f9f9f9;
      width: 960px;
      height: 3900px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      overflow: hidden;
      a {
        display: inline-block;
        width: 260px;
        padding: 20px;
        background: white;
        margin-bottom: 20px;
        margin-right: 20px;
        img {
          width: 260px;
          height: 260px;
          margin-bottom: 10px;
        }
        p {
          line-height: 30px;
          font-size: 16px;
        }
      }
    }

    .footer {
      color: #15527b;
      line-height: 62px;
      text-align: center;
      margin: 0 auto;
      width: 960px;
      background: #f9f9f9;
    }
  }
</style>



