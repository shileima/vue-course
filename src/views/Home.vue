<template>
  <div class="home">
    <button @click="handleClick('back')">上一页</button>
    <button @click="handleClick('push')">push to /parent</button>
    <button @click="handleClick('replace')">replace to /about</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type){
      if(type === 'back') this.$router.go(-1)
      // else if(type === 'push') this.$router.push('/parent')
      else if(type === 'push') {
        const name = 'seanma'
        this.$router.push({
          // name: 'argu',
          // params: {
          //   name: 'loading'
          // }
          path: `/argu/${name}`
          // query: {
          //   name: 'loading'
          // }
        })
      }else if(type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
      console.log(this);
    }
  }
}
</script>
