<template>
  <div class="messages" v-if="messages.length">
    <div v-for="item in messages" :key="item.id">{{item.message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return { messages: [] };
  },
  mounted() {
    this.id = 0;
  },
  methods: {
    add(options) {
      let id = this.id++;
      let layer = { ...options, id };
      this.messages.push(layer);
      layer.time = setTimeout(() => {
        this.remove(layer);
      }, options.duration);
    },
    remove(layer) {
      clearTimeout(layer.time);
      this.messages = this.messages.filter(message => message.id !== layer.id);
    }
  }
};
</script>
