<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row top_body">
        <b-carousel
            class="col-7"
            id="main_banner"
            :interval="4000"
            controls
            indicators
        >
          <a v-for="(banner,i) in main_banners" :key="i" :href= "banner.url">
            <b-carousel-slide :img-src="banner.img"></b-carousel-slide>
          </a>
        </b-carousel>
        <div class="col-5">
          <div class="row searching">
            <!--              此处放置搜索栏-->
            <b-input type="text" class="col-10 search" placeholder="搜索" v-bind="message"/>
            <b-icon icon="search" class="col-2 searchButton" @click="jump(message)"></b-icon>
          </div>
          <div class="row" style="position: relative">
            <!--              此处放置静态推荐-->
            <div class="advertise">
              <img :src="advertise1.img" alt="" class="advertise-img1" @click="jump(advertise1.url)">
            </div>
            <!--              此处放置动态推荐-->
            <b-carousel
                class="sub_banner"
                :interval="4000"
                controls
                background-color="#ababab"
            >
              <a v-for="(banner,i) in sub_banners1" :key="i" :href= "banner.url">
                <b-carousel-slide :img-src="banner.img"></b-carousel-slide>
              </a>
            </b-carousel>
          </div>
          <div class="row" style="position: relative">
            <!--              此处放置动态推荐-->
            <b-carousel
                class="sub_banner"
                :interval="4000"
                controls
                background-color="#ababab"
            >
              <a v-for="(banner,i) in sub_banners2" :key="i" :href= "banner.url">
                <b-carousel-slide :img-src="banner.img"></b-carousel-slide>
              </a>
            </b-carousel>
            <!--              此处放置静态推荐-->
            <div class="advertise">
              <img :src="advertise2.img" alt="" class="advertise-img2" @click="jump(advertise2.url)">
            </div>
          </div>
        </div>
      </div>
      <div class="row down_body">
        <div class="col-9">
          <!--            此处放置每日书籍推荐-->
          <div v-for="(suggest,i) in suggests" :key="i">
            <div class="row suggestTitle">
              {{suggest.name}}
            </div>
            <div class="row BookList">
              <div v-for="(book,i) in daily" :key="i" class="col-2">
                <img :src="book.img" alt="" class="bookImg" @click="jump(book.url)">
              </div>
            </div>
            <div class="row smLink">
              <a :href="suggest.more">查看更多</a>
            </div>
            <hr>
          </div>
        </div>
        <div class="col-3">
          <!--          此处放置词库推荐-->
          <p class="suggestTitle">词库推荐</p>
          <div class="row">
            <div class="vocabulary" v-for="(list,i) in lists" :key="i" @click="jump(list.url)">
              <div class="card">
                <div class="card-title">
                  {{ list.name }}
                </div>
                <div class="card-content0">
                  {{ list.times }}人正在背
                </div>
                <div class="card-content1">
                  共有{{ list.words }}词
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Home1",
  components: {
    Navbar,
  },
  data() {
    return {
      daily: [
        {url:"xxx", img: "https://i.picsum.photos/id/522/357/500.jpg?hmac=xlO8ozFL08KLH1bdb4o16kdYCU8W5YZkHG7saE4xXjQ"},
        {url:"xxx", img: "https://i.picsum.photos/id/522/357/500.jpg?hmac=xlO8ozFL08KLH1bdb4o16kdYCU8W5YZkHG7saE4xXjQ"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"}
      ],
      rankings: [
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"}
      ],
      information: [
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"},
        {url:"xxx", img: "https://images-cn.ssl-images-amazon.cn/images/I/41E+h0O-N2L.jpg"}
      ],
      lists: [
        {name: "xxx词汇表", words: 2000, times: 1500, url:"xxx"},
        {name: "abc词汇表", words: 2500, times: 1700, url:"xxx"},
        {name: "xxxxxxxxxxxxxxxx词汇表", words: 3000, times: 2000, url:"xxx"}
      ],
      message: "",
      sub_banners1:[
        {url:"xxx", img:"https://dummyimage.com/570x2:1"},
        {url:"xxx", img:"https://dummyimage.com/570x2:1"},
        {url:"xxx", img:"https://dummyimage.com/570x2:1"},
        {url:"xxx", img:"https://dummyimage.com/570x2:1"},
        {url:"xxx", img:"https://dummyimage.com/570x2:1"},
      ],
      sub_banners2:[
        {url:"xxx", img:"https://dummyimage.com/570x2:1"},
        {url:"xxx", img:"https://dummyimage.com/570x2:1"},
        {url:"xxx", img:"https://dummyimage.com/570x2:1"},
        {url:"xxx", img:"https://dummyimage.com/570x2:1"},
        {url:"xxx", img:"https://dummyimage.com/570x2:1"},
      ],
      main_banners:[
        {url:"about", img:"https://dummyimage.com/1024x16:10/"},
        {url:"about", img:"https://dummyimage.com/1024x16:10/"},
        {url:"about", img:"https://dummyimage.com/1024x16:10/"},
        {url:"about", img:"https://dummyimage.com/1024x16:10/"},
        {url:"about", img:"https://dummyimage.com/1024x16:10/"},
        {url:"about", img:"https://dummyimage.com/1024x16:10/"}
      ],
      suggests:[
        {name:"每日推荐", more:"xxx"},
        {name:"xx榜单推荐", more:"xxx"},
        {name:"国际咨询推荐", more:"xxx"}
      ],
      advertise1:{img:"https://dummyimage.com/150x4:4/", url:"xxx"},
      advertise2:{img:"https://dummyimage.com/150x4:4/", url:"xxx"},
    }
  },
  methods: {
    jump: function (url) {
      this.$router.push(url)
    }
  },
  mounted() {
    console.log(document.body.clientWidth)
  }
};
</script>

<style scoped>

* {
  user-select: none;
}

#main_banner {

}

.top_body {
  margin-bottom: 20px;
  margin-top: 20px;
}

.searching {
  border: #666666 1px solid;
  height: 40px;
  border-radius: 100px;
  margin: 5px;
  overflow: hidden;
  /*border: none;*/
}

.search {
  height: 40px;
  border: none;
  outline: none;
  padding-left: 30px;
}

.search:focus{
  box-shadow: none;
}

.searchButton {
  height: 25px;
  margin-top: 5px;
}

.advertise {
  position: relative;
  width: 34%;
}

.sub_banner {
  position: relative;
  width: 66%;
  margin-top: 17px;
}

.suggestTitle {
  border-left-color: #666666;
  border-left-style: solid;
  border-left-width: 3px;
  margin-left: 0;
  margin-bottom: 20px;
  margin-top: 10px;
  padding-left: 6px;
}

.bookImg {
  height: 175px;
  width: 125px;
}

.smLink {
  font-size: 10px;
  margin-left: 10px;
  margin-top: 3px;
  margin-bottom: 3px;
}

.vocabulary {
  margin-left: 15px;
}

.card {
  width: 275px;
  margin-top: 10px;
  padding:5px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  width: 160px;
}

.card-content0{
  width: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  bottom: auto;
  right: 5px;
}

.card-content1{

}

.advertise-img1{
  margin-top: 20px;
}

.advertise-img2{
  margin-top: 20px;
  margin-left: 10px;
}
</style>