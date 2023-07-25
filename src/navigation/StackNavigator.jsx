import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import ValuesList from '../screens/ValuesList'
import Detail from '../screens/Detail';
import Loading from '../screens/Loading';
import IndicatorContext from '../contexts/CurrentIndicator';
import { headerStyle, indicatorsStackStyle, valuesListStackStyle, detailStackStyle } from './StackNavigatorStyle';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [currentIndicator, setCurrentIndicator] = useState("");

    const dataContext = {
        setIndicator: setCurrentIndicator
    }

    return (

        <IndicatorContext.Provider value={dataContext}>
            <Stack.Navigator
                initialRouteName="Loading"
                screenOptions={headerStyle}
            >
                <Stack.Screen name="Home" component={Home} options={indicatorsStackStyle} />
                <Stack.Screen name="ValuesList" component={ValuesList}
                    options={{ title: currentIndicator, ...valuesListStackStyle }}

                />
                <Stack.Screen name="Detail" component={Detail} options={{ title: currentIndicator, ...detailStackStyle }} />
                <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
            </Stack.Navigator>
        </IndicatorContext.Provider>
    )
}

export default StackNavigator;