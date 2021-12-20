<template>
    <div class="v-aboutMeMain">
                <vMainMeMainItem 
                v-for="item in aboutMe"
                :key="item.id"
                :about_item="item"
                ></vMainMeMainItem>

    </div>
</template>

<script>
import vMainMeMainItem from "./v-aboutMeMain-item"

export default {
    name: "v-aboutMeMain",
    components : {
        vMainMeMainItem
    },
    data() {
        return {
            aboutMe : [
                {id : 1, img : '149449.svg', text1 : 'Имя', text2 : 'Владимир'},
                {id : 2, img : '149384.svg', text1 : 'Телефон', text2 : '+8(901)-357-75-38'},
                {id : 3, img : '149441.svg', text1 : 'Адрес', text2 : 'Московская обл'},
                {id : 4, img : '1334110m.svg', text1 : 'Email', text2 : 'falinvlad93@rambler.ru'},
                {id : 5, img : '149363.svg', text1 : 'Дата рождения', text2 : '28.08.1993'},
                {id : 6, img : '149261.svg', text1 : 'Язык', text2 : 'Русский'},
            ]
        }
    },
}
</script>

<style lang="scss">
.v-aboutMeMain{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: baseline;
}


@media screen and (max-width: 420px) {
    .v-aboutMeMain {
        justify-content: center;
        align-items: center;
    }
}
</style>