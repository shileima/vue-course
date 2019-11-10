<template>
  <div class="login">
    <Input type="text" v-model="username" placeholder="请输入用户名" style="width:300px" />
    <Button type="primary" @click="handleLogin">登录</Button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    ...mapActions(["toLogin"]),
    handleLogin() {
      this.toLogin(this.username).then(
        res => {
          this.$Message.success("登录成功！");
          this.$router.push("/");
        },
        err => {
          this.$Message.error(err.data);
        }
      );
    }
  }
};
</script>
