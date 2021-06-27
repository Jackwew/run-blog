<template>
  <div class="bideo"
    ref="bideo">
    <video ref="background_video"
      class="background_video"
      loop
      muted></video>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import Logo from '~/components/Logo.vue'

  @Component({
    components: {
      Logo,
    },
  })
  export default class IndexPage extends Vue {
    // 原data
    testMsg = 'My splendiferous Nuxt.js project'
    video_url =
      'https://htwz-wzy.obs.cn-north-4.myhuaweicloud.com/common/yutuweapp/material/20210627/f3d453eb97e04182a5adb55f3034ef00.mp4'

    newWidth: any = ''
    newHeight: any = ''
    // annotate refs type
    $refs!: {
      background_video: HTMLElement
      video: HTMLFormElement
    }
    // active = 2
    // 计算属性
    private get computedVal(): string {
      return `computedVal: ${this.testMsg} `
    }

    // 生命周期
    private mounted(): void {
      if (process.client) {
        require('@/utils/bideo.js')
        const {
          $refs: {background_video},
        } = this

        var bv = new window.Bideo()

        console.log(bv)

        bv.init({
          // Video element
          videoEl: background_video,

          // Container element
          container: document.querySelector('.bideo'),

          // Resize
          resize: true,

          // autoplay: false,

          // Array of objects containing the src and type
          // of different video formats to add
          src: [
            {
              src: this.video_url,
              type: 'video/mp4',
            },
          ],

          // What to do once video loads (initial frame)
          onLoad: function () {
            console.log(123)
          },
        })
      }
    }

    private beforeDestroy(): void {}

    // method
  }
</script>

<style scoped lang="scss">
  .bideo {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -11;
  }

  .background_video {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    object-fit: cover;
    height: 100%;
    width: 100%;
  }
</style>
