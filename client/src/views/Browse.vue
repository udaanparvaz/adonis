<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs4>
      <Panel v-bind:items="titles">
      </Panel>
     </v-flex>
     <v-flex xs8 >
      <Desk :enrolled="allCourse" :open_course="getCourseId" :is_enrolled="isEnrolled" :main_title="browse_courses_title">
      </Desk>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import Panel from '@/components/Panel.vue';
import router from '../router';

export default {
  name: 'BrowseVue',
  components: {
    Panel,
  },
  data() {
    return {
      titles: [
        { title: 'Home', icon: 'dashboard', link: '/classroom' },
        { title: 'Browse', icon: 'dashboard', link: '/browse' },
      ],
      browse_courses_title: 'Browse Courses',
    };
  },
  computed: {
    ...mapState('classroom', ['allCourse']),
    ...mapGetters('authentication', ['isLoggedIn']),
    ...mapGetters('classroom', ['isEnrolled']),
  },
  methods: {
    getCourseId(courseIdChild) {
      console.log(courseIdChild);
      router.push('/lesson');
    },
    ...mapActions('classroom', ['getAll', 'checkEnrolled']),
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
    this.getAll();
  },
};
</script>
