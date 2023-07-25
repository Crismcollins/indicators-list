import React, { useContext, useEffect } from 'react'
import { ListItem, Icon } from 'react-native-elements';
import IndicatorContext from '../../contexts/CurrentIndicator'
import { findIndicatorData } from '../../utils/FindIndicatorData';
import { CURRENCY } from '../../utils/StaticData';
import { detail } from '../../utils/AppTexts';
import { IndicatorCardStyle } from './IndicatorCardStyle';

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
        <ListItem bottomDivider style={IndicatorCardStyle.container} onPress={() => goToValuesList(indicator)}>
            <ListItem.Content >
                <ListItem.Title
                    style={IndicatorCardStyle.title}
                >
                    { indicator }
                </ListItem.Title>

                <ListItem.Subtitle
                    style={IndicatorCardStyle.subTitle}
                >
                    { CURRENCY }
                </ListItem.Subtitle>

            </ListItem.Content>
            <Icon name="info-outline" size={32} color="dodgerblue" style={IndicatorCardStyle.infoIcon}
                onPress={() => goToDetail(indicator)}
            />
            <ListItem.Chevron size={32}/>
        </ListItem>
    )
}

export default IndicatorCard;

