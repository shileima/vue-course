<template>
  <div>I am child</div>
</template>
<script>
export default {
  name: "child",
  created() {
    console.log("child created");
  },
  mounted() {
    console.log("child mounted");
  }
};
</script>
