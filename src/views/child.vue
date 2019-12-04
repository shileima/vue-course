<template>
  <div>
    <h2>I am child</h2>
    <span>女孩，男孩对我说：{{message}}</span>
  </div>
</template>
<script>
export default {
  name: "child",
  data() {
    return {
      message:''
    };
  },
  created() {
    console.log("child created");
  },
  mounted() {
    console.log("child mounted");
    this.$bus.$on("dinner", data => {
      this.message = data;
    });
  }
};
</script>
