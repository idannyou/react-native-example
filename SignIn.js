import React from 'react';
import { connect } from 'react-redux';
import { Button, TextInput, View } from 'react-native';

import { setUser } from './Reducer';

class SignIn extends React.Component {
  state = {
    userName: ''
  };

  handleOnChange = userName => {
    this.setState({ userName });
  };

  handleOnPress = userName => () => {
    this.props.setUser(userName);
    this.props.navigation.navigate('Home', { userName });
  };

  render() {
    const { userName } = this.state;

    return (
      <View>
        <TextInput onChangeText={this.handleOnChange} value={userName} />
        <Button
          onPress={this.handleOnPress(userName)}
          title="Check GitHub Repo"
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  setUser
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
