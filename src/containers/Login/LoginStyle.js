import { StyleSheet, Dimensions } from 'react-native';
const { height: windowHeight, width: windowWidth} = Dimensions.get('window');

export default StyleSheet.create({
    viewContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#C4A39C'
    },
    textArea:{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 
    }
});