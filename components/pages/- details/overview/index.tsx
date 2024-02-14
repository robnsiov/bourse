import Image from "next/image";
import femeliIcon from "../../../../public/images/femeli.svg";
import OverviewImpl from "./types";
import cls from "classnames";
import HOST from "@/host";

const Overview = ({
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
  getGroupName,
  getSymbolLogo,
  getSymbol,
  getSymbolName,
  getNetProfitGrowthComparedPreviousSeason,
  incomeGrowthComparedThePreviousMonth,
  netProfitGrowthComparedTheSameQuarter,
  operatingProfitGrowthComparedThePreviousQuarter,
  operatingProfitGrowthComparedTheSameQuarter,
  revenueGrowthComparedTheSameMonthLastYear,
}: OverviewImpl) => {
  const {
    color: previousSeasonColor,
    percentage: previousSeasonPerc,
    text: previousSeasonText,
  } = getNetProfitGrowthComparedPreviousSeason();

  const {
    color: previousMonthColor,
    percentage: previousMonthPerc,
    text: previousMonthText,
  } = incomeGrowthComparedThePreviousMonth();

  const {
    color: sameQuarterColor,
    percentage: sameQuarterPerc,
    text: sameQuarterText,
  } = netProfitGrowthComparedTheSameQuarter();

  const {
    color: previousQuarterColor,
    percentage: previousQuarterPerc,
    text: previousQuarterText,
  } = operatingProfitGrowthComparedThePreviousQuarter();

  const {
    color: opPreviousQuarterColor,
    percentage: opPreviousQuarterPerc,
    text: opPreviousQuarterText,
  } = operatingProfitGrowthComparedTheSameQuarter();

  const {
    color: lastYearColor,
    percentage: lastYearPerc,
    text: lastYearText,
  } = revenueGrowthComparedTheSameMonthLastYear();

  return (
    <>
      <div
        className="min-w-[312px] flex
         justify-start items-start flex-col border-r-[1px] border-r-[#E7E7E7]
         px-6 pt-3 pb-6"
      >
        <div className="w-full flex justify-start items-start flex-col">
          <h3 className="text-[30px]">نمای کلی</h3>
          <div className="w-full flex justify-between items-center mt-12">
            <div className="relative flex justify-start items-start min-w-[9px] h-[9px] rounded-full bg-[#28c27847] p-[2px]">
              <div className=" h-full w-full bg-[#28C278] rounded-full"></div>
            </div>
            <div
              className="min-w-[36px] max-w-[36px] h-[37px] rounded-[6px] border-[2px] border-blue-secondary
              mr-4 ml-2 p-1 flex justify-center items-center"
            >
              <Image
                src={`${HOST.baseURL}${getSymbolLogo()}`}
                width={100}
                height={150}
                alt="femeliICon"
              />
            </div>
            <div
              className="w-full bg-blue-secondary rounded-[9px] flex justify-start items-center
              text-white h-[37px] px-4"
            >
              <h4 className="text-[18px]">{getSymbol()}</h4>
              <span className="text-[12px] mr-2 font-light">
                {getSymbolName()}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-1 flex justify-end items-start">
          <span className="text-[12px] text-blue-secondary w-[calc(100%-22px)]">
            {getGroupName()}
          </span>
        </div>
        <div className="w-full flex justify-start items-start flex-col mt-8 mb-[20px]">
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              آخرین قیمت
            </div>
            <div className={cls(`text-[14px]`, getLastPrice().color)}>
              {getLastPrice().value}
            </div>
          </div>
          <div className="w-full flex justify-between items-start">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              قیمت پایانی
            </div>
            <div className={cls(`text-[14px]`, getFinalPrice().color)}>
              {getFinalPrice().value}
            </div>
          </div>
        </div>
        <div className="border-gray-primary w-full h-[1px] border-b-[1px] opacity-10 mb-[20px]"></div>
        <div className="w-full flex justify-start items-start flex-col mb-[20px]">
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              ورود پول حقوقی در هفته
            </div>
            <div className={cls(`text-[14px]`, getWeekEntryLegalMoney().color)}>
              {getWeekEntryLegalMoney().value}
            </div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              ورود پول حقوقی در ماه
            </div>
            <div
              className={cls(`text-[14px]`, getMonthEntryLegalMoney().color)}
            >
              {getMonthEntryLegalMoney().value}
            </div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              میانگین قیمت 50 روزه
            </div>
            <div className={cls(`text-[14px]`, getPlAverage50Day().color)}>
              {getPlAverage50Day().value}
            </div>
          </div>
          <div className="w-full flex justify-between items-start">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              میانگین قیمت 100 روزه
            </div>
            <div className={cls(`text-[14px]`, getPlAverage100Day().color)}>
              {getPlAverage100Day().value}
            </div>
          </div>
        </div>
        <div className="border-gray-primary w-full h-[1px] border-b-[1px] opacity-10 mb-[20px]"></div>
        <div className="w-full flex justify-start items-start flex-col mb-[20px]">
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              EPS
            </div>
            <div className={cls(`text-[14px]`, getPES().color)}>
              {getPES().value}
            </div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              p/e
            </div>
            <div className={cls(`text-[14px]`, getPE().color)}>
              {getPE().value}
            </div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              گروهی p/e
            </div>
            <div
              className={cls(`text-[#070707] text-[14px]`, getGroupPE().color)}
            >
              {getGroupPE().value}
            </div>
          </div>
          <div className="w-full flex justify-between items-start">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              نسبت PE نماد به PE گروه
            </div>
            <div
              className={cls(`text-[#070707] text-[14px]`, getPEtoPE().color)}
            >
              {getPEtoPE().value}
            </div>
          </div>
        </div>
        <div className="border-gray-primary w-full h-[1px] border-b-[1px] opacity-10 mb-[20px]"></div>
        <h3 className="text-[20px] font-medium mb-[10px] -mt-2">
          نرخ رشد {getSymbol()}
        </h3>
        <div className="w-full flex justify-start items-start flex-col">
          <div className="w-full flex justify-between items-start mb-3  text-[14px]">
            <div className="text-gray-primary max-w-[160px] font-iransansx">
              رشد سود خالص نسبت به فصل قبل
            </div>
            <div className={cls(previousSeasonColor)}>
              <div>
                <span dir="ltr">%{previousSeasonPerc} </span>
                {/* <span className="font-iransansx text-[12px] mr-1">
                  {previousSeasonText} خالص
                </span> */}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              رشد سود خالص نسبت به فصل مشابه
            </div>
            <div className={cls(sameQuarterColor)}>
              <div>
                <span dir="ltr">%{sameQuarterPerc} </span>
                {/* <span className="font-iransansx text-[12px] mr-1">
                  {sameQuarterText} خالص
                </span> */}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              رشد سود عملیاتی نسبت به فصل قبل
            </div>
            <div className={cls(previousQuarterColor)}>
              <div>
                <span dir="ltr">%{previousQuarterPerc} </span>
                {/* <span className="font-iransansx text-[12px] mr-1">
                  {previousQuarterText} عملیاتی
                </span> */}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              رشد سود عملیاتی نسبت به فصل مشابه
            </div>
            <div className={cls(opPreviousQuarterColor)}>
              <div>
                <span dir="ltr">%{opPreviousQuarterPerc} </span>
                {/* <span className="font-iransansx text-[12px] mr-1">
                  {opPreviousQuarterText} عملیاتی
                </span> */}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              رشد درآمد نسبت به ماه قبل
            </div>
            <div className={cls(previousMonthColor)}>
              <div>
                <span dir="ltr">%{previousMonthPerc} </span>
                {/* <span className="font-iransansx text-[12px] mr-1">
                  {previousMonthText}
                </span> */}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-start">
            <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
              رشد درآمد نسبت به ماه مشابه سال قبل
            </div>
            <div className={cls(lastYearColor)}>
              <div>
                <span dir="ltr">%{lastYearPerc} </span>
                {/* <span className="font-iransansx text-[12px] mr-1">
                  {lastYearText}
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;
