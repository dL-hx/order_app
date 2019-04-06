import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native'

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

// 引入外部的json数据
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');
/*--引入外部的组件--*/
import CommonView from "./XMCMiddleCommonView"


export default class HomeMiddleView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*左边*/}
        {this.renderLeftView()}
        {/*右边*/}
        <View>
          {this.renderRightView()}
        </View>
      </View>
    );
  }

  // 左边的View
  renderLeftView() {
    // 拿到对应的数据
    var data = TopMiddleData.dataLeft[0];

    return (
      <TouchableOpacity>
        <View style={styles.leftViewStyle}>
          <Image source={{uri: data.img1}} style={styles.leftImageStyle}/>
          <Image source={{uri: data.img2}} style={styles.leftImageStyle}/>
          <Text style={{color:'gray'}}>{data.title}</Text>
          <View style={{flexDirection:'row', marginTop:5}}>
            <Text style={{color: '#00FA9A', marginRight:5}}>{data.price}</Text>
            <Text style={{color: 'orange', backgroundColor:'yellow'}}>{data.sale}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  // 右边的View
  renderRightView(){
    // 组件数组
    var itemArr = [];
    // 取出具体的数据
    var rightData = TopMiddleData.dataRight;
    // 遍历创建组件
    for(var i=0; i<rightData.length; i++){
      var data =rightData[i]
      itemArr.push(
        <CommonView key={i}
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
        />
      );
    }
    // 返回组件数组
    return itemArr
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:15,
    // 改变主轴的方向
    flexDirection:'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  leftViewStyle:{
    width:width * 0.5,
    height:119,
    backgroundColor:'white',
    marginRight:1,

    // 水平居中
    alignItems:'center',
    justifyContent:'center'
  },
  leftImageStyle:{
    width:120,
    height:30,

    // 内容模式
    resizeMode:'contain'
  }
});
