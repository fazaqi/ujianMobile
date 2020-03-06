import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card, CardItem, Left} from 'native-base';
import {Header, Icon} from 'react-native-elements';
import Axios from 'axios';
import Restocard from './restoCard';

class Home extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    Axios.get(
      'https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',
      {headers: {'user-key': '79d4d3c8fcc43192e226ebff428d8d61'}},
    )
      .then(res => {
        // console.log(res.data.restaurants[0]);
        this.setState({list: res.data.restaurants});
        // console.log(this.state.list);
      })
      .catch(err => {
        console.log(err);
      });
  }

  listPress = resto => {
    this.props.navigation.navigate('RestoDetail', {resto});
  };

  render() {
    return (
      <View style={style.container}>
        <Header
          rightComponent={{
            text: 'Halo, ...',
            style: {color: 'white', fontSize: 20},
          }}
          containerStyle={{
            backgroundColor: 'tomato',
            marginTop: -20,
          }}
        />
        <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10}}>
          {/* //// */}
          <View
            style={{alignItems: 'center', width: '25%', marginVertical: 10}}>
            <Icon
              name="credit-card"
              size={30}
              type="entypo"
              color="tomato"
              containerStyle={{
                borderWidth: 2,
                borderColor: 'tomato',
                borderRadius: 45,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Text style={{fontSize: 13}}>Credit Card</Text>
          </View>
          <View
            style={{alignItems: 'center', width: '25%', marginVertical: 10}}>
            <Icon
              name="food-variant"
              size={30}
              type="material-community"
              color="tomato"
              containerStyle={{
                borderWidth: 2,
                borderColor: 'tomato',
                borderRadius: 45,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Text style={{fontSize: 13}}>Variant</Text>
          </View>
          <View
            style={{alignItems: 'center', width: '25%', marginVertical: 10}}>
            <Icon
              name="food-fork-drink"
              size={30}
              type="material-community"
              color="tomato"
              containerStyle={{
                borderWidth: 2,
                borderColor: 'tomato',
                borderRadius: 45,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Text style={{fontSize: 13}}>Recipe</Text>
          </View>
          <View
            style={{alignItems: 'center', width: '25%', marginVertical: 10}}>
            <Icon
              name="location-pin"
              size={30}
              type="entypo"
              color="tomato"
              containerStyle={{
                borderWidth: 2,
                borderColor: 'tomato',
                borderRadius: 45,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Text style={{fontSize: 13}}>Location</Text>
          </View>
          <View
            style={{alignItems: 'center', width: '25%', marginVertical: 10}}>
            <Icon
              name="shopping-cart"
              size={30}
              type="font-awesome"
              color="tomato"
              containerStyle={{
                borderWidth: 2,
                borderColor: 'tomato',
                borderRadius: 45,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Text style={{fontSize: 13}}>Cart</Text>
          </View>
          <View
            style={{alignItems: 'center', width: '25%', marginVertical: 10}}>
            <Icon
              name="local-pizza"
              size={30}
              type="material"
              color="tomato"
              containerStyle={{
                borderWidth: 2,
                borderColor: 'tomato',
                borderRadius: 45,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Text style={{fontSize: 13}}>Pizza</Text>
          </View>
          <View
            style={{alignItems: 'center', width: '25%', marginVertical: 10}}>
            <Icon
              name="hamburger"
              size={30}
              type="material-community"
              color="tomato"
              containerStyle={{
                borderWidth: 2,
                borderColor: 'tomato',
                borderRadius: 45,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Text style={{fontSize: 13}}>Burger</Text>
          </View>
          <View
            style={{alignItems: 'center', width: '25%', marginVertical: 10}}>
            <Icon
              name="more-horizontal"
              size={30}
              type="feather"
              color="tomato"
              containerStyle={{
                borderWidth: 2,
                borderColor: 'tomato',
                borderRadius: 45,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Text style={{fontSize: 13}}>More</Text>
          </View>
          {/* //// */}
        </View>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => this.listPress(item.restaurant)}>
              <View style={{width: '50%'}}>
                <Restocard data={item} />
              </View>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={item => item.restaurant.name}
          style={{width: '98%'}}
          numColumns={2}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
