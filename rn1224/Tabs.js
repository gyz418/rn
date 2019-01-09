import React, { Component } from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Home from './components/tabs/Home'
import Me from './components/tabs/Me'
// rn中 不能用.jsx
// 最简组件，构造器可不写，标准react 做修改，Component 按需引入， 现在 继承 Component
export default class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }

  render () {
    return <View style={styles.container}>
      {/* tab */}
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={require('./image/option.png')} />}
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home></Home>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="me.."
          selected={this.state.selectedTab === 'me'}
          renderIcon={() => <Image source={require('./image/user.png')} />}
          onPress={() => this.setState({selectedTab: 'me'})}>
          <Me></Me>
        </TabNavigator.Item>
      </TabNavigator>
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})