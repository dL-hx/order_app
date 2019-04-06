import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image, WebView,Platform} from 'react-native'


export default class Shop extends Component {
  state = {
    detailUrl: 'http://i.meituan.com/beijing/all/?cid=36&stid_b=1&cateType=poi'
  }

  render() {
    // alert(this.props.url);
    return (
      <View style={styles.container}>
        {/*导航*/}
        {this.renderNavBar()}

        <WebView
          automaticallyAdjustContentInsets={true}
          source={{uri: this.state.detailUrl}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
        />
      </View>
    )
  }

  // 导航条
  renderNavBar() {
    return (
      <View style={styles.navOutViewStyle}>
        <TouchableOpacity onPress={() => {
          this.props.navigator.pop()
        }} style={styles.leftViewStyle}>
          <Image source={require('./../../image/location.png')} style={styles.navImageStyle}/>
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>商家</Text>
        <TouchableOpacity style={styles.rightViewStyle}>
          <Image source={require('./../../image/search.png')} style={styles.navImageStyle}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  navImageStyle: {
    width: Platform.OS == 'ios' ? 28 : 28,
    height: Platform.OS == 'ios' ? 28 : 28,
  },

  leftViewStyle: {
    // 绝对定位
    position: 'absolute',
    left: 10,
    bottom: Platform.OS == 'ios' ? 15 : 9
  },

  rightViewStyle: {
    // 绝对定位
    position: 'absolute',
    right: 10,
    bottom: Platform.OS == 'ios' ? 15 : 9
  },

  navOutViewStyle: {
    height: Platform.OS == 'ios' ? 64 : 44,
    backgroundColor: 'rgba(255,96,0,1.0)',

    // 设置主轴的方向
    flexDirection: 'row',
    // 垂直居中 ---> 设置侧轴的对齐方式
    alignItems: 'center',
    // 主轴方向居中
    justifyContent: 'center'
  },
})
