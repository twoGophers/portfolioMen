<template>
    <div class="v-hrLine1">
        <hr>
        <h4 class="hrLine1"
        @mouseover="mouseEnter"
        @mouseleave="mouseLeave"
        :style="styleRamk"
        >Скиллы</h4>
        <hr>
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
.v-hrLine1{

    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5%;
    margin-bottom: 1.5%;

    animation: blockHr1 0.7s;
    animation-fill-mode: both;
    animation-delay: 0.5s;
    transition: 1s all;

    position: relative;
    overflow: hidden;
    hr {
    width: 40%;
    border: 1px solid rgb(172, 172, 172);
    border-bottom-width: 0;
    }
    .hrLine1{
        padding: 10px 15px;
        border: 3px solid;
        border-radius: 10px;
        border-image:linear-gradient(45deg,white,#07cb79,white) 10;
    }
}
@keyframes blockHr1 {
    0%{opacity: 0; top : 10%}
    //50%{opacity: 0.85; top : 5%}
    100%{opacity: 1; top : 0%}
}
</style>