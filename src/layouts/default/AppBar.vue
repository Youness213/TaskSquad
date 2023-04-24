<template>
  <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon>
        <v-menu activator="parent" transition="slide-x-transition">
      <template v-slot:activator="{ props }">
        <v-btn
        density="comfortable"
        icon="mdi-format-list-checkbox"
          v-bind="props"
          large
        >
          
        </v-btn>
      </template>
      <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>
              <v-btn @click="$router.push(item.route)" elevation="0">

                {{ item.title }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      
    </v-menu>
  </v-app-bar-nav-icon>

      <v-toolbar-title>Task Squad</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon >
        <v-icon>{{ IsConnected }}</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Acceuil', route: '/Home' },
        { title: 'Connection', route: '/LogIn' },
        { title: 'Nouveau Compte', route: '/Register' },
      ],
      IsConnected: "",
    }),
    mounted(){
      this.IsConnected = "mdi-export"
    }
  }

</script>
