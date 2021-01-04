<template>
  <div class="row">
    <div class="col-lg-9 col-sm-12" id="BookSuggest">
      <div v-for="(suggest,i) in suggests" :key="i" class="book_suggestion">
        <div class="row suggest_title">
          {{ suggest.name }}
        </div>
        <div class="row">
          <div v-for="(book,i) in suggest.books" :key="i" class="col-2">
            <img :src="book.img" alt="" class="book_img" @click="$router.push(book.url)">
          </div>
        </div>
        <div class="row sm_link">
          <a :href="suggest.more">查看更多</a>
        </div>
      </div>
    </div>

    <div class="col-md-3 d-none d-lg-block" id="CollectionSuggest">
      <p class="suggest_title">词库推荐</p>
      <div class="collection row" v-for="(list,i) in lists" :key="i" @click="$router.push(list.url)">
        <div class="card">
          <div class="collection_title">
            {{ list.name }}
          </div>
          <div class="collection_usage">
            {{ list.times }}人正在背
          </div>
          <div class="collection_amount">
            共有{{ list.words }}词
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuggestBar",
  data() {
    return {
      suggests: [
        {
          name: "每日推荐", more: "", books: [
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
          ],
        },
        {
          name: "近期飙升榜", more: "", books: [
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
          ],
        },
        {
          name: "经典文学", more: "", books: [
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
            {url: "detail", img: "https://mirage-reading.oss-cn-guangzhou.aliyuncs.com/f3f49110eb0eb7c828d45104671f566f.webp"},
          ],
        }
      ],
      lists: [
        {name: "词汇表", words: 2000, times: 1500, url: ""},
      ]
    }
  }
}
</script>

<style scoped>

* {
  user-select: none;
}

#BookSuggest {
  padding: 0 30px 0 0;
}

.book_suggestion {
  margin-bottom: 20px;
}

.suggest_title {
  width: 200px;
  border-left: black solid 1px;
  border-bottom: #e5e5e5 solid 1px;
  margin-left: 0;
  margin-bottom: 20px;
  margin-top: 10px;
  padding-bottom: 5px;
  padding-left: 6px;
}

.book_img {
  width: 100%;
}

.sm_link {
  font-size: 15px;
  margin-left: 0;
  margin-top: 8px;
  padding-bottom: 5px;
  border-bottom: lightgray solid 1px;
}

#CollectionSuggest {
  padding: 0 20px 0 0;
}

.collection {
  margin: 0;
}

.card {
  width: 275px;
  margin-top: 10px;
  padding: 10px;
}

.collection_title {
  font-size: 18px;
  font-weight: bold;
  width: 160px;
}

.collection_usage {
  width: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  bottom: auto;
  right: 5px;
}
</style>