import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from './types';

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});
export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
