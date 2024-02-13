interface EfficiencyFuncOut {
  value: string;
  color: string;
}

export default interface EfficiencyImpl {
  getSymbolEfficiencyOneWeek(): EfficiencyFuncOut;
  getSymbolEfficiencyOneMonth(): EfficiencyFuncOut;
  getSymbolEfficiencyThreeMonths(): EfficiencyFuncOut;
  getSymbolEfficiencyOneYear(): EfficiencyFuncOut;
  getIndustryEfficiencyOneWeek(): EfficiencyFuncOut;
  getIndustryEfficiencyOneMonth(): EfficiencyFuncOut;
  getIndustryEfficiencyThreeMonths(): EfficiencyFuncOut;
  getIndustryEfficiencyOneYear(): EfficiencyFuncOut;
}
