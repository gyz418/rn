// 入口文件
import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Router, Stack, Scene } from 'react-native-router-flux'
import Tabs from './Tabs'
import MovieList from './components/movie/MovieList'
import MovieDetails from './components/movie/MovieDetails'
/*
*
* stack 分组容器
* Scene 路由
* */
export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <Router sceneStyle={{backgroundColor:'white'}}>
      {/* 背景色*/}
      <Stack key="root">
        {/* 放所有的路由*/}
        <Scene key="Tabs" component={Tabs} title="Tabs" hideNavBar={true}/>
        <Scene key="MovieList" component={MovieList} title="电影列表"/>
        <Scene key="moviedetail" component={MovieDetails} title="电影列表"/>
      </Stack>
    </Router>
  }
}