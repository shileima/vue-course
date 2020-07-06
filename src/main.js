/* eslint-disable quotes */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'view-design/dist/styles/iview.css'

import Bus from './lib/bus' // 组件间交互中介
// import CountTo from '_c/count-to'
if (process.env.NODE_ENV !== 'production') {
    require('./mock')
}
Vue.use(ViewUI)
Vue.config.productionTip = false
Vue.prototype.$bus = Bus

// element ui
Vue.use(ElementUI)

// const eventClick = event => {
//     console.log(event)
//     event.stopPropagation()
// }
// const list = [
//     { name: 'loading' },
//     { name: 'json' },
//     { name: 'james' }
// ]
// const getEleArr = h => list.map((item, index) => h('li', {
//     key: `item_${index}`,
//     on: {
//         'click': eventClick
//     }
// }, item.name))
let info = { a: 2, b: 10 }
new Vue({
    name: 'parent',
    mounted () {
        console.log('mixin beforeCreate')
    },
    info,
    router,
    store,
    /* render: h => h('div', {
      attrs: {
        id: 'box'
      },
      style: {
        color: 'red'
      }
    }, 'loading') */
    /* render: h => h(CountTo, {
      // 'class': ['countOne', true ? 'show' : 'hide'],
      'class': {
        'countOne': true,
        'wrapper': (1 > 2)
      },
      style: {},
      props: {
        endVal: 200
      },
      domProps: {
        innerHTML: '123'
      },
      on: {
        'animation-end': (val) => {
          console.log(`animation ended ${val}`)
        }
      },
      nativeOn: {
        'click': () => {
          console.log('click')
        }
      },
      directives: [],
      scopedSlots: {},
      slot: 'left',
      key: '',
      ref: ''
    }) */
    /* render: h => h('div', {}, [
      '123',
      h('span', '456')
    ]) */
    render: h => h(App)
    /* render v-for */
    /* render: h => h('ul', {
      on: {
        'click': eventClick
      }
    }, getEleArr(h)) */
}).$mount('#app')
