/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { storeInput } from '../../actions/action';
import styles from './HomeStyle';
import Pdf from 'react-native-pdf';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { name: 4, text: '' };
  }
  joeFn = (text) => {
    this.props.changeInputAction(text);
  };

  render() {
    const source = require('./../../assets/resume.pdf');
    return (
      <View style={styles.viewContainer}>
        {/* <Text style={styles.imageText}>Text</Text> */}
        <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}/>
        <Button
          title="Download"
          buttonStyle={styles.downloadButton}
          textStyle={styles.downloadButtonTitle}
        />
        {/* <TextInput
          style={styles.textArea}
          onChangeText={this.joeFn}
          value={this.props.inputValue}
        />
        <Text style={styles.textArea2}>{this.props.inputValue}</Text> */}
      </View>
    );
  }
}

//Fetching the state values
const mapStateToProps = (state) => {
  return {
    'inputValue': state.homeReducer.inputValue,
  }
}
//Dispatching actions
const mapDispatchToProps = (dispatch) => {
  return {
    'changeInputAction': (text) => {
      dispatch(storeInput(text));//Calling changeImage function in action file
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);