/* eslint-disable spaced-comment */
/* eslint-disable eol-last */
export default {
  functional: true,
  props: {
    name: String,
    renderFunction: Function
  },
  render: (h, ctx) => {
    return ctx.props.renderFunction(h, ctx.props.name)
  }
}
/* 函数式组件只是用来渲染数据的，原理：借助render函数实现 */
/* 这是个纯函数式组件，无生命周期，无状态监听，无实例，只是一个接收参数的函数*/