<template>
    <div class="contactUser">
        <div class="contactUserContainer">
            <div class="contactUserContainer_block1">
                <p>Номер телефона : </p><a href="tel:+79013577538"> +7 (901) 357-75-38</a>
            </div>
            <div class="contactUserContainer_block1">
                <p>Телеграм :</p><a href="https://t.me/falinVladimir"> @falinVladimir</a>
            </div>
        </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.contactUser{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    .contactUserContainer{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &_block1 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 2%;
            a {
                box-shadow: none;
                background: none;

            }
            p, a {
                background-image:linear-gradient(
                to bottom,
                rgb(250, 248, 248) 0%,
                rgb(201, 201, 202) 100%
                );
                background-clip:text;
                --webkit-background-clip:text;
                color:transparent;
            }
        }
        
    }
}
</style>