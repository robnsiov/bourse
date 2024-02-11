"use client";

import downArrowIcon from "../../../../public/icons/down-arrow.svg";
import { useMouse } from "@mantine/hooks";
import { useElementSize } from "@mantine/hooks";
import { useMergedRef } from "@mantine/hooks";
import Image from "next/image";
import { useState } from "react";

const Informations = () => {
  const { ref: mouseRef, x } = useMouse();
  const { ref: elementRef, width } = useElementSize();
  const mergedRef = useMergedRef(mouseRef, elementRef);
  const [showTooltip, setShowTooltip] = useState(false);

  const mouseEnter = () => setShowTooltip(true);
  const mouseLeaeve = () => setShowTooltip(false);

  const min = 6970;
  const max = 8010;
  const total = min + max;
  const half = total / 2;
  const mousePosition = (x * 100) / width;

  let countMove = 0;
  if (mousePosition > 50) {
    const move = mousePosition - 50;
    const minPath = half;
    const maxPath = max;
    const path = maxPath - minPath;
    const to = (move * 2 * path) / 100;
    countMove = minPath + +to.toFixed(0);
  } else {
    const move = mousePosition;
    const minPath = min;
    const maxPath = half;
    const path = maxPath - minPath;
    const to = (move * 2 * path) / 100;
    countMove = minPath + +to.toFixed(0);
  }

  const tooltipPosition = (((x - 50 / 2) * 100) / width).toFixed(2);
  const tooltipStyle = { left: `${tooltipPosition}%` };
  return (
    <>
      <div
        className="w-[497px] rounded-[16px] border-[1px] border-[#E7E7E7] flex 
          justify-start items-start flex-col p-4 mb-4"
      >
        <div className="w-full flex justify-center items-start flex-col mb-5">
          <div className="w-full flex justify-between items-center mb-2.5">
            <span className="text-[12px] font-inter text-[#757575]">8,010</span>
            <span className="text-[12px] font-inter text-[#757575]">7,490</span>
            <span className="text-[12px] font-inter text-[#757575]">6,970</span>
          </div>
          <div
            className="w-[calc(100%-6px)] h-[7px] rounded-[7px] bg-[#EFF2F7] relative
              flex justify-center items-center"
            ref={mergedRef}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeaeve}
          >
            {showTooltip && (
              <div
                className="absolute z-20 top-[-25px] w-[50px] h-[20px] bg-red-200"
                style={tooltipStyle}
              >
                {countMove}
              </div>
            )}

            <Image
              src={downArrowIcon}
              className="absolute top-[-13px] left-[60%] z-10"
              alt="downArrowIcon"
            />
            <Image
              src={downArrowIcon}
              className="absolute bottom-[-13px] left-[40%] z-10 scale-y-[-1]"
              alt="upArrowIcon"
            />
            <div className="w-1/2 h-full relative">
              <span
                className="absolute bg-[#008000] h-full
                 left-0 w-[80%] rounded-[7px]"
              ></span>
            </div>
            <div className="w-1/2 h-full relative">
              <span
                className="absolute bg-[#FF0000] h-full
                 right-0 w-[10%] rounded-[7px]"
              ></span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-start mt-7">
          <div className="w-[calc(50%-5px)] flex justify-start items-start flex-col">
            <div className="w-full flex justify-center items-center  text-[#757575] font-peyda">
              <span className="text-[12px] w-1/3 text-center">تعداد</span>
              <span className="text-[12px] w-1/3 text-center">حجم</span>
              <span className="text-[12px] w-1/3 text-center">قیمت</span>
            </div>
            <div className="w-full flex justify-start items-start flex-col mt-4">
              <div className="w-full mb-1.5 h-[26px] relative">
                <div className="absolute left-0 top-0 bottom-0 bg-[#28C278] opacity-[28%] w-[50%]"></div>
                <div className="w-full h-full flex justify-center items-center relative z-10">
                  <span className="text-[12px] font-inter w-1/3 text-center">
                    44
                  </span>
                  <span className="text-[12px] font-inter w-1/3 text-center">
                    4,804,448
                  </span>
                  <span className="text-[12px] font-inter w-1/3 text-center underline underline-offset-2">
                    7,390
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[calc(50%-5px)] flex justify-start items-start flex-col">
            <div className="w-full flex justify-center items-center  text-[#757575] font-peyda">
              <span className="text-[12px] w-1/3 text-center">قیمت</span>
              <span className="text-[12px] w-1/3 text-center">حجم</span>
              <span className="text-[12px] w-1/3 text-center">تعداد</span>
            </div>
            <div className="w-full flex justify-start items-start flex-col mt-4">
              <div className="w-full mb-1.5 h-[26px] relative">
                <div className="absolute right-0 top-0 bottom-0 bg-[#FB2E49] opacity-[28%] w-[60%]"></div>
                <div className="w-full h-full flex justify-center items-center relative z-10">
                  <span className="text-[12px] font-inter w-1/3 text-center underline underline-offset-2">
                    7,410
                  </span>
                  <span className="text-[12px] font-inter w-1/3 text-center">
                    14,496
                  </span>
                  <span className="text-[12px] font-inter w-1/3 text-center">
                    9
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start items-center flex-col mt-7">
          <h3 className="text-[20px] font-medium mb-5">
            اطلاعات حقیقی و حقوقی
          </h3>

          <div className="w-full flex justify-start items-center">
            <div className="w-full flex justify-center items-center flex-col text-center">
              <span className="font-inter text-[11px] mb-0.5">845</span>
              <div className="w-full bg-[#EFF2F7] h-[5px] relative rounded-[5px]">
                <span
                  className="absolute left-0 top-0 bottom-0 w-[60%]
                     bg-[#008000] rounded-[5px]"
                ></span>
              </div>
              <span className="font-inter text-[11px] mt-0.5">
                (29.8%) 11.8 M
              </span>
            </div>

            <span className="mx-2 text-[14px] font-medium whitespace-nowrap">
              حقیقی
            </span>
            <div className="w-full flex justify-center items-center flex-col text-center">
              <span className="font-inter text-[11px] mb-0.5">845</span>
              <div className="w-full bg-[#EFF2F7] h-[5px] relative rounded-[5px]">
                <span
                  className="absolute right-0 top-0 bottom-0 w-[40%]
                     bg-[#FF0000] rounded-[5px]"
                ></span>
              </div>
              <span className="font-inter text-[11px] mt-0.5">
                (29.8%) 11.8 M
              </span>
            </div>
          </div>
          <div className="w-full flex justify-start items-center mt-3">
            <div className="w-full flex justify-center items-center flex-col text-center">
              <span className="font-inter text-[11px] mb-0.5">845</span>
              <div className="w-full bg-[#EFF2F7] h-[5px] relative rounded-[5px]">
                <span
                  className="absolute left-0 top-0 bottom-0 w-[60%]
                     bg-[#008000] rounded-[5px]"
                ></span>
              </div>
              <span className="font-inter text-[11px] mt-0.5">
                (29.8%) 11.8 M
              </span>
            </div>

            <span className="mx-2 text-[14px] font-medium whitespace-nowrap">
              حقوقی
            </span>
            <div className="w-full flex justify-center items-center flex-col text-center">
              <span className="font-inter text-[11px] mb-0.5">845</span>
              <div className="w-full bg-[#EFF2F7] h-[5px] relative rounded-[5px]">
                <span
                  className="absolute right-0 top-0 bottom-0 w-[40%]
                     bg-[#FF0000] rounded-[5px]"
                ></span>
              </div>
              <span className="font-inter text-[11px] mt-0.5">
                (29.8%) 11.8 M
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Informations;
