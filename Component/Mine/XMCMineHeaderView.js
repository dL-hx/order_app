import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class MiddleView extends Component {
  render() {
    return (
      <View style={styles.container}>
        { /*上部分*/ }
        {this.renderTopView()}
        { /*下部分*/ }
        {this.renderBottomView()}
      </View>
    );
  }

  // 上部分
  renderTopView(){
    return(
      <View style={styles.topViewStyle}>
        <Image source={require('./../../image/avator.png')} style={styles.leftIconStyle}/>
        <View style={styles.centerViewStyle}>
          <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>快乐的小天使</Text>
          {/*--右边的vip logo--*/}
          <Image source={require('./../../image/vip.png')} style={{width:22,height:22,marginRight:8}} />
        </View>
      </View>
    )
  }

  // 下部分
  renderBottomView(){
    return(
      <View style={styles.bottomViewStyle}>
        {this.renderBottomItem()}
      </View>
    );
  }

  renderBottomItem(){
    // 数组
    var itemArr = [];
    //数据数组
    var data = [{'number':'35', 'title':'饭团券'},{'number':'12', 'title':'评价'},{'number':'50', 'title':'收藏'},];
    //遍历创建组件装入数组
    for (var i = 0; i < data.length; i++) {
      //取出单独的数据
      var item = data[i];
      itemArr.push(
        <TouchableOpacity key={i}>
          <View style={styles.bottomInnerViewStyle}>
            <Text style={{color:'white',fontSize:16}}>{item.number}</Text>
            <Text style={{color:'white',fontSize:15,marginTop:5}}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    //返回数组
    return itemArr;
  }

}

const styles = StyleSheet.create({
  container: {
    height:Platform.OS=='ios'?400:200,
    backgroundColor: '#1fb5ec',
  },
  leftIconStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  centerViewStyle: {
    flexDirection:'row',
    width:width * 0.72,
  },
  topViewStyle: {
    flexDirection: 'row',
    marginTop: Platform.OS=='ios'?280:80,
    //设置侧轴的对其方式
    alignItems: 'center',
    //设置主轴的对其方式
    justifyContent: 'space-around'
  },
  bottomViewStyle: {
    flexDirection:'row',
    //绝对定位
    position:'absolute',
    bottom: 0,
  },
  bottomInnerViewStyle: {
    width:(width/3)+1,
    height: 50,
    backgroundColor:'rgba(255,255,255,0.5)',
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:1,
    borderRightColor:'white'
  }
});


