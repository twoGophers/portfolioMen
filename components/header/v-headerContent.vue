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

                <div data-app class="modal-content">
                    <vModalForm />
                </div>

            </div>
    </div>
</template>

<script>
import vModalForm from "./v-modalForm"
import typical from "../../plugins/typical"

export default {
    name:"v-headerContent",
    data () {
        return{
           dialog : true
        }
    },
    components : {
        vModalForm,
        typical
    },
    methods: {},
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
        flex-direction: row;
        .modal-content{
            margin: 2%;
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

@media (max-width: 620px) and (min-width: 20px) {
    .v-mainHeaderContent {
        display: none;
    }
}

</style>