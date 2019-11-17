<template>
  <div class="login">
    <Input type="text" v-model="username" placeholder="请输入用户名" style="width:200px" />
    <Input type="password" v-model="password" placeholder="请输入密码" style="width:200px" />
    <Button type="primary" @click="handleLogin">登录</Button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import store from "../store";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["toLogin"]),
    handleLogin() {
      this.toLogin({ username: this.username, password: this.password })
        .then(
          res => {
            this.$Message.success("登录成功！");
            this.$router.push({
              name: "home"
            });
          },
          err => {
            this.$Message.error(err);
          }
        )
        .catch(err => {
          console.log(err);
          store.commit("SET_HIDE_LOADING");
        });
    }
  }
};
</script>
