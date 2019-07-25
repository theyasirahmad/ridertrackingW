/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { Platform, StyleSheet, View, Image } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation'


import { Container, Header, Content, Button, Text, Thumbnail, Form, Item, Label, Input } from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Col, Row, Grid } from "react-native-easy-grid";

import firebase from 'react-native-firebase';

import DashboardScreen from './src/screens/Dashboard/Dashboard.js';
import LoginScreen from './src/screens/Login/Login.js';
import RegisterScreen from './src/screens/Register/Register.js'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});




// type Props = {};
class App extends Component {


  render() {
    return <AppContainer />;
  }
}
export default App;

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: DashboardScreen },
  Register: {  screen: RegisterScreen },
});

const AppContainer = createAppContainer(AppSwitchNavigator);
