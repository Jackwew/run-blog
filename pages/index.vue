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
    console.log(window)
  }

  private beforeDestroy(): void {
  }

  // method
  public init(): void {
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
}
</style>
