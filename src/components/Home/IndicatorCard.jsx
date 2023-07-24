import React, { useContext, useEffect } from 'react'
import { ListItem, Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import IndicatorContext from '../../contexts/CurrentIndicator'
import { findIndicatorData } from '../../utils/FindIndicatorData';
import { CURRENCY } from '../../utils/StaticData';
import { detail } from '../../utils/AppTexts';

const IndicatorCard = (props) => {
    const { indicator, navigation, data } = props;
    const context = useContext(IndicatorContext);
    const indicatorData = findIndicatorData(indicator); //Get key parameter from API data based on indicator prop

    const goToDetail = (indicator) => {
        context.setIndicator(indicator)
        const title = indicator === "IPC" ? detail.titleIPC : `${detail.one} ${indicator} ${detail.title}`
        navigation.navigate("Detail", { indicator: indicator,  title: title, data: data[indicatorData] })
    }

    const goToValuesList = (indicator) => {
        context.setIndicator(indicator)
        navigation.navigate("ValuesList", { indicator: indicator, data: data[indicatorData] })
    }

    return (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title
                    style={styles.title}
                    onPress={() => goToValuesList(indicator)}
                >
                    { indicator }
                </ListItem.Title>

                <ListItem.Subtitle
                    style={styles.subTitle}
                    onPress={() => goToValuesList(indicator)}
                >
                    { CURRENCY }
                </ListItem.Subtitle>

            </ListItem.Content>
            <Icon name="info-outline" size={32} color="dodgerblue" style={styles.infoIcon}
                onPress={() => goToDetail(indicator)}
            />
            <ListItem.Chevron size={32}
                onPress={() => goToValuesList(indicator)}
            />
        </ListItem>
    )
}

const styles = StyleSheet.create({
    infoIcon: {

    },
    title: {
        width: "100%",
        fontSize: 26,
        fontWeight: "bold"
    },
    subTitle: {
        color: "dodgerblue",
        marginTop: 8,
        fontSize: 16,
        width: "100%",
    }

});

export default IndicatorCard;