import { StyleSheet } from 'react-native';

export const DetailCardStyle = StyleSheet.create({
    title: {
        fontFamily: "System",
        fontSize: 18,
        alignSelf: 'flex-start',
        color: "dodgerblue",
        marginBottom: 4,
        fontWeight: "bold",
    },
    value: {
        fontSize: 32,
        color: "dodgerblue",
        fontWeight: "bold",
        marginBottom: 8
    },
    card: {
        borderRadius: 12,
        elevation: 8, //Android
        shadowOffset: 8, //iOS
        paddingBottom: 4
    },
    date: {
        color: "black",
        fontSize: 14
    },
    acronym: {
        fontSize: 18
    }
});