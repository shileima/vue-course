<template>
  <div>
    <ul @click="handleUlClick">
      <li
        @click.stop="handleLiClick"
        v-for="(item,index) in lists"
        :key="`item_${index}`"
      >{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [{ name: "loading" }, { name: "yytt90" }, { name: "kames" }]
    };
  },
  methods: {
    handleUlClick() {
      console.log("ul click");
    },
    handleLiClick() {
      console.log("li click");
    }
  }
};
</script>