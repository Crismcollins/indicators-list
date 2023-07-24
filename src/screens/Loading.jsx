import React, { useEffect, useState } from 'react'
import { useMultiFetch } from '../customHooks/useMultiFetch';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
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
        <View style={ styles.container }>
            <ActivityIndicator size="large" color="dodgerblue" style={ styles.spinner } />
            <Text style={ styles.text }>{ loadingScreen.text }</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: 'center', // Alinea verticalmente al centro
    alignItems: 'center', // Alinea horizontalmente al centro
    },
    text: {
        fontSize: 17,
        marginTop: 8
    }

});

export default Loading;