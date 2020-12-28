<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-row id="BannerBar">
        <b-carousel
            class="col-7"
            id="MainBanner"
            :interval="4000"
            controls
            indicators>
          <a v-for="(banner,i) in main_banner" :key="i" :href="banner.url">
            <b-carousel-slide :img-src="banner.img"></b-carousel-slide>
          </a>
        </b-carousel>
        <div class="col-5" id="SubBanners">
          <b-row id="SearchBar" ref="SearchBar">
            <b-input type="text" class="col-10" id="SearchInput" placeholder="搜索" v-bind="message"/>
            <b-icon-search class="col-2" id="SearchButton" @click="this.$router.push(message)"></b-icon-search>
          </b-row>
          <b-row>
            <b-img
                class="col-4 advertise"
                :src="advertise1.img"
                alt=""
                @click="this.$router.push(advertise1.url)"/>
            <b-carousel
                class="col-8 sub_banner"
                :interval="4000"
                controls>
              <a v-for="(banner,i) in sub_banners1" :key="i" :href="banner.url">
                <b-carousel-slide :img-src="banner.img"></b-carousel-slide>
              </a>
            </b-carousel>
          </b-row>
          <b-row
              id="SubBannerII"
              ref="SubBannerII">
            <b-carousel
                class="col-8 sub_banner"
                :interval="4000"
                controls>
              <a v-for="(banner,i) in sub_banners2" :key="i" :href="banner.url">
                <b-carousel-slide :img-src="banner.img"></b-carousel-slide>
              </a>
            </b-carousel>
            <b-img
                class="col-4 advertise"
                :src="advertise2.img"
                alt=""
                @click="this.$router.push(advertise2.url)"/>
          </b-row>
        </div>
      </b-row>
      <SuggestBar/>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import SuggestBar from "@/components/SuggestBar";

export default {
  name: "Home",
  components: {
    Navbar,
    SuggestBar
  },
  data() {
    return {
      main_banner: [
        {url: "about", img: "https://dummyimage.com/1280x16:10/"},
        {url: "about", img: "https://dummyimage.com/1280x16:10/"}
      ],
      sub_banners1: [
        {url: "xxx", img: "https://dummyimage.com/640x2:1"},
        {url: "xxx", img: "https://dummyimage.com/640x2:1"}
      ],
      sub_banners2: [
        {url: "xxx", img: "https://dummyimage.com/640x2:1"},
        {url: "xxx", img: "https://dummyimage.com/640x2:1"}
      ],
      advertise1: {img: "https://dummyimage.com/256x1:1/", url: "xxx"},
      advertise2: {img: "https://dummyimage.com/256x1:1/", url: "xxx"},
      message: "",
    }
  },
  methods: {
    fixLayout() {
      const m = document.getElementById("MainBanner");
      const s = this.$refs.SearchBar;
      const a = this.$refs.SubBannerII;
      const h = (a.offsetTop + a.clientHeight - s.offsetTop);
      m.style.height = h + "px";
      requestAnimationFrame(this.fixLayout);
    }
  },
  mounted() {
    this.fixLayout();
  }
};
</script>

<style scoped>

* {
  user-select: none;
}

#BannerBar {
  margin-bottom: 20px;
  margin-top: 20px;
}

#MainBanner {
  padding: 0;
  overflow: hidden;
}

#SubBanners {
  border-left: white solid 1px;
}

#SearchBar {
  border: #aaaaaa 1px solid;
  height: 40px;
  border-radius: 100px;
  margin: 0 3px 10px 1px;
  overflow: hidden;
}

#SearchInput {
  height: 40px;
  border: none;
  outline: none;
  padding-left: 30px;
}

#SearchInput:focus {
  box-shadow: none;
}

#SearchButton {
  height: 25px;
  margin-top: 7px;
}

.advertise {
  padding: 0;
  border-left: white solid 1px;
}

.sub_banner {
  padding: 0;
  border-left: white solid 1px;
}

#SubBannerII {
  border-top: white solid 1px;
}
</style>