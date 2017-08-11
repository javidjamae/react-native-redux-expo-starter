import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';

import store from './store'
import Placeholder from './components/Placeholder'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={ styles.container }>
          <Placeholder />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
