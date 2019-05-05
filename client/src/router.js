import Vue from 'vue';
import Router from 'vue-router';
import Classroom from './views/Classroom.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Lesson from './views/Lesson.vue';
import Browse from './views/Browse.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/classroom',
      name: 'classroom',
      component: Classroom,
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: Lesson,
    },
    {
      path: '/browse',
      name: 'browse',
      component: Browse,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component() {
      //   return import(/* webpackChunkName: "about" */ './views/About.vue');
      // },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});
