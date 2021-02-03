import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class SubScreen extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => Actions.main()}>서브</Text>
      </View>
    );
  }
}

export default SubScreen;
