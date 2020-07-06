<template lang="">
  <div>
    <FunctionalList :itemLists="lists" :itemClick="handleClick" />
  </div>
</template>
<script>
import FunctionalList from '_c/functional-list'
export default {
  components: {
    FunctionalList
  },
  data () {
    return {
      lists: ['one', 'two', 'three']
    }
  },
  methods: {
    handleClick () {
      console.log('item click')
    }
  }
}
</script>
