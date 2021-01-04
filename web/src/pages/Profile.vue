<template>
  <div>
    <Navbar></Navbar>
    <b-container
        style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: calc(100vh - 50px)">
      <b-row>
        <b-img id="avatar" :src="avatar" rounded="circle" alt="Circle image"></b-img>
        <div style="display: flex; flex-direction: column; margin-left: 30px; padding-top: 15px">
          <h3 id="Username">{{ user.username }}</h3>
          <span>{{ user.intro }}</span>
          <div id="Status">
            <a href="" class="status">动态({{ user.update }})</a>
            <a href="" class="status">回复({{ user.comment }})</a>
            <a href="" class="status">赞赏({{ user.r }})</a>
          </div>
        </div>
      </b-row>
      <!--      <div style="margin-top: 20px">-->
      <!--        <div class="row">-->
      <!--          <div class="col-8">-->
      <!--            <img src="https://picsum.photos/300/200/?image=54" alt="" style="position: relative">-->
      <!--          </div>-->
      <!--          <div class="col-4">-->
      <!--            <img src="https://picsum.photos/300/200/?image=54" alt="" style="position: relative">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="row" style="margin-top: 10px">-->
      <!--          <div class="col-4">-->
      <!--            <img src="https://picsum.photos/300/200/?image=54" alt="" style="position: relative">-->
      <!--          </div>-->
      <!--          <div class="col-8">-->
      <!--            <img src="https://picsum.photos/300/200/?image=54" alt="" style="position: relative">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "axios";
import common from "@/common";

export default {
  name: "Profile",
  components: {Navbar},
  data() {
    return {
      avatar: "https://dummyimage.com/128x1:1/",
      user: {username: "Username", intro: "Introduction", update: 12, comment: 12, r: 12},
    }
  },
  mounted() {
    common.checkToken(this, 'login');
    axios
        .post(common.Api("getProfile"), {
          token: localStorage.getItem("login_token")
        }).then((res) => {
      this.user.username = res.data.nickname;
      this.user.intro = res.data.intro;
      this.avatar = res.data.avatar;
    }).catch((err) => {
      console.log(err);
    });
  }
}
</script>

<style scoped>
#avatar {
  height: 128px;
  width: 128px;
}

#Username {
  margin-bottom: 3px;
}

#Status {
  margin-top: 6px;
}

.status {
  color: grey;
  font-weight: bold;
  margin-right: 10px;
}
</style>