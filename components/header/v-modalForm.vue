<template>
  <div class="v-modalForm">
    <div class="v-modalForm_item">

        <vFormItem 
          
        />
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
      showModal(text) {
        this.$emit("showModal", this.text)
      }
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
  &_item{
    width: 100%;

  }
}

</style>