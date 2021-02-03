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
import { Router,Scene } from 'react-native-router-flux';
import MainScreen from './components/MainScreen';
import SubScreen from './components/SubScreen';

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
      <Router>
        <Scene key="root">
          <Scene
            key="main"
            component={MainScreen}
            title="MainScreen"
            initial={true}
          />
          <Scene
            key="sub"
            component={SubScreen}
            title="SubScreen"
            />
        </Scene>
      </Router>
    );
  }
}
export default App;
