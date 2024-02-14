interface DetailOverviewOut {
  value: string;
  color: string;
}
interface GrowthOverviewOut {
  color: string;
  percentage: string;
  text: string;
}

export default interface OverviewImpl {
  getLastPrice(): DetailOverviewOut;
  getFinalPrice(): DetailOverviewOut;
  getWeekEntryLegalMoney(): DetailOverviewOut;
  getMonthEntryLegalMoney(): DetailOverviewOut;
  getPlAverage50Day(): DetailOverviewOut;
  getPlAverage100Day(): DetailOverviewOut;
  getPES(): DetailOverviewOut;
  getPE(): DetailOverviewOut;
  getPEtoPE(): DetailOverviewOut;
  getGroupPE(): DetailOverviewOut;
  getSymbol(): string;
  getSymbolName(): string;
  getGroupName(): string;
  getSymbolLogo(): string;
  getNetProfitGrowthComparedPreviousSeason(): GrowthOverviewOut;
  netProfitGrowthComparedTheSameQuarter(): GrowthOverviewOut;
  operatingProfitGrowthComparedThePreviousQuarter(): GrowthOverviewOut;
  operatingProfitGrowthComparedTheSameQuarter(): GrowthOverviewOut;
  incomeGrowthComparedThePreviousMonth(): GrowthOverviewOut;
  revenueGrowthComparedTheSameMonthLastYear(): GrowthOverviewOut;
}
