import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity ,StatusBar,TextInput, Image, Platform} from 'react-native';
/*--导入外部的组件类--*/
import HomeDetail from "./XMCHomeDetail";

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
export default class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/*首页的导航条*/}
        {this.renderNavBar()}
        <TouchableOpacity
          onPress={() => {
            this.pushToDetail(); // 点击按钮时关闭当前窗口
          }}
        >
          <Text style={styles.welcome}>首页</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 跳转到二级界面
  pushToDetail() {
    this.props.navigator.push({
      component: HomeDetail, // 要跳转的板块
      title: '详情页'
    });
  }

  renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        <StatusBar  backgroundColor="rgba(255,96,0,1.0)"
                    barStyle="light-content" />
        {/*左边*/}
        <TouchableOpacity
          onPress={() => this.pushToDetail()}
        >
          <Text style={{color: 'white'}}>广州</Text>
        </TouchableOpacity>

        {/*中间*/}
        <TextInput
          placeholder="输入商家,品类,商圈"
          style={styles.topInputStyle}
        />

        {/*右边*/}
        <View style={styles.rightNavViewStyle}>
          <TouchableOpacity
            onPress={() => {
              alert('点击了'); // 点击按钮时关闭当前窗口
            }}
          >
            <Image source={require('./../../image/bell.png')} style={styles.navRightImgStyle}/>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('点击了'); // 点击按钮时关闭当前窗口
            }}
          >
            <Image source={require('./../../image/scan.png')} style={styles.navRightImgStyle}/>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBarStyle: {// 导航条样式
    height: Platform.OS==='ios'?64:44,
    backgroundColor: 'rgba(255,96,0,1.0)',
    //设置主轴的方向
    flexDirection: 'row',
    // 垂直居中---设置侧轴的对齐方式
    alignItems: 'center',

    // 设置主轴的对齐方式
    justifyContent: 'space-around'
  },
  rightNavViewStyle: {
    flexDirection: 'row',
    height: 64,
    // 设置侧轴的对齐方式
    alignItems: 'center'
  },
  topInputStyle: { // 设置输入框
    width: width * 0.71,
    height: Platform.OS==='ios'?35:35,
    backgroundColor: 'white',
    marginTop:Platform.OS==='ios'?18:0,
    // 设置圆角
    borderRadius: 18,
    //内左边距
    paddingLeft: 10,
    //内上边距
    paddingTop: 8
  },
  navRightImgStyle: { // 设置图片大小
    width: Platform.OS==='ios'?30:28,
    height: Platform.OS==='ios'?30:28,
  },

  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
