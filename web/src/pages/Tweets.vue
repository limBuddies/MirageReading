<template>
  <div>
    <Navbar></Navbar>
    <div class="container" id="Social" ref="Social">
      <div class="row">
        <div class="col-md-8">
          <h2 class="text-left">动弹</h2>
          <small>热门话题</small>
          <div>
            <b-textarea
              id="meSocial"
              onkeyup="wordStatic(this);"
              maxlength="160"
              placeholder="写上一两句吧"
              style="font-size: 10px; margin-top: 10px; width: 100%; height: 150px"
            ></b-textarea>
            <div class="textarea_counter">
              <span id="num">0</span>/160
              <b-button variant="secondary" @click="addComment()" style="margin-top: 10px"
                >发布动弹</b-button
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <b-carousel class="sub_banner" :interval="4000" controls>
            <a v-for="(banner, i) in sub_banners1" :key="i" :href="banner.url">
              <b-carousel-slide :img-src="banner.img"></b-carousel-slide>
            </a>
          </b-carousel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="username" v-for="(r, i) in username" :key="i">
            <div>
              <b-img
                fluid
                :src="img"
                style="
                  width: 40px;
                  height: 40px;
                  border-radius: 100%;
                  margin: 5px 10px 20px 0px;
                "
              ></b-img>

              <strong id="username" style="display: inline-block">
                {{ r }}
                <br />
                <small>18分钟前 iphone</small>
              </strong>
            </div>
            <div id="user_content">
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong><br /><br />
            </div>
            <div class="icon">
              <b-icon icon="box-arrow-up-right"></b-icon>转发
              <b-icon icon="hand-thumbs-up"></b-icon>赞
              <b-icon icon="chat-left-dots"></b-icon>评论
              <small v-href="">查看详情</small>
              <hr />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <h3>热门动弹</h3>
          <div class="user-hotSocial-item" v-for="(c, ci) in hotusers" :key="ci">
            <div>
              <b-img
                fluid
                :src="img"
                style="
                  width: 40px;
                  height: 40px;
                  border-radius: 100%;
                  margin: 5px 10px 20px 0px;
                "
              ></b-img>
              <strong id="username" style="display: inline-block">
                {{ c }}
                <br />
                <small>18分钟前 iphone</small>
              </strong>
            </div>
            <div id="user_content">
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong>
              <strong>文字内容</strong> <strong>文字内容</strong><br /><br />
            </div>
            <div class="icon">
              <b-icon icon="box-arrow-up-right"></b-icon>转发
              <b-icon icon="hand-thumbs-up"></b-icon>赞
              <b-icon icon="chat-left-dots"></b-icon>评论
              <small v-href="">查看详情</small>
              <small style="float: right">举报</small>
              <b-icon icon="exclamation-circle-fill" style="float: right"></b-icon>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Tweets",
  data() {
    return {
      username: ["usename1", "username2", "username3", "username4"],
      hotusers: ["usename1", "username2"],
      img:
        "https://lh3.googleusercontent.com/proxy/Fzi0EuM9Q1TOOOnNrQMPod_Yd00WNB9CZY7sYxOdbiAp6Lk-41es6RPvB1RB41bg-CDK6jEIuHsJErAjPu4bEXjdPMt01sCI2ncgQuy_YWoB3RtpovMAoF_rpnLuUW78yQOJPF4kTr8",
      sub_banners1: [
        { url: "xxx", img: "https://dummyimage.com/640x640" },
        { url: "xxx", img: "https://dummyimage.com/640x640" },
      ],
    };
  },

  components: { Navbar },
};
</script>

<style scoped>
.textarea_counter {
  float: right;
}
.row {
  margin-top: 60px;
}
</style>
