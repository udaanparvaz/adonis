<template>
  <v-toolbar color="#008499" dark fixed>
    <v-toolbar-title>Vue-Learning</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-if="!isLoggedIn" to="/login">Login</v-btn>
      <v-btn flat v-if="isLoggedIn" @click="logout">Logout</v-btn>
      <v-btn flat v-if="!isLoggedIn" to="/register">Register</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', ['isLoggedIn']),
  },
  methods: {
    ...mapActions('authentication', [
      'logout',
    ]),
  },
};
</script>

<style>
</style>
