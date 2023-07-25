import { Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { containerChartStyles, chartConfig, styleChart } from './LineChartStyle';

const LineChartData = (props) => {
    const { data, title, prefix, suffix } = props;
    const dates = getDates(data);
    const values = getValues(data, suffix)

    return (
        <View style= { containerChartStyles.container }>
            <Text style= { containerChartStyles.title }> { title }</Text>
            <LineChart
                data={{
                    labels: dates,
                    datasets: [
                        {
                            data: values
                        }
                    ]
                }}
                width= { Dimensions.get("window").width * 0.9 }
                height= { Dimensions.get("window").height * 0.55 }
                yAxisLabel= { prefix }
                yAxisSuffix= { suffix }
                verticalLabelRotation= { 90 }
                chartConfig= { {decimalPlaces: suffix ? 1 : 0, ...chartConfig } }
                style= { styleChart }
                bezier
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

export default LineChartData;