<template>
  <div class="header">
    <div class="logo">RW</div>
    <ul class="menu-list">
      <li>推荐</li>
      <li>前端</li>
      <li>后端</li>
      <li>简历</li>
      <li>开发工具</li>
      <li>程序员的门</li>
      <li>关于</li>
    </ul>
    <div class="tools">
      <Icon class="search" type="ios-search" color="#fff" size="24"/>

      <Dropdown class="language" placement="bottom-start">
        <a href="javascript:void(0)">
          ZH_CN
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>ZH-CN(简体中文)</DropdownItem>
          <DropdownItem>ZH-CW(繁体中文)</DropdownItem>
          <DropdownItem>USA</DropdownItem>
        </DropdownMenu>
      </Dropdown>
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
.header {
  width: 100%;
  height: 100px;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8vw;

  .logo {
    font-size: 32px;
    font-weight: 500;
    position: relative;
    padding: 0 5px;
    background: none;
    cursor: pointer;
    font-family: orpheus-pro;

    &:hover {

      &::after {
        transition: all 1s cubic-bezier(.19, 1, .22, 1);
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        transition-duration: 0.5s;
        width: 100%;
        left: 0;
      }

      &::before {
        transition: all 1s cubic-bezier(.19, 1, .22, 1);
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        transition-duration: 1s;
        transition-delay: 0.5s;
        width: 100%;
        left: 0;
      }
    }

    &::after {
      content: '';
      width: 0;
      height: 2px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -200%);
      display: block;
      background: #fff;
      transition: all 1s cubic-bezier(.19, 1, .22, 1);
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      transition-duration: 0.5s;
    }

    &::before {
      content: '';
      width: 0;
      height: 2px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, 200%);
      display: block;
      background: #fff;
      transition: all 1s cubic-bezier(.19, 1, .22, 1);
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      transition-duration: 0.5s;
      transition-delay: 0.5s;
    }
  }

  .menu-list {
    flex: 1;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 200px;
    font-family: PingFangSC-Regular, sans-serif;

    li {
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      margin: 0 15px;
      padding: 8px 2px;
      position: relative;

      &:hover {
        &::after {
          transition: all 1s cubic-bezier(.19, 1, .22, 1);
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
          transition-duration: 0.5s;
          width: 100%;
          left: 0;
        }
      }

      &::after {
        content: '';
        width: 0;
        height: 1px;
        position: absolute;
        background: #fff;
        bottom: .1em;
        right: 0;
        transition: all 1s cubic-bezier(.19, 1, .22, 1);
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        transition-duration: 0.6s;
      }
    }
  }

  .tools {
    display: flex;
    font-size: 14px;

    .search {
      margin-right: 10px;
    }

    .language a {
      color: #fff;
    }
  }
}
</style>
