<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-img :src="adv"></b-img>
      <div id="wrapper">
        <h1 id="heading">注册</h1>
        <span id="subheading">已有账号？前往<a href="/login">登录</a> </span>
        <div id="inputs">
          <b-input
              placeholder="邮箱"
              id="email"
              v-model="email"
          ></b-input>
          <b-input
              placeholder="密码"
              type="password"
              v-model="password"
              @keyup.enter="login()"
          ></b-input>
          <b-input
              placeholder="用户名"
              id="nickname"
              v-model="nickname"
              style="margin-top: 10px"
          ></b-input>
          <b-input
              placeholder="自我介绍"
              id="intro"
              v-model="intro"
              style="margin-top: 10px"
          ></b-input>
          <b-button id="login_button" variant="danger" @click="signup()">
            <strong v-if="email === '' || email === ''"
            >填写用户信息！</strong
            >
            <strong v-else>以 {{ email }} 的身份注册</strong>
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
  name: "Signup",
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
      nickname: "",
      intro: ""
    };
  },
  methods: {
    signup() {
      if (this.nickname.length === 0) this.nickname = this.email;
      this.axios
          .post(common.Api("signup"), {
            email: this.email,
            password: this.password,
            nickname: this.nickname,
            intro: this.intro
          })
          .then((res) => {
            this.msg = res.data.status === "OK" ? "注册成功" : "注册失败";
            this.alert_show = true;
            if (res.data.status === "OK") {
              setTimeout(() => this.$router.push('/login'), 1000);
            }
          })
          .catch((err) => console.log(err));
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px)
}

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
  text-align: center
}

#subheading {
  display: block;
  text-align: center
}

#email {
  margin-bottom: 10px
}
</style>