<template>
  <div class="v-aboutMe">
    <div class="fotoUser">
      <div class="fotoUser-item">
        <img
          :src="require('@/assets/images/70W4D3xv4pA.jpg')"
          alt
          srcset
          @mouseover="mouseEnter"
          @mouseleave="mouseLeave"
          :style="styleRamk"
        />
      </div>
      <div class="fotoUser-name">
        <h4 @mouseover="mouseEnter" @mouseleave="mouseLeave" :style="styleRamk1">Web programmer</h4>
      </div>
    </div>

    <div class="infoUser">
      <vAboutMeMain />
    </div>
  </div>
</template>

<script>
import vAboutMeMain from "./v-aboutMeMain";

export default {
  name: "v-aboutMe",
  data() {
    return {
      styleRamk: null,
      styleRamk1: null
    };
  },
  components: {
    vAboutMeMain
  },
  methods: {
    mouseEnter() {
      (this.styleRamk = "border : 3px solid #07cb79"), `transition-delay: 3s;`;
      (this.styleRamk1 = `color : #07cb79`), `transition-delay: 3s;`;
    },
    mouseLeave() {
      (this.styleRamk = "border : 3px solid white"), `transition-delay: 3s;`;
      (this.styleRamk1 = `color : rgb(92, 91, 91)`), `transition-delay: 3s;`;
    }
  }
};
</script>

<style lang="scss">
.v-aboutMe {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: 0.5s;
  .fotoUser {
    width: 20%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    padding-left: 3%;
    padding-right: 3%;
    .fotoUser-item {
      border: 1px solid #07cb79;
      width: 100%;
      background: white;
      transition: 0.5s ease;
      display: flex;

      position: relative;
      animation: fotoUser 1s linear;

      img {
        width: 100%;
        height: 100%;
        border: 3px solid white;
        transition: 0.5s ease;
      }
    }
    @keyframes fotoUser {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    .fotoUser-name {
      margin-top: 10%;
      display: flex;
      justify-content: center;
      transition: 0.5s ease;
      h4 {
        color: rgb(92, 91, 91);
        transition: 0.5s ease;
      }
    }
  }
  .infoUser {
    width: 70%;
    padding-left: 5%;
  }
}

@media screen and (max-width: 700px) {
  .v-aboutMe {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .fotoUser {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      .fotoUser-item {
        width: 90%;
        img {
          width: 100%;
        }
      }
    }
    .infoUser {
      width: 90%;
      margin-top: 3%;
    }
  }
}

@media screen and (max-width: 585px) {
  .v-aboutMe {
    .fotoUser {
      width: 40%;
    }
    .infoUser {
      width: 100%;
      padding-left: 0%;
    }
  }
}

@media screen and (max-width: 420px) {
  .v-aboutMe {
    .fotoUser {
      width: 60%;
      .fotoUser-name {
        width: 100%;
      }
      .fotoUser-item {
        width: 65%;
      }
    }
    .infoUser {
      width: 100%;
      padding-left: 0%;
    }
  }
}
</style>