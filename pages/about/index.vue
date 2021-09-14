<template>
  <div>
    关于
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({
  components: {},
})
export default class IndexPage extends Vue {
  // 原data
  testMsg = 'My splendiferous Nuxt.js project'
  // annotate refs type
  $refs!: {
    navBox: HTMLElement
    validate: HTMLFormElement
  }

  // 生命周期
  private mounted(): void {
  }

  private beforeDestroy(): void {
  }

  // method
  public init(): void {

  }
}
</script>

<style>

</style>
