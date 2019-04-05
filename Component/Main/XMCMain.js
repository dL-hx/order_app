import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Platform} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

/*------导入外部的组件类------*/
import TabNavigator from 'react-native-tab-navigator';
import Home from './../Home/XMCHome'
import Shop from './../Shop/XMCShop'
import Mine from './../Mine/XMCMine'
import More from '../More/XMCMore'
export default class Main extends Component<Props> {

  // 初始化函数(变量是可以改变的,充当状态机的角色)
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
        <TabNavigator>
          {/*--首页--*/}
          <TabNavigator.Item
            title="首页"
            renderIcon={() => <Image source={require('./../../image/home.png')} style={styles.iconStyle} />} // 图标
            renderSelectedIcon={() => <Image source={require('./../../image/home_selected.png')} style={styles.iconStyle} />} // 选中图标
            selected={this.state.selectedTab === 'home'}
            onPress={() => this.setState({ selectedTab: 'home' })}
          >
            <Navigator
              initialRoute={{
                name:'首页',
                component:Home
              }}
              configureScene = {()=>{
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route, navigator) => {  // 渲染的屏幕, 从子组件接受参数
                let Component = route.component; // 从路由中取出组件
                return <Component navigator={navigator} {...route.passProps}/>; // 返回组件
              }}
            />
          </TabNavigator.Item>
          {/*--商家--*/}
          <TabNavigator.Item
            title="商家"
            renderIcon={() => <Image source={require('./../../image/shop.png')} style={styles.iconStyle} />} // 图标
            renderSelectedIcon={() => <Image source={require('./../../image/shop_selected.png')} style={styles.iconStyle} />} // 选中图标
            selected={this.state.selectedTab === 'shop'}
            onPress={() => this.setState({ selectedTab: 'shop' })}
          >
            <Navigator
              initialRoute={{
                name:'商家',
                component:Shop
              }}
              configureScene = {()=>{
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route, navigator) => {  // 渲染的屏幕, 从子组件接受参数
                let Component = route.component; // 从路由中取出组件
                return <Component navigator={navigator} {...route.passProps}/>; // 返回组件
              }}
            />
          </TabNavigator.Item>
          {/*--我的--*/}
          <TabNavigator.Item
            title="我的"
            renderIcon={() => <Image source={require('./../../image/mine.png')} style={styles.iconStyle} />} // 图标
            renderSelectedIcon={() => <Image source={require('./../../image/mine_selected.png')} style={styles.iconStyle} />} // 选中图标
            selected={this.state.selectedTab === 'mine'}
            onPress={() => this.setState({ selectedTab: 'mine' })}
          >
            <Navigator
              initialRoute={{
                name:'我的',
                component:Mine
              }}
              configureScene = {()=>{
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route, navigator) => {  // 渲染的屏幕, 从子组件接受参数
                let Component = route.component; // 从路由中取出组件
                return <Component navigator={navigator} {...route.passProps}/>; // 返回组件
              }}
            />
          </TabNavigator.Item>
          {/*--更多--*/}
          <TabNavigator.Item
            title="更多"
            renderIcon={() => <Image source={require('./../../image/more.png')} style={styles.iconStyle} />} // 图标
            renderSelectedIcon={() => <Image source={require('./../../image/more_selected.png')} style={styles.iconStyle} />} // 选中图标
            selected={this.state.selectedTab === 'more'}
            onPress={() => this.setState({ selectedTab: 'more' })}
          >
            <Navigator
              initialRoute={{
                name:'更多',
                component:More
              }}
              configureScene = {()=>{
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route, navigator) => {  // 渲染的屏幕, 从子组件接受参数
                let Component = route.component; // 从路由中取出组件
                return <Component navigator={navigator} {...route.passProps}/>; // 返回组件
              }}
            />
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: Platform.OS==='ios'?30:25,
    height: Platform.OS==='ios'?30:25
  },
});
