<template>
  <div class="fill-height ">
      <v-img class="align-center ml-16 mr-n16 px-15"
      cover
      width="1710"
        src="@/assets/3725.jpg"
      >
        <v-card class="mx-auto px-6 py-8 align-center text-center" elevation="15" max-width="400"  title="Connexion">
          <v-form
            v-model="form"
            @submit.prevent="onSubmit"
          >
            <v-text-field
              v-model="email"
              :readonly="loading"
              :rules="[required]"
              class="mb-2"
              clearable
              label="Email"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :readonly="loading"
              :rules="[required]"
              clearable
              label="Mot de passe"
              placeholder="Enter your password"
            ></v-text-field>

            <br>

            <v-btn
              :disabled="!form"
              :loading="loading"
              block
              color="success"
              size="large"
              type="submit"
              variant="elevated"
            >
              Se Connecter
            </v-btn>
            <br>

            <v-btn
              block
              color="success"
              size="large"
              @click="$router.push('/Register')"
              variant="elevated"
            >
              S'inscrire
            </v-btn>
          </v-form>
        </v-card>
      </v-img>
  </div>
</template>

<script>
import router from '@/router'

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
        router.push('/DashBoard')
      },
      required (v) {
        return !!v || 'Champ requis'
      },
    },
  }
</script>
