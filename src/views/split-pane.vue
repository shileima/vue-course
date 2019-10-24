<template>
  <div class="split-pane-con">
    <split-pane triggerWidth="8" :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from "_c/split-pane";
export default {
  components: {
    SplitPane
  },
  data() {
    return {
      offset: 0.56769
    };
  }
};
</script>
<style lang="less">
.split-pane-con {
  width: 400px;
  height: 200px;
  background: papayawhip;
}
</style>