<template>
  <div class="app">
    <div class="loading">
      <vLoading />
    </div>
    <div v-show="showMain" class="mainIndex">
      <vHeader />
      <vMain />
      <vFooter />
    </div>

  </div>
</template>


<script>
import vLoading from "../components/loading/loading";
import vHeader from "../components/header/v-header";
import vMain from "../components/main/v-main";
import vFooter from "../components/footer/v-foter";

export default {
  name: "app",
  components: {
    vLoading,
    vHeader,
    vMain,
    vFooter
  },
  data() {
    return {
      showMain : false
    };
  },
  methods: {
    showLoading () {
      this.showMain = true
    }
  },
  mounted() {
    setTimeout(() => this.showLoading(), 1200)
  },
};
</script>

<style >
li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: white;
  padding: 7px 15px;
  border-radius: 30px;
  background-color:rgba(0,0,0,.1);
  border: 1px solid #07cb79;
}
a:hover {
  z-index: 5;
  transition: 0.5s;
  background: #07cb79;
  opacity: 0.9;
  color: white;
}
a,
p,
span {
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
}
p {
  color: #58666e;
}
body {
  margin: 0;
  padding: 0;
}
.app {
  width: 100%;
}

</style>
