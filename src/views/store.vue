<template>
  <div>
    <h1>store</h1>

    <!-- vuex 全局属性getter setter 双向绑定 -->
    <!-- vuex 事件驱动双向绑定 -->
    <!-- v-model 把 value  和 inputValue 双向绑定 -->
    <!-- <a-input :value="stateValue" @input="handleValueChange" />
    <p>{{ stateValue }}</p>-->
    <!-- setter 实现双向绑定 -->
    <a-input v-model="stateValue" />
    <p>stateValue:{{ stateValue }}</p>

    <a-show :content="inputValue" />
    <p>vuex state: {{ appName }}?{{ appVersion }} | getter: {{ appNameWithVersion }}</p>
    <p>vuex user module: {{ userName }} | user getter: {{ firstLetter }}</p>
    <button @click="changeAppVersion">changeAppVersion</button>
    <button @click="changeUsername">mutation username</button>
    <button @click="handleActions">handleActions updateAppName</button>
    <button @click="registerModule">动态注册模块</button>
    <button @click="changeUserNameDirect">直接修改用户名</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import { log } from 'util'

// import { createNamespacedHelpers } from "vuex";
// const { mapState } = createNamespacedHelpers("user");

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  mounted () {
    console.log(this.$store)
  },
  methods: {
    ...mapMutations([
      'SET_APP_VERSION',
      'SET_APP_NAME',
      'SET_USER_NAME',
      'UPDATE_STATE_VALUE'
    ]),
    ...mapMutations('user', ['SET_USER_NAME']),
    ...mapActions(['updateAppname']),
    registerModule () {
      this.$store.registerModule('todo', {
        state: {
          todoList: ['learn mutations', 'learn actions']
        }
      })
      // 给子模块 user 注册 todo 数据
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: ['1', '2']
        }
      })
    },
    handleActions () {
      this.updateAppname()
      // this.$store.dispatch('updateAppname')
    },
    changeAppVersion () {
      // 方法一、
      // this.$store.commit("SET_APP_NAME", { value: "new app name" });
      // 方法二、
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   value: 'new name'
      // })
      // this.$store.commit('SET_APP_VERSION')
      // 方法三、
      // this.SET_APP_VERSION("new name");
      this.SET_APP_VERSION()
    },
    changeUsername () {
      this.SET_USER_NAME('vue-new-username')
    },
    changeUserNameDirect () {
      this.$store.state.user.userName = 'changed username directly'
    },
    handleValueChange (value) {
      this.UPDATE_STATE_VALUE(value)
    }
  },
  computed: {
    /* 有命名空间写法,对应createNamespacedHelpers */
    // ...mapState({
    //   userName: state => state.user.userName
    // }),
    // ...mapState({
    //   userName: state => state.user.userName
    // }),
    /* 方法三 */
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => (state.todo ? state.todo.todoList : []),
      stateValue: state => state.stateValue
    }),
    // 配合 vuex 双向绑定 setter 实现
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (value) {
        this.UPDATE_STATE_VALUE(value)
      }
    },
    /* 方法二 */
    // ...mapState(["appName", "userName"]),
    /* 方法一 */
    /* appName(){
      return this.$store.state.appName
    },
    userName(){
      return this.$store.state.user.userName
    } */
    appVersion () {
      return this.$store.state.appVersion
    },
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },
    ...mapGetters('user', ['firstLetter'])
  },
  components: {
    AInput,
    AShow
  }
}
</script>
<style lang="less">
button {
  padding: 0 5px;
  margin-right: 10px;
}
</style>
