<template>
  <div class="fill-height ">
        <v-snackbar v-model="snackbar" top color="primary" flat>
            <span>Votre compte à bien était mis a jour</span>
        </v-snackbar>
      <v-img class="align-center mt-16 ml-16 mr-n16 px-15"
      cover
      width="1710"
        src="@/assets/32960.jpg"
      >
      <v-card
          class="mx-auto"
          max-width="400"
          title="Mon compte"
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
              Valider des changement

              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
        </v-card>
      </v-img>
  </div>
</template>
  
<script>
import axios from 'axios'
  export default {
    data: () => ({
      form: true,
      user  :{
      first:'',
      last:'',
      email: '',
      password: '',
      },
      snackbar: false,
      loading: false,
      show: false,
      terms:false
    }),
    mounted(){
      if(this.$store.state.auth.user === null){
      this.$router.push('/login')
      }
      axios.get('https://backendfortasksquad13.onrender.com/api/edit-users/'+ this.$store.state.auth.user).then(r=>{
        this.user = r.data
      })
    },
    methods: {
      async onSubmit () {
        try {
          if ((await this.$refs.form.validate()).valid) {
            axios.post('https://backendfortasksquad13.onrender.com/api/update-users/'+ this.$store.state.auth.user,this.user)
            .then(async (r) => {
              if(r.status ==200){
                this.snackbar = true
              }
            })
          }
        }
        catch{
          console.log('nope')
        }
        //store.dispatch('signup',user)
      },
      required (v) {
        return !!v || 'Champ requis'
      },
    },
  }
</script>
