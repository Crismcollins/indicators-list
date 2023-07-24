export function useLowercaseText(str) {
    const textLowercased = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return textLowercased;
}