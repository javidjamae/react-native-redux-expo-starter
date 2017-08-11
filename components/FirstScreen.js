import React from 'react'
import Placeholder from './Placeholder'
import { Text, View } from 'react-native';

const FirstScreen = () => {
  return (
    <View style={ styles.container }>
      <Placeholder />
    </View>
  )

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default FirstScreen
