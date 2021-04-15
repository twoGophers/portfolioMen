<template>
  <div class="app">
    <vHeader />
    <vMain />
    <vFooter />
  </div>
</template>


<script>
import vHeader from "../components/header/v-header";
import vMain from "../components/main/v-main";
import vFooter from "../components/footer/v-foter";

export default {
  name: "app",
  components: {
    vHeader,
    vMain,
    vFooter
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: white;
  padding: 7px 15px;
  border-radius: 30px;
  //background-color:rgba(0,0,0,.1);
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
