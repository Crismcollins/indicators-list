import { URL_BASE } from '@env';

export  const EURO_URL_BASE = {
    base: URL_BASE,
    endpoint1: "euro"
}

export  const EURO_URL_MONTH_LATER = {
    ...EURO_URL_BASE,
    endpoint2: "posteriores",
    endpoint3: "dias",
}