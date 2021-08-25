<template>
  <div class="index">
    <headerCom class="header"/>
    <div class="home-video">
      <Video/>
      <div class="title">
        Front-end Dev <br/> & Photography Enthusiast.
      </div>
      <div class="options">
        <div class="about-button">了解我</div>
        <div class="show-video">Watch Video</div>
      </div>
    </div>
    <section class="content-wrapper person">
      <div class="person-img">
        <img src="@/assets/images/index/travel.jpg" alt="travel">
      </div>
      <div class="person-info">
        <h2>My job is a front-end / full stack development</h2>
        <p>
          我目前是一名前端开发工程师, 主要工作地在四川 - 成都, 使用的技术有: <a>Html5</a>, <a>Css/Css3</a>, <a>Javascript</a>,
          <a>TypeScript</a>, <a>Nodejs</a>, <a>Java</a>。 对于框架的研究有：<a>React</a>,
          <a>Vue2/3</a>, <a>webpack</a>, <a>vite</a>。截至目前已经在成都工作四年有余，成都是一座来了就不想离开的城市。如果你想了解更多关于和我一起工作的信息,
          或者成都这座美丽的城市, 请联系我
        </p>
        <div class="person-more">
          <span>LEARN MORE →</span>
        </div>
      </div>
    </section>
    <section class="content-wrapper project">
      <div class="title">
        <div class="title-letter">I LEAD THE LATEST PROJECT</div>
        <div class="title-big">看看最近工作上最新的一些React前端项目</div>
      </div>
      <div class="project-list">
        <div class="new-pro">
          <img src="@/assets/images/index/yutuClound.jpg" alt="hty">
          <div class="info">
            <div class="title">亨通文旅云平台</div>
            <div class="des">项目使用antd-pro做为基础模板，借鉴qiankun等成熟插件集成微前端架构模式，实现多项目之前相互耦合并独立部署</div>
          </div>
        </div>
        <div class="less-pro">
          <div class="less-item">
            <img src="@/assets/images/index/global.jpg" alt="global">
            <div class="info">
              <div class="less-title">全域旅游-微信H5</div>
              <div class="des">项目采用webpack模式手动构建，做到了项目轻量化避免项目臃肿而导致打包速度慢</div>
            </div>
          </div>
          <div class="less-item">
            <img src="@/assets/images/index/global.jpg" alt="global">
            <div class="info">
              <div class="less-title">全域旅游-微信H5</div>
              <div class="des">项目采用webpack模式手动构建，做到了项目轻量化避免项目臃肿而导致打包速度慢</div>
            </div>
          </div>
          <div class="less-item">
            <img src="@/assets/images/index/global.jpg" alt="global">
            <div class="info">
              <div class="less-title">全域旅游-微信H5</div>
              <div class="des">项目采用webpack模式手动构建，做到了项目轻量化避免项目臃肿而导致打包速度慢</div>
            </div>
          </div>
          <div class="less-item">
            <img src="@/assets/images/index/global.jpg" alt="global">
            <div class="info">
              <div class="less-title">全域旅游-微信H5</div>
              <div class="des">项目采用webpack模式手动构建，做到了项目轻量化避免项目臃肿而导致打包速度慢</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-wrapper blog">
      <div class="title">
        <div class="title-letter">LATEST BLOG POSTS</div>
        <div class="title-big">关于我做为前端开发工程师的一些想法和见解</div>
      </div>
      <div class="blog-wrapper">
        <div class="blog-item">
          <img src="@/assets/images/index/expansions.jpg" alt="expansions">
          <div class="blog-title">Windows的便携式控制台模拟器+深度定制Cmder</div>
          <div class="blog-short-desc">正如官网所说,Cmder 是一个软件包，它是由于 Windows 上缺少漂亮的控制台模拟器而完全出于沮丧而创建的.
            它基于出色的软件，并采用了 Monokai
            配色方案和自定义的提示布局
          </div>
          <div class="read-more">Read More</div>
        </div>
        <div class="blog-item center-item">
          <img src="@/assets/images/index/expansions.jpg" alt="expansions">
          <div class="blog-title">宝塔面板的安装以及使用</div>
          <div class="blog-short-desc">
            如果你想在你服务器安装linux宝塔面板，首先你得准备一个干净的linux操作系统，没有安装过其他环境，比如带有mysql/nginx/apache/php等环境
          </div>
          <div class="read-more">Read More</div>
        </div>
        <div class="blog-item">
          <img src="@/assets/images/index/expansions.jpg" alt="expansions">
          <div class="blog-title">react中加入webscoket之前端代码</div>
          <div class="blog-short-desc">WebSocket 对象提供了用于创建和管理 WebSocket 连接，以及可以通过该连接发送和接收数据的 API。
            我们先了解一下 WebSocket 的各种事件
          </div>
          <div class="read-more">Read More</div>
        </div>
      </div>
    </section>

    <section class="content-wrapper life">
      <div class="letter-title">MY INSTAGRAM FEED</div>
      <div class="big-title">我的生活以及随手拍</div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import headerCom from '~/components/header/index.vue'
