import 'vuetify/dist/vuetify.min.css';
import { sync } from 'vuex-router-sync';
import Vuetify from 'vuetify';

import Vue from 'vue';
import App from './App.vue';
import Panel from './components/Panel.vue';
import Desk from './components/Desk.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuetify);

sync(store, router);
Vue.component('Panel', Panel);
Vue.component('Desk', Desk);
new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
