<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row" style="margin-top: 50px">
        <div class="col-md-8">
          <div class="row" style="font-size: 30px">动弹</div>
          <div class="row">热门话题: <a href="#" v-for="(topic,i) in hotTopics" :key="i"
                                    style="margin-left: 10px">{{ topic }}</a></div>
          <div class="row" style="margin-top: 10px">
            <b-form-textarea
                id="meSocial"
                placeholder="在此处发表你的评论"
                rows="8"
                no-resize
                v-model="message"
                style="box-shadow: none; border: #666666 1px solid"
            ></b-form-textarea>
          </div>
          <div class="row" style="align-items: center; margin-top: 20px">
            {{ message.length }}/160
            <b-button variant="secondary" @click="addComment()" style="margin-left: 10px">发布动弹</b-button>
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
      <hr>
      <div class="row" style="margin-top: 50px">
        <div class="col-md-8">
          <Tweet></Tweet>
        </div>
        <div class="col-md-4">
          <h3>热门动弹</h3>
          <Tweet></Tweet>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Tweet from "../components/Tweet"
import common from "@/common";

export default {
  name: "Tweets",
  components: {Navbar, Tweet},
  data() {
    return {
      message: "",
      sub_banners1: [
        {url: "", img: "https://dummyimage.com/640x640"},
        {url: "", img: "https://dummyimage.com/640x640"},
      ],
      hotTopics: ['#每日打卡#', '#今日歌曲推荐#', '#求职招聘#'],
    };
  },
  methods: {
    addComment: function () {
      common.checkToken(this, 'login');
      this.axios
          .post(common.Api('addTweet'), {
            token: localStorage.getItem('login_token'),
            content: this.message
          }).then(() => this.$router.go(0)).catch((err) => console.log(err));
    }
  }
};
</script>

<style scoped>

</style>
