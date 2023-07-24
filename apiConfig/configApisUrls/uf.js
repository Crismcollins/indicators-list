import { URL_BASE } from '@env';

export  const UF_URL_BASE = {
    base: URL_BASE,
    endpoint1: "uf"
}

export const UF_URL_MONTH_LATER = {
    ...UF_URL_BASE,
    endpoint2: "periodo"
}