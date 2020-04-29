
// 混入的对象mixin
export default {
    created () {
        alert('我是mixin内部的created的生命周期')
    },
    data () {
        return {
            mixinData: '我是混入的数据'
        }
    },
    methods: {
        mixins () {
            alert('我是mixin内部的方法')
        }
    }
}
