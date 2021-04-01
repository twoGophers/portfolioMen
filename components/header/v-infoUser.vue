<template>
    <div class="v-infoUser">
        <div class="infoUser">
            <p class="nameStyle">Владимир</p>
            <p>Возраст : 27 лет</p>
            <p>Frontend - разработчик</p>
            <p style="margin-top:5%">Обо мне : 
                <span>
                Занимаюсь разработкой одностраничных сайтов под ключ. 
                По возможности изучаю английский язык и новые введение в веб-разработке, практикуя полученые знания.
                Делаю резиновую, адаптивную верску Flex под мобильные устройства и планшеты.
                </span>
            </p>
        </div>

    </div>
</template>
<script>
export default {
    name: "v-infoUser"
}
</script>

<style lang="scss">
.v-infoUser{
    width: 90%;
    display: flex;
    padding: 2%;
    justify-content: center;
    
    p{
        line-height: 1.7em;
        background-image:linear-gradient(
            to bottom,
            rgb(250, 248, 248) 0%,
            rgb(224, 224, 224) 100%
        );
        background-clip:text;
        --webkit-background-clip:text;
        color:transparent;
    }
    .infoUser{
        width: 80%;
        .nameStyle{
            font-size: 1.5em;
        }
    }
}
</style>