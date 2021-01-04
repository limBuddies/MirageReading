<template>
  <div>
    <Navbar></Navbar>
    <b-container id="Page" ref="Page">
      <b-row id="BookBar">
        <b-img class="col-md-4 col-lg-3 d-none d-md-block" id="Cover" ref="Cover" fluid :src="cover" alt="cover"/>
        <div class="col-md-8 col-lg-9" id="Info" ref="Info">
          <h2 class="row" id="Title">{{ bookName }}</h2>
          <b-row>
            <div class="col-sm-12 col-md-4" id="Detail">
              <h4 class="row" id="SubTitle">{{ subTitle }}</h4>
              <b-row id="Rating">
                <div v-for="(v,i) in ratingList" :key="i">
                  <b-icon-star-fill v-if="v===1"/>
                  <b-icon-star-half v-if="v===0.5"/>
                  <b-icon-star v-if="v===0"/>
                </div>
              </b-row>
              <b-img id="Borrow" src="https://dummyimage.com/210x7:2" @click="$router.push('read')"/>
              <small class="row" id="Buy" ref="Buy">或以 {{ price }} 购买</small>
            </div>
            <div class="col-1"/>
            <div class="col-md-7 d-none d-lg-block" id="Intro">
              <strong class="row" id="IntroTitle">内容简介</strong>
              <b-row id="IntroContent" v-html="introduction"></b-row>
            </div>
          </b-row>
        </div>
      </b-row>
      <hr>
      <SuggestBar/>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import SuggestBar from "@/components/SuggestBar";

export default {
  name: "Detail",
  data() {
    return {
      bookName: "Great Expectations",
      subTitle: "A study in human weakness and the slow human surrender.",
      rating: 4.5,
      price: "￥15.00",
      introduction: "Great Expectations, by Charles Dickens, is part of the Barnes & Noble Classics series, which offers quality editions at affordable prices to the student and the general reader, including new scholarship, thoughtful design, and pages of carefully crafted extras.",      cover: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"
    };
  },
  computed: {
    ratingList() {
      let r = this.rating;
      const l = [];
      while (r > 0) {
        if (r >= 1) {
          l.push(1);
          r--;
        } else {
          l.push(0.5)
          r = 0;
        }
      }
      while (l.length < 5) l.push(0);
      return l;
    }
  },
  components: {
    Navbar,
    SuggestBar
  },
  methods: {
    fixLayout() {
      const i = this.$refs.Info;
      const c = this.$refs.Cover;
      const b = this.$refs.Buy;
      if (this.$refs.Page.clientWidth > 540) {
        const m = c.offsetTop + c.clientHeight - (b.offsetTop + b.clientHeight);
        i.style.top = m - 110 + "px";
      } else i.style.top = "0px";
      requestAnimationFrame(this.fixLayout);
    }
  },
  mounted() {
    this.fixLayout();
  }
};

</script>

<style scoped>

#BookBar {
  max-height: 300px;
  margin: 20px 20px 6vw 20px;
}

#Info {
  position: relative;
}

#Detail {
  padding-left: 10px;
}

#Title {
  padding-left: 10px;
}

#SubTitle {
  margin-left: 0;
}

#Rating {
  margin: 20px 20px 20px 0;
}

#Buy {
  margin: 5px 0 0;
}

#IntroTitle {
  margin: 0;
}

#IntroContent {
  margin: 5px 0 0 0;
}

</style>
