/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import MessageComponent from './messages.vue'

let getInstance = () => {
  let vm = new Vue({
    render: h => h(MessageComponent)
  }).$mount()
  // console.log(vm)
  document.body.appendChild(vm.$el)

  let childComponent = vm.$children[0]
  return {
    add(options) {
      childComponent.add(options)
    }
  }
}
let instance
let getIns = () => {
  instance = instance || getInstance()
  return instance
}
const Message = {
  info(options) {
    getIns().add(options)
  },
  warn() { },
  success() { },
  error() { }
}
export {
  Message
}
let _Vue
export default {
  install(Vue, defaultOptions) {
    if (!_Vue) {
      let $message = {}
      Object.keys(Message).forEach(type => {
        $message[type] = Message[type]
      })
      Vue.prototype.$message = Message
    };
    Vue.mixin({
      beforeCreate() {
        if (this.$options.info) {
          this._info = this.$options.info
        } else {
          this._info = this.$parent && this.$parent._info
        }
      }
    })
  }
}
