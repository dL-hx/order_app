import React, {Component} from 'react';
import { StyleSheet, Text,Image, View} from 'react-native';
/*--导入外部json数据--*/
import MiddleData from './MiddleData'

export default class MiddleView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderAllItem()}
      </View>
    );
  }

  renderAllItem() {
    // 定义组件数组
    var itemArr = []
    //遍历
    for (var i = 0; i < MiddleData.length; i++) {
      // 取出单独的数据
      var data = MiddleData[i]
      // 创建组件装入数组
      itemArr.push(<InnerView key={i} title={data.title} iconName={data.iconName}/>)
    }

    // 返回
    return itemArr
  }
}
class InnerView extends Component {
  static defaultProps() {
    return {
      iconName:'',
      title:''
    }
  };
  render() {
    return (
      <View>
        <Image source={this.props.iconName} style={{width:25,height:25,marginLeft:10}} />
        <Text style={{marginTop:8}}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //设置主轴方向
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'space-around'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
