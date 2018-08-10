import React, { Component } from 'react'
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Splash from './containers/Splash/Splash';

import { StackNavigator } from 'react-navigation'

export const Navigator = new StackNavigator({
    Splash: {
        screen: Splash, navigationOptions: {
            header: null,
        }
    },
    // Login: {
    //     screen: Login, navigationOptions: {
    //         header: null,
    //     }
    // },
    Home: {
        screen: Home, navigationOptions: {
            header: null,
        }
    }
})

class Route extends Component {
    render() {
        return (
            <Navigator />
        )
    }
}

export default Route