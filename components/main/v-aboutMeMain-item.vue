<template>
  <div class="v-aboutMeMain-item">
    <div class="v-aboutMeMain-item-img">
      <div
        class="v-aboutMeMain-item-main"
        @mouseover="mouseEnter"
        @mouseleave="mouseLeave"
        :style="styleRamk"
      >
        <img 
        :src="require('@/assets/images/' + about_item.img)" 
        alt 
        srcset 
        
        />
      </div>
    </div>
    <div class="v-aboutMeMain-item-content">
      <p>{{about_item.text1}}</p>
      <p>{{about_item.text2}}</p>

            <div class="aboutLinear"
            v-show="showLineAbout"
            >
              <div 
              class="aboutLinear-item"
              :style="styleShowLinaeAbout"
              
              >
              </div>
            </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "v-aboutMeMain-item",
  props: {
    about_item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      styleRamk: null,
      showLineAbout : false,
      styleShowLinaeAbout : null
    };
  },
  methods: {
    mouseEnter() {
      this.styleRamk = `border: 2px solid white`,
      this.styleShowLinaeAbout = `background: linear-gradient(90deg, rgba(143,143,143,1) 0%, rgba(193,245,194,0.7707457983193278) 40%, rgba(131,254,141,0.7371323529411764) 100%);`,
      this.showLineAbout = true
    },
    mouseLeave() {
      this.styleRamk = `border: 2px solid #07cb79`,
      this.styleShowLinaeAbout = `transition : width 2s, width : 0%`,
      this.showLineAbout = false
    }
  }
};
</script>

<style lang="scss">
.v-aboutMeMain-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  min-width: 45%;

  animation: blocFoto 1.5s linear;
  //animation-fill-mode: both;
  transition: 1s;

  position: relative;
  z-index: 1;

  .v-aboutMeMain-item-img {
    border: 1px solid #07cb79;
    width: 60px;
    display: flex;
    border-radius: 5px;
    .v-aboutMeMain-item-main {
      border: 2px solid white;
      transition: 0.5s;
      background-color: #07cb79;
      img {
        height: 100%;
        width: 100%;
        //border: 2px solid rgb(189, 188, 188);
        padding: 5px 7px;
      }
    }
  }
  .v-aboutMeMain-item-content {
    margin-left: 10px;
    p {
      line-height: 25px;
      font-size: 1em;
    }
    .aboutLinear {
      width: 100%;
      height: 80%;
      margin-top: -2px;
      z-index: -1;
      .aboutLinear-item {
          width: 0%;
          height: 1px;
          display: flex;
          justify-content: center;
      }
      &::after {
        content: "";
        width: 0%;
        height: 2px;
        position: relative;
        display: block;
        transition: width .3s ease-in-out;

        animation: showLineAbout 0.5s linear;
        animation-fill-mode: both;
        background: linear-gradient(90deg, rgba(143,143,143,1) 0%, rgba(193,245,194,0.7707457983193278) 40%, rgba(131,254,141,0.7371323529411764) 100%);
      }
    }
  }
}

@keyframes showLineAbout {
  100% {
    width: 100%;
  }
}



@keyframes blocFoto {
  10% {
    opacity: 0.1;
    right: -100%;
  }
  50% {
    opacity: 0.5;
    right: -50%;
  }
  100% {
    opacity: 1;
    right: 0%;
  }
}

.v-aboutMeMain-item:nth-child(1) {
  animation-delay: 0.3s;
}
.v-aboutMeMain-item:nth-child(2) {
  animation-delay: 0.3s;
}
.v-aboutMeMain-item:nth-child(3) {
  animation-delay: 0.5s;
}
.v-aboutMeMain-item:nth-child(4) {
  animation-delay: 0.5s;
}
.v-aboutMeMain-item:nth-child(5) {
  animation-delay: 0.7s;
}
.v-aboutMeMain-item:nth-child(6) {
  animation-delay: 0.7s;
}

@media screen and (max-width: 585px) {
  .v-aboutMeMain-item {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transition: 0.5s;
    .v-aboutMeMain-item-content {
      margin-left: 0px;
    }
  }
}

@media screen and (max-width: 420px) {
  .v-aboutMeMain-item {
    width: 80%;
    flex-direction: row;
    p{
      font-size: 0.8em;
    }
    .v-aboutMeMain-item-img{
      width: 17%;
    }
    .v-aboutMeMain-item-content{
       width: 50%;
    }
  }
  .v-aboutMeMain-item:nth-child(1) {
  animation-delay: 0.2s;
  }
  .v-aboutMeMain-item:nth-child(2) {
    animation-delay: 0.3s;
  }
  .v-aboutMeMain-item:nth-child(3) {
    animation-delay: 0.4s;
  }
  .v-aboutMeMain-item:nth-child(4) {
    animation-delay: 0.5s;
  }
  .v-aboutMeMain-item:nth-child(5) {
    animation-delay: 0.6s;
  }
  .v-aboutMeMain-item:nth-child(6) {
    animation-delay: 0.7s;
  }
}

@media screen and (max-width: 360px) {
  .v-aboutMeMain-item {
    width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .v-aboutMeMain-item {
    .v-aboutMeMain-item-img{
      width: 20%;
    }
    .v-aboutMeMain-item-content{
       width: 70%;
    }
  }
}
</style>