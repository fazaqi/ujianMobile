import {LOGIN_LOADING, LOGIN_FAILED, LOGIN_SUCCESS} from '../types';

const INITIAL_STATE = {
  username: '',
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, username: action.payload, loading: false, error: ''};
    case LOGIN_LOADING:
      return {...state, loading: true};
    case LOGIN_FAILED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
