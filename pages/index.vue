<template>
<div class="app">
  <vHeader />
  <vMain />
  <vFooter />
</div>
</template>


<script>

import vHeader from "../components/header/v-header"
import vMain from "../components/main/v-main"
import vFooter from "../components/footer/v-foter"


export default {
  name: 'app',
  components : {
    vHeader,
    vMain,
    vFooter
  },
  data () {
      return {
        
      };
    },
}
</script>

<style lang="scss">


li {
 list-style-type: none;
}

a{
  text-decoration: none;
  color: white;
  padding: 7px 15px;
  border-radius: 30px;
  //background-color:rgba(0,0,0,.1);
  border: 1px solid #07cb79;
}
a:hover{
    z-index: 5;
    transition: 0.5s;
    background: #07cb79;
    opacity: 0.9;
    color: white;
}
a, p, span {
  font-family:  'Raleway', sans-serif;
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


@media screen and (max-width: 1260px) {
  .v-header .parallaxHeader .header .headerContent .headerContentBtn .showModal .v-modalForm{
    margin-left: 0px;
  }
}

@media screen and (max-width: 880px) {
    .v-header .parallaxHeader .header .headerContent .contactUser .contactUserContainer{
        width: 100%;
    }
}

@media screen and (max-width: 820px) {
    .v-header .parallaxHeader .header .headerTop ul {
        margin-top: 5px;
        transition: 0.5s;
        justify-content: space-between;
    }
      .v-header .parallaxHeader .header .headerContent .headerContentBtn .showModal .v-modalForm{
      width: 60%;
      right:  20%;
    }
    .v-header .parallaxHeader .header .headerContent .v-infoUser {
        width: 100%;
    }
}


// @media screen and (max-width: 670px) {
//     .v-header .parallaxHeader .header .headerTop ul {
//         transition: 0.5s;
//         width: 70%;
//     }
// }


@media screen and (max-width: 470px) {
    .v-header .parallaxHeader .header .headerContent .contactUser .contactUserContainer{
        width: 100%;
    }
    .v-header .parallaxHeader .header .headerContent {
        padding-left: 0px;
    }
    .v-header .parallaxHeader .header .headerContent .headerContentBtn .showModal .v-modalForm{
      width: 80%;
      right: 10%;
    }
}

@media screen and (max-width: 450px){
  .v-header .v-parallax .v-parallax__content .header .headerContent .v-headerContent h4 {
    font-size: 1.7em;
  }
}

@media screen and (max-width: 420px) {
    .v-header .parallaxHeader .header .headerContent .v-infoUser {
        width: 100%;
    }
}

@media screen and (max-width: 390px) {

    .v-header .parallaxHeader .header {
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
    }
    .v-header .parallaxHeader .header .headerContent .v-infoUser {
        padding: 0px;
    }

}

@media screen and (max-width: 360px) { 
      .v-header .parallaxHeader .header .headerContent .headerContentBtn .showModal .v-modalForm{
      width: 90%;
      right: 5%;
    }

}
</style>
