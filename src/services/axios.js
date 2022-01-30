import Axios from 'axios';
import _ from 'lodash';
import { makeUseAxios } from 'axios-hooks';
import LRU from 'lru-cache';
import { store } from '../redux/store';

// import { apiUrl } from "../utils/config";
const apiUrll = 'https://gorest.co.in/public/v1';
const toFormData = (data) => {
  const formData = new FormData();
  _.forOwn(data, (value, key) => {
    if (typeof value !== 'undefined') {
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i += 1) {
          formData.append(`${key}[]`, value[i]);
        }
      } else {
        formData.append(key, value);
      }
    }
  });
  return formData;
};
let apiUrl = apiUrll

store.subscribe(() => {
  const state = store.getState();
  const { locale } = state.langState;
  const token = state.userState.token;

  axios.defaults.baseURL = apiUrl;
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
});

const axios = Axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
  // transform request data obj to FormData
  transformRequest: [(data) => toFormData(data)],
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // validation errors
      if (error.response.status === 422) {
        const { errors: errorsArr } = error.response.data;
        const validationErrors = [];
        _.forOwn(errorsArr, (value, name) => {
          validationErrors.push({
            name,
            message: value[0],
          });
        });

        const errors = { ...error, validationErrors };
        return Promise.reject(errors);
      }
    }

    return Promise.reject(error);
  },
);

const cache = new LRU({ max: 20 });

const useAxios = makeUseAxios({
  axios,
  cache,
});

export default {
  axios,
  useAxios,
  toFormData,
};
