<template>
  <div>
    <ul>
      <li @mousemove.passive="handleMoveOnce" v-for="(item,index) in list" :key="`item_${index}`">
        <span v-if="!render">{{item.name}}</span>
        <render-dom v-else :render-function="render" :name="item.name"></render-dom>
      </li>
    </ul>
    <ul>
      <li @mousemove.passive="handleMoveOnce" v-for="(item,index) in list" :key="`item_${index}`">
        <slot name="aa" :number="item.name"></slot>
        <slot name="bb" :number="item.name"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
import RenderDom from '_c/render-dom'
export default {
  name: 'List',
  components: {
    RenderDom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleMoveOnce () {
      console.log('move only once')
    }
  }
}
</script>
