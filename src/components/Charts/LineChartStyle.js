import { StyleSheet } from 'react-native';

export const containerChartStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 18,
        borderRadius: 16,
        
        elevation: 8, // Android
        shadowOffset: { width: 0, height: 8 }, // iOS
        shadowOpacity: 0.1, // iOS
        shadowRadius: 8, // iOS

    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        alignSelf: 'center',
        marginTop: 12
    }

});

export const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    strokeWidth: 3,
    color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#fff"
    }
}

export const styleChart = {
    marginVertical: 8,
    borderRadius: 16,
}