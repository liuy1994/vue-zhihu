<template>
  <div class="content">
    <div class="head">
      <div>浏览内容</div>
      <div class="latest">最新内容</div>
    </div>
    <section>
      <router-link v-for="(item, index) in data" :key="`${item.id}-${index}`" :to="{path:'/detail/' + item.id}">
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
      getDate (date) {
        date = date ? new Date(date) : new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        month = month > 9 ? month : '0' + month
        day = day > 9 ? day : '0' + day
        return '' + year + month + day
      },
      getList () {
        // let year = new Date().getFullYear()
        // let month = new Date().getMonth() + 1
        // let day = new Date().getDate()
        // month = month > 9 ? month : '0' + month
        // day = day > 9 ? day : '0' + day
        // let date = '' + year + month + day
        let today = new Date().getTime()
        let arr = [
          AJAXService.getContent('latest'),
          AJAXService.getContent('before/' + this.getDate(today)),
          AJAXService.getContent('before/' + this.getDate(today - 24 * 60 * 60 * 1000))
        ]
        Promise.all(arr).then(data => {
          if (data.length) {
            data[0] = data[0]
              ? {
                stories: data[0].stories,
                top_stories: data[0].top_stories.map(t => {
                  return {
                    ...t,
                    images: [t.image]
                  }
                })
              }
              : {
                stories: [],
                top_stories: []
              }
            let latest = data[0] ? [...data[0].stories, ...data[0].top_stories] : []
            let old = data[1] ? data[1].stories : []
            let oldest = data[2] ? data[2].stories : []
            this.data = [...latest, ...old, ...oldest]
            this.getFinal(today - 24 * 60 * 60 * 1000)
          }
        }, (msg) => {
          alert(msg.error_message)
        })
      },
      getFinal (final) {
        if (this.data.length < 30) {
          AJAXService.getContent('before/' + this.getDate(final - 24 * 60 * 60 * 1000)).then(data => {
            this.data = this.data.concat(data.stories || [])
            this.getFinal(final - 24 * 60 * 60 * 1000)
          })
        } else {
          this.data = this.data.slice(0, 30)
        }
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



