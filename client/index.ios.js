/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import SceneManager from './we_meet/WMSceneManager'

export default class WeMeet extends Component {
  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={ {scene: SceneManager.Scene.SPLASH} }
        configureScene={ () => Navigator.SceneConfigs.FadeAndroid }
        renderScene={SceneManager.I.route}
      />
    );
  }
}

AppRegistry.registerComponent('WeMeet', () => WeMeet);
