<script>
// 顶部template优先级最高，其次是render函数，最后是底部template
export default {
  props: ['level'],
  template: '<div><p>我template出来的，标签是H{{this.level}}</p></div>',
  render () {
      const tag = `h${this.level}`
      return <div><tag>{this.$slots.default}</tag></div>
  }
}
</script>
