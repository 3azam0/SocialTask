import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from '../actions/types';

const INITIAL_STATE = {
  user: null,
  token: null,
  isSignedIn:false,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        isSignedIn: action.payload.isSignedIn
      };
    case UPDATE_USER:
      return { ...state, user: action.payload.user };
    case LOGOUT_USER:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};
