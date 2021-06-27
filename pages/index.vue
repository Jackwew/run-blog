<template>
  <div class="index">
    <headerCom class="header" />
    <div class="home-video">
      <bideo />
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import headerCom from '~/components/header/index.vue'
  import bideo from '@/components/Bideo/index.vue'

  @Component({
    components: {
      headerCom,
      bideo,
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

    private beforeDestroy(): void {}

    // method
    public init(): void {}

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
      min-height: 100vh;
    }
    .header {
      position: absolute;
      top: 0;
    }
  }
</style>
