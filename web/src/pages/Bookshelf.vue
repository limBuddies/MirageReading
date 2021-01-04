<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-row id="Header">
        <h2 class="col-6" id="Title">我的书架</h2>
        <b-form-select class="ml-auto" id="Selector" v-model="sortByVal" :options="sortBy"></b-form-select>
      </b-row>
      <ShelfBar></ShelfBar>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import ShelfBar from "@/components/ShelfBar";
import common from "@/common";

export default {
  name: "Bookshelf",
  data() {
    return {
      sortByVal: 0,
      sortBy: [
        {value: 0, text: "最近阅读"},
        {value: 1, text: "最新加入"},
        {value: 2, text: "最多进度"},
      ]
    }
  },
  components: {
    Navbar,
    ShelfBar
  },
  mounted() {
    common.checkToken(this, 'login');
  }
}
</script>

<style scoped>

* {
  user-select: none;
}

#Header {
  margin-top: 30px;
  margin-bottom: 50px;
  padding-right: 20px;
}

#Title {
  display: inline-block;
}

#Selector {
  margin-left: 20px;
  border: none;
  direction: rtl;
  width: 120px;
}

#Selector:focus {
  border: none;
  box-shadow: none;
}
</style>