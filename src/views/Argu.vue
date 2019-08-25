<template>
  <div class="home">
    {{ $route.params.name }}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  beforeRouteUpdate (to, from, next){
    // console.log(to.name, from.name)
    // console.log(this); // 有 this

  }
}
</script>
