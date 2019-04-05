import React, {Component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
/*--导入外部组件--*/
import Main from "./XMCMain";

export default class LaunchImage extends Component<Props> {
  render() {
    return (
      <Image source={require('./../../image/launchimage.png')} style={styles.LaunchImageStyle}/>
    );
  }
  // 复杂的操作:定时器\网络请求
  componentDidMount(){
    // 定时: 隔2s 切换到Main
    setTimeout(()=>{
      // 页面切换
      this.props.navigator.replace({
        component: Main // 具体路由的板块
      })
    },2000)
  }
}

const styles = StyleSheet.create({
  LaunchImageStyle: {
    flex: 1,
  },
});
