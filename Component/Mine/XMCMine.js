import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import MyCell from "./XMCCommonMyCell"


export default class Mine extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollViewStyle}>
       {/*<View style={styles.container}>
              <Text style={styles.welcome}>我的</Text>
            </View>*/}
        <View style={{marginTop: 20}}>
          <MyCell
            leftTitle="饭团钱包"
            rightTitle="账户余额:¥100"
            leftIcon={require('./../../image/wallet.png')}
          />
          <MyCell
            leftTitle="抵用券"
            rightTitle="10张"
            leftIcon={require('./../../image/like.png')}
          />
        </View>

        <View style={{marginTop: 20}}>
          <MyCell
            leftTitle="积分商城"
            leftIcon={require('./../../image/score.png')}
          />
        </View>
        <View style={{marginTop: 20}}>
          <MyCell
            leftTitle="今日推荐"
            leftIcon={require('./../../image/recommend.png')}
            rightIcon={require('./../../image/new.png')}
          />
          <MyCell
            leftTitle="我要合作"
            leftIcon={require('./../../image/cooperation.png')}
            rightTitle="轻松开店, 招财进宝"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewStyle:{
    backgroundColor: '#e8e8e8',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
