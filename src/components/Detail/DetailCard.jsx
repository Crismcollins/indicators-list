import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { Card } from 'react-native-elements';
import { CURRENCY_SIGN, PERCENT_SIGN, CURRENCY_ACRONYM } from '../../utils/StaticData';

const DetailCard = (props) => {
    const { title, value, date, indicator } = props;

    return (
        <Card containerStyle={styles.card}>
            <Text style={styles.title}>{ title }</Text>

            {
                indicator === "IPC" ?
                    <Text style={styles.value}>{ value }{ PERCENT_SIGN }</Text> :
                    <Text style={styles.value}>{ CURRENCY_SIGN }{ value } 
                        <Text style= {styles.acronym}> { CURRENCY_ACRONYM }</Text>
                    </Text>
            }

            <Card.FeaturedSubtitle style={styles.date}> { date } </Card.FeaturedSubtitle>
        </Card>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "System",
        fontSize: 18,
        alignSelf: 'flex-start',
        color: "dodgerblue",
        marginBottom: 4,
        fontWeight: "bold",
    },
    value: {
        fontSize: 32,
        color: "dodgerblue",
        fontWeight: "bold",
        marginBottom: 8
    },
    card: {
        borderRadius: 12,
        elevation: 8, //Android
        shadowOffset: 8, //iOS
        paddingBottom: 4
    },
    date: {
        color: "black",
        fontSize: 14
    },
    acronym: {
        fontSize: 18
    }

});

export default DetailCard;