import React from 'react'
import { connect } from 'react-redux'
import { TextInput, View, Text } from 'react-native'

import * as actions from '../actions'

const Placeholder = ( { value, createPlaceholderSynchronousAction } ) => {
  return (
    <View>
      <TextInput
        onChangeText={ ( fieldVal ) => createPlaceholderSynchronousAction( fieldVal ) }
        value={ value }
        placeholder="Type something"
      />
      <Text>{ value }</Text>
    </View>
  )

}

const mapStateToProps = ( { placeholderState } ) => {
  return { value: placeholderState.value }
}

export default connect( mapStateToProps, actions )( Placeholder )
