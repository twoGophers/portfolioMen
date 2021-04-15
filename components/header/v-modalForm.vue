<template>
  <div class="v-modalForm">
    <div class="v-modalForm_item">

        <vFormItem />
    </div>
  </div>
</template>

<script>
import vFormItem from "./v-form-item"

export default {
    name: "v-modalForm",

    data () {
        return {
            test : 0,
        }
    },
    components: {
        vFormItem
    },
    methods: {
      async logout() {
        await this.$store.dispatch("logout")
      },
    },
}
</script>

<style lang="scss">
.v-modalForm{
  display: flex;
  width: 40%;
  z-index: 999;
  position: fixed;
  justify-content: center;
  overflow: hidden;
  top: 1%;
  margin-left: 8%;

  animation: showModal 1s linear;
  animation-fill-mode: both;
  transition: 0.3s;
  &_item{
    width: 100%;
  }
}

@keyframes showModal {
  0%{bottom: 100%;}
  50%{bottom: 50%;}
  100%{bottom: 0%;}
}


</style>