import { navigator } from "../utils/AppTexts";

export const headerStyle = {
    headerStyle: {
        backgroundColor: 'dodgerblue',
    },
}

const commonStylesStacks = {
    headerTitleAlign: "center",
    headerTintColor: "white"
}

export const indicatorsStackStyle = {
    ...commonStylesStacks,
    title: navigator.indicator,
    headerBackVisible: false
}

export const valuesListStackStyle = {
    ...commonStylesStacks,
}

export const detailStackStyle = {
    ...commonStylesStacks,
    headerShadowVisible: false,
    headerTitleStyle: {
        fontSize: 24
    }
}