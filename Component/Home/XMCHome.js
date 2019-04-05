import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
/*--导入外部的组件类--*/
import HomeDetail from "./XMCHomeDetail";


export default class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.pushToDetail() // 点击按钮时关闭当前窗口
          }}
        >
          <Text style={styles.welcome}>首页</Text>
        </TouchableOpacity>
      </View>
    );
  }
  // 跳转到二级界面
  pushToDetail(){
      this.props.navigator.push({
        component:HomeDetail, // 要跳转的板块
        title:'详情页'
      })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