import Video from '@/components/Video/index.vue'

@Component({
  components: {
    headerCom,
    Video,
  },
})
export default class IndexPage extends Vue {
  // 原data
  testMsg = 'My splendiferous Nuxt.js project'
  video_url =
    'https://htwz-wzy.obs.cn-north-4.myhuaweicloud.com/common/yutuweapp/material/20210627/f3d453eb97e04182a5adb55f3034ef00.mp4'
  // annotate refs type
  $refs!: {
    navBox: HTMLElement
    validate: HTMLFormElement
    video: HTMLFormElement
  }
  // active = 2
  // 计算属性
  private get computedVal(): string {
    return `computedVal: ${this.testMsg} `
  }

  // 生命周期
  private mounted(): void {
  }

  private beforeDestroy(): void {
  }

  // method
  public init(): void {
  }

  public onSwiper(swiper): void {
    console.log(swiper);
  }

  public onSlideChange(): void {
    console.log('slide change');
  }

  go_blog(): void {
    this.$router.push('/home')
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  position: relative;

  .home-video {
    width: 100%;
    min-height: 105vh;
    background: rgba(0, 0, 0, .6);
    position: relative;
    overflow: hidden;

    .title {
      width: 100%;
      font-family: orpheus-pro;
      font-style: normal;
      margin-top: 300px;
      color: #fff;
      font-size: calc((6.4 - 1) * 1.2vw + 1rem);
      text-align: center;
      font-weight: 400;
    }

    .options {
      min-height: 100px;
      color: #fff;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .about-button {
        width: 204px;
        height: 65px;
        text-align: center;
        line-height: 65px;
        border: 1px solid #e1a87a;

        &:hover {
          background-color: #e1a87a;
          border-color: #e1a87a;
          color: #fff;
        }
      }

      .show-video {
        height: 65px;
        text-align: center;
        line-height: 65px;
        padding: 0 20px;
        cursor: pointer;

        &:hover {
          opacity: .5;
        }

        &:before {
          background-position: center;
          background-repeat: no-repeat !important;
          background-size: 64px 64px;
          content: "";
          display: inline-block;
          height: 64px;
          margin: 0 8px 0 0;
          vertical-align: middle;
          width: 64px;
          background: url("../assets/images/index/show.svg");
        }
      }

    }
  }

  .header {
    position: absolute;
    top: 0;
    z-index: 11;
  }

  .content-wrapper {
    width: 100%;
    background-color: #000;
    padding: 6vw 10vw 3vw;
    color: #fff;
    font-family: orpheus-pro;

    .title {
      width: 100%;
      padding: 0 200px;
      font-size: 14px;


      .title-big {
        text-align: center;
        font-size: 40px;
        font-weight: 300;
      }
    }
  }

