import React, { Component } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import Styles from './SplashStyle';
export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillUnmount() {
    clearTimeout();
  }
  render() {
    if (setTimeout(() => { this.props.navigation.navigate('Home') }, 2000)) {
      return (
        <View style={Styles.container}>
          <Image
            style={Styles.imageArea}
            source={require('./../../assets/image/splash.jpg')}
          />
          <View style={Styles.loading}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        </View>
      )
    }
  }
}
