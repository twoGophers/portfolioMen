<template>
  <div class="v-skill">
    <div class="skillMen">
      <ul>
        <li v-for="skil in skill" :key="skil.id">
          <div class="skill-item">
            <div class="skill-img">
              <img :src="require('@/assets/images/' + skil.img)" alt srcset />
            </div>
            <p>{{skil.text}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-skill",
  data() {
    return {
      skill: [
        { id: 1, text: "HTML", img: "html.svg" },
        { id: 2, text: "PUG", img: "pug.png" },
        { id: 3, text: "CSS", img: "css-3.svg" },
        { id: 4, text: "SCSS", img: "scss-3.svg" },
        { id: 5, text: "Bootstrap", img: "bootstrap.png" },
        { id: 6, text: "Vuetify", img: "vuetify-logo-light.svg" },
        { id: 7, text: "Java Script", img: "javascript.png" },
        { id: 8, text: "Php", img: "php.png" },
        { id: 9, text: "Vue", img: "vue-js.png" },
        { id: 10, text: "Nuxt", img: "nuxt-emoji.png" }
      ]
    };
  }
};
</script>

<style lang="scss">
.v-skill {
  display: flex;
  justify-content: center;
  transition: 1s;
  //border: 1px solid black;
  margin: 0;
  .skillMen {
    display: flex;
    flex-direction: column;
    width: 80%;
    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li {
        width: 50%;
        padding: 0.5%;
        display: flex;
        justify-content: center;
        align-items: center;

        animation: blockHr1 1.4s;
        animation-fill-mode: both;
        animation-delay: 0.8s;
        transition: 1.2s all;

        position: relative;
        .skill-item {
          border: 1px solid #07cb79;
          width: 150px;
          display: flex;
          flex-direction: row;
          align-items: center;
          border-radius: 3px;
          &:hover {
            background: rgb(240, 239, 239);
            transition:all 0.5s;
          }
          .skill-img {
            //border: 1px solid black;
            width: 40px;
            height: 40px;
            padding: 0.5%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 3%;
            img {
              width: 90%;
            }
          }
          p {
            margin-left: 20%;
          }
        }
      }
      @keyframes blockHr1 {
        0% {
          opacity: 0;
          top: 20%;
        }
        //50%{opacity: 0.85; top : 5%}
        100% {
          opacity: 1;
          top: 0%;
        }
      }
      & li:nth-child(1) {
        animation-delay: 0.5s;
      }
      & li:nth-child(2) {
        animation-delay: 0.5s;
      }
      & li:nth-child(3) {
        animation-delay: 0.6s;
      }
      & li:nth-child(4) {
        animation-delay: 0.6s;
      }
      & li:nth-child(5) {
        animation-delay: 0.7s;
      }
      & li:nth-child(6) {
        animation-delay: 0.8s;
      }
      & li:nth-child(7) {
        animation-delay: 0.9s;
      }
      & li:nth-child(8) {
        animation-delay: 0.9s;
      }
      & li:nth-child(9) {
        animation-delay: 1s;
      }
      & li:nth-child(10) {
        animation-delay: 1s;
      }
    }
  }
}
</style>