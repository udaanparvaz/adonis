<template>
  <v-card class="pa-5" color="#008499" flat>
      <v-card-title primary-title>
          <h3 class="headline mb-0">{{main_title}}</h3>
      </v-card-title>
    <!-- <v-card >
        <v-list v-if="is_enrolled">
          <v-list-tile v-for="item in enrolled" :key="item.name">
            <v-list-tile-action>
              {{ item.category_name }}
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <div class="pt-5 pb-5" v-if="!is_enrolled">
          <slot>No courses enrolled.</slot>
        </div>
    </v-card> -->
    <v-list two-line>
          <template v-for="(item) in enrolled">
            <v-list-tile
              :key="item.name"
              ripple
              @click="open_course(item._id)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.category_name }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.name }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <!-- <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon
                  v-if="selected.indexOf(index) < 0"
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-2"
                >
                  star
                </v-icon>
              </v-list-tile-action> -->

            </v-list-tile>
            <!-- <v-divider
              v-if="index + 1 < items.length"
              :key="index"
            ></v-divider> -->
          </template>
        </v-list>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    enrolled: Array,
    main_title: String,
    is_enrolled: Boolean,
    open_course: Function,
  },
  computed: {
    ...mapState('classroom', ['click_course']),
  },
  methods: {
    ...mapMutations('classroom', ['setClickedCourse']),
  },
};

</script>

<style>
</style>
