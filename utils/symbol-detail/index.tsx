function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convertToInternationalCurrencySystem(labelValue: any) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? numberWithCommas((Math.abs(Number(labelValue)) / 1.0e9).toFixed(2)) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? numberWithCommas((Math.abs(Number(labelValue)) / 1.0e6).toFixed(2)) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? numberWithCommas((Math.abs(Number(labelValue)) / 1.0e3).toFixed(2)) + "K"
    : numberWithCommas(Math.abs(Number(labelValue)).toFixed(2)) + "";
}

export { numberWithCommas, convertToInternationalCurrencySystem };
