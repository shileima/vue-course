<template>
  <div>
    <h1>store</h1>
    <!-- v-model 把 value  和 inputValue 双向绑定 -->
    <a-input v-model="inputValue" />
    <p>{{ inputValue }}</p>
    <a-show :content="inputValue" />
    <p>vuex state: {{ appName }} | getter: {{ appNameWithVersion }}</p>
    <p>vuex user module: {{ userName }} | user getter: {{ firstLetter }}</p>

  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters } from 'vuex'

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
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    /* 方法二 */
    /* ...mapState(['appName','userName']) */
    /* 方法一 */
    /* appName(){
      return this.$store.state.appName
    },
    userName(){
      return this.$store.state.user.userName
    } */
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
  }
}
</script>
