import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Homepage from './pages/homepage';
import RestoDetail from './pages/restoDetail';

const Stack = createStackNavigator();

const HomeStack = props => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="RestoDetail" component={RestoDetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
