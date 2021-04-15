<template>
<div class="v-header">
    <v-parallax
        class="parallaxHeader"
        dark
        :src="require('@/assets/images/bgHeader.jpg')"
    >
    <div class="header">
        <div class="headerTop">
            <ul>
                <li
                v-for="user in users"
                :key="user.id"
                >
                <p
                @click="showHeaderContent(user.id)"
                >
                <nuxt-link to=""> {{user.text}}</nuxt-link>
                </p>
                </li>
            </ul>
        </div>
        <div class="headerContent">

            <vHeaderContent
            v-show="showHeader1"
            class="animationHeader"
            ></vHeaderContent>

            <vInfoUser
            v-show="showHeader2"
            class="animationHeader"
            ></vInfoUser>

            <vContactUser
            v-show="showHeader3"
            class="animationHeader"
            ></vContactUser>
        </div>
    </div>
    </v-parallax>

</div>
</template>

<script>
import vHeaderContent from "./v-headerContent"
import vInfoUser from "./v-infoUser"
import vContactUser from "./v-contact"

export default {
    name: 'v-header',
    data() {
        return {
            showHeader1 : true,
            showHeader2 : false,
            showHeader3 : false,
            users : [
                {id : 1, text : "Главная", adress : "/"},
                {id : 2, text : "Обо мне", adress : "/info-user"},
                {id : 3, text : "Контакты", adress : "/contact"}
            ]
        }
    },
    components : {
        vHeaderContent,
        vInfoUser,
        vContactUser
    },
    methods: {
        showHeaderContent( number ) {
            if(number == 1) {
                this.showHeader1 = true;
                this.showHeader2 = false;
                this.showHeader3 = false;

            } else if( number == 2) {
                this.showHeader1 = false;
                this.showHeader2 = true;
                this.showHeader3 = false;
            } else if (number == 3) {
                this.showHeader1 = false;
                this.showHeader2 = false;
                this.showHeader3 = true;
            }
        },

    },
}
</script>

<style lang="scss">
.v-header{
    
    .v-parallax__content{
        background-color:rgba(0,0,0,.3);
    }
    .parallaxHeader{
        .header{
            //background-color:rgba(0,0,0,.3);
            width: 90%;
            height: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 1.5%;
            margin-right: 5%;
            margin-left: 5%;
            margin-bottom: 2%;
            .headerTop{
                width: 100%;
                display: flex;
                justify-content: flex-end;
                ul{
                    display: flex;
                    justify-content: flex-end;
                    width: 100%;
                    li{
                        cursor: pointer;
                        display: inline;
                        margin: 1%;
                        a{
                            font-size: 0.9em;
                        }
                    }
                }
            }
            .headerContent{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                height: 100%;
                padding-left: 10%;
                .animationHeader{
                    animation: fadeInTop 1s linear;
                    animation-fill-mode: both;
                    transition: 1s;
                    position: relative;
                }
                @keyframes fadeInTop {
                    0%{opacity: 0;}
                    50%{opacity: 0.6;}
                    100%{opacity: 1;}
                }
            }
        }
    }
}



</style>