<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-row>
        <div class="col-2 col-sm-4 col-md-4"></div>
        <div class="col-8 col-sm-4 col-md-4">
          <h1 style="margin-top: 20vh; text-align: center">404</h1>
        </div>
      </b-row>
      <b-row>
        <div class="col-2"></div>
        <div class="col-8">
          <h5 style="margin-top: 30px; text-align: center">
            没有找到对应页面
          </h5>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "NotFound",
  components: {
    Navbar,
  },
};
</script>

<style scoped>

* {
  user-select: none;
}
</style>