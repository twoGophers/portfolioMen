<template>
    <div class="formItem">
    <v-app id="inspire">
        <v-form
        @submit.prevent
        ref="form"
        v-model="valid"
        lazy-validation
        >
        <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Имя"
            required
        ></v-text-field>
    
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>
    
        <v-select
            v-model="select"
            :items="items"
            v-on:change="sortBy"
            :rules="[v => !!v || 'Введите корректный проект']"
            label="Необходимый проект"
            required
        ></v-select>
    
        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Для продолжения должны согласится']"
            label="Вы согласны?"
            required
        ></v-checkbox>
    
        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-3"
            @click.prevent="validate"
            submit
        >
            Отправить
        </v-btn>
    
        <v-btn
            color="error"
            class="mr-3"
            @click="reset"
        >
            Сбросить форму
        </v-btn>
        <v-btn
            width="20%"
            color="blue"
            class="mr-3"
            @click="exit"
        >
            Выйти
        </v-btn>

        </v-form>

    </v-app>
    </div>
</template>

<script>
import {eventBus} from "../../plugins/main"

export default {
  name : "formItem",
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Введите имя',
      v => (v && v.length <= 10) || 'Имя не больше 10 символов',
      v => (v && v.length >= 6) || 'Имя больше 6 символов'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Введите email',
      v => /.+@.+\..+/.test(v) || 'Введите корректный email',
    ],
    select: null,
    items: [
      {id : 1, text : "Одностраничные сайты"},
      {id : 2, text : "Сайт визитка"},
      {id : 3, text : "Интернет магазины"},
      {id : 4, text : "Лендинг"},
    ],
    checkbox: false,
    errors: "",
    itemsArray: [],
    window : null
  }),

  methods: {
    sortBy() {
      this.itemsArray = []
      this.itemsArray.push(this.select)
      console.log(this.itemsArray)
    },
    async validate () {

      this.$refs.form.validate()
      
//запись нового пользователя : имя и email
        try {
          await this.$fire.auth.createUserWithEmailAndPassword(
            this.email,
            this.name
          )
        } catch (e) {
          alert(e)
        }
//запись нового пользователя : информация о нем
        const messageRef = this.$fire.database.ref('message/')
        try {
          await messageRef.set({
            message : [
              this.name,
              this.email,
              this.itemsArray
            ]
          })
        } catch (e) {
          alert('Ввели не корректный email')
          return
        }
        alert('Отправлено')
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },

    //Закрытие модального окна по нажатию
    exit () {
      let testShow = false;
      eventBus.$emit("showModal", testShow)
    },

  },
}

</script>

<style lang="scss">

.formItem {
  .v-application {
    padding: 5%;
    border-radius: 2%;
    height: 50%;
    .v-application--wrap{
      min-height: 50%;
    }
  } 
  .v-application--is-ltr{} 
  .theme--light{}
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