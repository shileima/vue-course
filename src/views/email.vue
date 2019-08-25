<template>
  <div>
    email vue: {{ message }}
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: ''
    }
  },
  mounted(){
    // 监听 $bus 的事件
    this.$bus.$on('on-click', val => {
      this.message = val
    })
  }
}
</script>
