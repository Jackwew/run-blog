<template>
  <div>
    blog {{computedVal}}
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
    private mounted(): void {}
    private beforeDestroy(): void {}
    // method
    public init(): void {
      
    }
    go_blog = () => {
      console.log(1213);
      
    }
  }
</script>

<style>

</style>
