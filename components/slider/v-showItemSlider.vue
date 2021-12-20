<template>
    <div class="v-showItemSlider">

        <div class="v-showItemSlider_img">
            <div class="showItemSlider">
                <img :src="require('@/assets/images/' + show_item.proectImages)" alt="" srcset="">
            </div>
            <div class="showItemSliderMobile">
                <div class="showItemSliderMobile_plansh">
                    <div class="planshPrototip">
                        <img :src="require('@/assets/images/' + show_item.proectPlash)" alt="">
                    </div>
                    <div class="planshPrototipPoint">
                        <div class="planshPrototipPoint_point"></div>
                    </div>
                    <!-- <img src="../../assets/images/planshMen.png" alt="" srcset=""> -->
                </div>
                <div class="showItemSliderMobile_mob">
                    <div class="mobile">
                    <!-- <img src="../../assets/images/pug.png" alt="" srcset=""> -->
                        <div class="showItemSliderMobile_mobPrototipPoint topMobile">
                            <div class="topMobile_line"></div>
                        </div>
                        <div class="showItemSliderMobile_mobPrototip">
                            <img :src="require('@/assets/images/' + show_item.proectMob)" alt="">
                        </div>
                        <div class="showItemSliderMobile_mobPrototipPoint">
                            <div class="pointMObile"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="v-showItemSlider_content">
            <!-- <div class="btnCon">
                <button
                        @click="showInfo"
                ><p>Информация</p> </button>
                <button
                        @click="showInfoVideo"
                ><p>Видео обзор</p> </button>
            </div> -->
            <div class="content">
                <div 
                    class="content_content"
                    v-show="showContent1"
                >
                    <p class="nameSite">{{show_item.proectName}}</p>
                    <p class="instrument">{{show_item.proectInstrumen}}</p>
                    <p>База данных : {{show_item.proectBase}} </p>
                    <p>{{show_item.proectTime}}</p>
                    <p>{{show_item.proectAdaption}}</p>
                    <p>Ссылка на сайт : 
                        <a :href="show_item.proectAddress">{{show_item.proectName}}</a>
                    </p>
                </div>
                <div 
                    class="content_video"
                    v-show="showContent"
                    >
                    <iframe
                        :src="show_item.adressUrl"
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>

</div>
    </div>
</template>

<script>
export default {
    name: "v-showItemSlider",
    props: {
        show_item : {
            type : Object,
            default () {
                return {}
            }
        }
    },
    data() {
        return {
            showContent : false,
            showContent1 : true
        }
    },
    methods: {
        showInfo() {
            this.showContent = false;
            this.showContent1 = true;
        },
        showInfoVideo() {
            this.showContent = true;
            this.showContent1 = false;
        }
    },
}
</script>

