/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Appinit from './AppInit';
import thunk from 'redux-thunk';
import Reducers from './src/redux/reducers';

const store = createStore(Reducers, {}, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Appinit />
    </Provider>
  );
};

export default App;
