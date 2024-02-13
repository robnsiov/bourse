import TradesImpl from "./types";
import cls from "classnames";

const Trades = ({
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
}: TradesImpl) => {
  return (
    <>
      <div
        className="bg-white w-full flex justify-start items-start flex-col 
            border-[1px] border-[#E7E7E7] rounded-[16px]"
      >
        <div
          className="w-full flex justify-start items-start border-b-[1px]
               border-b-[#E7E7E7] p-2"
        >
          <div className="w-1/2 font-medium text-[20px] text-center">
            حجم معاملات
          </div>
          <div className="w-1/2 font-medium text-[20px] text-center">
            ارزش معاملات
          </div>
        </div>
        <div className="w-full flex justify-start items-start">
          <div className="w-1/2 flex justify-start items-start flex-col py-5 px-4">
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                حجم مبنا
              </div>
              <div className="text-[#070707] text-[14px]">
                {getBvolTable().value}
              </div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                حجم معاملات روز
              </div>
              <div className="text-[#070707] text-[14px]">
                {getTvolTable().value}
              </div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                میانگین حجم 30 روز
              </div>
              <div className="text-[#070707] text-[14px]">
                {getBvolAverage30DayTable().value}
              </div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                میانگین حجم 90 روز
              </div>
              <div className="text-[#070707] text-[14px]">
                {getBvolAverage90DayTable().value}
              </div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                نسبت حجم معاملات روز به میانگین ماه
              </div>
              <div
                className={cls(
                  `text-[14px]`,
                  getToBvolAverage30DayTable().color
                )}
              >
                {getToBvolAverage30DayTable().value}
              </div>
            </div>
            <div className="w-full flex justify-between items-start">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                نسبت حجم معاملات روز به میانگین 3 ماه
              </div>
              <div
                className={cls(
                  `text-[14px]`,
                  getToBvolAverage90DayTable().color
                )}
              >
                {getToBvolAverage90DayTable().value}
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-start items-start flex-col py-5 px-4">
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                ارزش بازار
              </div>
              <div className="text-[#070707] text-[14px]">
                {getMvTable().value}
              </div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                ارزش معاملات روز
              </div>
              <div className="text-[#070707] text-[14px]">
                {getTvalTable().value}
              </div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                میانگین ارزش 30 روز
              </div>
              <div className="text-[#070707] text-[14px]">
                {getBvalAverage30Day().value}
              </div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                میانگین ارزش 90 روز
              </div>
              <div className="text-[#070707] text-[14px]">
                {getBvalAverage90Day().value}
              </div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                نسبت ارزش معاملات هفته به ماه
              </div>
              <div
                className={cls(`text-[14px]`, getBvalAverage7To30Day().color)}
              >
                {getBvalAverage7To30Day().value}
              </div>
            </div>
            <div className="w-full flex justify-between items-start">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                نسبت ارزش معاملات هفته به 3 ماه
              </div>
              <div
                className={cls(`text-[14px]`, getBvalAverage7To90Day().color)}
              >
                {getBvalAverage7To90Day().value}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trades;
