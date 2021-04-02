<template>
<div class="v-modalForm">
    <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Оставить заявку
        </v-btn>
      </template>
      <v-card>
        <!-- <v-card-title>Форма заявки</v-card-title> -->
        <v-divider></v-divider>
        <v-card-text>

            <vFormItem />

        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row> 
  </template>
  </div>
</template>

<script>
import vFormItem from "./v-form-item"

export default {
    name: "v-modalForm",
    data () {
        return {
            dialog: false,
            test : 0,
            window: null
        }
    },
    components: {
        vFormItem
    },
    methods: {
      async logout() {
        await this.$store.dispatch("logout")
      },
      onScroll(event) {
        this.test = document.documentElement.scrollTop;
        if(this.test > 5) {
          this.dialog = false
        }
      }
    },
      destroy() {
        window.removeEventListener("scroll", this.onScroll);
      },
      mounted() {
        window.addEventListener("scroll", this.onScroll)
      },
}
</script>

<style lang="scss">

.v-application--wrap{
    min-height: 1px;
}
.theme--dark.v-btn.v-btn--has-bg{
    opacity: 0.9;
    border-radius: 30px;
    background-color: #07cb79;
}

.v-modalForm{
  display: flex;
}
.v-dialog__content {
  display: flex;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  height: 400px;
} 
.v-dialog__content--active {
  margin-left: 20%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 50%;
}

</style>