<template>
  <div>
    <!-- 不使用render -->
    <list :list="lists" :render="null"></list>
    <!-- 使用render -->
    <list :list="lists" :render="renderFunc"></list>
    <!-- 使用组件-插槽 -->
    <list :list="lists">
      <count-to slot="aa" slot-scope="{number}" :end-val="number"></count-to>
      <count-to slot="bb" slot-scope="{number}" :end-val="number"></count-to>
    </list>
  </div>
</template>
<script>
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
  data () {
    return {
      /* lists: [
        { name: "loading" },
        { name: "yytt90" },
        { name: "James Harden" }
      ], */
      lists: [{ name: 144 }, { name: 889 }, { name: 9000 }]
    }
  },
  /* template中使用外引组件必须在components注册 */
  components: {
    List,
    CountTo
  },
  methods: {
    handleUlClick () {
      console.log('ul click')
    },
    handleLiClick () {
      console.log('li click')
    },
    /* 1、使用render=>h函数渲染 */
    /* renderFunc(h, name) {
      return h(
        "i",
        {
          style: {
            color: "purple"
          }
        },
        name
      );
    }, */
    /* 2、使用jsx方式 */
    renderFunc (h, name) {
      /* 1、渲染html 标签 */
      /* return (
        <i on-click={this.handleClick} style={{ color: "blue" }}>
          {name}
        </i>
      ); */
      /* 2、渲染组件 */
      return (
        <CountTo
          endVal={name}
          style={{ color: 'darkBlue', fontSize: '30px' }}
          on-animation-end={this.handleEnd} /* 绑定组件内部emit的事件 */
          nativeOn-click={this.nativeClick} /* 绑定原生事件 */
          nativeOn-mouseup={this.handleMouseUp}
          nativeOn-mousemove={this.handleMove}
        ></CountTo>
      )
    },
    handleClick () {
      console.log('on click')
    },
    handleEnd (val) {
      this.$nextTick(() => {
        console.log('endVale => ', val)
      })
    },
    nativeClick () {
      console.log('nativeClick')
    },
    handleMouseUp () {
      console.log('native mouseup')
    },
    handleMove (event) {
      event.preventDefault()
    }
  }
}
</script>
