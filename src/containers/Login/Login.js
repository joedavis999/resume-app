import React, { Component } from 'react';
import { View, Text, Button,TextInput } from 'react-native';
import Styles from "./LoginStyle";
export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {Styles.viewContainer}>
                <TextInput
                    style={Styles.textArea}
                    placeholder = 'User Name'
                />
                <TextInput
                    style={Styles.textArea}
                    placeholder = 'Password'
                />
                <Button title='Login' onPress={() => { this.props.navigation.navigate('Home') }} />
            </View>
        );
    }
}
