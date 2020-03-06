import {AsyncStorage} from 'react-native';
import {LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_LOADING} from '../types';

export const LoginAct = username => {
  return async dispatch => {
    try {
      dispatch({type: LOGIN_LOADING});
      await AsyncStorage.setItem('username', username);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: username,
      });
    } catch {
      dispatch({type: LOGIN_FAILED});
    }
  };
};

export const LoginCheck = () => {
  return async dispatch => {
    try {
      const username = await AsyncStorage.getItem('username');
      if (!username) {
        return dispatch({type: LOGIN_FAILED});
      }

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {username},
      });
    } catch (err) {
      dispatch({type: LOGIN_FAILED});
    }
  };
};

export const LogoutAct = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('username');
    dispatch({type: LOGIN_FAILED});
  };
};
