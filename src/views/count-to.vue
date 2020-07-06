<template>
  <div>
    <count-to ref="countTo" :endVal="endVal" class="countOne" @animation-end="handleAnimationEnd">
      <span slot="left">人民币：</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getNumber">get number</button>
    <button @click="updateNumber">update number</button>
  </div>
</template>
<script>
import CountTo from '_c/count-to'
export default {
  name: 'count_to',
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 1000
    }
  },
  methods: {
    getNumber () {
      console.log(this.$refs.countTo.getVal())
    },
    updateNumber () {
      this.endVal = 100 + Math.random() * 100
    },
    handleAnimationEnd (value) {
      console.log(parseInt(value))
    }
  }
}
</script>
<style lang="css">
.countOne {
  font-size: 40px;
  color: blueviolet;
}
</style>
