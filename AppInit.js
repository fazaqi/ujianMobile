import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/components/mainStack';

const Appinit = () => {
  console.disableYellowBox = true;

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Appinit;
