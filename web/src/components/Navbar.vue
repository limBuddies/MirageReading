<template>
  <div>
    <b-navbar type="light" variant="light" id="Nav">
      <b-navbar-brand href="#">
        <b-img id="Logo" src="https://dummyimage.com/64x1:1"/>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">书架</b-nav-item>
        <b-nav-item href="/">词库</b-nav-item>
        <b-nav-item href="/NoPage">动弹</b-nav-item>
        <b-nav-item href="/about">我的</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#Nav {
  padding: 0 15px 2px;
  border-bottom: gray solid 1px;
}

#Logo {
  height: 30px;
}
</style>