import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
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
