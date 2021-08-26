<template>
  <div class="concat-wrapper">
    <div class="content">
      <div class="concat-box">
        <span>bugengineer.wu@gamil.com</span>
        <span>18723885865</span>
      </div>
      <div class="logo">RW</div>
      <div class="intercourse">

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.concat-wrapper {
  width: 100%;
  height: 300px;
  padding: 5vw 20vw;
  border-top: 1px solid rgba(255, 255, 255, .11);
  background: #000;
  color: #fff;


  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;


    .concat-box {
      display: flex;
      flex-direction: column;
      text-decoration: underline;
      color: #e1a87a;
      cursor: pointer;
    }

    .logo {
      font-size: 40px;
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

    .intercourse {
      min-width: 200px;
      border: 1px solid;
    }
  }
}
</style>
