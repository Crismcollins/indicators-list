import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ValuesCard from '../components/ValuesList/ValuesCard'
import React from 'react';

const ValuesList = ({route}) => {
    const { data, indicator } = route.params;
    
    return(
        <ScrollView>
            <ValuesCard data= { data } indicator = { indicator } />
        </ScrollView>
    )
}

export default ValuesList;