<style lang="scss">
.v-showItemSlider{
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 1px solid #07cb79;
    padding: 2%;
    border-radius: 10px;

    overflow: hidden;
    position: relative;
    animation: portfolioItem 2s ease-in-out;
    animation-fill-mode: both;
    transition: 2s all;

    .v-showItemSlider_img{
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .showItemSlider{
            width: 70%;
            display: flex;
            justify-content: center;
            border: 10px solid rgb(117, 117, 117);
            border-radius: 10px;
                img{
                    width: 100%;

                }

        }
        .showItemSliderMobile{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            .showItemSliderMobile_plansh{
                width: 60%;
                height: 100%;
                justify-content: center;
                align-items: center;
                display: flex;
                flex-direction: column;
                .planshPrototip{
                    height: 100%;
                    width: 60%;
                    border: 10px solid rgb(117, 117, 117);
                    border-radius: 10px 10px 0px 0px;
                    border-bottom: 2px;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    img {
                        position: relative;
                        overflow: hidden;
                        width: 100%;
                        margin: 0;
                        padding: 0;

                    }

                }
                .planshPrototipPoint{
                    margin: 0;
                    padding: 0;
                    width: 60%;
                    border: 5px solid rgb(117, 117, 117);
                    border-radius: 0px 0px 10px 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgb(117, 117, 117);
                    &_point{
                        width: 15px;
                        height: 15px;
                        background: rgb(255, 255, 255);
                        border-radius: 50%;
                    }
                }
            }
            .showItemSliderMobile_mob{
                width: 40%;
                justify-content: center;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                height: 100%;
                .mobile{
                    width: 60%;
                    height: 100%;
                    .showItemSliderMobile_mobPrototip{
                        height: 70%;
                        width: 100%;
                        border: 5px solid rgb(117, 117, 117);
                        border-bottom: 2px;
                        display: flex;
                        justify-content: center;
                        overflow: hidden;
                        img{
                            width: 100%;
                        }
                    }
                    .showItemSliderMobile_mobPrototipPoint{
                        width: 100%;
                        border: 5px solid rgb(117, 117, 117);
                        border-radius: 0px 0px 10px 10px;
                        display: flex;
                        justify-content: center;
                        background: rgb(117, 117, 117);
                        .pointMObile{
                            width: 10px;
                            height: 10px;
                            background: rgb(255, 255, 255);
                            border-radius: 50%;
                        }
                    }
                    .topMobile{
                        border-radius: 10px 10px 0px 0px;
                        .topMobile_line{
                            margin-top: 5px;
                            width: 20%;
                            height: 2px;
                            background: rgb(204, 204, 204);
                        }
                    }
                }
            }
        }
    }

    

    &_content{
        border: 1px solid #07cb79;
        width: 60%;
        display: flex;
        padding: 0% 5% 3% 5%;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        height: 340px;


        .content{
            height: 80%;
            display: flex;
            justify-content: center;

            position: relative;

            &_content {
                position: relative;
                animation: minBlock 1s linear ;
                transition: 1s;

                .instrument::before {
                content: "Инструменты : ";
                }
                p{
                    background-image:linear-gradient(
                    to bottom,
                    rgb(161, 161, 161) 0%,
                    rgb(85, 85, 85) 100%
                    );
                    background-clip:text;
                    --webkit-background-clip:text;
                    color:transparent;
                    line-height: 2.0em;
                }
                a {
                    border: none;
                    color : rgb(133, 133, 133);
                    &:hover {
                        color: white;
                    }
                }
                .nameSite{
                    font-size: 1.4em;
                    background-image:linear-gradient(
                    to bottom,
                    rgb(128, 128, 128) 0%,
                    rgb(59, 59, 59) 100%
                    );
                    background-clip:text;
                    --webkit-background-clip:text;
                    color:transparent;
                }
            }
            &_video {
                position: relative;
                animation: minBlock 1s linear;
                transition: 1s;

                width: 100%;
                display: flex;
                iframe {
                    display: flex;
                    width: 100%;
                    border-radius: 10px;
                }
            }
            @keyframes minBlock {
                0%{opacity: 0;}
                50%{opacity: 0.5;}
                100%{opacity: 1;}
            }
        }

        .btnCon{
            height: 20%;
            justify-content: center;
            margin: 2%;
            display: flex;
            flex-direction: row;

            width: 100%;
            transition: 0.3s;
            button {
                width: 30%;
                margin: 1%;
                border:none;
                outline: none;
                border-radius: 20px;

                transition: 0.2s;
                &:active {
                    transform: scale(0.98);
                }
                p {
                    border-radius: 20px;
                    padding: 5%;
                    border: 1px solid #07cb79;
                    color: white;

                    position: relative;
                    background: linear-gradient(-90deg, #07cb79, rgb(27, 230, 182), #07cb79);
                    background-size: 500% 100%;
                    //text-transform: uppercase;
                    animation: Gradient 10s ease infinite;
                    transition: 0.3s;

                        &:hover {
                            color: rgb(56, 56, 56);
                            transform: scale(1.02);
                        }
                    }
                    @keyframes Gradient {
                        50% {
                        background-position: 140% 50%;
                        transform: skew(-2deg);
                        }
                    }
            }
        }
    }
}

@keyframes portfolioItem {
    0%{height:  0%; opacity: 0;}
    100%{height: 100%; opacity: 1;}
}


@media (min-width : 660px) and (max-width: 1270px){
    .v-showItemSlider_content .btnCon button {
        width: 45%;
    }
}


</style>