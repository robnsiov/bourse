import EfficiencyImpl from "./types";
import cls from "classnames";

const Efficiency = ({
  getIndustryEfficiencyOneMonth,
  getIndustryEfficiencyOneWeek,
  getIndustryEfficiencyOneYear,
  getIndustryEfficiencyThreeMonths,
  getSymbolEfficiencyOneMonth,
  getSymbolEfficiencyOneWeek,
  getSymbolEfficiencyOneYear,
  getSymbolEfficiencyThreeMonths,
}: EfficiencyImpl) => {
  return (
    <>
      <div
        className="w-full mt-4 bg-white border-[1px] border-[#E7E7E7] 
            flex justify-start items-start flex-col rounded-[18px]"
      >
        <div className="w-full flex justify-between items-center p-2">
          <div className="w-1/2 text-center font-semibold text-[12px]">
            بازده فملی
          </div>
          <div className="w-1/2 text-center font-semibold text-[12px]">
            بازده صنعت
          </div>
        </div>
        <div className="w-full flex justify-start items-start">
          <div className="w-1/2 flex justify-start items-start flex-col pb-2">
            <div className="w-full flex justify-center items-center mb-3">
              <span className="text-[#A2A2A2] font-iransansx ml-3 min-w-[43px] text-[12px]">
                یک هفته
              </span>
              <div
                className="w-[127px] bg-gray-secondary h-[5px] rounded-[5px] relative 
                    flex justify-start items-start"
              >
                <span
                  dir="ltr"
                  className={
                    "absolute left-1/2 -translate-x-1/2  top-2 text-[9px] font-inter"
                  }
                >
                  {getSymbolEfficiencyOneWeek().value + "%"}
                </span>
                <div
                  className={cls(
                    `rounded-[5px] transition-all duration-200 h-[5px] relative w-[0]`,
                    getSymbolEfficiencyOneWeek().color
                  )}
                  style={{
                    width: Math.abs(+getSymbolEfficiencyOneWeek().value) + "%",
                  }}
                ></div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <span className="text-[#A2A2A2] font-iransansx ml-3 min-w-[43px] text-[12px]">
                یک ماهه
              </span>
              <div
                className="w-[127px] bg-gray-secondary h-[5px] rounded-[5px] relative 
                    flex justify-start items-start"
              >
                <span
                  dir="ltr"
                  className={
                    "absolute left-1/2 -translate-x-1/2  top-2 text-[9px] font-inter"
                  }
                >
                  {getSymbolEfficiencyOneMonth().value + "%"}
                </span>
                <div
                  className={cls(
                    `rounded-[5px] transition-all duration-200 h-[5px] relative w-[0]`,
                    getSymbolEfficiencyOneMonth().color
                  )}
                  style={{
                    width: Math.abs(+getSymbolEfficiencyOneMonth().value) + "%",
                  }}
                ></div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <span className="text-[#A2A2A2] font-iransansx ml-3 min-w-[43px] text-[12px]">
                سه ماهه
              </span>
              <div
                className="w-[127px] bg-gray-secondary h-[5px] rounded-[5px] relative 
                    flex justify-start items-start"
              >
                <span
                  dir="ltr"
                  className={
                    "absolute left-1/2 -translate-x-1/2  top-2 text-[9px] font-inter"
                  }
                >
                  {getSymbolEfficiencyThreeMonths().value + "%"}
                </span>
                <div
                  className={cls(
                    `rounded-[5px] transition-all duration-200 h-[5px] relative w-[0]`,
                    getSymbolEfficiencyThreeMonths().color
                  )}
                  style={{
                    width:
                      Math.abs(+getSymbolEfficiencyThreeMonths().value) + "%",
                  }}
                ></div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <span className="text-[#A2A2A2] font-iransansx ml-3 min-w-[43px] text-[12px]">
                یکساله
              </span>
              <div
                className="w-[127px] bg-gray-secondary h-[5px] rounded-[5px] relative 
                    flex justify-start items-start"
              >
                <span
                  dir="ltr"
                  className={
                    "absolute left-1/2 -translate-x-1/2  top-2 text-[9px] font-inter"
                  }
                >
                  {getSymbolEfficiencyOneYear().value + "%"}
                </span>
                <div
                  className={cls(
                    `rounded-[5px] transition-all duration-200 h-[5px] relative w-[0]`,
                    getSymbolEfficiencyOneYear().color
                  )}
                  style={{
                    width: Math.abs(+getSymbolEfficiencyOneYear().value) + "%",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-start items-start flex-col pb-2">
            <div className="w-full flex justify-center items-center mb-3">
              <span className="text-[#A2A2A2] font-iransansx ml-3 min-w-[43px] text-[12px]">
                یک هفته
              </span>
              <div
                className="w-[127px] bg-gray-secondary h-[5px] rounded-[5px] relative 
                    flex justify-start items-start"
              >
                <span
                  dir="ltr"
                  className={
                    "absolute left-1/2 -translate-x-1/2  top-2 text-[9px] font-inter"
                  }
                >
                  {getIndustryEfficiencyOneWeek().value + "%"}
                </span>
                <div
                  className={cls(
                    `rounded-[5px] transition-all duration-200 h-[5px] relative w-[0]`,
                    getIndustryEfficiencyOneWeek().color
                  )}
                  style={{
                    width:
                      Math.abs(+getIndustryEfficiencyOneWeek().value) + "%",
                  }}
                ></div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <span className="text-[#A2A2A2] font-iransansx ml-3 min-w-[43px] text-[12px]">
                یک ماهه
              </span>
              <div
                className="w-[127px] bg-gray-secondary h-[5px] rounded-[5px] relative 
                    flex justify-start items-start"
              >
                <span
                  dir="ltr"
                  className={
                    "absolute left-1/2 -translate-x-1/2  top-2 text-[9px] font-inter"
                  }
                >
                  {getIndustryEfficiencyOneMonth().value + "%"}
                </span>
                <div
                  className={cls(
                    `rounded-[5px] transition-all duration-200 h-[5px] relative w-[0]`,
                    getIndustryEfficiencyOneMonth().color
                  )}
                  style={{
                    width:
                      Math.abs(+getIndustryEfficiencyOneMonth().value) + "%",
                  }}
                ></div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <span className="text-[#A2A2A2] font-iransansx ml-3 min-w-[43px] text-[12px]">
                سه ماهه
              </span>
              <div
                className="w-[127px] bg-gray-secondary h-[5px] rounded-[5px] relative 
                    flex justify-start items-start"
              >
                <span
                  dir="ltr"
                  className={
                    "absolute left-1/2 -translate-x-1/2  top-2 text-[9px] font-inter"
                  }
                >
                  {getIndustryEfficiencyThreeMonths().value + "%"}
                </span>
                <div
                  className={cls(
                    `rounded-[5px] transition-all duration-200 h-[5px] relative w-[0]`,
                    getIndustryEfficiencyThreeMonths().color
                  )}
                  style={{
                    width:
                      Math.abs(+getIndustryEfficiencyThreeMonths().value) + "%",
                  }}
                ></div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <span className="text-[#A2A2A2] font-iransansx ml-3 min-w-[43px] text-[12px]">
                یکساله
              </span>
              <div
                className="w-[127px] bg-gray-secondary h-[5px] rounded-[5px] relative 
                    flex justify-start items-start"
              >
                <span
                  dir="ltr"
                  className={
                    "absolute left-1/2 -translate-x-1/2  top-2 text-[9px] font-inter"
                  }
                >
                  {getIndustryEfficiencyOneYear().value + "%"}
                </span>
                <div
                  className={cls(
                    `rounded-[5px] transition-all duration-200 h-[5px] relative w-[0]`,
                    getIndustryEfficiencyOneYear().color
                  )}
                  style={{
                    width:
                      Math.abs(+getIndustryEfficiencyOneYear().value) + "%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Efficiency;
