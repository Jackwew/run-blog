<template>
  <div class="footer">
    <div class="record">© 2021 Devon Stank. All rights reserved. Squarespace Developer & Founder of SQUAR</div>
    <div class="link">
      <span>Terms of Service</span>
      <span>Return Policy</span>
      <span> Privacy Policy</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background: #000;
  padding: 5vw 10vw;
  border-top: 1px solid rgba(255, 255, 255, .11);

  .record {
    text-align: center;
  }

  .link {
    text-align: center;
    margin-top: 10px;

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
