'use strict'

import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native'

const WINDOW_WIDTH = Dimensions.get('window').width;

let SplashScene = React.createClass ({
  getInitialState: function() {
    return {
      cover: null,
      bounceValue: new Animated.Value(1)
    }
  },

  render: function() {
    return (
      <View>
        <Text>
          Splash Scene
        </Text>
      </View>
    );
  }
});

module.exports = SplashScene;
