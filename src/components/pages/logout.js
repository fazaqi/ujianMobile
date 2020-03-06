import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

class Logout extends Component {
  render() {
    return (
      <View style={style.container}>
        <Button title="Log out" />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logout;
