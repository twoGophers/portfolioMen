<template>
  <div class="example">
    <swiper class="swiper" ref="swiper" :options="swiperOption">
      <swiper-slide v-for="item in sliderItem" :key="item.id">
        <div class="fotoItem" @click="itemSlider(item)">
          <img :src="require('@/assets/images/' + item.proectImages)" alt srcset />
        </div>
      </swiper-slide>
      <!-- <swiper-slide>Resize me 2</swiper-slide>
      <swiper-slide>Resize me 3</swiper-slide>
      <swiper-slide>Resize me 4</swiper-slide>
      <swiper-slide>Resize me 5</swiper-slide>
      <swiper-slide>Resize me 6</swiper-slide>-->

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <div class="showItemSlider">
      <div class="showItemSlider__item">
        <showItemSlider v-for="item in showItemSlider" :key="item.id" :show_item="item" />
      </div>
    </div>
  </div>
</template>

<script src="../package/swiper-bundle.min.js"></script>

<script>
import {
  Swiper,
  SwiperSlide,
  Navigation,
  Pagination
} from "vue-awesome-swiper";

// import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper'
//import Swiper, { Navigation, Pagination } from 'swiper';

// import 'swiper/swiper-bundle.css';
// import 'swiper/swiper-vars.scss';
import "swiper/swiper.scss";
import showItemSlider from "./v-showItemSlider";

