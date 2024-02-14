"use client";

import downArrowIcon from "../../../../public/icons/down-arrow.svg";
import { useMouse } from "@mantine/hooks";
import { useElementSize } from "@mantine/hooks";
import { useMergedRef } from "@mantine/hooks";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import InformationsImpl from "./types";
import cls from "classnames";
import { numberWithCommas } from "@/utils/symbol-detail";

const Informations = ({
  getBuyRows,
  getSellRows,
  getSellBuyRangeSlider,
  getRealBuyAndSellInfos,
  getLegalBuyAndSellInfos,
}: InformationsImpl) => {
  const [outsideParent, setOutsideParent] = useState<"left" | "right">("left");
  const { ref: mouseRef, x } = useMouse();
  const { ref: rangeSlider, width } = useElementSize();
  const hoveredRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(mouseRef, rangeSlider);
  const [showTooltip, setShowTooltip] = useState(false);

  const mouseEnter = () => setShowTooltip(true);
  const mouseLeaeve = () => setShowTooltip(false);

  const {
    leftSignDown,
    leftSignUp,
    max: maxRange,
    middle,
    min: minRange,
    rightBuy,
    sellLeft,
    py,
  } = getSellBuyRangeSlider();

  const min = minRange;
  const max = maxRange;
  const half = middle;
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

  const xPosision =
    outsideParent === "left" ? x : outsideParent === "right" ? x - 90 : x - 45;
  const tooltipPosition = ((xPosision * 100) / width).toFixed(2);
  const tooltipStyle = { left: `${tooltipPosition}%` };

  let pcp = "0";
  pcp = ((countMove / py - 1) * 100).toFixed(2);

  useEffect(() => {
    if (!hoveredRef.current) return;
    const left = hoveredRef.current.offsetLeft;

    if (left <= 0) {
      setOutsideParent("left");
      return;
    } else if (left + 120 >= width) {
      setOutsideParent("right");
      return;
    }
  }, [countMove]);

  const {
    buyBottom: buyBottomReal,
    buyValue: buyValueReal,
    sellButtom: sellButtomReal,
    sellValue: sellValueReal,
    topBuy: topBuyReal,
    topSell: topSellReal,
  } = getRealBuyAndSellInfos();

  const {
    buyBottom: buyBottomLegal,
    buyValue: buyValueLegal,
    sellButtom: sellButtomLegal,
    sellValue: sellValueLegal,
    topBuy: topBuyLegal,
    topSell: topSellLegal,
  } = getLegalBuyAndSellInfos();

  return (
    <>
      <div
        className="w-[497px] rounded-[16px] border-[1px] border-[#E7E7E7] flex 
          justify-start items-start flex-col p-4 mb-4 bg-white"
      >
        <div className="w-full flex justify-center items-start flex-col mb-5">
          <div className="w-full flex justify-between items-center mb-5">
            <span className="text-[12px] font-inter text-gray-primary">
              {numberWithCommas(max)}
            </span>
            <span className="text-[12px] font-inter text-gray-primary">
              {numberWithCommas(half)}
            </span>
            <span className="text-[12px] font-inter text-gray-primary">
              {numberWithCommas(min)}
            </span>
          </div>
          <div
            className="w-[calc(100%-6px)] h-[7px] rounded-[7px] bg-gray-secondary relative
              flex justify-center items-center"
            ref={mergedRef}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeaeve}
          >
            {showTooltip && (
              <div
                ref={hoveredRef}
                className="absolute z-20 top-[-25px]  bg-red-200 font-inter text-[12px] 
                px-1  text-center"
                dir="ltr"
                style={tooltipStyle}
              >
                <span>{countMove}</span>
                <span className="ml-1">({pcp}%)</span>
              </div>
            )}

            <Image
              src={downArrowIcon}
              className="absolute top-[-20px] z-10 transition-all duration-150 ml-[-5px] mr-[-10px]"
              alt="upArrowIcon"
              style={{ left: `${leftSignUp}%` }}
              width={19}
            />
            <Image
              src={downArrowIcon}
              className="absolute bottom-[-20px] left-[40%] z-10 scale-y-[-1] transition-all duration-150 ml-[-5px] mr-[-10px]"
              style={{ left: `${leftSignDown}%` }}
              alt="downArrowIcon"
              width={19}
            />
            <span
              className="absolute bg-green-primary h-full
                 left-1/2  rounded-[7px]"
              style={{ right: `${rightBuy}%` }}
            ></span>
            <span
              className="absolute bg-red-primary h-full
                 right-1/2 rounded-[7px] transition-all duration-150"
              style={{ left: `${sellLeft}%` }}
            ></span>
          </div>
        </div>
        <div className="w-full flex justify-between items-start mt-7">
          <div className="w-[calc(50%-5px)] flex justify-start items-start flex-col">
            <div className="w-full flex justify-center items-center  text-gray-primary font-peyda">
              <span className="text-[12px] w-1/3 text-center">تعداد</span>
              <span className="text-[12px] w-1/3 text-center">حجم</span>
              <span className="text-[12px] w-1/3 text-center">قیمت</span>
            </div>
            <div className="w-full flex justify-start items-start flex-col mt-4">
              {getBuyRows().map((row, i) => (
                <div className="w-full mb-1.5 h-[26px] relative" key={i}>
                  <div
                    className="absolute inset-0 opacity-[28%] transition-all duration-150"
                    style={{
                      background: `linear-gradient(to right, #28C278 ${row[3]}%, white 0%)`,
                    }}
                  ></div>
                  <div className="w-full h-full flex justify-center items-center relative z-10">
                    <span className="text-[12px] font-inter w-1/3 text-center">
                      {row[2]}
                    </span>
                    <span className="text-[12px] font-inter w-1/3 text-center">
                      {row[1]}
                    </span>
                    <div
                      className="text-[12px] font-inter w-1/3 text-center  
                    "
                    >
                      <div className="relative inline-block underline underline-offset-2 group cursor-pointer">
                        {row[0]}
                        <div
                          className="absolute text-white bg-blue-300 text-[12px]
                       top-1/2 -translate-y-1/2 px-0.5 left-[calc(100%+6px)] z-10
                      invisible opacity-0
                       transition-all duration-150 group-hover:opacity-100 group-hover:visible"
                          dir="ltr"
                        >
                          <div
                            className={cls(
                              `relative z-20 flex justify-start items-center`,
                              row[4].color
                            )}
                          >
                            {" "}
                            {row[4].isNegative && (
                              <span className="inline-block mr-0.5">-</span>
                            )}{" "}
                            <span>{row[4].value}</span> <span>%</span>
                          </div>
                          <div
                            className="w-[7px] h-[7px] bg-blue-300 absolute top-1/2 -translate-y-1/2
                        left-[-3px] rotate-45 z-10"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[calc(50%-5px)] flex justify-start items-start flex-col">
            <div className="w-full flex justify-center items-center  text-gray-primary font-peyda">
              <span className="text-[12px] w-1/3 text-center">قیمت</span>
              <span className="text-[12px] w-1/3 text-center">حجم</span>
              <span className="text-[12px] w-1/3 text-center">تعداد</span>
            </div>
            <div className="w-full flex justify-start items-start flex-col mt-4">
              {getSellRows().map((row, i) => (
                <div className="w-full mb-1.5 h-[26px] relative" key={i}>
                  <div
                    className="absolute inset-0 opacity-[28%] scale-[-1] transition-all duration-150"
                    style={{
                      background: `linear-gradient(to right, #FF0000 ${row[3]}%, white 0%)`,
                    }}
                  ></div>
                  <div className="w-full h-full flex justify-center items-center relative z-10">
                    <div
                      className="text-[12px] font-inter w-1/3 text-center  
                    "
                    >
                      <div className="relative inline-block underline underline-offset-2 group cursor-pointer">
                        {row[2]}
                        <div
                          className="absolute text-white bg-blue-300 text-[12px]
                       top-1/2 -translate-y-1/2 px-0.5 right-[calc(100%+6px)] z-10
                      invisible opacity-0
                       transition-all duration-150 group-hover:opacity-100 group-hover:visible"
                          dir="ltr"
                        >
                          <div
                            className={cls(
                              `relative z-20 flex justify-start items-center`,
                              row[4].color
                            )}
                          >
                            {" "}
                            {row[4].isNegative && (
                              <span className="inline-block mr-0.5">-</span>
                            )}{" "}
                            <span>{row[4].value}</span> <span>%</span>
                          </div>
                          <div
                            className="w-[7px] h-[7px] bg-blue-300 absolute top-1/2 -translate-y-1/2
                        right-[-3px] rotate-45 z-10"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-[12px] font-inter w-1/3 text-center">
                      {row[1]}
                    </span>
                    <span className="text-[12px] font-inter w-1/3 text-center">
                      {row[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start items-center flex-col mt-7">
          <h3 className="text-[20px] font-medium mb-5">
            اطلاعات حقیقی و حقوقی
          </h3>

          <div className="w-full flex justify-start items-center">
            <div className="w-full flex justify-center items-center flex-col text-center">
              <span className="font-inter text-[11px] mb-0.5">
                {topBuyReal}
              </span>
              <div className="w-full bg-gray-secondary h-[5px] relative rounded-[5px]">
                <span
                  className="absolute left-0 top-0 bottom-0 
                     bg-green-primary rounded-[5px] transition-all duration-150"
                  style={{ width: `${buyValueReal}%` }}
                ></span>
              </div>
              <span className="font-inter text-[11px] mt-0.5" dir="ltr">
                (%{buyValueReal}) {buyBottomReal}
              </span>
            </div>

            <span className="mx-2 text-[14px] font-medium whitespace-nowrap">
              حقوقی
            </span>
            <div className="w-full flex justify-center items-center flex-col text-center">
              <span className="font-inter text-[11px] mb-0.5">
                {topSellReal}
              </span>
              <div className="w-full bg-gray-secondary h-[5px] relative rounded-[5px]">
                <span
                  className="absolute right-0 top-0 bottom-0 transition-all duration-150
                     bg-red-primary rounded-[5px]"
                  style={{ width: `${sellValueReal}%` }}
                ></span>
              </div>
              <span className="font-inter text-[11px] mt-0.5" dir="ltr">
                (%{sellValueReal}) {sellButtomReal}
              </span>
            </div>
          </div>
          <div className="w-full flex justify-start items-center">
            <div className="w-full flex justify-center items-center flex-col text-center">
              <span className="font-inter text-[11px] mb-0.5">
                {topBuyLegal}
              </span>
              <div className="w-full bg-gray-secondary h-[5px] relative rounded-[5px]">
                <span
                  className="absolute left-0 top-0 bottom-0 
                     bg-green-primary rounded-[5px] transition-all duration-150"
                  style={{ width: `${buyValueLegal}%` }}
                ></span>
              </div>
              <span className="font-inter text-[11px] mt-0.5" dir="ltr">
                (%{buyValueLegal}) {buyBottomLegal}
              </span>
            </div>

            <span className="mx-2 text-[14px] font-medium whitespace-nowrap">
              حقیقی
            </span>
            <div className="w-full flex justify-center items-center flex-col text-center">
              <span className="font-inter text-[11px] mb-0.5">
                {topSellLegal}
              </span>
              <div className="w-full bg-gray-secondary h-[5px] relative rounded-[5px]">
                <span
                  className="absolute right-0 top-0 bottom-0 transition-all duration-150
                     bg-red-primary rounded-[5px]"
                  style={{ width: `${sellValueLegal}%` }}
                ></span>
              </div>
              <span className="font-inter text-[11px] mt-0.5" dir="ltr">
                (%{sellValueLegal}) {sellButtomLegal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Informations;
