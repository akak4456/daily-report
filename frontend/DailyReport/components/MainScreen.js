import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class MainScreen extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => Actions.sub()}>메인</Text>
      </View>
    );
  }
}

export default MainScreen;
