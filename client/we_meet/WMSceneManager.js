'use strict'
import React from 'react';
import {
    Text,
    Navigator,
} from 'react-native'

let SceneManagerCreator = function () {
    // @private

    return {
         // @public
         route: function (route: {scene: {}, data: {}}, navigator:Navigator) {
             SceneManager.navigator = navigator;
             let result = <Text> Error! No Scene to Show! </Text>

             try {
                 result = route.scene && route.scene.render && route.scene.render(route.data);
             } catch (err) {
                 // TODO
                 console.log("[WE MEET] route error: ", err);
             }

             return result;
         },
         reigsterScene: function (name: string, renderFunc: (data: {} ) => object) {
             SceneManager.Scene[name.toUpperCase()] = {name: name, render: renderFunc};
         },
         changeScene: function (scene: {name: {}, render: (data: {}) => object}, data: {}) {
             console.log("[WE MEET] Change Scene => " + scene.name);
             SceneManager.navigator.push ({
                 name: scene,
                 data: data
             });
         },
    }
};

let SceneManager = (function () {
    var _instance;

    return {
        Scene: {},
        get I() {
            if (!_instance)
                _instance = SceneManagerCreator();
            return _instance;
        }
    };
})();

import SplashScene from './WMSplashScene'
SceneManager.I.reigsterScene ("Splash", (data) => {
  return <SplashScene />
});

module.exports = SceneManager;
