import { StyleSheet } from 'react-native';

export const StylesValuesCard = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 32
    },
    date: {
        color: "dodgerblue",
        marginLeft: 4,
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    }

});