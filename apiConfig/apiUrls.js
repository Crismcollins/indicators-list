import { API_KEY, FORMAT } from '@env';
import { DOLLAR_URL_BASE, DOLLAR_URL_BETWEEN_TWO_DATES } from './configApisUrls/dollar';
import { EURO_URL_BASE, EURO_URL_MONTH_LATER } from './configApisUrls/euro';
import { UF_URL_BASE, UF_URL_MONTH_LATER } from './configApisUrls/uf';
import { UTM_URL_BASE } from './configApisUrls/utm';
import { IPC_URL_BASE } from './configApisUrls/ipc';
import { getCurrentDate, getLastMonthDate } from '../src/utils/GetDateLastMonth';

const currentDate = getCurrentDate();
const lastMonthDate = getLastMonthDate(currentDate.fullDate);

export const getDollarBetweenTwoDatesURL = () => {
    const url = DOLLAR_URL_BETWEEN_TWO_DATES;
    return `${url.base}${url.endpoint1}/${url.endpoint2}/${lastMonthDate.year}/${lastMonthDate.month}/${url.endpoint3}/${lastMonthDate.day}/${currentDate.year}/${currentDate.month}/${url.endpoint4}/${currentDate.day}?apikey=${API_KEY}&formato=${FORMAT}`;
}

export const getEuroLaterOfAMonthURL = () => {
    const url = EURO_URL_MONTH_LATER;
    return `${url.base}/${url.endpoint1}/${url.endpoint2}/${lastMonthDate.year}/${lastMonthDate.month}/${url.endpoint3}/${lastMonthDate.day}?apikey=${API_KEY}&formato=${FORMAT}`;
}

export const getUFBetweenTwoMonths = () => {
    const url = UF_URL_MONTH_LATER;
    return `${url.base}/${url.endpoint1}/${url.endpoint2}/${lastMonthDate.year}/${lastMonthDate.month}/${currentDate.year}/${currentDate.month}?apikey=${API_KEY}&formato=${FORMAT}`;
}

export const getUTMCurrentYear = () => {
    const url = UTM_URL_BASE;
    return `${url.base}/${url.endpoint1}/${currentDate.year}?apikey=${API_KEY}&formato=${FORMAT}`;
}

export const getIPCCurrentYear = () => {
    const url = IPC_URL_BASE;
    return `${url.base}/${url.endpoint1}/${currentDate.year}?apikey=${API_KEY}&formato=${FORMAT}`;
}