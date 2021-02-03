import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class MainScreen extends Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  render() {
    return (
      <View>
        <Text onPress={() => Actions.sub()}>메인asdflek</Text>
      </View>
    );
  }
}

export default MainScreen;
