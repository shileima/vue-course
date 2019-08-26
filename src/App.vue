<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name:'about'}">About</router-link> |
      <router-link :to="{name:'store'}">Store</router-link>
    </div>
    <!-- <transition name="routerv">
      <router-view key="default"/>
    </transition> -->
    <transition-group :name="routeTransition">
      <router-view key="default"/>
      <router-view key="email" name="email" />
      <router-view key="tel" name="tel" />
    </transition-group>


  </div>
</template>
<script>
export default {
  data() {
    return {
      routeTransition: ''
    }
  },
  watch: {
    '$route' (to){
      console.log(to)
      to.query && to.query.transitionName && (this.routeTransition = to.query.transitionName)
    }
  }
}
</script>
<style lang="less">
.routerv-enter {
  opacity: 0;
}
.routerv-enter-active {
  transition: opacity 1s ease
}
.routerv-enter-to {
  opacity: 1;
}
.routerv-leave {
  opacity: 1;
}
.routerv-leave-active {
  transition: opacity 1s ease
}
.routerv-leave-to {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
