<template functional>
  <div>
    <p
      v-for="(item,index) in props.itemLists"
      :key="`item_${index}`"
      @click="props.itemClick"
    >{{item}}</p>
  </div>
</template>
