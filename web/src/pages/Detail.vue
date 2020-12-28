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
              <b-img id="Borrow" src="https://dummyimage.com/210x7:2"/>
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
      bookName: "阿甘正传",
      subTitle: "子标题",
      rating: 3.5,
      price: "￥15.00",
      introduction: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介",
      cover: "https://dummyimage.com/500x5:7"
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
