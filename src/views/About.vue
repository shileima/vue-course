<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b>{{food}}</b>
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
  },
  // 2,失活的组件离开触发
  beforeRouteLeave (to, from, next) {
    console.log('2,失活的组件(about)离开触发')
    // const leave = confirm('do you confirm leaving?')
    // if(leave) next()
    // else next(false)
    next()
  },
}
</script>
