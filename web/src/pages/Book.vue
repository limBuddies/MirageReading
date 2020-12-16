<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/book.jpeg" />
        </div>
        <div class="col-md-8">
          <div class="row">
            <h2>{{ bookName }}</h2>
            <br />
          </div>
          <div class="row">
            <div class="col-md-6">
              <strong>{{ fubiaoti }}</strong
              ><br />
              <br /><br />
              <div class="comment" style="font-size: 1.5rem">
                  <small>评分:</small>
                <b-icon icon="star-fill" v-if="show"></b-icon>
                <b-icon icon="star-fill" v-if="show"></b-icon>
                <b-icon icon="star-fill" v-if="show"></b-icon>
                <b-icon icon="star-half" v-if="show"></b-icon>
                <b-icon icon="star" v-if="show"></b-icon>
                <br><br>
              </div>
            <div class="buy">
                <p id="buy">{{buy}}</p>
            </div>
            <div>
                <small>或 {{price}}购买</small>
            </div>
              </div>
        
            <div class="col-md-2"></div>
            <div class="col-md-4">
              <strong>{{ information }}</strong
              ><br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga
                deleniti libero enim eaque! Quaerat ipsam cupiditate, non nostrum
                perferendis obcaecati provident dolorem ratione ducimus maxime explicabo
                tenetur dignissimos voluptatibus!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10">
          <strong>相关推荐</strong><br />
          <hr />
          <div class="article-recommend-item" v-for="(r, i) in bookImgs" :key="i"></div>
        </div>

        <div class="col-md-2">
          <strong>相关词库</strong><br />
          <hr />
          <div class="word-recommend-item" v-for="(a, b) in words" :key="b">
            {{ a }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import common from "@/common";
import Navbar from "../components/Navbar";
export default {
  name: "Book",
  data() {
    return {
      bookName: "阿甘正传",
      fubiaoti: "子标题",
      buy:"$0.00 借阅",
      price:"¥15.00",
      information: "内容简介",
      bookImgs: ["img"],
      words: ["弗兰肯斯坦词库", "阿甘正传词库", "高英词库", "英美文学词库"],
      show:true,
    };
  },
  components: {
    Navbar,
  },
};

</script>

<style scoped>
.row {
  margin: 20px;
}
.buy{
    border: 1px solid #000;
}
</style>
