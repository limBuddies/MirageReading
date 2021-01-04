<template>
  <div>
    <div class="username" v-for="(t, i) in tweets" :key="i">
      <div>
        <b-img
            fluid
            :src="t.avatar"
            style="
                  width: 40px;
                  height: 40px;
                  border-radius: 100%;
                  margin: 5px 10px 20px 0;
                "
            @click="jump()"
        ></b-img>

        <strong class="username" style="display: inline-block" @click="jump()">
          {{ t.creator }}
          <br/>
          <small>18分钟前 iPhone</small>
        </strong>
      </div>
      <div class="user_content">
        <strong>{{ t.content }}</strong>
      </div>
      <div class="icon">
        <a href="#" style="margin-right: 5px">
          <b-icon icon="box-arrow-up-right"></b-icon>
          转发</a>
        <a href="#" style="margin-right: 5px">
          <b-icon icon="hand-thumbs-up"></b-icon>
          赞</a>
        <a href="#" style="margin-right: 5px">
          <b-icon icon="chat-left-dots"></b-icon>
          评论</a>
        <a href="#" style="text-decoration: underline; color: #666666; font-size: 10px">查看详情</a>
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
import common from "@/common";

export default {
  name: "Tweet",
  data() {
    return {
      tweets: [],
    }
  },
  methods: {
    jump: function (url) {
      this.$router.push(url)
    }
  },
  mounted() {
    this.axios
        .post(common.Api('getTweets'))
        .then((res) => {
          this.tweets = res.data.tweets;
        }).catch((err) => {
      console.log(err);
    })
  }
};
</script>