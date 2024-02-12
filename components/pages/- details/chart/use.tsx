import { useState } from "react";

const chartTypes = [
  { title: "نمودار قیمت سهم" },
  { title: "نسبت سرانه خرید به فروش حقیقی" },
  { title: "سابقه خرید و فروش حقوقی" },
  { title: "گزارش عملکرد ماهانه" },
  { title: "گزارش سود فصلی" },
  { title: "حاشیه سود عملیاتی فصلی" },
];

const chartDays = [
  { title: "امروز", days: 1 },
  { title: "هفته", days: 7, number: "1" },
  { title: "ماه", days: 30, number: "1" },
  { title: "ماه", days: 90, number: "3" },
  { title: "ماه", days: 180, number: "6" }, // title + number => 6 ماه
  { title: "سال", days: 365, number: "1" },
];

const useChart = () => {
  const defaultChartType = chartTypes[0].title;
  const defaultChartDay = chartDays[0].days;

  const [activeChartType, setActiveChartType] = useState(defaultChartType);
  const [activeChartDay, setActiveChartDay] = useState(defaultChartDay);

  return {
    chartTypes,
    setActiveChartType,
    activeChartType,
    chartDays,
    activeChartDay,
    setActiveChartDay,
  };
};
export default useChart;
