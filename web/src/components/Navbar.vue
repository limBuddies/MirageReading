<template>
  <div>
    <b-navbar type="light" variant="light" id="Nav">
      <b-navbar-brand href="/">
<!--        <b-img id="Logo" src="https://dummyimage.com/64x1:1"/>-->
        <b-img id="Logo" :src="logoImg"/>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
<!--        <b-nav-item href="/bookshelf">书架</b-nav-item>-->
<!--        <b-nav-item href="/detail">词库</b-nav-item>-->
        <b-nav-item href="/tweets">动弹</b-nav-item>
        <b-nav-item href="/profile">我的</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import common from "@/common";

export default {
  name: "Navbar",
  data() {
    return {
      logoImg: common.kLogoDark
    }
  }
};
</script>

<style scoped>

* {
  user-select: none;
}

#Nav {
  padding: 0 15px 2px;
  border-bottom: lightgray solid 1px;
}

#Logo {
  height: 30px;
}
</style>