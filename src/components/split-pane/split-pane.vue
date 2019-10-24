<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width:leftOffsetPercent}">
      <slot name="left"></slot>
      <span>{{(parseFloat(leftOffsetPercent).toFixed(2) + '%')}}</span>
    </div>
    <div
      @mousedown="handleMousedown"
      class="pane-trigger"
      :style="{left:triggerLeft,width:`${triggerWidth}px`}"
    ></div>
    <div class="pane pane-right" :style="{left:leftOffsetPercent}">
      <slot name="right"></slot>
      <span>{{(100-parseFloat(leftOffsetPercent)).toFixed(2) + '%'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "splitPane",
  props: {
    triggerWidth: {
      type: String,
      default: 8
    },
    value: {
      type: Number,
      default: 0.3
    }
  },
  data() {
    return {
      canMove: false,
      initOffset: 0
    };
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`;
    },
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
    }
  },
  methods: {
    handleMousedown(event) {
      console.log(event.pageX - event.srcElement.getBoundingClientRect().left);

      document.addEventListener("mousemove", this.handleMousemove, false);
      document.addEventListener("mouseup", this.handleMouseup, false);
      this.initOffset =
        event.pageX -
        event.srcElement.getBoundingClientRect().left -
        this.triggerWidth / 2;
      this.canMove = true;
    },
    handleMouseup() {
      this.canMove = false;
    },
    handleMousemove(event) {
      if (!this.canMove) return;
      let $outerRect = this.$refs.outer
        ? this.$refs.outer.getBoundingClientRect()
        : null;
      let offset = event.pageX - $outerRect.left - this.initOffset;
      offset = Math.max(0, offset);
      offset = Math.min(offset, $outerRect.width);
      // console.log(offset);
      // this.value = offset / $outerRect.width;
      // 不能直接修改 props : this.value 必须触发事件$emit
      this.$emit("update:value", offset / $outerRect.width);
    }
  }
};
</script>
<style lang="less" scoped>
.split-pane-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      width: 30%;
      background: palevioletred;
    }
    &-right {
      right: 0;
      bottom: 0;
      left: 30%;
      background: palegoldenrod;
    }
    &-trigger {
      position: absolute;
      height: 100%;
      background: red;
      top: 0;
      left: 30%;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>