export default {
  name: "swiper-nuxt",

  data() {
    return {
      model: null,
      sliderItem: [
        {
          id: 0,
          adressUrl: "#",
          proectImages: "renissanseMen.png",
          proectPlash: "rennaisansePlash.png",
          proectMob: "rennaisansePlash.png",
          proectName: "Искусства",
          proectInstrumen: "HTML, CSS, SCSS, Java Script, Vue 2, Vuex, Axios",
          proectBase: "Firebase",
          proectTime: "Срок выполнения : 3 дня",
          proectAdaption: "Адаптация под мобильные устройства и планшеты",
          proectAddress: "https://twogophers.github.io/renaissanceV/#/"
        },
        {
          id: 1,
          adressUrl: "https://www.youtube.com/embed/HKRkum6dV-E",
          proectImages: "shopMen.png",
          proectPlash: "plansh.png",
          proectMob: "shopMob.png",
          proectName: "Интернет магазин",
          proectInstrumen:
            "HTML, CSS, SCSS, Bootstrap, Java Script, Vue 2, Vuex, Axios",
          proectBase: "Firebase",
          proectTime: "Срок выполнения : 2.5 недели",
          proectAdaption: "Адаптация под мобильные устройства и планшеты",
          proectAddress: "https://twogophers.github.io/pink-shop/#/"
        },
        {
          id: 2,
          adressUrl: "https://www.youtube.com/embed/-TEjA00_TC0",
          proectImages: "stroyMen.png",
          proectPlash: "stroyPlash.png",
          proectMob: "stroyMob.png",
          proectName: "Визитка",
          proectInstrumen: "HTML, CSS, SCSS, Vuetify, Java Script, Vue 2",
          proectBase: "Firebase",
          proectTime: "Срок выполнения : 5 дней",
          proectAdaption: "Адаптация под мобильные устройства и планшеты",
          proectAddress: "https://twogophers.github.io/test-kv/"
        },
        {
          id: 3,
          adressUrl: "https://www.youtube.com/embed/iK3LppFt2vo",
          proectImages: "weatherMen.png",
          proectPlash: "weatherPlash.png",
          proectMob: "weatherMob.png",
          proectName: "Сайт погоды",
          proectInstrumen: "HTML, CSS, SCSS, Bootstrap, Java Script, API",
          proectBase: "Firebase",
          proectTime: "Срок выполнения : 2 недели",
          proectAdaption: "Адаптация под мобильные устройства и планшеты",
          proectAddress: "https://twogophers.github.io/weather/index.html"
        },
        {
          id: 4,
          adressUrl: "https://www.youtube.com/embed/efHXTIBg-5Q",
          proectImages: "tipografMen.png",
          proectPlash: "tipografPlashpng.png",
          proectMob: "tipografMob.png",
          proectName: "Сайт типографии",
          proectInstrumen: "HTML, CSS, SCSS, Java Script",
          proectBase: "API",
          proectTime: "Срок выполнения : 2 недели",
          proectAdaption: "Адаптация под мобильные устройства и планшеты",
          proectAddress: "https://twogophers.github.io/jurnal-Book/index.html"
        },
        {
          id: 5,
          adressUrl: "https://www.youtube.com/embed/cP52tOS3sQQ",
          proectImages: "goroskopMen.png",
          proectPlash: "goroscopPlash.png",
          proectMob: "goroscopMob.png",
          proectName: "Гороскоп",
          proectInstrumen: "HTML, CSS, SCSS, Java Script",
          proectBase: "Нет",
          proectTime: "Срок выполнения : 3 недели",
          proectAdaption: "Адаптация под мобильные устройства и планшеты",
          proectAddress: "https://twogophers.github.io/goroscop/index.html"
        }
      ],
      showItemSlider: [],
      swiperOption: {
        notNextTick: true,

        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          resize: () => {
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 120 ? "vertical" : "horizontal"
            );
          }
        },
        breakpoints: {
          150: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1070: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
    Pagination,
    showItemSlider
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },

  methods: {
    itemSlider(event) {
      this.showItemSlider = [];
      return this.showItemSlider.push(event);
    }
  }
};
</script>

<style lang="scss">
// @import 'swiper/swiper-bundle.css';
// @import 'swiper/swiper-vars.scss';
@import "swiper/swiper.scss";

.example {
  width: 100%;

  animation: showSlider 0.8s;
  animation-fill-mode: both;
  animation-delay: 0.8s;
  transition: 0.8s all;

  position: relative;
  .swiper {
    width: 80%;
    .swiper-slide {
      height: 230px;
      margin: 0;
      padding: 0;
      display: flex;
      cursor: pointer;

      position: relative;
      animation: showSlider 0.8s;
      animation-fill-mode: both;
      animation-delay: 0.8s;
      transition: 0.8s all;
      .fotoItem {
        display: flex;
        width: 100%;
        border-radius: 10px;
        position: relative;
        overflow: hidden;

        //Анимация (тень) при  наведении на блок
        &::before {
          position: absolute;
          top: 50%;
          left: 50%;
          //z-index: 2;
          display: block;
          content: "";
          width: 0;
          height: 0;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 100%;
          transform: translate(-50%, -50%);
          opacity: 0;
        }
        &:hover::before {
          animation: circle 0.5s linear;
          animation-fill-mode: forwards;
        }
        &:active::before {
          animation: circleNo 0.2s linear;
          animation-fill-mode: forwards;
        }

        //
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
    }

    .swiper-slide:nth-child(1) {
      animation-delay: 1s;
    }
    .swiper-slide:nth-child(2) {
      animation-delay: 1.1s;
    }
    .swiper-slide:nth-child(3) {
      animation-delay: 1.2s;
    }
    .swiper-slide:nth-child(4) {
      animation-delay: 1.3s;
    }
    .swiper-slide:nth-child(5) {
      animation-delay: 1.4s;
    }

    .swiper-button-prev,
    .swiper-button-next {
      z-index: 1;
      top: 40%;
      padding: 8px 4px;
      border-radius: 50%;
      background: #07cb79;
      opacity: 0.7;
      transition: 0.3s;
      margin: 1%;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      border: 1px solid #07cb79;

      background: linear-gradient(-90deg, #07cb79, rgb(27, 230, 182), #07cb79);
      background-size: 500% 100%;
      animation: Gradient 5s ease infinite;
      transition: 0.3s;

      // &:hover{
      //   //background: #0ae68a;
      //   border: 1px solid #0ae68a;
      // }
      &:active {
        //background: #0ae68a;
        transform: scale(0.9);
      }
    }
    .swiper-button-next {
      right: 0%;
    }
    .swiper-button-prev::after {
      content: " < ";
      color: rgb(214, 253, 243);
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-button-next::before {
      content: " > ";
      color: rgb(214, 253, 243);
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .showItemSlider {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;

    &__item {
      width: 60%;
      display: flex;
      align-items: center;
    }
  }
}

@keyframes showSlider {
  0% {
    top: 50px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}

//Наведение на блок itemSlider
@keyframes circle {
  0% {
    opacity: 0.5;
    background: rgba(139, 216, 109, 0.466);
  }
  40% {
    opacity: 0.7;
    background: rgba(193, 194, 193, 0.329);
  }
  100% {
    width: 200%;
    height: 250%;
    opacity: 1;
  }
}

//Нажатие на блок itemSlider
@keyframes circleNo {
  0% {
    width: 150%;
    height: 200%;
    opacity: 1;
  }
  50% {
    opacity: 0.7;
    background: rgba(193, 194, 193, 0.329);
  }
  100% {
    opacity: 0.5;
    background: rgba(139, 216, 109, 0.466);
  }
}

@media screen and (max-width: 870px) {
  .example .showItemSlider__item {
    width: 80%;
  }
}

@media screen and (max-width: 660px) {
  .example .swiper {
    width: 60%;
  }
}

@media (min-width: 550px) and (max-width: 820px) {
  .example .swiper {
    width: 60%;
  }
}

@media (max-width: 550px) and (min-width: 320px) {
  .example .swiper {
    width: 80%;
  }
}

@media screen and (max-width: 380px) {
  .example .swiper {
    width: 100%;
  }
}

@media screen and (max-width: 1100px) {
  .example .showItemSlider .showItemSlider__item {
    width: 80%;
  }
}

@media screen and (max-width: 820px) {
  .example .showItemSlider .showItemSlider__item {
    width: 90%;
  }
}

@media (min-width: 660px) and (max-width: 720px) {
  .example .showItemSlider .showItemSlider__item {
    width: 100%;
  }
}

@media screen and (max-width: 660px) {
  .example .showItemSlider .showItemSlider__item .v-showItemSlider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .v-showItemSlider_img {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    .v-showItemSlider_content {
      margin-top: 10px;
      width: 70%;
      .btnCon {
        button {
          width: 45%;
        }
      }
    }
  }
}

@media screen and (max-width: 660px) {
  .example
    .showItemSlider
    .showItemSlider__item
    .v-showItemSlider
    .v-showItemSlider_content {
    width: 100%;
    .btnCon {
      button {
        width: 35%;
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .example
    .showItemSlider
    .showItemSlider__item
    .v-showItemSlider
    .v-showItemSlider_img {
    display: none;
  }
  .example .showItemSlider .showItemSlider__item {
    width: 100%;
  }
  p {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 310px) {
  .example
    .showItemSlider
    .showItemSlider__item
    .v-showItemSlider
    .v-showItemSlider_content {
    width: 100%;
    .btnCon {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        width: 45%;
        p {
          padding: 3%;
        }
      }
    }
  }
  .v-showItemSlider_content .content_content .nameSite {
    font-size: 1.3em;
  }
}
</style>