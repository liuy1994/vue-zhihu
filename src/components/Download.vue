<template>
  <div class="download">
    <section>
      <transition
        appear
        appear-class="mobile-appear"
        appear-to-class="mobile-appear-to"
        appear-active-class="mobile-appear-active"
      >
        <img src="//p0qsnkkty.bkt.clouddn.com/phone_sample.png" alt="mobile">
      </transition>
      <transition
        appear
        appear-class="loaded-appear"
        appear-to-class="loaded-appear-to"
        appear-active-class="loaded-appear-active"
      >
        <div class="loaded">
          <h2>每天三次 每次七分钟</h2>
          <p>在中国，资讯类移动应用的人均阅读时长是 5 分钟，而</p>
          <p>在知乎日报，这个数字是 21。</p>
          <div class="app-download">
            <div class="qr-top">
              <img src="//p0qsnkkty.bkt.clouddn.com/qr_top2.png" alt="二维码">
            </div>
            <ul>
              <li><a class="iphone" href="#"><img src="//p0qsnkkty.bkt.clouddn.com/iphone_logo.png" alt="iphone"><span>iOS 版</span></a></li>
              <li><a class="andriod" href="#"><img src="//p0qsnkkty.bkt.clouddn.com/android_logo.png" alt="android"><span>Andriod 版</span></a></li>
            </ul>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Download'
  }
</script>

<style lang="scss" scoped>
  .download{
    margin-top:78px;
    height: 460px;
    width:100%;
    background: #008bed;
    section{
      width:960px;
      height:100%;
      margin:0 auto;
      position: relative;
      overflow: hidden;
      .mobile-appear-active{
        transition: all 1s ease;
      }
      .mobile-appear{
        margin-top: 440px;
      }

      .loaded-appear-active{
        transition: all 1s ease-in-out;
      }
      .loaded-appear{
        opacity: 0;
        transform: translateX(60px)
      }
      >img{
        margin-top: 12px;
        margin-left: 32px;
      }
      .loaded{
        float:right;
        margin-right: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        h2{
          margin-top: 100px;
          line-height: 40px;
          height:50px;
          font-size: 40px;
          color:white;
          font-weight: normal;
        }
        p{
          color:#99d1f8;
          font-size: 16px;
          line-height: 26px;
        }
      }
        .app-download{
          display: flex;
          margin-top: 48px;
          .qr-top{
            background: white;
            width:145px;
            border-radius:3px;
            height: 153px;
            >img{
              margin:9px 0 0 5px;
            }
          }
          ul{
            margin-left:55px;
            li{
              margin-bottom: 20px;
              line-height: 65px;
              a{
                display: block;
                background: white;
                border-radius: 5px;
                padding-right: 35px;
                width:165px;
                img{
                  color:red;
                  vertical-align: middle;
                  padding-left: 6px;
                }
                span{
                  padding-left: 10px;
                  font-size: 20px;
                }
              }
              a:hover{
                background: #ddd;
              }
            }            
          }
        }
    }
  }
</style>


