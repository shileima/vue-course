<template>
  <div>
    <button @click="showMessage">点我弹层</button>
  </div>
</template>

<script>
import Vue from "vue";
import Message from "_c/Message";

Vue.use(Message, { duration: 2000 });

export default {
  mounted() {
    console.log(this);
  },
  methods: {
    showMessage() {
      console.log(this);
      this.$message.info({
        message: "我很帅！",
        duration: 3000
      });
    }
  }
};
</script>
