<template>
  <div class="footer">
    <div class="more">
      <div class="about">
        <p>知乎日报是一款拥有千万用户的资讯类客户端，每日提供来自知乎社区的精选问答，还有国内一流媒体的专栏特稿。</p>
        <p>主题日报包括动漫、设计、大公司、游戏、财经、电影、电子音乐、互联网安全等丰富内容，为业内人和资深爱好
者推荐各领域最精彩文章，满足高质量阅读需求。</p>
        <p>在知乎日报，告别浮躁，重获阅读的愉悦。</p>
        <p>© 2017 知乎</p>
      </div>
      <div class="qr-bottom">
        <img src="../../static/qr_bottom.png" alt="qr-bottom">
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'Myooter'
  }
</script>

<style lang="scss" scoped>
    .footer {
      color:#666;
      .more{
        background: #e5e5e5;
        width:960px;
        box-sizing: border-box;
        padding:0 20px;
        height: 265px;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        .about{
          padding-top: 30px;
          width:715px;
          line-height: 26px;
          font-size: 14px;
          p{
            margin-bottom: 12px;
          }
        }
        .qr-bottom{
          height: 135px;
          margin-top:25px;
          padding: 5px;
          background: white;
          position: relative;
        }
        .qr-bottom::after{
          content:'扫描下载客户端';
          position: absolute;
          width:145px;
          top:calc(100% + 13px);
          left:0;
          line-height: 16px;
          font-size: 16px;
          text-align: center;
        }
      }
    }
</style>

