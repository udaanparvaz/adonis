/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import HTTP from './http';
import router from './router';

export default {
  namespaced: true,
  state: {
    enrolledCourse: [],
    allCourse: [],
    click_course: '',
  },
  actions: {
    getEnrolled({ commit }) {
      return HTTP().post('api/enrolled').then(({ data }) => {
        commit('setEnrolled', data);
      });
    },
    getAll({ commit }) {
      return HTTP().post('api/getAllCourses').then(({ data }) => {
        commit('setAll', data);
      });
    },
    getClickedCourse({ courseId }) {
      console.log('cheea');
      // commit('setClickedCourse', courseId);
      // router.push('/lesson');
    },
    checkEnrolled({ state }) {
      console.log(state.enrolledCourse);
    },
  },
  getters: {
    isEnrolled(state) {
      return state.enrolledCourse.length > 0;
    },
  },
  mutations: {
    setEnrolled(state, enrolled) {
      state.enrolledCourse = enrolled;
    },
    setAll(state, all) {
      state.allCourse = all;
    },
    setClickedCourse(state, courseId) {
      state.click_course = courseId;
    },
  },
};
