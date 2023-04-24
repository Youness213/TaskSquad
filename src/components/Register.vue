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
          <v-container>
            <v-text-field
              v-model="first"
              color="primary"
              label="Nom"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="last"
              color="primary"
              label="Prénom"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="email"
              color="primary"
              label="Email"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="password"
              color="primary"
              label="Mot de passe"
              variant="underlined"
            ></v-text-field>

            <v-checkbox
              v-model="terms"
              color="secondary"
              label="I agree to site terms and conditions"
            ></v-checkbox>
          </v-container>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn color="success" @click="$router.push('/LogIn')">
              <v-icon icon="mdi-chevron-left" start></v-icon>
              Se Connecter

            </v-btn>
            
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-divider vertical></v-divider>
            <v-divider vertical></v-divider>
            <v-spacer></v-spacer>

            <v-btn color="success">
              S'enregistrer

              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-img>
  </div>
</template>

<script>
  export default {
    data: () => ({
      form: false,
      email: null,
      password: null,
      loading: false,
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
  }
</script>
