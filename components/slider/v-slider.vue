<template>
  <div class="example">
    <swiper class="swiper" ref="swiper" :options="swiperOption">
      <swiper-slide
        v-for="item in sliderItem"
        :key="item.id"
        
      >
      <div 
      class="fotoItem"
      @click="itemSlider(item)"
      >
        <img :src="require('@/assets/images/' + item.proectImages)" alt="" srcset="">
      </div>

      </swiper-slide>
      <!-- <swiper-slide>Resize me 2</swiper-slide>
      <swiper-slide>Resize me 3</swiper-slide>
      <swiper-slide>Resize me 4</swiper-slide>
      <swiper-slide>Resize me 5</swiper-slide>
      <swiper-slide>Resize me 6</swiper-slide> -->

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>

    </swiper>

    <div class="showItemSlider">
      <div class="showItemSlider__item"
      >
          <showItemSlider 
          v-for="item in showItemSlider"
          :key="item.id"
          :show_item="item"
          />
      </div>
    </div>


  </div>
</template>

<script src="../package/swiper-bundle.min.js"></script>

<script>

import { Swiper, SwiperSlide, Navigation, Pagination } from 'vue-awesome-swiper'

// import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper'
//import Swiper, { Navigation, Pagination } from 'swiper';

// import 'swiper/swiper-bundle.css';
// import 'swiper/swiper-vars.scss';
import 'swiper/swiper.scss';
import showItemSlider from "./v-showItemSlider"

  export default {
    name : 'swiper-nuxt',

    data() {
      return {
        model: null,
        sliderItem : [
          {
            id : 1, 
            adressUrl : "https://www.youtube.com/embed/HKRkum6dV-E",
            proectImages : "shopMen.png",
            proectPlash: "plansh.png",
            proectMob : "shopMob.png",
            proectName : "Интернет магазин",
            proectInstrumen : "HTML, CSS, SCSS, Bootstrap, Java Script, Vue 2, Vuex, Axios",
            proectBase : "Firebase",
            proectTime : "Срок выполнения : 2.5 недели",
            proectAdaption : "Адаптация под мобильные устройства и планшеты",
            proectAddress : "https://twogophers.github.io/pink-shop/#/",
          },
          {
            id : 2, 
            adressUrl : "https://www.youtube.com/embed/-TEjA00_TC0", 
            proectImages : "stroyMen.png",
            proectPlash: "stroyPlash.png",
            proectMob : "stroyMob.png",
            proectName : "Визитка",
            proectInstrumen : "HTML, CSS, SCSS, Vuetify, Java Script, Vue 2",
            proectBase : "Firebase",
            proectTime : "Срок выполнения : 5 дней",
            proectAdaption : "Адаптация под мобильные устройства и планшеты",
            proectAddress : "https://twogophers.github.io/test-kv/",
          },
          {
            id : 3, 
            adressUrl : "https://www.youtube.com/embed/iK3LppFt2vo", 
            proectImages : "weatherMen.png",
            proectPlash: "weatherPlash.png",
            proectMob : "weatherMob.png",
            proectName : "Сайт погоды",
            proectInstrumen : "HTML, CSS, SCSS, Bootstrap, Java Script, API",
            proectBase : "Firebase",
            proectTime : "Срок выполнения : 2 недели",
            proectAdaption : "Адаптация под мобильные устройства и планшеты",
            proectAddress : "https://twogophers.github.io/weather/index.html",
          },
          {
            id : 4, 
            adressUrl : "https://www.youtube.com/embed/efHXTIBg-5Q", 
            proectImages : "tipografMen.png",
            proectPlash: "tipografPlashpng.png",
            proectMob : "tipografMob.png",
            proectName : "Сайт типографии",
            proectInstrumen : "HTML, CSS, SCSS, Java Script",
            proectBase : "API",
            proectTime : "Срок выполнения : 2 недели",
            proectAdaption : "Адаптация под мобильные устройства и планшеты",
            proectAddress : "https://twogophers.github.io/jurnal-Book/index.html",
          },
          {
            id : 5, 
            adressUrl : "https://www.youtube.com/embed/cP52tOS3sQQ", 
            proectImages : "goroskopMen.png",
            proectPlash: "goroscopPlash.png",
            proectMob : "goroscopMob.png",
            proectName : "Гороскоп",
            proectInstrumen : "HTML, CSS, SCSS, Java Script",
            proectBase : "Нет",
            proectTime : "Срок выполнения : 3 недели",
            proectAdaption : "Адаптация под мобильные устройства и планшеты",
            proectAddress : "https://twogophers.github.io/goroscop/index.html",
          }
        ],
        showItemSlider : [],
        swiperOption: {
          notNextTick: true,

          observer: true,
          observeParents: true,
          slidesPerView: 3,
          spaceBetween: 30,
          direction: 'horizontal',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          on: {
            resize: () => {
              this.$refs.swiper.$swiper.changeDirection(
                window.innerWidth <= 360
                  ? 'vertical'
                  : 'horizontal'
              )
            }
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
      }
    },
    components : {
      Swiper,
      SwiperSlide,
      Navigation,
      Pagination,
      showItemSlider
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
        }
    },

    methods: {
      itemSlider(event) {
        this.showItemSlider = [];
        return this.showItemSlider.push(event);
      }
    },

  }
</script>

<style lang="scss">
// @import 'swiper/swiper-bundle.css';
// @import 'swiper/swiper-vars.scss';
@import 'swiper/swiper.scss';

.example{
  width: 100%;
  .swiper{
    width: 90%;
    .swiper-slide{
      height: 230px;
      margin: 0;
      padding: 0;
      display: flex;
      .fotoItem{
        display: flex;
        width: 100%;
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
    }
    .swiper-button-prev, .swiper-button-next{
        z-index: 1;
        top: 40%;
        padding: 8px 14px;
        border-radius: 50%;
        background: #07cb79;
        opacity: 0.7;
        transition: 0.3s;
        margin: 1%;

        position: absolute;
        border: 1px solid #07cb79;

        background: linear-gradient(-90deg, #07cb79, rgb(27, 230, 182), #07cb79);
        background-size: 500% 100%;
        animation: Gradient 5s ease infinite;
        transition: 0.3s;

        &:hover{
          //background: #0ae68a;
          border: 1px solid #0ae68a;
        }
        &:active{
          background: #0ae68a;
          transform: scale(0.9);
        }

    }
    .swiper-button-next{
      right: 0%;
    }
    .swiper-button-prev::after{
      content: " < ";
      width: 30px;

    }
    .swiper-button-next::before{
      content: " > ";
      width: 30px;
    }
  }
  .showItemSlider{
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    max-height: 140px;

    &__item{
      width: 70%;
    }
  }
}

</style>