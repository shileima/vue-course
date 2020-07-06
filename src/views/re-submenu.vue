<template>
  <div>
    <a-sub-menu>
      <div slot="title">{{parent.title}}</div>
      <template v-for="(item,i) in parent.children">
        <a-menu-item v-if="!item.children" :key="`item_${index}_${i}`">{{item.title}}</a-menu-item>
        <re-sub-menu v-else :key="`item_${index}_${i}`" :parent="item" :index="i"></re-sub-menu>
      </template>
    </a-sub-menu>
  </div>
</template>
<script>
import menuComponent from '_c/menu'
const { AMenuItem, ASubMenu } = menuComponent
export default {
  name: 'ReSubMenu',
  components: {
    AMenuItem,
    ASubMenu
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number
    }
  }
}
</script>
<style lang="stylus"></style>
