<template>
  <v-card class="pa-5" color="#008499" flat>
    <v-card class="d-inline-block elevation-12">
      <v-navigation-drawer floating permanent stateless value="true">
        <v-list dense>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: {
    items: Array,
    value: null,
  },
  methods: {
  },
};
</script>

<style>
</style>
