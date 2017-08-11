import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import * as actions from '../actions'


class Placeholder extends Component {
  onRightClick = () => {
    this.props.createPlaceholderSynchronousAction( 'Handled within component' )
  }

  onChangeText = ( fieldVal ) => {
    this.props.createPlaceholderSynchronousAction( fieldVal )
    if( fieldVal !== '' ) {
      Actions.refresh( { rightTitle: 'Modified' } )
    }
  }

  componentWillMount() {
    Actions.refresh( { onRight: this.onRightClick } )
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={ this.onChangeText }
          value={ this.props.value }
          placeholder="Type something"
        />
        <Text>{ this.props.value }</Text>
      </View>
    )
  }
}

const mapStateToProps = ( { placeholderState } ) => {
  return { value: placeholderState.value }
}

export default connect( mapStateToProps, actions )( Placeholder )
