/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {strings, changeLanguage} from './lang';

class App extends Component{
  constructor(){
    //ABC
    super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler(){
    this.forceUpdate();
  };

  render(){
    return(
      <View>
        <Text>
          {strings.step}
        </Text>
        <Button title="타이틀" onPress={()=>{changeLanguage('en');this.forceUpdate();}} />
      </View>
    );
  }
}
export default App;
