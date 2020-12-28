<template>
  <div>
    <Navbar></Navbar>
    <div class="wrapper">
      <b-container>
        <b-row class="wordCard">
          <div class="col-2"></div>
          <div class="col-8">
            <b-row>
              <h3 class="col-12" style="text-align: center">{{ words.word }}</h3>
            </b-row>
            <b-row style="margin-top: 10px">
              <div class="col-6">
                <b-row class="explanation">
                  <b-button variant="light" class="option">{{ words.explanationI }}</b-button>
                </b-row>
                <b-row class="explanation">
                  <b-button variant="light" class="option">{{ words.explanationII }}</b-button>
                </b-row>
              </div>
              <div class="col-6">
                <b-row class="explanation">
                  <b-button variant="light" class="option">{{ words.explanationIII }}</b-button>
                </b-row>
                <b-row class="explanation">
                  <b-button variant="light" class="option">{{ words.explanationIV }}</b-button>
                </b-row>
              </div>
            </b-row>
          </div>
        </b-row>
        <b-row class="info"><small class="ml-auto">{{ thisWord }}/{{ totalWord }}</small></b-row>
        <b-row id="name"><strong class="ml-auto">{{ name }}</strong></b-row>
        <b-row>
          <b-button variant="light" class="ml-auto feature">换模式(W)</b-button>
          <b-button variant="light" class="feature">生词本(S)</b-button>
          <b-button variant="light" class="feature">上一个(A)</b-button>
          <b-button variant="light" class="feature">下一个(D)</b-button>
          <b-button variant="light" class="feature">退出(Esc)</b-button>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  name: "Recite",
  components: {Navbar},
  data() {
    return {
      words: {word: "abc", explanationI: "A", explanationII: "B", explanationIII: "C", explanationIV: "D"},
      thisWord: 34,
      totalWord: 522,
      name: "弗兰肯斯坦生词",
    }
  },
  methods: {}
}
</script>

<style>
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px)
}

.info{
  margin-top: 20vh;
}

.wordCard{
  padding-top: 15vh;
}

.explanation{
  justify-content: center;
  margin-top: 5px;
}

.option{
  min-width: 15vw;
}

#name {
  margin-bottom: 10px;
}

.feature {
  margin-left: 10px;
}
</style>