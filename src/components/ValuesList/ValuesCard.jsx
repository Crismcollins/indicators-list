import React from 'react'
import { ListItem } from 'react-native-elements';
import { Text } from 'react-native';
import { StylesValuesCard } from './ValuesCardStyle';
import { CURRENCY_SIGN, PERCENT_SIGN } from '../../utils/StaticData';

const ValuesCard = (props) => {
    const { data, indicator } = props
    const dataSortedByDate = data.sort((a,b) => b.Fecha.localeCompare(a.Fecha))
 
    return (
        
        dataSortedByDate.map((currency, i) => (
                <ListItem key={ i } bottomDivider>
                    <ListItem.Content style={StylesValuesCard.content}>
                        <Text style={StylesValuesCard.date}>{ currency.Fecha }</Text>
                        {
                            indicator === "IPC" ? 
                                <Text style={StylesValuesCard.value}>{ currency.Valor }{ PERCENT_SIGN }</Text> :
                                <Text style={StylesValuesCard.value}>{ CURRENCY_SIGN } { currency.Valor }</Text>
                        }
                    </ListItem.Content>
                </ListItem>
            ))
    )
}

export default ValuesCard;