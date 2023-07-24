import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import DetailCard from '../components/Detail/DetailCard';
import { getCurrentDate } from '../utils/GetDateLastMonth';
import { detail } from '../utils/AppTexts';
import LineChartData from '../components/Charts/LineChart';

const Detail = ({ route }) => {
    const { indicator , title, data } = route.params;
    const currentValue = getMostCurrentValue(data);
    const dateText = detail.date + currentValue.Fecha;
    const lastTenDaysData = getLastTenDaysData(data);
    const chartTitle = detail.titleChart + indicator;

    return(
        <View>
            <View style={styles.container}>
                <DetailCard title= { title } value= { currentValue.Valor } date= { dateText } indicator= { indicator } />
            </View>

            <View style={styles.containerChart}>
                { indicator === "IPC" ?
                    <LineChartData data= { lastTenDaysData } title= { chartTitle } suffix="%" /> : 
                    <LineChartData data= { lastTenDaysData } title= { chartTitle } prefix="$" />
                }
                
            </View>
            
        </View>
    )
}

const getMostCurrentValue = (data) => {
    const currentDate = getCurrentDate();
    const currentDateAsUnix = currentDate.timeStamp;
    const dataSortedByDate = data.sort((a,b) => b.Fecha.localeCompare(a.Fecha))
    
    const valuesBeforeCurrentDay = dataSortedByDate.filter((value) => {
        const valueDateAsUnix = new Date(value.Fecha).getTime();
        return valueDateAsUnix <= currentDateAsUnix;
    });

    const mostCurrentValue = valuesBeforeCurrentDay[0]
    return mostCurrentValue;
}

const getLastTenDaysData = (data) => {

    if (data.length <= 10)
        return data.sort((a,b) => a.Fecha.localeCompare(b.Fecha));
    
    return data.slice(0, 10).sort((a,b) => a.Fecha.localeCompare(b.Fecha))
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "dodgerblue",
        height: Dimensions.get("window").height * 0.14,
        overflow: 'visible'
    },
    containerChart: {
        marginTop: 64
    }
});

export default Detail;