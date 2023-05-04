<template>
  <div class="fill-height ">
      <v-img class="align-center ml-16 mr-n16 px-15"
      cover
      width="1710"
        src="@/assets/3725.jpg"
      >
      <v-card
          class="mx-auto"
          max-width="400"
          title="Création d'un compte"
        >
        <v-form @submit.prevent ref="form">
          <v-container>
            <v-text-field
              v-model="user.first"
              :rules="[required]"
              color="primary"
              label="Nom"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="user.last"
              :rules="[required]"
              color="primary"
              label="Prénom"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="user.email"
              :rules="[required]"
              color="primary"
              label="Email"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="user.password"
              :rules="[required]"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              color="primary"
              label="Mot de passe"
              variant="underlined"
            ></v-text-field>
          </v-container>

          <v-divider></v-divider>

          <v-card-actions>
            
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <v-btn color="success" @click="onSubmit();" type="submit" :loading="loading">
              S'enregistrer

              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
        </v-card>
      </v-img>
  </div>
</template>
  
<script>

  export default {
    data: () => ({
      form: true,
      user  :{
      first:'',
      last:'',
      email: '',
      password: '',
      },
      loading: false,
      show: false,
      terms:false
    }),

    methods: {
      async onSubmit () {
        try {
          console.log(await this.$refs.form.validate())
          if ((await this.$refs.form.validate()).valid) {

            this.Sendit()

          }
          console.log(await this.$refs.form.validate())
        }
        catch{
          console.log('nope')
        }
        //store.dispatch('signup',user)
      },
      required (v) {
        return !!v || 'Champ requis'
      },
      Sendit() {
        Email.send({
          Host: "smtp.elasticemail.com",
          Port: '2525',
          Username: "tasksquad13000@gmail.com",
          Password: "8AC08D1583A27406869865CBDB55A9209811",
          To: this.user.email,
          From: "tasksquad13000@gmail.com",
          Subject: "Email d'activation",
          Body: "Votre compte viens d'être activer",
        })
          .then(res => {console.log(res)});
      },
    },
  }
</script>
