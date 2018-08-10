import { StyleSheet, Dimensions } from 'react-native';
const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageArea: {
        flex: 1,
        flexDirection: 'column',
        width: windowWidth,
        height: windowHeight
    },
    loading: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000050',
        width: 40,
        height: 40
    }
});