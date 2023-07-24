import React from 'react'
import IndicatorCard from '../components/Home/IndicatorCard';
import { ScrollView } from 'react-native';
import { INDICATORS } from '../utils/StaticData';

const Home = ({ navigation, route }) => {
    const { data } = route.params;

    return (
        <ScrollView>
            {INDICATORS.map(indicator => (
            <IndicatorCard key={ indicator } indicator= { indicator } navigation= { navigation } data= { data } />
        ))}
        </ScrollView>
    )
}

export default Home;