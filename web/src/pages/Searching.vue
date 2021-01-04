<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row" id="SearchBar" ref="SearchBar">
        <b-input type="text" class="col-10" id="SearchInput" placeholder="搜索" v-model="message"/>
        <b-icon-search class="col-2" id="SearchButton" @click="$router.push(message)"></b-icon-search>
      </div>
      <h2 style="margin-bottom: 20px">书籍</h2>
      <ShelfBar></ShelfBar>
      <h2 style="margin-bottom: 20px">词库</h2>
      <ShelfBar></ShelfBar>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ShelfBar from "@/components/ShelfBar";

export default {
  name:'Searching',
  components:{
    Navbar,
    ShelfBar
  },
  data(){
    return{
      message:'',
    }
  },
}
</script>

<style>
#SearchBar {
  border: #666666 1px solid;
  height: 40px;
  border-radius: 100px;
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 50px;
}

#SearchInput {
  height: 40px;
  border: none;
  outline: none;
  padding-left: 30px;
  box-shadow: none;
}

#SearchButton {
  height: 25px;
  margin-top: 7px;
}

</style>