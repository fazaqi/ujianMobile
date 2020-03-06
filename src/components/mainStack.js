import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/login';
import Tabmenu from './tabNav';
import Home from './pages/homepage';
import RestoDetail from './pages/restoDetail';
const Stack = createStackNavigator();

const MainStack = props => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestoDetail" component={RestoDetail} />
      {/* <Stack.Screen name="Tabmenu" component={Tabmenu} /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
