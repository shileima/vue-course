<template>
  <div>
    <button @click="handleClick">按我 emit 事件</button>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$bus);
    this.$on("on-click", mes => {
      console.log(mes);
    });
  },
  methods: {
    handleClick() {
      this.$bus.$emit("bind-click", "from tel component message");
      this.$emit("on-click", "from tel on-click message");
    }
  }
};
</script>
