<template>
  <div>
    <Navbar></Navbar>
    <b-modal v-model="showHint" id="hint">
      {{ hintText }}
    </b-modal>
    <b-container>
      <b-row>
        <div class="col-2" id="Left" @click="prev()"/>
        <div id="reader" ref="reader" class="col-8"/>
        <div class="col-2" id="Right" @click="next()"/>
      </b-row>
      <b-row>
        <b-sidebar id="SideBar" title="目录" shadow>
          <div class="px-3 py-2">
            <b-list-group id="toc"/>
          </div>
        </b-sidebar>
      </b-row>
    </b-container>
    <b-button id="ToggleTOC" v-b-toggle.SideBar>
      <b-icon-list-ul style="width: 40px; height: 40px;"/>
    </b-button>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Epub from "epubjs";
import common from "@/common";

export default {
  name: "Read",
  components: {Navbar},
  data() {
    return {
      epub: undefined,
      rendition: undefined,
      showHint: false,
      hintText: ""
    }
  },
  methods: {
    prev: function () {
      this.rendition.prev();
    },
    next: function () {
      this.rendition.next();
    },
  },
  mounted() {
    common.checkToken(this, 'login');
    this.epub = Epub("ge.epub");
    const r = this.$refs.reader;
    this.rendition = this.epub.renderTo(r, {
      flow: "auto",
      width: r.clientWidth,
      height: r.clientHeight
    });
    this.rendition.hooks.content.register((content) => {
      content.document.onmouseup = () => {
        const sel = content.document.getSelection().toString();
        if (sel.length > 0) {
          this.showHint = true;
          this.hintText = sel;
        }
      }
    });
    this.rendition.display();

    const rendition = this.rendition;
    this.epub.loaded.navigation.then(function (toc) {
      let table = document.querySelector("#toc");
      let docFrag = document.createDocumentFragment();

      toc.forEach(function (chapter) {
        let content = document.createElement("div");
        content.classList.add("list-group-item");
        content.innerText = chapter.label.replace(/[\r\n]/g, "");
        content.setAttribute("href", chapter.href);
        content.onclick = function () {
          rendition.display(this.getAttribute("href"));
          for (const i of document.querySelectorAll(".list-group-item")) {
            i.classList.remove("active");
          }
          this.classList.add("active");
        };
        docFrag.appendChild(content);
      });
      table.appendChild(docFrag);
    });
  }
}
</script>

<style scoped>
#reader {
  padding: 0;
  border: lightgray solid 1px;
  height: calc(100vh - 80px);
  margin-top: 10px;
}

#ToggleTOC {
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 50px;
}

#Left, #Right {
  margin-top: 10px;
  background: #f1f1f1;
  transition: background ease 0.2s;
}

#Left:hover, #Right:hover {
  background: #e8e8e8;
  transition: background ease 0.2s;
}

</style>