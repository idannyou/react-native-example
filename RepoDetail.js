import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { getRepoDetail } from './Reducer';

class RepoDetail extends Component {
  static navigationOptions = {
    title: 'RepoDetail'
  };

  componentDidMount() {
    this.props.getRepoDetail('idannyou', 'react-native-example');
  }

  render() {
    const { loadingInfo, repoInfo } = this.props;

    const {
      description,
      forks_count,
      full_name,
      name,
      stargazers_count
    } = repoInfo;

    if (loadingInfo) return <Text>Loading...</Text>;

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

const mapStateToProps = ({ loadingInfo, repoInfo }) => {
  return {
    loadingInfo,
    repoInfo
  };
};

const mapDispatchToProps = {
  getRepoDetail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetail);
