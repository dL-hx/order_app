import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Home from "./XMCHome";


export default class HomeDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.popToHome() // 点击按钮时关闭当前窗口
          }}
        >
          <Text style={styles.welcome}>
            测试跳转
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  popToHome() {
    this.props.navigator.pop({
      component:Home, // 要跳转的板块
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
