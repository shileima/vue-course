<template>
    <div>mixin data: {{ mixinData }}</div>
</template>

<script>
/*
同名钩子函数（created,mounted等）将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
值为对象的选项，例如methods、components和directives等将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对一切以组件优先
数据对象data在发生冲突时以组件数据优先 */
import mixin from './mixin_child'
export default {
    mixins: [mixin],
    data () {
        return {
            mixinData: '我是本组件数据'
        }
    },
    created () {
        alert('我是本组件created 数据')
    },
    mounted () {
        // 监听 $bus 的事件
        this.$bus.$on('bind-click', val => {
            this.message = val
        })
    },
    methods: {
        mixins () {
            alert('我是本组件内部的方法')
        }
    }
}
</script>
