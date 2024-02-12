"use client";
import Overview from "./overview";
import Efficiency from "./efficiency";
import Trades from "./trades";
import Informations from "./informations";
import Chart from "./chart";
import DetailsImpl from "./types";
import useDetails from "./use";

const Details = ({ id }: DetailsImpl) => {
  const {} = useDetails({ id });
  return (
    <>
      <div className="w-full flex justify-start items-start">
        <div className="w-full flex justify-start items-start flex-col p-5">
          <Chart />
          <Informations />
          <div className="w-[516px] flex justify-start items-start flex-col">
            <Trades />
            <Efficiency />
          </div>
        </div>
        <Overview />
      </div>
    </>
  );
};
export default Details;
