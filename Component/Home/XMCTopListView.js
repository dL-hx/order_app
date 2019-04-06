import React ,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native'

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 全局的变量
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70: 60;
var cellH = 70;
var vMargin = (width - cellW * cols) / (cols + 1);
// 忽略RN中的黄色警告----刷新之后，你的世界就清净了
console.disableYellowBox = true;
export default class TopListView extends Component {

    static defaultProps() {
        return {
            dataArr: []
        }
    };
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        };
    }

    render() {
        return (
          <View style={styles.container}>
              <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        contentContainerStyle={styles.contentViewStyle}
                        scrollEnabled={false}
              />
          </View>
        );
    }

    // 返回一个Item,具体的cell
    //rowdata.image
    // 注：这里的this.renderRow是隐式写法，系统会根据函数的需要，将对应的参数传递过去（共有4个参数：rowData, sectionID, rowID, highlightRow）
    renderRow(rowData){
        return(
          <TouchableOpacity>
              <View style={styles.cellStyle}>
                  <Image source={{uri:rowData.image}} style={{width:52, height:52}}/>
                  <Text style={styles.titleStyle}>{rowData.title}</Text>
              </View>
          </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    contentViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:width
    },

    cellStyle:{
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        // 水平居中和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin
    },

    titleStyle:{
        fontSize:Platform.OS == 'ios' ? 14 : 12,
        color:'gray'
    }
});


