import { StyleSheet, Dimensions } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: "dodgerblue",
        height: Dimensions.get("window").height * 0.14,
        overflow: 'visible'
    },
    containerChart: {
        marginTop: 64
    }
});