import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from './Reducer';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
});

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('idannyou');
  }

  handleOnPress = item => () => {
    console.log({ item });
    this.props.navigation.navigate('Detail', { item });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={this.handleOnPress(item)} style={styles.item}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  render() {
    const { repos } = this.props;

    return (
      <View>
        <FlatList
          styles={styles.container}
          data={repos}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos.map(repo => ({ key: `${repo.id}`, ...repo }))
  };
};

const mapDispatchToProps = { listRepos };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);
