import { Text } from 'react-native';
import React from 'react';
import { Card } from 'react-native-elements';
import { CURRENCY_SIGN, PERCENT_SIGN, CURRENCY_ACRONYM } from '../../utils/StaticData';
import { DetailCardStyle } from './DetailCardStyle';

const DetailCard = (props) => {
    const { title, value, date, indicator } = props;

    return (
        <Card containerStyle={DetailCardStyle.card}>
            <Text style={DetailCardStyle.title}>{ title }</Text>

            {
                indicator === "IPC" ?
                    <Text style={DetailCardStyle.value}>{ value }{ PERCENT_SIGN }</Text> :
                    <Text style={DetailCardStyle.value}>{ CURRENCY_SIGN }{ value } 
                        <Text style= {DetailCardStyle.acronym}> { CURRENCY_ACRONYM }</Text>
                    </Text>
            }

            <Card.FeaturedSubtitle style={DetailCardStyle.date}> { date } </Card.FeaturedSubtitle>
        </Card>
    )
}

export default DetailCard;