<template>
  <div>
    <h1>store</h1>
    
    <!-- vuex 全局属性getter setter 双向绑定 -->
    <p><a-input v-model="stateGetValue" />{{ stateGetValue }}</p>
    <!-- vuex 事件驱动双向绑定 -->
    <p><a-input :value="stateValue" @input="handleStateValueChange" />{{ stateValue }}</p>
    <!-- v-model 把 value  和 inputValue 双向绑定 -->
    <p><a-input v-model="inputValue" />{{ inputValue }}</p>
    <a-show :content="inputValue" />
    <p>vuex state: {{ appName }}?{{ appVersion }} | getter: {{ appNameWithVersion }}</p>
    <p>username in module: {{ userName }} | user getter: {{ firstLetter }}</p>
    <button @click="changeAppname">mutation click</button>
    <button @click="changeUsername">mutation username</button>
    <button @click="handleActions">handleActions updateUsername</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>

  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

/* import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user') */

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  mounted(){
    console.log(this.$store);
  },
  computed: {
    /* 有命名空间写法 */
    /* ...mapState('user',{
      userName: state => state.userName
    }) */
    /* ...mapState({
      userName: state => state.user.userName
    }) */
    /* 方法三 */
    ...mapState({
      //appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : [],
      stateValue: state => state.stateValue
    }),
    stateGetValue: {
      get () {
        return this.$store.state.stateGetValue
      },
      set (val) {
        this.SET_GET_VALUE(val)
      }
    },
    /* 方法二 */
    /* ...mapState(['appName','userName']) */
    /* 方法一 */
    /* appName(){
      return this.$store.state.appName
    },
    userName(){
      return this.$store.state.user.userName
    } */
    appName(){
      return this.$store.state.appName
    },
    // appVersion(){
    //   return this.$store.state.appVersion
    // },
    appNameWithVersion(){
      return this.$store.getters.appNameWithVersion
    },
    ...mapGetters([
      'firstLetter'
    ])
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    ...mapMutations(['SET_APP_VERSION','SET_APP_NAME','SET_USER_NAME', 'SET_STATE_VALUE','SET_GET_VALUE']),
    ...mapActions(['updateAppname']),
    registerModule () {
      // this.$store.registerModule('todo', {
      //   state: {
      //     todoList: [
      //       'learn mutations',
      //       'learn actions'
      //     ]
      //   }
      // })
      // 给子模块 user 注册 todo 数据
      this.$store.registerModule(['user','todo'], {
        state: {
          todoList: [
            '1',
            '2'
          ]
        }
      })
    },
    handleActions(){
      this.updateAppname()
      // this.$store.dispatch('updateAppname')
    },
    changeAppname(){
      // 方法一、
      // this.$store.commit('SET_APP_NAME', 'new app name')

      // 方法二、
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   value: 'new name'
      // })
      // this.$store.commit('SET_APP_VERSION')

      // 方法三、
      this.SET_APP_VERSION('new name')
      this.SET_APP_VERSION()
    },
    changeUsername(){
      this.SET_USER_NAME('vue-new-username')
      // this.$store.state.user.userName = 'hahaha'
    },
    handleStateValueChange(val){
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>
