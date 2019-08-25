<template>
  <p>AShow: {{ content }}</p>
</template>

<script>
export default {
  name: 'AShow',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
