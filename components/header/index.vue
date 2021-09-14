<template>
  <div class="header">
    <router-link to="/" class="logo">RW</router-link>
    <ul class="menu-list">
      <router-link :class="`list-item ${currenName === 'index' ? 'active-item' : ''}`" to="/">推荐</router-link>
      <router-link :class="`list-item ${currenName === 'blog' ? 'active-item' : ''}`" to="/blog">博客</router-link>
      <router-link :class="`list-item ${currenName === 'resume' ? 'active-item' : ''}`" to="/resume">简历</router-link>
      <router-link :class="`list-item ${currenName === '/' ? 'active-item' : ''}`" to="">开发工具</router-link>
      <router-link :class="`list-item ${currenName === '/' ? 'active-item' : ''}`" to="">程序员的门</router-link>
      <router-link :class="`list-item ${currenName === '/about' ? 'active-item' : ''}`" to="/about">关于</router-link>
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
          <DropdownItem disabled>ZH-CW(繁体中文)</DropdownItem>
          <DropdownItem disabled>USA</DropdownItem>
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
  currenName = ''
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
    this.currenName = this.$route.name
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
    color: #fff;
    font-family: PingFangSC-Regular, sans-serif;

    .list-item {
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      margin: 0 15px;
      padding: 8px 2px;
      position: relative;
      color: #fff;

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

    .active-item::after {
      width: 100%;
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
