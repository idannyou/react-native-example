import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { getRepoDetail } from './Reducer';

class RepoDetail extends Component {
  static navigationOptions = {
    title: 'RepoDetail'
  };

  render() {
    const repoInfo = this.props.navigation.getParam('item');
    const {
      description,
      forks_count,
      full_name,
      name,
      stargazers_count
    } = repoInfo;

    return (
      <View>
        <Text>{name}</Text>
        <Text>{full_name}</Text>
        <Text>{description}</Text>
        <Text>Forks: {forks_count}</Text>
        <Text>Stars: {stargazers_count}</Text>
      </View>
    );
  }
}

export default RepoDetail;
