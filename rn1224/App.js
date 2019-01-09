/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, Image, Button, ActivityIndicator, ScrollView } from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
})

type
Props = {}
export default class App extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={{width:'100%'}}>
          <Text style={styles.welcome}>ListView过时,用FlatList代替</Text>
          <Text style={styles.instructions}>ActivityIndicator loading组件</Text>
          <Text style={styles.instructions}>rn超出一个屏幕,不会滚动 ScrollView滚动组件</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <TextInput style={{width: '100%'}} defaultValue={'input val'} secureTextEntry={true}
                     underlineColorAndroid="#f00"></TextInput>
          <Image source={require('./image/a.png')}></Image>
          <Image source={require('./image/a.png')}></Image>
          <Image source={require('./image/a.png')}></Image>
          <Image source={require('./image/a.png')}></Image>
          <Image source={require('./image/a.png')}></Image>
          {/* 网络图片必须添加宽高*/}
          <Image source={{uri: 'http://placekitten.com/200/198'}} style={{width: 80, height: 80}}></Image>
          {/* 按钮必加 title 和 onPress方法 */}
          <Button title="按钮" onPress={() => { console.warn('123') }}></Button>

          {/* loading  color="red" size="large" animating={true} animating 隐藏loading 但占位置*/}
          {/*<ActivityIndicator color="red" size="large" animating={true}></ActivityIndicator>*/}
          {/**/}
          <ActivityIndicator></ActivityIndicator>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
