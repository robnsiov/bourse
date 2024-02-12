import Image from "next/image";
import fullscreenIcon from "../../../../public/icons/fullscreen.svg";
import useChart from "./use";
import cls from "classnames";
import "./index.css";

const Chart = () => {
  const {
    activeChartType,
    chartTypes,
    setActiveChartType,
    chartDays,
    activeChartDay,
    setActiveChartDay,
  } = useChart();
  return (
    <>
      <div
        className="p-4 w-full flex justify-start  h-[500px]
           border-[1px] border-[#E7E7E7] rounded-[16px] mb-4 bg-white"
      >
        <div
          className="min-h-full flex justify-start 
            items-start flex-col py-1"
        >
          <div className="w-full h-full border-[1px] border-[#E7E7E7] pr-1 py-1 rounded-[10px]">
            <div
              className="w-full h-full flex justify-start items-start flex-col 
                 overflow-y-auto p-2
                 overflow-x-hidden
              chart-custom-scrollbar 
              "
              dir="ltr"
            >
              {chartTypes.map(({ title }) => (
                <div
                  onClick={() => setActiveChartType(title)}
                  key={title}
                  className={cls(
                    `rounded-[11px]  px-5 py-3 min-h-[76px]
                border-2 border-blue-secondary font-semibold
                 text-orange-primary transition-all duration-200 
                 hover:bg-blue-secondary hover:text-white cursor-pointer
                 hover:shadow-primary mb-5 last:mb-0 w-[166px]`,
                    {
                      "bg-blue-secondary shadow-primary text-white":
                        title === activeChartType,
                    }
                  )}
                  dir="rtl"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full mr-4 flex justify-start items-start flex-col">
          <div className="w-full flex justify-end items-start mb-6">
            <Image
              src={fullscreenIcon}
              alt="fullscreenIcon"
              width={16}
              className="cursor-pointer"
            />
          </div>
          <div className="w-full flex justify-between items-start mb-6">
            <div className="mr-7 flex justify-start items-center">
              <div className="flex justify-start items-start flex-col">
                <span className="font-inter text-green-primary font-bold text-[28px]">
                  3.6%+
                </span>
                <span className="text-gray-primary text-[15px]">
                  روند کلی نمودار
                </span>
              </div>
              <div className="text-[12px] text-green-primary font-bold opacity-70 mr-2 relative bottom-1">
                <span className="font-inter">+0.040</span>{" "}
                <span className="font-iransansx mr-0.5">ریال</span>
              </div>
            </div>
            <div className="flex justify-start items-start">
              {chartDays.map(({ days, title, number }) => (
                <div
                  onClick={() => setActiveChartDay(days)}
                  key={title + number}
                  className={cls(
                    `text-[12px] border-2 border-blue-secondary font-iransansx
                text-blue-secondary p-y0.5 px-1 rounded-[5px] cursor-pointer transition-all duration-200
                hover:bg-blue-secondary hover:text-white hover:border-gray-secondary 
                ml-2.5 min-h-[24px] whitespace-nowrap`,
                    {
                      "text-white border-gray-secondary bg-blue-secondary":
                        activeChartDay === days,
                    }
                  )}
                >
                  {number && <span className="font-inter">{number}</span>}{" "}
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[300px] bg-gray-200"></div>
        </div>
      </div>
    </>
  );
};

export default Chart;
