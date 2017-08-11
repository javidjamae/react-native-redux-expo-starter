# About this branch / repo

This is a branch of the react-native-redux-expo-starter project. See the
README in the master branch for more details.

# React Native Router Flux Scene Overrides

This branch demonstrates how to override RNRF ```Scene``` properties from within a
component using `Actions.refresh`.

You can see a demo of the app here:

https://exp.host/@javidjamae/rnrf-action-refresh


The ```Scene``` is defined as follow:

```
<Scene
  key='first'
  component={ FirstScreen }
  title='First Screen'
  rightTitle='Initial'
  onRight={ () => console.log('does nothing initially') }
  initial
/>
```

When the ```FirstScreen``` loads, the right navigation button is
provided with the value "Initial".

The ```onRight``` callback is provided with a placeholder function that
merely does a console.log.

The ```FirstScreen``` renders a component called ```Placeholder``` that
looks like this:

```
<View>
  <TextInput
    onChangeText={ this.onChangeText }
    value={ this.props.value }
    placeholder="Type something"
  />
  <Text>{ this.props.value }</Text>
</View>
```


When the component is mounted, it will override the ```onRight```
callback that is defined in the scene using ```Actions.refresh```.

```
import { Actions } from 'react-native-router-flux'

...

onRightClick = () => {
  this.props.createPlaceholderSynchronousAction( 'Handled within component' )
}

componentWillMount() {
  Actions.refresh( { onRight: this.onRightClick } )
}
```

If the right nav is clicked it will display "Handled withing component" to
the ```Text``` component in the app.

The component also has a ```onChangeText``` function that is called when the
TextInput on the page changes. As soon as the text is modified, the
label of the right nav is changed, again using ```Actions.refresh```.

```
onChangeText = ( fieldVal ) => {
  this.props.createPlaceholderSynchronousAction( fieldVal )
  if( fieldVal !== '' ) {
    Actions.refresh( { rightTitle: 'Modified' } )
  }
}
```
