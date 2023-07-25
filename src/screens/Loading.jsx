import React, { useEffect, useState } from 'react';
import { useMultiFetch } from '../customHooks/useMultiFetch';
import { Text, View, ActivityIndicator } from 'react-native';
import { Styles } from './Styles/LoadingStyle';
import { loadingScreen } from '../utils/AppTexts';
import { getDollarBetweenTwoDatesURL, getEuroLaterOfAMonthURL,
         getUFBetweenTwoMonths, getUTMCurrentYear, getIPCCurrentYear } from '../../apiConfig/apiUrls';

const Loading = (props) => {
    const { navigation } = props;
    const [data, setData] = useState(null)
    const urls = getAPIURLS();
    const { response: dataAPI , loading, error } = useMultiFetch(urls);

    useEffect(() => {
        
        if (!dataAPI) {
            if (error){
                console.log(error)
            }

            return;
        }
        
        const objData = parseDataToObject(dataAPI);
        
        setData(objData);
    }, [loading]);

    useEffect(() => {
        if (data){
            goToHome()
        }
            
    }, [data]);

    const goToHome = () => {
        navigation.navigate("Home", {data: data})
    }

    return (
        <View style={ Styles.container }>
            <ActivityIndicator size="large" color="dodgerblue" style={ Styles.spinner } />
            <Text style={ Styles.text }>{ loadingScreen.text }</Text>
        </View>
        
    )
}

const getAPIURLS = () => {
    const dollarURL = getDollarBetweenTwoDatesURL();
    const euroURL = getEuroLaterOfAMonthURL();
    const ufURL = getUFBetweenTwoMonths();
    const utmURL = getUTMCurrentYear();
    const ipcURL = getIPCCurrentYear();

    return [dollarURL, euroURL, ufURL, utmURL, ipcURL]
}

const parseDataToObject = (dataArray) => {
    let objData = {}

    dataArray.forEach(currency => {
        const objJoined = Object.assign(objData, currency.data);
        objData = objJoined
    })

    return objData;
}

export default Loading;