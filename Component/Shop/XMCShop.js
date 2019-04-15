import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image, WebView,Platform} from 'react-native'


export default class Shop extends Component {
  state = {
    detailUrl: 'https://h5.ele.me/msite/food/#search_source=1&activity_id=10016668&navType=0&color_type=1&target_name=美食&entry_id=20133247&page_type=2&business_flag=0&animation_type=1&restaurant_category_ids=219%2C212%2C213%2C214%2C215%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C354%2C362%2C370%2C378%2C386%2C394%2C402%2C410%2C418%2C426%2C434%2C442%2C450%2C458%2C466%2C474%2C482%2C490%2C498%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C236%2C962%2C970%2C978%2C986%2C994%2C1002%2C1010%2C1018%2C1026%2C1034%2C240%2C241%2C242%2C1042%2C1050%2C1058%2C1066%2C1074%2C1082%2C1090%2C1098%2C1106%2C1114%2C1122%2C1130%2C1138%2C1146%2C1154%2C1162%2C1170%2C1178%2C1186%2C1194%2C1202%2C1210%2C1218%2C1226%2C1222&spm=a2ogi.12117543.01.0&geohash=wx4g0bmjetr2'
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
    backgroundColor: '#00A7FF',

    // 设置主轴的方向
    flexDirection: 'row',
    // 垂直居中 ---> 设置侧轴的对齐方式
    alignItems: 'center',
    // 主轴方向居中
    justifyContent: 'center'
  },
})
