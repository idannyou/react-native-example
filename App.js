import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './Reducer';
import RepoList from './RepoList';
import Profile from './Profile';
import RepoDetail from './RepoDetail';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const Tabs = createBottomTabNavigator({
  RepoList: {
    screen: RepoList
  },
  Profile: {
    screen: Profile
  }
});

const Stack = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Detail: {
    screen: RepoDetail
  }
});

const AppContainer = createAppContainer(Stack);

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
