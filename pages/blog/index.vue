<template>
  <div class="blog-warp">
    <header-com/>
    <div class="blog-bg"></div>
    <div class="blog-box">
      <div class="post-list">
        <div class="post-preview" v-for="i in 10" :key="i">
          <h2 class="title">Windows的便携式控制台模拟器+深度定制Cmder</h2>
          <div class="article-info">
            <span>访问量: 6492</span>
            <span>评论: 334</span>
            <span>本文字数: 4.9k</span>
            <span>阅读时长 ≈ 4分钟</span>
          </div>
          <div class="article-content">
            ### 1. JavaScript有哪些数据类型，它们的区别？

            JavaScript共有八种数据类型，分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。

            其中 Symbol 和 BigInt 是ES6 中新增的数据类型：

            - Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
            - BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

            这些数据可以分为原始数据类型和引用数据类型：

            - 栈：原始数据类型（Undefined、Null、Boolean、Number、String）
            - 堆：引用数据类型（对象、数组和函数）

            两种类型的区别在于**存储位置的不同：**

            - 原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
            -
            引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

            堆和栈的概念存在于数据结构和操作系统内存中，在数据结构中：

            - 在数据结构中，栈中数据的存取方式为先进后出。
            - 堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。

            在操作系统中，内存被分为栈区和堆区：

            - 栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
            - 堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。

            ### 2. 数据类型检测的方式有哪些

            **（1）typeof**

            ```jsx
            console.log(typeof 2); // number
            console.log(typeof true); // boolean
            console.log(typeof 'str'); // string
            console.log(typeof []); // object
            console.log(typeof function(){}); // function
            console.log(typeof {}); // object
            console.log(typeof undefined); // undefined
            console.log(typeof null); // object

            ```

            其中数组、对象、null都会被判断为object，其他判断都正确。
          </div>
          <div class="article-meta">Posted by bugEngineer on 2021-09-14 17:55</div>
          <div class="tags">
            <span>工具</span>
            <span>linux</span>
          </div>
          <div class="more-button">More View</div>
        </div>
      </div>
      <div class="sidebar-container"></div>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import headerCom from '@/components/header/index.vue'
import Footer from '@/components/footer'

@Component({
  components: {
    headerCom,
    Footer
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

<style lang="scss" scoped>
.blog-warp {
  width: 100%;
  min-height: 50vh;

  .blog-bg {
    width: 100%;
    height: auto;
    margin-top: -100px;
    background: url("https://htwz-wzy.obs.cn-north-4.myhuaweicloud.com/run-test/code.png") no-repeat center center scroll;
    background-size: cover;
    z-index: -1;


    &::after {
      content: '';
      display: block;
      padding: 300px;
    }
  }

  .blog-box {
    width: 100%;
    min-height: 500px;
    padding: 0 10vw;
    display: flex;

    .post-list {
      flex: 1;

      .post-preview {
        width: 100%;
        height: auto;
        padding: 25px;
        box-shadow: 0 0 20px rgb(202 203 203 / 50%);
        margin: 40px 0;
        font-family: orpheus-pro;
        overflow: hidden;

        .title {
          color: #555;
          font-size: 22px;
          text-align: center;
        }

        .article-info {
          color: #999;
          display: flex;
          justify-content: center;

          span {
            margin: 5px;
          }
        }

        .article-content {

        }

        .article-meta {
          font-size: 18px;
          margin: 10px 0;
          color: #999;
        }

        .tags {
          display: flex;

          span {
            font-size: 14px;
            padding: 3px 5px;
            border-radius: 6px;
            background-color: #3b8070;
            margin-right: 10px;
            color: rgba(255, 255, 255, .8);
          }
        }

        .more-button {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 10px;
          border: 2px solid #333;
          margin-top: 10px;
          float: right;
          cursor: pointer;
        }
      }
    }

    .sidebar-container {
      width: 360px;
      min-height: 600px;
      margin: 20px 10px;
      border: 1px solid;
    }


  }

  .footer {
    background: #fff;
  }
}

</style>
