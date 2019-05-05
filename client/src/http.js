/* eslint-disable import/no-cycle */
import axios from 'axios';
import store from './store';

export default () => axios.create({
  baseURL: store.state.baseURL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${store.state.authentication.token}`,
  },
});
