<template>
  <div class="about">
    <h1>This is parent</h1>
    <Button @click="sayToGirl">对女孩说</Button>
    <Child @hook:mounted="handleChildMounted" />
    <router-view />
  </div>
</template>

<script>
import Child from '@/views/child'
export default {
  name: 'parent',
  components: {
    Child
  },
  created () {
    console.log('parent created')
  },
  mounted () {
    console.log('parent mounted')
  },
  methods: {
    handleChildMounted () {
      console.log('notify child mounted')
    },
    sayToGirl () {
      this.$bus.$emit('dinner', '你饿吗')
    }
  }
}
</script>
