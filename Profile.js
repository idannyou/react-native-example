import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { getUser } from './Reducer';

class Profile extends Component {
  componentDidMount() {
    const { getUser, userName } = this.props;
    getUser(userName);
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

const mapStateToProps = ({ loadingProfile, user, userName }) => {
  return {
    loadingProfile,
    user,
    userName
  };
};

const mapDispatchToProps = {
  getUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
