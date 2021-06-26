<template>
  <div class="header">
    {{ testMsg }}
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

<style scoped lang="scss">
</style>
