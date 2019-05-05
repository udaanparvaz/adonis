<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs4>
      <Panel v-bind:items="titles">
      </Panel>
     </v-flex>
     <v-flex xs8 >
      <Desk :enrolled="enrolledCourse" :open_course="getClickedCourse" :is_enrolled="isEnrolled" :main_title="enrolled_courses_title">
      </Desk>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import router from '../router';
import { mapState, mapActions, mapGetters } from 'vuex';
import Panel from '@/components/Panel.vue';


export default {
  name: 'ClassroomVue',
  components: {
    Panel,
  },
  data() {
    return {
      titles: [
        { title: 'Home', icon: 'dashboard', link: '/classroom' },
        { title: 'Browse', icon: 'dashboard', link: '/browse' },
      ],
      enrolled_courses_title: 'Enrolled Courses',
    };
  },
  computed: {
    ...mapState('classroom', ['enrolledCourse', 'isEnrolled']),
    ...mapGetters('authentication', ['isLoggedIn']),
  },
  methods: {
    getClickedCourse(courseId) {
      router.push('/lesson/'.concat(courseId));
    },
    ...mapActions('classroom', ['getEnrolled', 'checkEnrolled']),
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
    this.getEnrolled();
  },
};
</script>

<style>

</style>