  .person {
    display: flex;


    .person-img {
      width: 30vw;
      height: 700px;


      img {
        width: 100%;
        height: 100%;
      }
    }

    .person-info {
      flex: 1;
      margin-left: 100px;
      margin-top: 120px;

      h2 {
        font-size: calc((2.6 - 0.5) * 1.2vw + 1rem);
        font-weight: 200;
        font-style: normal;
        letter-spacing: 0em;
        text-transform: none;
        line-height: 1.2;
      }

      p {
        font-size: 16px;
        margin-top: 40px;
        font-family: PingFangSC-Regular, sans-serif;
        line-height: 40px;
      }

      .person-more {
        width: 200px;
        height: 63px;
        border: 2px solid #e1a87a;
        text-align: center;
        line-height: 63px;
        margin-top: 60px;
        position: relative;
        background: transparent;
        border-radius: 5px;
        cursor: pointer;

        span {
          z-index: 999;
        }


        &:after {
          content: 'LEARN MORE →';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 0;
          z-index: -1;
          background: transparent;
          transition: all 1s cubic-bezier(.19, 1, .22, 1);
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
          transition-duration: .5s;

        }

        &:hover {
          background: transparent;

          &:after {
            z-index: 1;
            height: 100%;
            background: #e1a87a;
          }
        }
      }
    }
  }

  .project {
    .project-list {
      width: 100%;
      height: 500px;
      margin-top: 20px;
      display: flex;
      font-family: PingFangSC-Regular, sans-serif;

      .new-pro {
        width: 35vw;
        height: 500px;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          transition: all 2s cubic-bezier(.19, 1, .22, 1);
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
          transition-duration: 2s;
        }

        .info {
          padding: 15px 10px;
          background: rgba(0, 0, 0, .4);
          position: absolute;
          bottom: 0;

          .less-title {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 10px;
          }
        }

        &:hover {
          img {
            transform: scale(1.2);
          }
        }
      }


      .less-pro {
        width: 100%;
        flex: 1;
        display: flex;
        flex-wrap: wrap;


        .less-item {
          width: 50%;
          height: 50%;
          border: 1px solid #F5F5F5;
          position: relative;
          overflow: hidden;

          img {
            width: 100%;
            transition: all 2s cubic-bezier(.19, 1, .22, 1);
            transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
            transition-duration: 2s;
          }

          &:hover {
            img {
              transform: scale(1.2);
            }
          }

          .info {
            padding: 10px 8px;
            background: rgba(0, 0, 0, .4);
            position: absolute;
            bottom: 0;

            .title {
              font-size: 20px;
              font-weight: 500;
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }

  .blog {
    .blog-wrapper {
      width: 100%;
      min-height: 500px;
      margin-top: 20px;
      display: flex;

      .center-item {
        margin: 0 80px;
      }

      .blog-item {
        flex: 1;

        img {
          width: 100%;
          min-height: 500px;
        }

        .blog-title {
          height: 100px;
          padding: 15px 0;
          font-size: 24px;
          overflow: hidden;
          /*将对象作为弹性伸缩盒子模型显示*/
          display: -webkit-box;
          /*设置子元素排列方式*/
          -webkit-box-orient: vertical;
          /*设置显示的行数，多出的部分会显示为...*/
          -webkit-line-clamp: 2;
        }

        .blog-short-desc {
          width: 100%;
          height: 90px;
          font-size: 14px;
          line-height: 30px;
          overflow: hidden;
          /*将对象作为弹性伸缩盒子模型显示*/
          display: -webkit-box;
          /*设置子元素排列方式*/
          -webkit-box-orient: vertical;
          /*设置显示的行数，多出的部分会显示为...*/
          -webkit-line-clamp: 3;
        }

        .read-more {
          margin-top: 20px;
          color: #e1a87a;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }

  .life {
    .letter-title {
      text-align: center;
    }

    .big-title {
      text-align: center;
      font-size: 40px;
      margin-top: 15px;
    }
  }

}
</style>
