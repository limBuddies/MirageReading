<template>
  <div>
    <Navbar></Navbar>
    <b-container
        style="display: flex; align-items: center; justify-content: center; height: calc(100vh - 80px)">
      <b-img :src="adv"></b-img>
      <div id="wrapper">
        <h1 id="heading">登录</h1>
        <span id="subHeading">没有账号？前往<a href="/signup">注册</a></span>
        <div id="inputs">
          <b-input
              placeholder="邮箱"
              id="email"
              type="email"
              v-model="email"
          ></b-input>
          <b-input
              placeholder="密码"
              type="password"
              v-model="password"
              @keyup.enter="login()"
          ></b-input>
          <b-button id="login_button" variant="danger" @click="login()">
            <strong v-if="email === '' || password === ''"
            >填写用户信息！</strong
            >
            <strong v-else>以 {{ email }} 的身份登录</strong>
          </b-button>
          <b-alert variant="secondary" id="alert" v-model="alert_show" style="text-align: center">{{ msg }}</b-alert>
        </div>
      </div>
      <div id="BackBar"/>
    </b-container>
  </div>
</template>

<script>
import common from "../common";
import Navbar from "../components/Navbar";

export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      // adv: "https://dummyimage.com/600x1.5:1",
      adv: common.kLogoDark,
      email: "",
      password: "",
      msg: "",
      alert_show: false,
    };
  },
  methods: {
    login() {
      this.axios
          .post(common.Api("login"), {
            email: this.email,
            password: this.password
          })
          .then((res) => {
            this.msg = res.data.status === "OK" ? "登录成功" : "登录失败";
            if (res.data.status === "OK") setTimeout(() => this.$router.push('profile'), 1000);
            this.alert_show = true;
            if (res.data.status === "OK") {
              localStorage.setItem("login_token", res.data.token);
              localStorage.setItem("login_user", res.data.username);
              this.$router.push("/");
            }
          })
          .catch((err) => console.log(err));
    }
  }
};
</script>

<style scoped>

#BackBar {
  width: 100vw;
  height: 600px;
  position: fixed;
  background-color: lightgray;
  z-index: -1;
}

#wrapper {
  padding: 40px;
  background: white;
  min-width: 400px;
  margin-left: 150px;
}

#inputs {
  margin-top: 30px;
}

#login_button {
  margin-top: 20px;
  margin-left: 10%;
  width: 80%;
}

#alert {
  margin-top: 10px;
  width: 50%;
  margin-left: 25%;
  align-content: center;
}

#heading {
  text-align: center;
}

#subHeading {
  display: block;
  text-align: center;
}

#email {
  margin-bottom: 10px
}
</style>