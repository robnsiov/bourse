interface SellBuyInfosImpl {
  topSell: string;
  topBuy: string;
  sellValue: string;
  buyValue: string;
  sellButtom: string;
  buyBottom: string;
}
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
  getRealBuyAndSellInfos(): SellBuyInfosImpl;
  getLegalBuyAndSellInfos(): SellBuyInfosImpl;
}
