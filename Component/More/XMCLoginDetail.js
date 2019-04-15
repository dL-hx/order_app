import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Alert,//简单的JS弹出框
  TouchableOpacity,
  Dimensions,//获取屏幕宽高
  View
} from 'react-native';
import More from "./XMCMore"

var width = Dimensions.get('window').width;//得到屏幕宽度

export default class LoginDetail extends Component {
  //构造函数
  constructor(props) {
    super(props);
    //两个状态用户输入框文本，密码框文本
    this.state = {user_text: '',pass_text: ''};
  }
  //点击事件函数
  onButtonPress ()  {
    Alert.alert('用户信息','您输入的手机号为：'+this.state.user_text+'，输入的密码为：'+this.state.pass_text);
    this.props.navigator.push(
      {
        component: More, // 要跳转的版块
      }
    );
  };

  render() {
    return (
      <View style={LoginStyles.container}>
        <Image source={require('../../image/login.png')}//项目中的图片
               style={LoginStyles.logoImg}/>
        <TextInput  placeholder="手机号"
                    underlineColorAndroid={'transparent'}//去掉下划线
                    style={LoginStyles.username}
          //将文本写入state
                    onChangeText={(user_text) => this.setState({user_text})}/>
        <TextInput  placeholder="密码"
                    secureTextEntry={true}//隐藏输入内容
                    underlineColorAndroid={'transparent'}
                    style={LoginStyles.username}
                    onChangeText={(pass_text) => this.setState({pass_text})}/>

        <TouchableOpacity
          activeOpacity={0.5}//点击时的透明度
          style={LoginStyles.login}
          //点击事件，要记得绑定
          onPress={this.onButtonPress.bind(this)}>
          <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
            登录
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const LoginStyles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#e8e8e8'
  },
  logoImg: {
    width:100,
    height:108,
    alignSelf:'center',//设置子控件的位置居中
    marginBottom:60
  },
  username: {
    width:width-32,//居中，宽度为屏幕宽度-32，这样左右都有16的边距
    borderRadius: 20,//输入框边界圆角度数
    borderColor: 'skyblue',//输入框边界颜色
    marginBottom:16,
    paddingLeft:10,//这里是为了在圆角之后输入
    padding:0,//去掉Android默认的padding
    borderWidth: 1,
    alignSelf:'center'//自身居中
  },
  login :{
    width:width-32,
    height:35,
    borderRadius: 20,//按钮圆角
    alignSelf:'center',
    backgroundColor:'#00A7FF',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'//显示Text组件居中
  },
});

