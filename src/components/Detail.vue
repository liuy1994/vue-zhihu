<template>
  <div class="detail">
    <div class="topbar">
      <section>
        <a href=""><img src="../../static/Web_logo.png" alt="logo"></a>
        <div class="buttons">
          <a href="#"><span class="app">iPhone</span></a>
          <a href="#"><span>Android</span></a>
        </div>
      </section>
    </div>
    <div class="title">
      <img :src="this.image" alt="big_picture">
      <h1>{{title}}</h1>
    </div>
    <div class="myContent">
      <h1 class="loading">加载中......</h1>
    </div>
    <div class="about">
      <h2 class="heading">扫描二维码下载知乎日报</h2>
      <span class="subheading">支持 iOS 和 Android</span>
      <img src="../../static/qr_bottom.png" alt="二维码下载知乎日报" width="148" height="148">
    </div>
    <div class="info">知乎网 @2017 知乎</div>
  </div>
</template>

<script>
  import AJAXService from '@/service/ajax.js'

  export default {
    name: 'Detail',
    data () {
      return {
        image: '',
        title: ''
      }
    },
    updated () {
      window.scroll(0, 0)
      console.log('请忽略跨域图片错误，暂时还没有解决')
    },
    methods: {
      getDetail () {
        AJAXService.getContent('9669101').then((data) => {
          this.image = data.image.replace(/http\w{0,1}:\/\/pic/g, 'https://images.weserv.nl/?url=pic')
          this.title = data.title
          let body = data.body
          body.replace(/http\w{0,1}:\/\/pic/g, 'https://images.weserv.nl/?url=pic')
          let myContent = document.getElementsByClassName('myContent')[0]
          myContent.innerHTML = body
          let avatar = document.getElementsByClassName('avatar')[0]
          let src = avatar.getAttribute('src').replace(/http\w{0,1}:\/\/pic/g, 'https://images.weserv.nl/?url=pic')
          avatar.setAttribute('src', src)
        }, (msg) => {
          alert(msg.error_message)
        })
      }
    },
    mounted () {
      this.getDetail()
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .detail {
    background: #f6f6f6;
    position: relative;
    .topbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 10;
      background: #009dd7;
      section {
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 720px;
        margin: 0 auto;
        .buttons {
          display: flex;
          a {
            display: block;
            width: 100px;
            margin-left: 20px;;
            line-height: 36px;
            text-align: center;
            border-radius: 3px;
            background: #1cade9;
            color: white;
          }
        }
      }
    }
    .title {
      width: 720px;
      margin: 0 auto;
      position: relative;
      top: -100px;
      height: 720px;
      background: #fff;
      img {
        width: 100%;
      }
      h1 {
        font-size: 30px;
        line-height: 36px;
        padding: 0 80px;
        color: white;
        position: absolute;
        bottom: 50px;
      }
    }
    .myContent {
      background: white;
      padding: 40px;
      width: 720px;
      min-height: 150px;
      margin: -120px auto;
      line-height: 36px;
      position: relative;
      h1.loading {
        position: absolute;
        top: -450px;
      }
    }
    .about {
      margin: 130px auto 0;
      background: #fff;
      width: 720px;
      height: 270px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 20px;
    }
    .info {
      width: 100%;
      line-height: 80px;
      font-size: 13px;
      text-align: center;
      color: #b8b8b8;
    }
  }
</style>
