import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import ValuesList from '../screens/ValuesList'
import Detail from '../screens/Detail'
import Loading from '../screens/Loading'
import IndicatorContext from '../contexts/CurrentIndicator'
import { navigator } from "../utils/AppTexts";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [currentIndicator, setCurrentIndicator] = useState("");

    const dataContext = {
        setIndicator: setCurrentIndicator
    }

    const headerStyle = {
        headerStyle: {
          backgroundColor: 'dodgerblue',
        },
      }

    const commonStylesStacks = {
        headerTitleAlign: "center",
        backgroundColor: "red",
        headerTintColor: "white"
    }

    const indicatorsStackStyle = {
        ...commonStylesStacks,
        title: navigator.indicator,
        headerBackVisible: false
        
    }

    const valuesListStackStyle = {
        ...commonStylesStacks,
        title: currentIndicator
    }

    const detailStackStyle = {
        ...commonStylesStacks,
        title: currentIndicator,
        headerShadowVisible: false,
        headerTitleStyle: {
            fontSize: 24
        }
    }

    return (
        <IndicatorContext.Provider value={ dataContext }>
            <Stack.Navigator
                initialRouteName="Loading"
                screenOptions= { headerStyle }
            >
                <Stack.Screen name="Home" component={Home} options={ indicatorsStackStyle } />
                <Stack.Screen name="ValuesList" component={ValuesList} 
                    options={ valuesListStackStyle }
                
                />
                <Stack.Screen name="Detail" component={Detail} options={ detailStackStyle } />
                <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
            </Stack.Navigator>
        </IndicatorContext.Provider>
    )
}

export default StackNavigator;