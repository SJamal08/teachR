import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '75%',
        textAlign: 'center',
        backgroundColor: 'white',
        marginTop: Dimensions.get('window').height / 6,
        borderColor: 'black',
        borderWidth: 0.3,
        borderRadius: 25,
        padding: 10
    },
    identity: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    img: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 50
    },
    titles: {

        fontSize: 15,
        marginTop: 30,
        fontWeight: '100',
        color: 'gray'

    },
    infos: {

        marginTop: 10,
        fontWeight: 'bold'

    },

    textButton: {
        marginTop: 3,
        fontSize: 17,
        color: 'red'

    },

    button2: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'red',
        height: 35,
        alignItems: 'center',
        marginTop: 10

    }

});

export default styles;
