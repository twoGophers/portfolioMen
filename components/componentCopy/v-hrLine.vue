<template>
    <div class="v-hrLine">
        <h4 class="hrLine hrLine1"
            @mouseover="mouseEnter"
            @mouseleave="mouseLeave"
            :style="styleRamk"
        >Обо мне</h4>
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

.v-hrLine{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5%;
    margin-bottom: 1.5%;
    .hrLine{
        padding: 10px 15px;
        background: white;
        border: 3px solid;
        border-radius: 10px;
        border-image:linear-gradient(45deg,white,#07cb79,white) 10;
        position: relative;
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        color:rgb(68, 68, 68);
    }

    &::before,
    &::after{
        content: "";
        width: 0%;
        height: 1px;
        position: relative;
        display: block;
        transition: width .3s ease-in-out;

        animation: animationLine 2s linear;
        animation-fill-mode: both;
    }

    &::before {
        background: linear-gradient(90deg, rgba(143,143,143,1) 0%, rgba(193,245,194,0.7707457983193278) 40%, rgba(131,254,141,0.7371323529411764) 100%);
    }
    &::after {
        background: linear-gradient(90deg, rgba(131,254,141,0.7371323529411764) 0% , rgba(193,245,194,0.7707457983193278) 60%,  rgba(143,143,143,1) 100%);
    }
}
@keyframes animationLine {
    100%{width: 40%;}
}



@media screen and (max-width: 540px){
    .v-hrLine {
        .hrLine1{
            width: 22%;
        }
    }
}

@media screen and (max-width: 500px){
        .v-hrLine {
        .hrLine1{
            width: 25%;
        }
    }
}

@media screen and (max-width: 450px){
    .v-hrLine {
        .hrLine1{
            width: 30%;
        }
    }
}

@media screen and (max-width: 390px){
    .v-hrLine {
        .hrLine1{
            width: 32%;
        }
    }
}

@media screen and (max-width: 373px){
    .v-hrLine {
        .hrLine1{
            width: 35%;
        }
    }
}

@media screen and (max-width: 350px){
    .v-hrLine {
        .hrLine1{
            width: 45%;
        }
    }
}
</style>