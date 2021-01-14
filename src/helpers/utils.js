export const formatNumber = number => {
    return new Intl.NumberFormat('en-gb', { style: 'currency', currency: 'GBP' }).format(number);
}