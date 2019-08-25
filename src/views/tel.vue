<template>
  <div>
    <button @click="handleClick">按我 emit 事件</button>
  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'from tel.vue message')
    }
  }

}
</script>
