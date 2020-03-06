import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Icon, Input} from 'react-native-elements';

class Login extends Component {
  render() {
    return (
      <View>
        <View style={style.tomatoapp}>
          <Text style={{color: 'tomato', fontSize: 40}}>Tomato App</Text>
          <Icon
            name="food"
            size={80}
            type="material-community"
            color="tomato"
          />
          <View style={{width: '100%'}}>
            <Input
              placeholder="Username"
              leftIcon={
                <Icon name="user" size={24} type="antdesign" color="tomato" />
              }
            />
          </View>
          <View style={{marginTop: 40, width: '100%'}}>
            <Button title="Enter" color="tomato" />
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  tomatoapp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  inputtt: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Login;
