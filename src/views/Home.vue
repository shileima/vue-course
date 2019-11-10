<template>
  <div class="home">
    <p>当前用户{{$store.state.username}}</p>
    <b>{{ food }}</b>
    <button @click="handleClick('back')">上一页</button>
    <button @click="handleClick('push')">push to /parent</button>
    <button @click="handleClick('replace')">replace to /about</button>
    <button @click="getInfo" :style="{background:bgColor}">请求数据</button>
    <button @click="getUserData">getUser</button>
    <img id="url" :src="url" />
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getUserInfo, login, getUser } from "@/api/user";
// import axios from "axios";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      url: "",
      bgColor: "#de2d2d"
    };
  },
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  // 路由进来后
  beforeRouteEnter(to, from, next) {
    console.log("7,在被激活的组件调用 beforeRouteEnter");
    // console.log(this === undefined)
    next(vm => {
      // console.log(vm) // vm === 组件的实例
      console.log("12,用创建好的实例调用 beforeRouteEnter 内的 next 回调函数");
    });
    // console.log(from.name)
    next();
  },
  // 失活的组件离开触发
  beforeRouteLeave(to, from, next) {
    // const leave = confirm('do you confirm leaving?')
    // if(leave) next()
    // else next(false)
    next();
  },
  methods: {
    handleClick(type) {
      console.log("click");
      if (type === "back") this.$router.go(-1);
      // else if(type === 'push') this.$router.push('/parent')
      else if (type === "push") {
        console.log("push");
        const name = "seanma";
        this.$router.push({
          // name: 'argu',
          // params: {
          //   name: 'loading'
          // }
          path: `/argu/${name}`
          // query: {
          //   name: 'loading'
          // }
        });
      } else if (type === "replace") {
        this.$router.replace({
          name: "parent"
        });
      }
      // console.log(this);
    },
    getInfo() {
      getUserInfo({ userId: 21 }).then(
        res => {
          console.log("res:", res.data);
          if (res.data[0] !== undefined) {
            this.url = res.data[0].img_base64;
            this.bgColor = res.data[0].color;
          }
        },
        err => {
          console.log(err);
        }
      );
      /* axios.post("http://127.0.0.1:3001/api/getUserInfo").then(res => {
        console.log(res);
      }); */
    },
    getUserData() {
      getUser().then(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
