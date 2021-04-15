<template>
    <div class="v-hrLine">

        <h4 class="hrLine"
        @mouseover="mouseEnter"
        @mouseleave="mouseLeave"
        :style="styleRamk"
        >Порфолио</h4>

    </div>
</template>

<script>
import { type } from '../../plugins/typical';
export default {
    naem: "v-hrLine",
    props : {
        item_hr : {
            type : Object,
            default () {
                return {}
            }
        }
    },
    data() {
        return {
            styleRamk : null
        }
    },
    methods: {
        mouseEnter() {
            this.styleRamk = `border-image:linear-gradient(45deg,white,#07cb79,white) 10;`;
        },
        mouseLeave() {
            this.styleRamk = `border-image:linear-gradient(45deg,#07cb79,white,#07cb79) 10;`;
        }
    },
}
</script>

<style lang="scss">

</style>