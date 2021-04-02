<template>
    <div class="v-aboutMeMain-item">
        <div class="v-aboutMeMain-item-img">
            <div 
            class="v-aboutMeMain-item-main"
            @mouseover="mouseEnter"
            @mouseleave="mouseLeave"
            :style="styleRamk"
            >
                <img :src="require('@/assets/images/' + about_item.img)" alt="" srcset="">
            </div>
        </div>
        <div class="v-aboutMeMain-item-content">
            <p>{{about_item.text1}}</p>
            <p>{{about_item.text2}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name : "v-aboutMeMain-item",
    props: {
        about_item : {
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
            this.styleRamk = `border: 2px solid white`;
        },
        mouseLeave() {
            this.styleRamk = `border: 2px solid #07cb79`;
        }
    },
}
</script>

<style lang="scss">
.v-aboutMeMain-item{
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

    .v-aboutMeMain-item-img{
        border: 1px solid #07cb79;
        width: 60px;
        display: flex;
        border-radius: 5px;
        .v-aboutMeMain-item-main{
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
    .v-aboutMeMain-item-content{
        margin-left: 10px;
        p{
            line-height: 25px;
            font-size: 1.0em;
        }
    }
}

@keyframes blocFoto {
    10% {opacity: 0.1; right: -100%}
    50% {opacity: 0.5; right: -50%}
    100% {opacity: 1; right: 0%}
}

.v-aboutMeMain-item:nth-child(1) {
    animation-delay: .3s
}
.v-aboutMeMain-item:nth-child(2) {
    animation-delay: .3s
}
.v-aboutMeMain-item:nth-child(3) {
    animation-delay: .5s
}
.v-aboutMeMain-item:nth-child(4) {
    animation-delay: .5s
}
.v-aboutMeMain-item:nth-child(5) {
    animation-delay: .7s
}
.v-aboutMeMain-item:nth-child(6) {
    animation-delay: .7s
}
</style>