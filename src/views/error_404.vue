<template>
  <div class="about">
    <h1>404 page not found</h1>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  props: {
    // 优先走路由内配置的变量 food，如果没有定义则走这里
    food: {
      type: String,
      default: 'apple'
    }
  }
}
</script>
