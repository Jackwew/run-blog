<template>
  <div class="resume-warp">
    <header-com/>
    <div class="box">
      <div class="thumbnail">
        <template v-for="item in numPages">
          <a :href="`#${item}`">
            <vue-pdf
              class="min-pdf"
              :key="item"
              :src="src"
              :page="item"
              @num-pages="pdfPageCount = $event"
              @page-loaded="currentPage = $event"/>
          </a>

          <div class="page-num">{{ item }} {{ show_pdf }}</div>
        </template>

      </div>
      <div class="pdf-box">
        <div v-for="item in numPages">
          <a :name="item" :id="item">
            <vue-pdf
              class="pdf"
              :key="item"
              :src="src"
              :page="item"
              @progress="loadedRatio($event)"
              @num-pages="pdfPageCount = $event"
              @page-loaded="pageLoaded = $event"/>
          </a>
        </div>

      </div>
    </div>

  </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import headerCom from '@/components/header/index.vue'
//@ts-ignore


@Component({
  components: {
    headerCom
  }
})


export default class IndexPage extends Vue {

  numPages = 0
  current = 1
  vuePdf: any = null
  show_pdf = false
  src = 'https://htwz-wzy.obs.cn-north-4.myhuaweicloud.com/run-test/test.pdf'

  // 生命周期
  private mounted(): void {

    if (process.client) {
      this.vuePdf = require('vue-pdf')
      const pdfLoader = this.vuePdf.default.createLoadingTask(this.src)
      pdfLoader.promise.then(pdf => {
        this.numPages = pdf.numPages
      })
    }
  }

  private beforeDestroy(): void {
  }

  // method
  public init(): void {

  }

  loadedRatio = (e) => {
    console.warn(e)
  }
}
</script>

<style lang="scss" scoped>
.resume-warp {
  .header {
    background: rgb(50, 54, 57);
    position: fixed;
    top: 0;
    z-index: 10;
    box-shadow: 0 -2px 8px rgb(0 0 0 / 9%), 0 4px 8px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 30%), 0 2px 6px rgb(0 0 0 / 15%);
  }

  .box {
    width: 100%;
    display: flex;
    margin-top: 100px;

    .thumbnail {
      width: 15%;
      height: calc(100% - 100px);
      position: fixed;
      top: 0;
      background: rgb(50, 54, 57);
      overflow-y: auto;
      margin-top: 100px;

      .min-pdf {
        width: 60%;
        margin: 30px auto 10px;
      }

      .page-num {
        text-align: center;
        font-size: 16px;
        color: #fff;
      }

      .active {
        display: block;
        border: 4px solid #41b883;
      }
    }

    .pdf-box {
      flex: 1;
      height: auto;
      margin: 0 auto;
      padding-left: 15%;
      background: rgb(82, 86, 89);

      .tools {
        width: 100%;
        height: 80px;
        background: rgb(50, 54, 57);
      }

      .pdf {
        width: 60%;
        height: 100%;
        background: #fff;
        margin: 0 auto;
      }
    }
  }
}
</style>
