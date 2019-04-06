import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, Switch, Platform} from 'react-native'


export default class CommonCell extends Component {

  static defaultProps() {
    return {
      title: '', //标题
      isSwitch: false,// 是否展示开关,
      rightTitle: ''
    }
  };

  state = {
    isOn: false
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        // onPress={() => {
        //   alert('点了')
        // }}
      >
        <View style={styles.container}>
          {/*左边*/}
          <Text style={{fontSize: 16, marginLeft: 8}}>{this.props.title}</Text>
          {/*右边*/}
          {this.renderRightView()}
        </View>
      </TouchableOpacity>
    )
  }

  // cell右边显示的内容
  renderRightView() {
    // 判断
    if (this.props.isSwitch) {//true
      return <Switch value={this.state.isOn === true} onValueChange={() => {
        this.setState({
          isOn: !this.state.isOn,
        })
      }} style={{marginRight: 8}}/>
    } else {
      return <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {this.rightTitle()}
        <Image source={require('./../../image/arrow.png')} style={{width: 22, height: 22, marginRight: 8}}/>
      </View>
    }
  }

  //
  rightTitle() {
    if (this.props.rightTitle) {
      return <Text style={{color: 'gray', marginRight: 3}}>{this.props.rightTitle}</Text>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 40 : 45,
    backgroundColor: 'white',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.5,

    flexDirection: 'row',
    // 主轴对齐方式
    justifyContent: 'space-between',
    // 设置侧轴的对齐方式----垂直居中
    alignItems: 'center'
  }
})
