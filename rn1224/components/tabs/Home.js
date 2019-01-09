import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Swiper from 'react-native-swiper'

import { Actions } from 'react-native-router-flux'
import MovieList from '../movie/MovieList'

export default class Me extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentWillMount () {
    // 现在是手机浏览器,fetch没有跨域了
    /*  fetch('xxx')
        .then(res=>res.json())
        .then(data=>{
          console.warn(data)
        })*/
  }

  render () {
    return <View style={{height: 220}}>

      {/* 轮播*/}
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>

      {/* TouchableHighlight 里只能有一个根元素  underlayColor 点击背景色*/}
      <TouchableHighlight onPress={this.toMovieList} underlayColor="white" style={styles.btn}>
        <View>
          <Text>进入电影列表</Text>
        </View>
      </TouchableHighlight>
    </View>
  }

  toMovieList = () => {
    console.warn(66677)
    Actions.MovieList()   // 路由跳转  MovieList 是 Main.js 的路由key ，传参{id:10}
    // Actions.bb({id: 10})   // 路由跳转  MovieList 是 Main.js 的路由key ，传参{id:10}
  }
}
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'red',
    height: 30
  }
})