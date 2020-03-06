import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {Header, Card} from 'react-native-elements';

const RestoDetail = ({route, navigation}) => {
  console.log(route);
  //   console.log(navigation);

  return (
    <View>
      <Header
        placement="left"
        leftComponent={{
          icon: 'arrow-back',
          color: 'white',
          onPress: () => navigation.goBack(),
        }}
        containerStyle={{
          backgroundColor: 'tomato',
          justifyContent: 'space-around',
          marginTop: -20,
        }}
      />
    </View>
  );
};

export default RestoDetail;
