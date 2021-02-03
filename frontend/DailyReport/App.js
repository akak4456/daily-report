import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MainScreen from './components/MainScreen';
import SubScreen from './components/SubScreen';
import {string, strings} from './lang/index';
class App extends Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="main"
            component={MainScreen}
            title={strings.MAIN_TITLE}
            initial={true}
          />
          <Scene key="sub" component={SubScreen} title="SubScreen" />
        </Scene>
      </Router>
    );
  }
}
export default App;
