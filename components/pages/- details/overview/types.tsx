interface OverviewFuncOut {
  value: string;
  color: string;
}

export default interface OverviewImpl {
  getLastPrice(): OverviewFuncOut;
  getFinalPrice(): OverviewFuncOut;
  getWeekEntryLegalMoney(): OverviewFuncOut;
  getMonthEntryLegalMoney(): OverviewFuncOut;
  getPlAverage50Day(): OverviewFuncOut;
  getPlAverage100Day(): OverviewFuncOut;
  getPES(): OverviewFuncOut;
  getPE(): OverviewFuncOut;
  getPEtoPE(): OverviewFuncOut;
  getGroupPE(): OverviewFuncOut;
  getSymbol(): string;
  getSymbolName(): string;
  getGroupName(): string;
  getSymbolLogo(): string;
}
