import { View } from 'react-native';
import React from 'react';
import DetailCard from '../components/Detail/DetailCard';
import { getCurrentDate } from '../utils/GetDateLastMonth';
import { detail } from '../utils/AppTexts';
import LineChartData from '../components/Charts/LineChart';
import { CURRENCY_SIGN, PERCENT_SIGN } from '../utils/StaticData';
import { Styles } from './Styles/DetailStyle';

const Detail = ({ route }) => {
    const { indicator , title, data } = route.params;
    const currentValue = getMostCurrentValue(data);
    const dateText = detail.date + currentValue.Fecha;
    const lastTenDaysData = getLastTenDaysData(data);
    const chartTitle = detail.titleChart + indicator;

    return(
        <View>
            <View style={Styles.container}>
                <DetailCard title= { title } value= { currentValue.Valor } date= { dateText } indicator= { indicator } />
            </View>

            <View style={Styles.containerChart}>
                { indicator === "IPC" ?
                    <LineChartData data= { lastTenDaysData } title= { chartTitle } suffix= { PERCENT_SIGN } /> : 
                    <LineChartData data= { lastTenDaysData } title= { chartTitle } prefix= { CURRENCY_SIGN } />
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

export default Detail;