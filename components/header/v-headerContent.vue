<template>
    <div class="v-headerContent">

                <typical
                class="typicalWrapper"
                :steps="[
                'Mobile developer', 1000, 
                'Frontend developer', 500, 
                'UI / UX design', 1000]"
                :loop="3"
                :wrapper="'h4'"
                ></typical>
            
            <span class="userTitle">Разработака web-приложений с нуля по макету и их продвижение</span>
            <div class="headerContentBtn">
                    <div class="btmModal">
                        <template>
                            <v-row
                                align="center"
                                justify="space-around"
                                >
                                <v-btn 
                                depressed
                                @click="showDialog"
                                >
                                    Оформить 
                                </v-btn>
                            </v-row>
                        </template>
                    </div>

                    <div class="showModal">
                        <transition name="fade">
                            <vModalForm 
                            v-show="showInside"
                            />
                        </transition>
                    </div>
                    
            </div>
    </div>
</template>


<script>
import {eventBus} from "../../plugins/main"
import vModalForm from "./v-modalForm"
import typical from "../../plugins/typical"

export default {
    name:"v-headerContent",
    data () {
        return{
           showInside: false,
        }
    },
    components : {
        vModalForm,
        typical,
    },
    methods: {
        showDialog() {
            this.showInside = true;

            //Следит за кликом вне блока

            // let testShow = this.showInside

            // if(this.showInside == true) {
            //     setTimeout(function() {

            //         window.addEventListener('click', function(e){
            //             if (document.querySelector('.v-modalForm').contains(e.target)){
            //                 console.log("-")
            //             } else {

            //             }
            //         })
            //     }, 1000)
            // } else {
            //     console.log("n")
            // }
        },
        onScroll(event) {
            this.test = document.documentElement.scrollTop;
            if(this.test > 5) {
            this.showInside = false;
            }
        },
    },
    destroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },

    //Закрытие модального окна по нажатию кнопки
    created() {
        eventBus.$on("showModal", data => {
            this.showInside = data;
        })
    },
}
</script>

<style lang="scss">
.v-headerContent{
    width: 100%;
    .typicalWrapper{
    font-size: 2.3em;
    margin-bottom: 1%;
    height: 50px;
    }
    .userTitle{
            background-image:linear-gradient(
            to bottom,
            rgb(250, 248, 248) 0%,
            rgb(214, 214, 216) 100%
        );
        background-clip:text;
        --webkit-background-clip:text;
        color:transparent;
    }
    .headerContentBtn{
        width: auto;
        margin-top: 5%;
        display: flex;
        overflow: hidden;
        .btmModal{
            .row {
                margin: 0px;
                .theme--light.v-btn.v-btn--has-bg {
                    width: 100%;
                    border-radius: 20px;
                    background-color: #07cb79;
                    color: white;

                }
            }
        }
    }


h4{
    transition: 0.3s;
    color: #fffdfd;
    font-family:Arial, Helvetica, sans-serif;
}
/* blink effect */
}
@keyframes blink {
  50% { opacity: 0; }
}
/* github-corner */
.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}



//Исчезновение модального окна
 .fade-leave-active {
  transition: opacity;
}
.fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  animation: showModal-no 1s linear;
  animation-fill-mode: both;
}

@keyframes showModal-no {
    100%{bottom: 100%;}
    50%{bottom: 50%;}
    0%{bottom: 0%;}
}


@media screen and (max-width: 500px) {
    .v-headerContent{
        .typicalWrapper{
            font-size: 1.6em;
        }
        span {
            font-size: 0.9em;
        }
    }
}

</style>