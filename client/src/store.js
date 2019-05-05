/* eslint-disable import/no-cycle */
// import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import classroom from './classroom';

Vue.use(Vuex);

// function createWebSocketPlugin(socket) {
//   return (store) => {
//     // socket.on('data', (data) => {
//     //   console.log('inside socket');
//     //   store.commit('receiveData', data);
//     // });
//     store.subscribe((mutation) => {
//       console.log('inside mutation');
//       if (mutation.type === 'UPDATE_DATA') {
//         // socket.emit('update', mutation.payload);
//       }
//     });
//   };
// }
const store = new Vuex.Store({
  strict: true,
  state: {
    baseUrl: '/api',
  },
  modules: {
    authentication,
    classroom,
  },
  mutations: {

  },
  actions: {

  },
  plugins: [
  //   // createPersistedState(),
    // createWebSocketPlugin,
  ],
});

export default store;
