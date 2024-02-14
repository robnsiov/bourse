import Axios from "@/utils/axios";
import { UseDetailsImpl } from "./types";
import APIS from "@/apis";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  convertToInternationalCurrencySystem,
  numberWithCommas,
} from "@/utils/symbol-detail";

const useDetails = ({ id }: UseDetailsImpl) => {
  // symbolGeneralInfo
  const symbolGeneralInfoQueryFn = () => {
    return Axios<{ data: any }>({
      method: "GET",
      url: `${APIS.symbolGeneralInfo}?exchange_number=${id}`,
    });
  };

  // symbolGetCartData
  const symbolGetCartDataQueryFn = () => {
    return Axios<{ data: any }>({
      method: "GET",
      url: `${APIS.symbolGetCartData}?exchange_number=${id}`,
    });
  };

  // symbolEfficiency
  const symbolGetEfficiencyQueryFn = () => {
    return Axios<{ data: any }>({
      method: "GET",
      url: `${APIS.symbolGetEfficiency}?exchange_number=${id}`,
    });
  };

  // industryEfficiency
  const industryGetEfficiencyQueryFn = () => {
    return Axios<{ data: any }>({
      method: "GET",
      // url: `${APIS.industryGetEfficiency}?exchange_number=${id}`,
      url: `${APIS.industryGetEfficiency}`,
    });
  };

  const results = useQueries({
    queries: [
      {
        queryKey: ["symbolGeneralInfo"],
        queryFn: symbolGeneralInfoQueryFn,
        staleTime: Infinity,
      },
      {
        queryKey: ["symbolGetCartData"],
        queryFn: symbolGetCartDataQueryFn,
        staleTime: Infinity,
      },
      {
        queryKey: ["symbolGetEfficiency"],
        queryFn: symbolGetEfficiencyQueryFn,
        staleTime: Infinity,
      },
      {
        queryKey: ["industryGetEfficiency"],
        queryFn: industryGetEfficiencyQueryFn,
        staleTime: Infinity,
      },
    ],
  });

  const symbolGeneralInfo = results[0].data?.data as any;
  const symbolGetCartData = results[1].data?.data as any;
  const symbolGetEfficiency = results[2].data?.data as any;
  const industryGetEfficiency = results[3].data?.data as any;

  // last price = pl

  const getLastPrice = () => {
    const data = { value: "0", color: "" };
    const lastPrice = symbolGeneralInfo.pl;
    const priceInformation = symbolGeneralInfo.py;
    if (+lastPrice < +priceInformation) data.color = "text-red-primary";
    else data.color = "text-green-primary";
    data.value = numberWithCommas(lastPrice);
    return data;
  };

  const getFinalPrice = () => {
    const data = { value: "0", color: "" };
    const finalPrice = symbolGeneralInfo.pc;
    const priceInformation = symbolGeneralInfo.py;
    if (+finalPrice < +priceInformation) data.color = "text-red-primary";
    else data.color = "text-green-primary";
    data.value = numberWithCommas(finalPrice);
    return data;
  };

  const getWeekEntryLegalMoney = () => {
    const data = { value: "0", color: "" };
    const week_entry_legal_money = symbolGetCartData.week_entry_legal_money;
    if (+week_entry_legal_money < 1) data.color = "text-red-primary";
    else data.color = "text-green-primary";
    data.value = convertToInternationalCurrencySystem(week_entry_legal_money);
    return data;
  };

  const getMonthEntryLegalMoney = () => {
    const data = { value: "0", color: "" };
    const month_entry_legal_money = symbolGetCartData.month_entry_legal_money;
    if (+month_entry_legal_money < 1) data.color = "text-red-primary";
    else data.color = "text-green-primary";
    data.value = convertToInternationalCurrencySystem(month_entry_legal_money);
    return data;
  };

  const getPlAverage50Day = () => {
    const data = { value: "0", color: "" };
    const pl_average_50_day = symbolGetCartData.pl_average_50_day;
    const lastPrice = symbolGeneralInfo.pl;
    if (+lastPrice < +pl_average_50_day) data.color = "text-red-primary";
    else data.color = "text-green-primary";
    data.value = convertToInternationalCurrencySystem(pl_average_50_day);
    return data;
  };
  const getPlAverage100Day = () => {
    const data = { value: "0", color: "" };
    const pl_average_100_day = symbolGetCartData.pl_average_100_day;
    const lastPrice = symbolGeneralInfo.pl;
    if (+lastPrice < +pl_average_100_day) data.color = "text-red-primary";
    else data.color = "text-green-primary";
    data.value = convertToInternationalCurrencySystem(pl_average_100_day);
    return data;
  };

  const getPES = () => {
    const data = { value: "0", color: "" };
    const eps = symbolGeneralInfo.eps;
    if (+eps < 1) data.color = "text-red-primary";
    else data.color = "text-green-primary";
    data.value = numberWithCommas(eps);
    return data;
  };
  const getPE = () => {
    const data = { value: "0", color: "" };
    const pe = symbolGeneralInfo.pe;
    if (+pe < 0 || pe > +symbolGetCartData.group_pe * 2)
      data.color = "text-red-primary";
    else data.color = "text-green-primary";
    data.value = numberWithCommas(pe);
    return data;
  };
  const getPEtoPE = () => {
    const data = { value: "0", color: "" };
    const pe = symbolGeneralInfo.pe;
    data.value = convertToInternationalCurrencySystem(
      +pe / +symbolGetCartData.group_pe
    );
    return data;
  };

  const getGroupPE = () => {
    const data = { value: "0", color: "" };
    const group_pe = symbolGetCartData.group_pe;
    data.value = convertToInternationalCurrencySystem(group_pe);
    return data;
  };

  // table
  const getBvolTable = () => {
    const data = { value: "0", color: "" };
    const bvol = symbolGeneralInfo.bvol;
    data.value = convertToInternationalCurrencySystem(bvol);
    return data;
  };
  const getTvolTable = () => {
    const data = { value: "0", color: "" };
    const tvol = symbolGeneralInfo.tvol;
    data.value = convertToInternationalCurrencySystem(tvol);
    return data;
  };

  const getBvolAverage30DayTable = () => {
    const data = { value: "0", color: "" };
    const bvol_average_30_day = symbolGetCartData.bvol_average_30_day;
    data.value = convertToInternationalCurrencySystem(bvol_average_30_day);
    return data;
  };

  const getBvolAverage90DayTable = () => {
    const data = { value: "0", color: "" };
    const bvol_average_90_day = symbolGetCartData.bvol_average_90_day;
    data.value = convertToInternationalCurrencySystem(bvol_average_90_day);
    return data;
  };

  const getToBvolAverage30DayTable = () => {
    const data = { value: "0", color: "" };
    const tvol = symbolGeneralInfo.tvol;
    const bvol_average_30_day = symbolGetCartData.bvol_average_30_day;
    const res = +tvol / +bvol_average_30_day;
    if (res < 1) data.color = "text-red-primary";
    else if (res < 1.99) data.color = "text-green-primary";
    else data.color = "blue-tertiary";
    data.value = convertToInternationalCurrencySystem(res);
    return data;
  };

  const getToBvolAverage90DayTable = () => {
    const data = { value: "0", color: "" };
    const tvol = symbolGeneralInfo.tvol;
    const bvol_average_90_day = symbolGetCartData.bvol_average_90_day;
    const res = +tvol / +bvol_average_90_day;
    if (res < 1) data.color = "text-red-primary";
    else if (res < 1.99) data.color = "text-green-primary";
    else data.color = "blue-tertiary";
    data.value = convertToInternationalCurrencySystem(res);
    return data;
  };

  const getMvTable = () => {
    const data = { value: "0", color: "" };
    const mv = symbolGeneralInfo.mv;
    data.value = convertToInternationalCurrencySystem(mv);
    return data;
  };

  const getTvalTable = () => {
    const data = { value: "0", color: "" };
    const tval = symbolGeneralInfo.tval;
    data.value = convertToInternationalCurrencySystem(tval);
    return data;
  };

  const getBvalAverage30Day = () => {
    const data = { value: "0", color: "" };
    const bval_average_30_day = symbolGetCartData.bval_average_30_day;
    data.value = convertToInternationalCurrencySystem(bval_average_30_day);
    return data;
  };
  const getBvalAverage90Day = () => {
    const data = { value: "0", color: "" };
    const bval_average_90_day = symbolGetCartData.bval_average_90_day;
    data.value = convertToInternationalCurrencySystem(bval_average_90_day);
    return data;
  };

  const getBvalAverage7To30Day = () => {
    const data = { value: "0", color: "" };
    const bval_average_7_day = symbolGetCartData.bval_average_7_day;
    const bval_average_30_day = symbolGetCartData.bval_average_30_day;
    const res = +bval_average_7_day / +bval_average_30_day;
    if (res < 1) data.color = "text-red-primary";
    else if (res < 1.99) data.color = "text-green-primary";
    else data.color = "blue-tertiary";
    data.value = convertToInternationalCurrencySystem(res);
    return data;
  };

  const getBvalAverage7To90Day = () => {
    const data = { value: "0", color: "" };
    const bval_average_7_day = symbolGetCartData.bval_average_7_day;
    const bval_average_90_day = symbolGetCartData.bval_average_90_day;
    const res = +bval_average_7_day / +bval_average_90_day;
    if (res < 1) data.color = "text-red-primary";
    else if (res < 1.99) data.color = "text-green-primary";
    else data.color = "blue-tertiary";
    data.value = convertToInternationalCurrencySystem(res);
    return data;
  };

  function getEfficiency(data: any) {
    return {
      color: +data > 0 ? "bg-green-primary" : "bg-red-primary",
      num: (+data).toFixed(2),
    };
  }

  // efficiency

  const getSymbolEfficiencyOneWeek = () => {
    const data = { value: "0", color: "" };
    const efficiency_one_week = symbolGetEfficiency.efficiency_one_week ?? 0;
    const res = getEfficiency(efficiency_one_week);
    data.value = res.num;
    data.color = res.color;
    return data;
  };

  const getSymbolEfficiencyOneMonth = () => {
    const data = { value: "0", color: "" };
    const efficiency_one_month = symbolGetEfficiency.efficiency_one_month ?? 0;
    const res = getEfficiency(efficiency_one_month);
    data.value = res.num;
    data.color = res.color;
    return data;
  };

  const getSymbolEfficiencyThreeMonths = () => {
    const data = { value: "0", color: "" };
    const efficiency_three_month =
      symbolGetEfficiency.efficiency_three_month ?? 0;
    const res = getEfficiency(efficiency_three_month);
    data.value = res.num;
    data.color = res.color;
    return data;
  };

  const getSymbolEfficiencyOneYear = () => {
    const data = { value: "0", color: "" };
    const efficiency_one_year = symbolGetEfficiency.efficiency_one_year ?? 0;
    const res = getEfficiency(efficiency_one_year);
    data.value = res.num;
    data.color = res.color;
    return data;
  };

  const getIndustryEfficiencyOneWeek = () => {
    const data = { value: "0", color: "" };
    const efficiency_one_week = industryGetEfficiency.efficiency_one_week ?? 0;
    const res = getEfficiency(efficiency_one_week);
    data.value = res.num;
    data.color = res.color;
    return data;
  };
  const getIndustryEfficiencyOneMonth = () => {
    const data = { value: "0", color: "" };
    const efficiency_one_month =
      industryGetEfficiency.efficiency_one_month ?? 0;
    const res = getEfficiency(efficiency_one_month);
    data.value = res.num;
    data.color = res.color;
    return data;
  };
  const getIndustryEfficiencyThreeMonths = () => {
    const data = { value: "0", color: "" };
    const efficiency_three_month =
      industryGetEfficiency.efficiency_three_month ?? 0;
    const res = getEfficiency(efficiency_three_month);
    data.value = res.num;
    data.color = res.color;
    return data;
  };

  const getIndustryEfficiencyOneYear = () => {
    const data = { value: "0", color: "" };
    const efficiency_one_year = industryGetEfficiency.efficiency_one_year ?? 0;
    const res = getEfficiency(efficiency_one_year);
    data.value = res.num;
    data.color = res.color;
    return data;
  };

  // sell&buy infos

  // real & legal

  // real

  const getRealByPercentage = () => {
    return (
      (symbolGeneralInfo.ct_Buy_I_Volume /
        (symbolGeneralInfo.ct_Buy_I_Volume +
          symbolGeneralInfo.ct_Buy_N_Volume)) *
      100
    ).toFixed(1);
  };

  const getRealBuyAndSellInfos = () => {
    const data = {
      topSell: "0",
      topBuy: "0",
      sellValue: "0",
      buyValue: "0",
      sellButtom: "0",
      buyBottom: "0",
    };
    data.topBuy = numberWithCommas(symbolGeneralInfo.ct_Buy_CountI);

    data.topSell = numberWithCommas(symbolGeneralInfo.ct_Sell_CountI);

    data.buyValue = (
      (symbolGeneralInfo.ct_Buy_I_Volume /
        (symbolGeneralInfo.ct_Buy_I_Volume +
          symbolGeneralInfo.ct_Buy_N_Volume)) *
      100
    ).toFixed(1);

    data.sellValue = (
      (symbolGeneralInfo.ct_Sell_I_Volume /
        (symbolGeneralInfo.ct_Sell_I_Volume +
          symbolGeneralInfo.ct_Sell_N_Volume)) *
      100
    ).toFixed(1);
    data.buyBottom = convertToInternationalCurrencySystem(
      symbolGeneralInfo.ct_Buy_I_Volume
    );
    data.sellButtom = convertToInternationalCurrencySystem(
      symbolGeneralInfo.ct_Sell_I_Volume
    );

    return data;
  };
  const getLegalBuyAndSellInfos = () => {
    const data = {
      topSell: "0",
      topBuy: "0",
      sellValue: "0",
      buyValue: "0",
      sellButtom: "0",
      buyBottom: "0",
    };
    data.topBuy = numberWithCommas(symbolGeneralInfo.ct_Buy_CountN);

    data.topSell = numberWithCommas(symbolGeneralInfo.ct_Sell_CountN);

    data.buyValue = (
      (symbolGeneralInfo.ct_Buy_N_Volume /
        (symbolGeneralInfo.ct_Buy_N_Volume +
          symbolGeneralInfo.ct_Buy_I_Volume)) *
      100
    ).toFixed(1);

    data.sellValue = (
      (symbolGeneralInfo.ct_Sell_N_Volume /
        (symbolGeneralInfo.ct_Sell_N_Volume +
          symbolGeneralInfo.ct_Sell_I_Volume)) *
      100
    ).toFixed(1);
    data.buyBottom = convertToInternationalCurrencySystem(
      symbolGeneralInfo.ct_Buy_N_Volume
    );
    data.sellButtom = convertToInternationalCurrencySystem(
      symbolGeneralInfo.ct_Sell_N_Volume
    );

    return data;
  };

  // add legal

  const calculateHighiesOrderVolume = () => {
    const positive_orders = [];
    const negative_orders = [];
    let orders_highest_volume = 0;
    for (let i = 1; i < 22; i++) {
      if (symbolGeneralInfo["zd" + i]) {
        positive_orders.push({
          zd: symbolGeneralInfo["zd" + i],
          qd: symbolGeneralInfo["qd" + i],
          pd: symbolGeneralInfo["pd" + i],
        });
        if (symbolGeneralInfo["qd" + i] > orders_highest_volume) {
          orders_highest_volume = symbolGeneralInfo["qd" + i];
        }
      }
      if (symbolGeneralInfo["zo" + i]) {
        negative_orders.push({
          zo: symbolGeneralInfo["zo" + i],
          qo: symbolGeneralInfo["qo" + i],
          po: symbolGeneralInfo["po" + i],
        });
        if (symbolGeneralInfo["qo" + i] > orders_highest_volume) {
          orders_highest_volume = symbolGeneralInfo["qo" + i];
        }
      }
    }
    return orders_highest_volume;
  };

  const getBuyRows = () => {
    const HOV = calculateHighiesOrderVolume();
    const {
      zd1,
      qd1,
      pd1,
      pd2,
      qd2,
      zd2,
      pd3,
      qd3,
      zd3,
      pd4,
      qd4,
      zd4,
      pd5,
      qd5,
      zd5,
    } = symbolGeneralInfo;
    const rows = [
      [pd1, qd1, zd1],
      [pd2, qd2, zd2],
      [pd3, qd3, zd3],
      [pd4, qd4, zd4],
      [pd5, qd5, zd5],
    ];

    rows.forEach((row) => {
      row.push((+row[1] / HOV) * 100); // percent
      const res = (+row[0] / +symbolGeneralInfo.py - 1) * 100;

      row.push({
        color: res < 0 ? "text-red-primary" : "text-green-primary",
        isNegative: res < 0,
        value: convertToInternationalCurrencySystem(res),
      });
    });

    rows.forEach((row, i) => {
      row.forEach((value, j) => {
        // don't convert (percent, tooltipObject)
        if (j <= 2) rows[i][j] = numberWithCommas(value);
      });
    });

    return rows;
  };
  const getSellRows = () => {
    const HOV = calculateHighiesOrderVolume();
    const {
      zo1,
      qo1,
      po1,
      zo2,
      qo2,
      po2,
      zo3,
      qo3,
      po3,
      zo4,
      qo4,
      po4,
      zo5,
      qo5,
      po5,
    } = symbolGeneralInfo;
    const rows = [
      [zo1, qo1, po1],
      [zo2, qo2, po2],
      [zo3, qo3, po3],
      [zo4, qo4, po4],
      [zo5, qo5, po5],
    ];
    rows.forEach((row) => {
      row.push((+row[1] / HOV) * 100); // percent
      const res = (+row[2] / +symbolGeneralInfo.py - 1) * 100;

      row.push({
        color: res < 0 ? "text-red-primary" : "text-green-primary",
        isNegative: res < 0,
        value: convertToInternationalCurrencySystem(res),
      });
    });

    rows.forEach((row, i) => {
      row.forEach((value, j) => {
        // don't convert (percent, tooltipObject)
        if (j <= 2) rows[i][j] = numberWithCommas(value);
      });
    });
    return rows;
  };

  const getSellBuyRangeSlider = () => {
    function range_point_calc(point_number: any) {
      return (
        ((point_number - symbolGeneralInfo.tmin) /
          (symbolGeneralInfo.tmax - symbolGeneralInfo.tmin)) *
        100
      );
    }
    const min = symbolGeneralInfo.tmin;
    const middle = symbolGeneralInfo.py;
    const max = symbolGeneralInfo.tmax;
    const leftSignDown = range_point_calc(+symbolGeneralInfo.pl);
    const leftSignUp = range_point_calc(symbolGeneralInfo.pc);
    const sellLeft = range_point_calc(symbolGeneralInfo.pmin);
    const rightBuy = 100 - +range_point_calc(symbolGeneralInfo.pmax);
    const py = symbolGeneralInfo.py;
    return {
      min,
      middle,
      max,
      leftSignDown,
      leftSignUp,
      sellLeft,
      rightBuy,
      py,
    };

    // note : convert data to with commas (fow showing)
    // add right 50% for selll & left 50% for buy
  };

  // infos

  const getSymbol = () => {
    return symbolGeneralInfo.symbol;
  };
  const getSymbolName = () => {
    return symbolGeneralInfo.name;
  };
  const getGroupName = () => {
    return symbolGetCartData.exchange_group_name;
  };
  const getSymbolLogo = () => {
    return symbolGeneralInfo.logo;
  };

  useEffect(() => {
    if (
      !symbolGeneralInfo ||
      !symbolGetCartData ||
      !symbolGetEfficiency ||
      !industryGetEfficiency
    )
      return;
    // console.log(getSymbolEfficiencyOneMonth());
    // console.log(getIndustryEffsiciencyOneYear());
    // console.log(getBuyRows());
    // console.log(getSellRows());
    // console.log(getSymbolEfficiencyOneWeek());
    // console.log(getBvalAverage7To30Day());
    // console.log(getBvalAverage7To90Day());
    // console.log(getTvalTable());
    // console.log(getBvalAverage30Day());
    // console.log(getLastPrice());
    // console.log(getFinalPrice());
    // console.log(weekEntryLegalMoney());
    // console.log(monthEntryLegalMoney());
    // console.log(plAverage50Day());
    // console.log(plAverage100Day());
    // console.log(getPES());
    // console.log(getPE());
    // console.log(getPEtoPE());
    // console.log(getGroupPE());
    // console.log(getBvolTable());
    // console.log(getTvolTable());
    // console.log(getbvolAverage30Day());
    // console.log(getbvolAverage90Day());
    // console.log(getToBvolAverage30Day());
    // console.log(getToBvolAverage90Day());
    // console.log(getMv());
  }, [
    symbolGeneralInfo,
    symbolGetCartData,
    symbolGetEfficiency,
    industryGetEfficiency,
  ]);

  const loadedeAPIS =
    symbolGeneralInfo &&
    symbolGetCartData &&
    symbolGetEfficiency &&
    industryGetEfficiency;

  return {
    // loaded
    loadedeAPIS,
    // overview
    getGroupName,
    getSymbolLogo,
    getSymbol,
    getSymbolName,
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

    // trades table
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
    // efficiency
    getIndustryEfficiencyOneMonth,
    getIndustryEfficiencyOneWeek,
    getIndustryEfficiencyOneYear,
    getIndustryEfficiencyThreeMonths,
    getSymbolEfficiencyOneMonth,
    getSymbolEfficiencyOneWeek,
    getSymbolEfficiencyOneYear,
    getSymbolEfficiencyThreeMonths,
    getBuyRows,
    getSellRows,
    getSellBuyRangeSlider,
    getRealBuyAndSellInfos,
    getLegalBuyAndSellInfos,
  };
};
export default useDetails;
