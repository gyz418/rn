/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Tabs from './Tabs'
import Main from './Main'
import {name as appName} from './app.json';

// 第二个参数是首页
// AppRegistry.registerComponent(appName, () => App);  // 入门
// AppRegistry.registerComponent(appName, () => Tabs); // tab
AppRegistry.registerComponent(appName, () => Main); // 项目一
