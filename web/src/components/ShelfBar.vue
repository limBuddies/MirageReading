<template>
  <div>
    <div class="row">
      <a class="col-3" v-for="(book,i) in books.slice(0,1)" :key="i" href="">
        <img :src="book.cover" class="cover" id="FrStart" :alt="book.name">
      </a>
      <div class="col-9">
        <div class="row" ref="FrEnd">
          <a class="col-3" v-for="(book,i) in books.slice(1,5)" :key="i" href="">
            <img v-bind:src="book.cover" class="cover" :alt="book.name">
          </a>
        </div>
      </div>
    </div>
    <div class="row" id="LastRows">
      <a class="col-2 LastCovers" v-for="(book,i) in books.slice(5)" :key="i" href="">
        <img v-bind:src="book.cover" class="cover" :alt="book.name">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShelfBar",
  data() {
    return {
      books: [
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
        {name: "书名", cover: "https://dummyimage.com/160x5:7"},
      ]
    }
  },
  methods: {
    fixLayout() {
      const s = document.querySelector("#FrStart");
      const e = this.$refs.FrEnd;
      e.style.marginTop = (s.clientTop + s.clientHeight - e.clientHeight) + "px";
      requestAnimationFrame(this.fixLayout);
    }
  },
  mounted() {
    this.fixLayout();
  }
}
</script>

<style scoped>

* {
  user-select: none;
}

.cover {
  width: 100%;
}

#LastRows {
  margin-bottom: 50px;
}

.LastCovers {
  margin-top: 20px;
}
</style>