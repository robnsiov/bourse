"use client";
import Overview from "./overview";
import Efficiency from "./efficiency";
import Trades from "./trades";
import Informations from "./informations";
import Chart from "./chart";
import DetailsImpl from "./types";
import useDetails from "./use";

const Details = ({ id }: DetailsImpl) => {
  const {
    loadedeAPIS,
    getFinalPrice,
    getGroupPE,
    getLastPrice,
    getMonthEntryLegalMoney,
    getPE,
    getPES,
    getPEtoPE,
    getPlAverage100Day,
    getPlAverage50Day,
    getWeekEntryLegalMoney,
    getBvalAverage30Day,
    getBvalAverage7To30Day,
    getBvalAverage7To90Day,
    getBvalAverage90Day,
    getBvolAverage30DayTable,
    getBvolAverage90DayTable,
    getBvolTable,
    getMvTable,
    getToBvolAverage30DayTable,
    getToBvolAverage90DayTable,
    getTvalTable,
    getTvolTable,
    getIndustryEfficiencyOneMonth,
    getIndustryEfficiencyOneWeek,
    getIndustryEfficiencyOneYear,
    getIndustryEfficiencyThreeMonths,
    getSymbolEfficiencyOneMonth,
    getSymbolEfficiencyOneWeek,
    getSymbolEfficiencyOneYear,
    getSymbolEfficiencyThreeMonths,
    getGroupName,
    getSymbolLogo,
    getSymbol,
    getSymbolName,
    getBuyRows,
    getSellRows,
    getSellBuyRangeSlider,
    getRealBuyAndSellInfos,
    getLegalBuyAndSellInfos,
    getNetProfitGrowthComparedPreviousSeason,
    incomeGrowthComparedThePreviousMonth,
    netProfitGrowthComparedTheSameQuarter,
    operatingProfitGrowthComparedThePreviousQuarter,
    operatingProfitGrowthComparedTheSameQuarter,
    revenueGrowthComparedTheSameMonthLastYear,
    CLOSED,
  } = useDetails({ id });
  return (
    <>
      <div className="w-full flex justify-start items-start">
        {CLOSED === "نماد بسته است" && loadedeAPIS && (
          <p className="bg-red-500 text-[24px] mr-9 p-2 text-white">
            نماد بسته است
          </p>
        )}
        {!loadedeAPIS && (
          <>
            <p className="bg-blue-500 text-white p-3">
              در حال بارگزاری دیتا ...
            </p>
          </>
        )}
        {loadedeAPIS && !CLOSED && (
          <>
            <div className="w-full flex justify-start items-start flex-col p-5">
              <Chart />
              <Informations
                getLegalBuyAndSellInfos={getLegalBuyAndSellInfos}
                getRealBuyAndSellInfos={getRealBuyAndSellInfos}
                getBuyRows={getBuyRows}
                getSellRows={getSellRows}
                getSellBuyRangeSlider={getSellBuyRangeSlider}
              />
              <div className="w-[516px] flex justify-start items-start flex-col">
                <Trades
                  getBvalAverage30Day={getBvalAverage30Day}
                  getBvalAverage7To30Day={getBvalAverage7To30Day}
                  getBvalAverage7To90Day={getBvalAverage7To90Day}
                  getBvalAverage90Day={getBvalAverage90Day}
                  getBvolAverage30DayTable={getBvolAverage30DayTable}
                  getBvolAverage90DayTable={getBvolAverage90DayTable}
                  getBvolTable={getBvolTable}
                  getMvTable={getMvTable}
                  getToBvolAverage30DayTable={getToBvolAverage30DayTable}
                  getToBvolAverage90DayTable={getToBvolAverage90DayTable}
                  getTvalTable={getTvalTable}
                  getTvolTable={getTvolTable}
                />
                <Efficiency
                  getIndustryEfficiencyOneMonth={getIndustryEfficiencyOneMonth}
                  getIndustryEfficiencyOneWeek={getIndustryEfficiencyOneWeek}
                  getIndustryEfficiencyOneYear={getIndustryEfficiencyOneYear}
                  getIndustryEfficiencyThreeMonths={
                    getIndustryEfficiencyThreeMonths
                  }
                  getSymbolEfficiencyOneMonth={getSymbolEfficiencyOneMonth}
                  getSymbolEfficiencyOneWeek={getSymbolEfficiencyOneWeek}
                  getSymbolEfficiencyOneYear={getSymbolEfficiencyOneYear}
                  getSymbolEfficiencyThreeMonths={
                    getSymbolEfficiencyThreeMonths
                  }
                />
              </div>
            </div>
            <Overview
              getNetProfitGrowthComparedPreviousSeason={
                getNetProfitGrowthComparedPreviousSeason
              }
              incomeGrowthComparedThePreviousMonth={
                incomeGrowthComparedThePreviousMonth
              }
              netProfitGrowthComparedTheSameQuarter={
                netProfitGrowthComparedTheSameQuarter
              }
              operatingProfitGrowthComparedThePreviousQuarter={
                operatingProfitGrowthComparedThePreviousQuarter
              }
              operatingProfitGrowthComparedTheSameQuarter={
                operatingProfitGrowthComparedTheSameQuarter
              }
              revenueGrowthComparedTheSameMonthLastYear={
                revenueGrowthComparedTheSameMonthLastYear
              }
              getFinalPrice={getFinalPrice}
              getGroupPE={getGroupPE}
              getLastPrice={getLastPrice}
              getMonthEntryLegalMoney={getMonthEntryLegalMoney}
              getPE={getPE}
              getPES={getPES}
              getPEtoPE={getPEtoPE}
              getPlAverage100Day={getPlAverage100Day}
              getPlAverage50Day={getPlAverage50Day}
              getWeekEntryLegalMoney={getWeekEntryLegalMoney}
              getGroupName={getGroupName}
              getSymbolLogo={getSymbolLogo}
              getSymbol={getSymbol}
              getSymbolName={getSymbolName}
            />
          </>
        )}
      </div>
    </>
  );
};
export default Details;
