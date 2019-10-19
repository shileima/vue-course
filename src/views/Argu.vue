<template>
  <div class="home">{{ name }}</div>
</template>

<script>
// @ is an alias to /src

export default {
  props: {
    name: {
      type: String,
      default: "loading"
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to.name, from.name);
    console.log(this); // 有 this
  }
};
</script>
