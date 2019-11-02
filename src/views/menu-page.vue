<template>
  <div class="menu-box">
    <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-sub-menu>
        <div slot="title">333</div>
        <a-menu-item>333-11</a-menu-item>
        <a-menu-item>333-22</a-menu-item>
        <a-sub-menu>
          <div slot="title">333-33</div>
          <a-menu-item>333-33-11</a-menu-item>
          <a-menu-item>333-33-22</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import menuComponent from "_c/menu";
export default {
  name: "menu_page",
  components: {
    ...menuComponent
  }
};
</script>
<style lang="less">
.menu-box {
  width: 300px;
  height: 400px;
}
div,
ul,
li {
  text-align: left;
}
</style>
