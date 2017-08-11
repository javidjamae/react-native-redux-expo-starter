import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import FirstScreen from './components/FirstScreen'

const RouterComponent = () => {
  return (
    <Router sceneStyle={ { paddingTop: 65 } }>
      <Scene key='main'>
        <Scene
          key='first'
          component={ FirstScreen }
          title='First Screen'
          rightTitle='Initial'
          onRight={ () => console.log('does nothing initially') }
          initial
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent

