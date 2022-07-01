import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00251a',
        padding: 16
    }, title: {
        fontSize: 42,
        textAlign: 'center',
        fontWeight: "bold",
        color:'white'
    }, carta: {
        alignContent: 'center',
        width: 100,
        height: 120,
        marginHorizontal: -25,
    }, cartahover: {
    }, deck: {
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#9e9d24',
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
        flexWrap: 'wrap',
        marginHorizontal: 3,
        marginVertical: 6
    },
    inputLogin: {
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#e8eaf6',
        marginVertical: 10,
        width: 150

    }, buton: {
        width: 30
    },
    buton1: {
        width: 30,
        backgroundColor: 'red'
    }
});