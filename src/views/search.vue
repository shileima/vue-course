<template>
  <div class="about">
    <input v-model="searchText" />
    <div>
      <ul>
        <li v-for="(item,index) in lists" :key="`item_${index}`">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getProducts } from "../lib/util";
export default {
  props: {},
  data() {
    return {
      searchText: "n",
      lists: []
    };
  },
  // created() {
  //   console.log("created");
  //   this.fetchUserList(this.searchText);
  // },
  watch: {
    searchText: {
      handler: "fetchUserList",
      immediate: true
    }
  },
  methods: {
    fetchUserList(value) {
      let rs = getProducts(value);
      this.lists = rs;
    }
  }
};
</script>
