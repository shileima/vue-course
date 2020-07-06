<template>
  <div id="app">
    <Spin fix v-if="showLoading">加载中...</Spin>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link :to="{name:'login'}">login</router-link>|
      <router-link :to="{name:'profile'}">profile</router-link>|
      <router-link :to="{name:'store'}">store</router-link>|
      <router-link :to="{name:'parent'}">parent</router-link>|
      <router-link :to="{name:'table'}">table</router-link>|
      <router-link :to="{name:'message'}">message</router-link>|
      <router-link :to="{name:'mixin'}">mixin</router-link>|
      <router-link :to="{name:'prop'}">prop</router-link>|
      <router-link :to="{name:'jsx'}">jsx</router-link>|
      <Button @click="handleLogout">退出</Button>
    </div>
    <!-- <transition name="routerv">
      <router-view key="default"/>
    </transition>-->
    <transition-group :name="routeTransition">
      <router-view key="default" />
      <router-view key="email" name="email" />
      <router-view key="tel" name="tel" />
    </transition-group>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      routeTransition: ''
      // showLoading: this.$store.state.isLoading // data 内数据变化不刷新页面
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    showLoading () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.logout()
      this.$Message.success('退出成功')
      this.$router.push({ name: 'login' })
    }
  },
  watch: {
    $route (to) {
      console.log(to)
      to.query &&
        to.query.transitionName &&
        (this.routeTransition = to.query.transitionName)
    }
  }
}
</script>
<style lang="less">
.routerv-enter {
  opacity: 0;
}
.routerv-enter-active {
  transition: opacity 1s ease;
}
.routerv-enter-to {
  opacity: 1;
}
.routerv-leave {
  opacity: 1;
}
.routerv-leave-active {
  transition: opacity 1s ease;
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
