import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import Logout from './pages/logout';
import HomeStack from './homeStack';

const Tab = createBottomTabNavigator();

const Logoutnav = nav => {
  return ({navigation}) => <Logout navigation={navigation} />;
};

const TabNav = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Homenav"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeNav') {
            iconName = 'home';
          } else if (route.name === 'LogOut') {
            iconName = 'restaurant-menu';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={35} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        showLabel: false,
      }}>
      <Tab.Screen name="Homenav" component={HomeStack} />
      <Tab.Screen name="Logout" component={Logout}>
        {Logoutnav(navigation)}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNav;
