import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { getUser } from './Reducer';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  };

  componentDidMount() {
    this.props.getUser('idannyou');
  }

  render() {
    const { loadingProfile, user } = this.props;
    if (loadingProfile) return <Text>Loading...</Text>;

    const { login, name } = user;
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Login: {login}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ loadingProfile, user }) => {
  return {
    loadingProfile,
    user
  };
};

const mapDispatchToProps = {
  getUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
