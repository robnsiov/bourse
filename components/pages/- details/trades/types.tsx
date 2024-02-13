interface TradesFuncOut {
  value: string;
  color: string;
}
export default interface TradesImpl {
  getBvolTable(): TradesFuncOut;
  getTvolTable(): TradesFuncOut;
  getBvolAverage30DayTable(): TradesFuncOut;
  getBvolAverage90DayTable(): TradesFuncOut;
  getToBvolAverage30DayTable(): TradesFuncOut;
  getToBvolAverage90DayTable(): TradesFuncOut;
  getMvTable(): TradesFuncOut;
  getTvalTable(): TradesFuncOut;
  getBvalAverage30Day(): TradesFuncOut;
  getBvalAverage90Day(): TradesFuncOut;
  getBvalAverage7To30Day(): TradesFuncOut;
  getBvalAverage7To90Day(): TradesFuncOut;
}
