import React from 'react'
import { ListItem } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';
import { CURRENCY_SIGN, PERCENT_SIGN } from '../../utils/StaticData';

const ValuesCard = (props) => {
    const { data, indicator } = props
    const dataSortedByDate = data.sort((a,b) => b.Fecha.localeCompare(a.Fecha))
 
    return (
        
        dataSortedByDate.map((currency, i) => (
                <ListItem key={ i } bottomDivider>
                    <ListItem.Content style={styles.content}>
                        <Text style={styles.date}>{ currency.Fecha }</Text>
                        {
                            indicator === "IPC" ? 
                                <Text style={styles.value}>{ currency.Valor }{ PERCENT_SIGN }</Text> :
                                <Text style={styles.value}>{ CURRENCY_SIGN } { currency.Valor }</Text>
                        }
                    </ListItem.Content>
                </ListItem>
            ))
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 32
    },
    date: {
        color: "dodgerblue",
        marginLeft: 4,
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    }

});

export default ValuesCard;