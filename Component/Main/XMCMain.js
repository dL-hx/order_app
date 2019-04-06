import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

/*------导入外部的组件类------*/
import TabNavigator from 'react-native-tab-navigator';
import Home from './../Home/XMCHome';
import Shop from './../Shop/XMCShop';
import Mine from './../Mine/XMCMine';
import More from '../More/XMCMore';

export default class Main extends Component {

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
        {this.renderTabBarItem('首页', require('./../../image/home.png'), require('./../../image/home_selected.png'), 'home', '首页', Home)}
        {/*--商家--*/}
        {this.renderTabBarItem('商家', require('./../../image/shop.png'), require('./../../image/shop_selected.png'), 'shop', '商家', Shop)}
        {/*--我的--*/}
        {this.renderTabBarItem('我的', require('./../../image/mine.png'), require('./../../image/mine_selected.png'), 'mine', '我的', Mine)}
        {/*--更多--*/}
        {this.renderTabBarItem('更多', require('./../../image/more.png'), require('./../../image/more_selected.png'), 'more', '更多', More)}
      </TabNavigator>
    );
  }

  // 每一个TabBarItem
  renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component,badgeText) {
    return <TabNavigator.Item
      title={title} // 传递变量, 一定要加{}
      renderIcon={() => <Image source={iconName} style={styles.iconStyle}/>} // 图标
      renderSelectedIcon={() => <Image source={selectedIconName} style={styles.iconStyle}/>} // 选中图标
      selected={this.state.selectedTab === selectedTab}
      onPress={() => this.setState({selectedTab: selectedTab})}
      selectedTitleStyle={styles.selectedTitleStyle}
      badgeText={badgeText}
    >
      <Navigator
        initialRoute={{
          name: componentName,
          component: component
        }}
        configureScene={() => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {  // 渲染的屏幕, 从子组件接受参数
          let Component = route.component; // 从路由中取出组件
          return <Component navigator={navigator} {...route.passProps}/>; // 返回组件
        }}
      />
    </TabNavigator.Item>;
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: Platform.OS === 'ios' ? 30 : 25,
    height: Platform.OS === 'ios' ? 30 : 25
  },
  selectedTitleStyle:{
    color:'#d81e06',
  }
});
