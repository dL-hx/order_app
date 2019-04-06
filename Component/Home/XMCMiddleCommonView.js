import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View} from 'react-native'

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


export default class CommonView extends Component {
  static defaultProps() {
    return {
      title:'',
      subTitle: '',
      rightIcon: '',
      titleColor: '',
      tplurl: '', //下级界面的URL路径
      // 回调函数
      callBackClickCell: null
    }
  };

  render() {
    return (
      <TouchableOpacity onPressIn={()=>this.clickCell(this.props.tplurl)}>
        <View style={styles.container}>
          {/*左边*/}
          <View>
            <Text style={[{color:this.props.titleColor} ,styles.titleStyle]}>{this.props.title}</Text>
            <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
          </View>
          {/*右边*/}
          <Image source={{uri: this.props.rightIcon}} style={{width: 64, height: 43,resizeMode:'contain'}}/>
        </View>
      </TouchableOpacity>
    );
  }
  // 点击了cell
  clickCell(data){
    // 判断处理
    if (this.props.callBackClickCell == null) return;
    // 执行回调函数
    this.props.callBackClickCell(data);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width:width*0.5 - 1,
    height:60,
    marginBottom:1,
    marginRight:1,

    // 改变主轴的方向
    flexDirection:'row',

    alignItems:'center',
    justifyContent:'space-around'
  },
  titleStyle: {
    fontSize:18,
    fontWeight:'bold'
  },
  subTitleStyle:{
    color:'gray'
  }
});
