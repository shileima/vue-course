<template>
  <input @input="handleInput" :value="value" />
</template>

<script>
export default {
  name: "AInput",
  props: {
    value: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      // console.log(value)
      // 触发父组件的 input 事件，第二个参数传递值
      this.$emit("input", value);
    }
  }
};
</script>
