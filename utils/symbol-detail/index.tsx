function calculateProfit(num1: any, num2: any) {
  var color = "text-green-primary";
  var text = "";
  if (num1 < 0 && num2 < 0 && num1 < num2) {
    text = "افزایش زیان";
    color = "red";
  } else if (num1 < 0 && num2 < 0 && num1 > num2) {
    text = "text-green-primary";
    color = "green";
  } else if ((num1 / num2 - 1) * 100 < 0) {
    text = "کاهش سود";
    color = "text-red-primary";
  } else {
    text = "افزایش سود";
    color = "text-green-primary";
  }
  return {
    color: color,
    percentage: Math.abs((num1 / num2 - 1) * 100).toFixed(1),
    text: text,
  };
}

function numberWithCommas(x: any) {
  if (!x) return "0";
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

export {
  numberWithCommas,
  convertToInternationalCurrencySystem,
  calculateProfit,
};
