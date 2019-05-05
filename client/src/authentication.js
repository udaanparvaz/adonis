/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import HTTP from './http';
import router from './router';

export default {
  namespaced: true,
  state: {
    registerEmail: null,
    registerPassword: null,
    registerError: null,
    loginEmail: null,
    loginPassword: null,
    loginError: null,
    token: null,
  },
  actions: {
    login({ commit, state }) {
      commit('setLoginError', null);
      return HTTP().post('api/auth/login', {
        email: state.loginEmail,
        password: state.loginPassword,
      }).then(({ data }) => {
        commit('setToken', data.token);
        router.push('/classroom');
      }).catch(() => {
        commit('setLoginError', 'An error occured.');
      });
    },
    logout({ commit }) {
      commit('setToken', null);
      router.push('/login');
    },
    register({ commit, state }) {
      commit('setRegisterError', null);
      return HTTP().post('api/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      }).then(({ data }) => {
        commit('setToken', data.token);
        router.push('/');
      }).catch(() => {
        commit('setRegisterError', 'An error occured.');
      });
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
    setLoginEmail(state, email) {
      state.loginEmail = email;
    },
    setLoginPassword(state, password) {
      state.loginPassword = password;
    },
  },
};
