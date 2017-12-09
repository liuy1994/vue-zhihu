<template>
  <div class="download">
      <section>
          <img src="../../static/phone_sample.png" alt="mobile">
          <div class="loaded">
            
            <h2>每天三次 每次七分钟</h2>
            <p>在中国，资讯类移动应用的人均阅读时长是 5 分钟，而</p>
            <p>在知乎日报，这个数字是 21。</p>
            
            
            <div class="qr-top">
              <img src="../../static/qr_top2.png" alt="二维码">
            </div>
            <div class="app-download">
              <ul>
                <li><a href="" class="iphone">iOS 版</a></li>
                <li><a href="" class="andriod">Andriod 版</a></li>
              </ul>
            </div>
          
            
          </div>
      </section>
  </div>
</template>

<script lang="scss" scoped>
export default {
  name: 'Download'
}
</script>

<style lang="scss" scoped>
  .download{
    border:1px solid black;
    margin-top:78px;
    height: 460px;
    width:100%;
    background: #008bed;
    section{
      width:960px;
      height:100%;
      margin:0 auto;
      position: relative;
      >img{
        margin-top: 12px;
        margin-left: 32px;
      }
      .loaded{
        float:right;
        margin-right: 30px;
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
        .qr-top{
          margin-top: 48px;
          background: white;
          width:145px;
          border-radius:3px;
          height: 153px;
          >img{
            margin:9px 0 0 5px;
          }
        }
      }
    }
  }
</style>


