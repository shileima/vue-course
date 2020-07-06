<template>
  <div>
    <slot name="left"></slot>
    <span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
export default {
  name: 'CountTo',
  data () {
    return {
      countup: {}
    }
  },
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return ['count-to-number', this.className]
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0 // ms
    },
    delay: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    getVal () {
      return this.$refs.number.innerText
    },
    eventEnd () {
      // updated end event
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('animation-end', Number(this.getVal()))
        })
      }, this.duration * 1000 + 10)
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.countup.update(newVal)
      this.eventEnd()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.countup = new CountUp(
        this.eleId,
        this.startVal,
        this.endVal,
        this.decimals,
        this.duration,
        {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimal: this.decimal
        }
      )
      setTimeout(() => {
        this.countup.start()
        this.eventEnd()
      }, this.delay)
    })
  }
}
</script>
<style lang="less">
.count-to-number {
  font-weight: bold;
}
</style>
