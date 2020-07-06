<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleShowSub">
      <slot name="title"></slot>
      <span :style="{transform:`rotateZ(${showSub ? 0 : 180}deg)`}">^</span>
    </div>
    <div v-show="showSub" class="a-submenu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>
<script>
export default {
  name: 'ASubMenu',
  data () {
    return {
      showSub: false
    }
  },
  methods: {
    handleShowSub () {
      this.showSub = !this.showSub
    }
  }
}
</script>
<style lang="less">
.a-submenu {
  &-title {
    span {
      position: absolute;
      top: 0;
      right: 0;
    }
    position: relative;
    background: blue;
    color: #fff;
  }
  &-child-box {
    overflow: hidden;
    padding-left: 10px;
  }
}
</style>
