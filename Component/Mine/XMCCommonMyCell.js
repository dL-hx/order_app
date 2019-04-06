import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, Switch, Platform} from 'react-native'


export default class MyCell extends Component {

  static defaultProps() {
    return {
      leftIcon:'',
      leftTitle:'',
      rightIcon:'',
      rightTitle:'',
    }
  };

  state = {
    isOn: false
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}

      >
        <View style={styles.container}>
          {/*左边*/}
          <View style={styles.leftViewStyle}>
            <Image source={this.props.leftIcon} style={styles.leftImgStyle}></Image>
            <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
          </View>
          {/*右边*/}
          <View style={styles.rightViewStyle}>
            {this.rightSubView()}
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  // 右边的内容
  rightSubView() {
    return(
      <View style={{flexDirection:'row',alignItems:'center'}}>
        {this.rightRightContent()}
        {/*箭头*/}
        <Image source={require('./../../image/arrow.png')} style={{width: 22, height: 22, marginRight: 8}}/>
      </View>
    )
  }

  // 右边具体返回的值
  rightRightContent() {
    if(!this.props.rightIcon){// 不返回图片
      return (
        <Text style={{color:'gray', }}>{this.props.rightTitle}</Text>
      )
    }else {
      return (
        <Image source={this.props.rightIcon} style={{width: 40, height: 40, marginLeft:5,marginRight: 8}}/>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    // 主轴方向
    flexDirection:'row',
    // 侧轴居中
    alignItems:'center',
    // 主轴的对齐方式
    justifyContent:'space-between',

    //背景颜色
    backgroundColor: 'white',
    //高度
    height: Platform.OS === 'ios' ? 40 : 45,

    // 下边框
    borderBottomColor:'#e8e8e8',
    borderBottomWidth:0.5
  },
  leftViewStyle:{
    // 主轴方向
    flexDirection:'row',
    // 侧轴居中
    alignItems:'center',
    // 左外边距
    marginLeft: 8
  },
  rightViewStyle:{
  },
  leftImgStyle:{// 左边的图片
    width: 24,
    height: 24,
    marginRight: 6,
    // 圆角
    borderRadius:12
  },
  leftTitleStyle:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  }
})
