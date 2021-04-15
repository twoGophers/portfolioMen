<template>
  <div class="v-footer">
    <div class="itemImagesFooter">
      <a class="footerAdress" :href="item.adress" v-for="item in itemFooter" :key="item.id">
        <img :src="require('@/assets/images/' + item.images)" alt srcset />
      </a>
    </div>
    <div class="itemImagesFooter1">
      <p class="signature">Falin Vladimir</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-footer",
  data() {
    return {
      itemFooter: [
        { id: 1, images: "facebook.svg", adress: "https://www.facebook.com/" },
        {
          id: 2,
          images: "google.svg",
          adress: "https://myaccount.google.com/"
        },
        {
          id: 3,
          images: "instagramm.svg",
          adress: "https://www.instagram.com/"
        },
        { id: 4, images: "telegramm.svg", adress: "https://web.telegram.org/" },
        { id: 5, images: "twiter.svg", adress: "https://twitter.com/" },
        { id: 6, images: "snapchat.svg", adress: "https://www.snapchat.com/" }
      ]
    };
  }
};
</script>

<style lang="scss">
.v-footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 120px;
  background: linear-gradient(
    0deg,
    rgba(107, 222, 126, 0.8435749299719888) 0%,
    rgba(255, 255, 255, 0.865983893557423) 100%
  );

  .itemImagesFooter {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .footerAdress {
      border: 1px solid black;
      margin: 0;
      padding: 0;
      border: none;
      background: none;
      margin: 15px;
      img {
        width: 35px;
        transition: 0.5s;
        &:hover {
          transform: scale(1.1);
        }
        &:active {
          transform: scale(1);
        }
      }
    }
  }
  .itemImagesFooter1 {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 50%;
    .signature {
      width: 100%;
      padding-right: 10%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      font-family: Snell Roundhand, cursive;
      &::before {
        content: "\24B8";
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        padding-bottom: 2px;
        margin-right: 5px;
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .v-footer {
    .itemImagesFooter {
      width: 70%;
    }
    .itemImagesFooter1 {
      width: 30%;
    }
  }
}

@media screen and (max-width: 620px) {
  .v-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .itemImagesFooter {
      height: 60%;
      width: 90%;
    }
    .itemImagesFooter1 {
      height: 30%;
      p {
        font-size: 0.9em;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .v-footer {
    .itemImagesFooter {
      width: 100%;
      .footerAdress {
        margin: 10px;
      }
    }
    .itemImagesFooter1 {
      height: 30%;
      width: 100%;
    }
  }
}

@media screen and (max-width: 370px) {
  .v-footer {
    .itemImagesFooter {
      width: 100%;
      .footerAdress {
        margin: 2%;
        img {
          width: 30px;
        }
      }
    }
    .itemImagesFooter1 {
      height: 30%;
      width: 100%;
    }
  }
}
</style>