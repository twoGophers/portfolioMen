<template>
    <div class="v-hrLine">

        <h4 class="hrLine"
        @mouseover="mouseEnter"
        @mouseleave="mouseLeave"
        :style="styleRamk"
        >Скиллы</h4>

    </div>
</template>

<script>
import { type } from '../../plugins/typical';
export default {
    naem: "v-hrLine1",
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
            styleRamk : null,
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

@keyframes blockHr1 {
    0%{opacity: 0; top : 10%}
    //50%{opacity: 0.85; top : 5%}
    100%{opacity: 1; top : 0%}
}
</style>