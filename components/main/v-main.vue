<template>
  <div class="v-main">
    <!-- <p style="position: fixed; top : 10px">{{this.test}}</p>
        <p style="position: fixed; top : 30px">{{this.windowWidth}}</p>
    <p style="position: fixed; top : 50px">{{this.windowHeight}}</p>-->

    <!--Обо мне-->
    <div>
      <vHrLine />
      <vAboutMe />
    </div>

    <!--Скиллы-->
    <!--v-show="showSkill"-->

    <div class="hrLine1" v-show="showSkill">
      <vHrLine1 />
      <vSkill />
    </div>

    <!--Портфолио-->
    <!--v-show="showPortfolio"-->

    <div class="hrLine2" v-show="showPortfolio">
      <vHrLine2 />
      <vSlider />
    </div>
  </div>
</template>

<script>
import vHrLine from "../componentCopy/v-hrLine";
import vHrLine1 from "../componentCopy/v-hrLine1";
import vHrLine2 from "../componentCopy/v-hrLine2";
import vAboutMe from "./v-aboutMe";
import vSkill from "./v-skill";
import vSlider from "../slider/v-slider";

import { eventSlider } from "../../plugins/main";

export default {
  name: "v-main",
  data() {
    return {
      window: null,
      showAbout: false,
      showSkill: false,
      showPortfolio: false,
      test: 0,
      test2: 0,
      windowWidth: 0,
      windowHeight: 0,
      eventSlider: 2
    };
  },
  components: {
    vHrLine,
    vAboutMe,
    vHrLine1,
    vHrLine2,
    vSkill,
    vSlider
  },
  methods: {
    onScroll(event) {
      this.test = document.documentElement.scrollTop;
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;

      if (this.test > 190) {
        this.showSkill = true;
        console.log(this.test);
      } else {
        this.showSkill = false;
      }

      if (this.test > 500) {
        this.showPortfolio = true;
      } else {
        this.showPortfolio = false;
      }

      // if(this.test > 600 && this.windowWidth <= 375) {
      //     this.showSkill = true;
      // } else {
      //     this.showSkill = false;
      // }

      // if(this.test > 900 && this.windowWidth <= 375) {
      //     this.showPortfolio = true;
      // } else {
      //     this.showPortfolio = false;
      // }
    },

    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },

    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    }
  },

  //определение скролла, относительно верха
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    //console.log(this.test2)

    //определение ширины и высоты окна
    this.$nextTick(function() {
      window.addEventListener("resize", this.onScroll);
      // window.addEventListener('resize', this.getWindowHeight);

      //Init
      this.onScroll();
      // this.getWindowHeight()
    });
  },
  //определение скролла
  destroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  //определение ширины и высоты окна
  beforeDestroy() {
    window.removeEventListener("resize", this.onScroll);
    //window.removeEventListener('resize', this.getWindowHeight);
  }
};
</script>

<style lang="scss">
.v-main {
  display: flex;
  flex-direction: column;
  transition: 1s;
  margin-bottom: 50px;
}
</style>