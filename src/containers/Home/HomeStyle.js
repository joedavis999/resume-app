import { StyleSheet, Dimensions } from 'react-native';
const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight,
        // backgroundColor: '#53A86E'
    },
    // imageClass: {
    //     flex: 1,
    //     marginLeft: windowWidth / 4,
    //     marginTop: windowHeight / 5,
    //     width: 210
    // },
    // imageText: {
    //     flex: 1,
    //     textAlign: 'center',
    //     fontSize: 14,
    //     fontWeight: '600',
    //     color: '#841584',
    //     marginTop: 15
    // },
    // textArea: {
    //     height: 40,
    //     borderColor: 'gray',
    //     borderWidth: 1
    // },
    // textArea2: {
    //     height: 40,
    //     borderColor: 'gray',
    //     borderWidth: 1
    // },
    // downloadButtonContainer: {
    //     flex:1,
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     color:'#55FFFF'
    // }
    downloadButton: {
        backgroundColor: "rgba(200, 99,216, 1)",
        width: 200,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
    },
    downloadButtonTitle:{
        // textAlign: 'center',
        color:'black'
    }
});