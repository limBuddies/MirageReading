<script>
// 导出图片资源地址
const kLogoClear = require("./assets/logo_clear.png");
const kLogoDark = require("./assets/logo_dark.png");

// 导出API地址
const kApiService = {
  root: "/api",
  login: "/api/login",
  signup: "/api/signup",
  getProfile: "/api/getProfile",
  addTweet: "/api/addTweet",
  getTweets: "/api/getTweets"
};

function Api(api) {
  return kApiService[api];
}

function checkToken(ctx, goto) {
  if (localStorage.getItem('login_token') == null) ctx.$router.push(goto);
  ctx.axios.post("/api/checkToken", {token: localStorage.getItem("login_token")})
      .then((res) => {
        if (res.data.status !== 'OK') {
          localStorage.clear();
          this.$router.push(goto);
        }
      }).catch(() => {
    ctx.$router.push(goto);
  })
}

export default {
  name: "common",
  kLogoClear,
  kLogoDark,
  kApiService,
  Api,
  checkToken
};
</script>