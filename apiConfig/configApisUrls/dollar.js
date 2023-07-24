import { URL_BASE } from '@env';

export const DOLLAR_URL_BASE = {
    base: URL_BASE,
    endpoint1: "dolar"
}

export  const DOLLAR_URL_BETWEEN_TWO_DATES = {
    ...DOLLAR_URL_BASE,
    endpoint2: "periodo",
    endpoint3: "dias_i",
    endpoint4: "dias_f"
}