import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const LineChartData = (props) => {

    const { data, title, prefix, suffix } = props;
    const dates = getDates(data);
    const values = getValues(data, suffix)
        
    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: suffix ? 1 : 0,
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

    const style = {
        marginVertical: 8,
        borderRadius: 16,
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> { title }</Text>
            <LineChart
                data={{
                    labels: dates,
                    datasets: [
                        {
                            data: values
                        }
                    ]
                }}
                width={Dimensions.get("window").width * 0.9}
                height={Dimensions.get("window").height * 0.55}
                yAxisLabel= { prefix }
                yAxisSuffix= { suffix }
                verticalLabelRotation={90}
                chartConfig={chartConfig}
                bezier
                style={style}
            />

        </View>
    );
}

const getDates = (data) => {
    return data.map(value => value.Fecha);
}

const getValues = (data, suffix) => {

    if (suffix)
        return data.map(value => parseFloat(value.Valor.replace(",",".")));

    return data.map(value => parseFloat(value.Valor.replace(".","_").replace(",",".").replace("_",",").replace(",","")));
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 18,
        borderRadius: 16,
        elevation: 8, //Android
        shadowOffset: 8, //iOS

    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        alignSelf: 'center',
        marginTop: 12
    }

});

export default LineChartData;