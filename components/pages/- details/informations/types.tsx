export default interface InformationsImpl {
  getBuyRows(): any[][];
  getSellRows(): any[][];
  getSellBuyRangeSlider(): {
    min: number;
    middle: number;
    max: number;
    leftSignDown: number;
    leftSignUp: number;
    sellLeft: number;
    rightBuy: number;
    py: number;
  };
}
