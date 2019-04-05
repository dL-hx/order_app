/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

/*------导入外部的组件类------*/
import Main from './Component/Main/XMCMain';
import LaunchImage from "./Component/Main/XMCLaunchImage";
import {Navigator} from "react-native-deprecated-custom-components";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class XMCBuy extends Component<Props> {
  render() {
    return (
        <Navigator
          initialRoute={{
            name: '启动页',
            component: LaunchImage
          }}
          configureScene={() => {
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {  // 渲染的屏幕, 从子组件接受参数
            let Component = route.component; // 从路由中取出组件
            return <Component navigator={navigator} {...route.passProps}/>; // 返回组件
          }}
        />
    );
  }
}

