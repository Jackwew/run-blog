<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        show me the code
      </h1>
      <h2 class="subtitle">
        流年素写一世繁华
      </h2>
      <div class="links">
        <span class="button--green"
          @click="go_blog()">
          博客
        </span>
        <a href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">
          简历
        </a>
      </div>
    </div>
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
    // annotate refs type
    $refs!: {
      navBox: HTMLElement
      validate: HTMLFormElement
    }
    // active = 2
    // 计算属性
    private get computedVal(): string {
      return `computedVal: ${this.testMsg} `
    }
    // 生命周期
    private mounted(): void {
      // console.log(this.$router)
    }
    private beforeDestroy(): void {}
    // method
    public init(): void {}
    go_blog(): void {
      this.$router.push('/home')
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
      Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
