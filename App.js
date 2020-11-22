import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default class App extends React.Component {
  state = {
    fontIsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      SemiBold: require('./src/fonts/Montserrat-SemiBold.otf'),
      Bold: require('./src/fonts/Montserrat-Bold.otf'),
      ExtraBold: require('./src/fonts/Montserrat-ExtraBold.otf'),
      Medium: require('./src/fonts/Montserrat-Medium.otf'),
      Regular: require('./src/fonts/Montserrat-Regular.otf'),
    });
    this.setState({
      fontIsLoaded: true,
    });
  }

  render() {
    return this.state.fontIsLoaded ? <AppNavigator /> : <AppLoading />;
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
