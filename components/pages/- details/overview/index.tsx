import Image from "next/image";
import femeliIcon from "../../../../public/images/femeli.svg";

const Overview = () => {
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
            <div className="relative min-w-[6px] h-[6px] rounded-full bg-[#28C278]">
              <span className="absolute -inset-[2px] rounded-full bg-[#28c27847]"></span>
            </div>
            <div
              className="min-w-[36px] h-[37px] rounded-[6px] border-[2px] border-blue-secondary
              mr-4 ml-2 p-1 flex justify-center items-center"
            >
              <Image src={femeliIcon} alt="femeliICon" />
            </div>
            <div
              className="w-full bg-blue-secondary rounded-[9px] flex justify-start items-center
              text-white h-[37px] px-4"
            >
              <h4 className="text-[18px]">فملی</h4>
              <span className="text-[12px] mr-2 font-light">
                ملی صنایع مس ایران
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-1">
          <span className="text-[12px] text-blue-secondary mr-[22px]">
            گروه فلزات اساسی بورس
          </span>
        </div>
        <div className="w-full flex justify-start items-start flex-col mt-8 mb-[20px]">
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              آخرین قیمت
            </div>
            <div className="text-[#FF0000] text-[14px]">7.400</div>
          </div>
          <div className="w-full flex justify-between items-start">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              قیمت پایانی
            </div>
            <div className="text-[#FF0000] text-[14px]">7.400</div>
          </div>
        </div>
        <div className="border-[#757575] w-full h-[1px] border-b-[1px] opacity-10 mb-[20px]"></div>
        <div className="w-full flex justify-start items-start flex-col mb-[20px]">
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              ورود پول حقوقی در هفته
            </div>
            <div className="text-[#008000] text-[14px]">52M</div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              ورود پول حقوقی در ماه
            </div>
            <div className="text-[#008000] text-[14px]">245.4</div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              میانگین قیمت 50 روزه
            </div>
            <div className="text-[#070707] text-[14px]">7K</div>
          </div>
          <div className="w-full flex justify-between items-start">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              میانگین قیمت 100 روزه
            </div>
            <div className="text-[#070707] text-[14px]">7.1K</div>
          </div>
        </div>
        <div className="border-[#757575] w-full h-[1px] border-b-[1px] opacity-10 mb-[20px]"></div>
        <div className="w-full flex justify-start items-start flex-col mb-[20px]">
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              EPS
            </div>
            <div className="text-[#008000] text-[14px]">1.027</div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              p/e
            </div>
            <div className="text-[#008000] text-[14px]">245.4</div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              گروهی p/e
            </div>
            <div className="text-[#070707] text-[14px]">7K</div>
          </div>
          <div className="w-full flex justify-between items-start">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              نسبت PE نماد به PE گروه
            </div>
            <div className="text-[#070707] text-[14px]">7.1K</div>
          </div>
        </div>
        <div className="border-[#757575] w-full h-[1px] border-b-[1px] opacity-10 mb-[20px]"></div>
        <h3 className="text-[20px] font-medium mb-[10px] -mt-2">
          نرخ رشد فملی
        </h3>
        <div className="w-full flex justify-start items-start flex-col">
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              رشد سود خالص نسبت به فصل قبل
            </div>
            <div className="text-[#FF0000] text-[14px]">20%-</div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              رشد سود خالص نسبت به فصل مشابه
            </div>
            <div className="text-[#008000] text-[14px]">23%+</div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              رشد سود عملیاتی نسبت به فصل قبل
            </div>
            <div className="text-[#FF0000] text-[14px]">83%-</div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              رشد سود عملیاتی نسبت به فصل مشابه
            </div>
            <div className="text-[#008000] text-[14px]">33%+</div>
          </div>
          <div className="w-full flex justify-between items-start mb-3">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              رشد درآمد نسبت به ماه قبل
            </div>
            <div className="text-[#008000] text-[14px]">15%+</div>
          </div>
          <div className="w-full flex justify-between items-start">
            <div className="text-[#757575] max-w-[160px] font-iransansx text-[14px]">
              رشد درآمد نسبت به ماه مشابه سال قبل
            </div>
            <div className="text-[#008000] text-[14px]">16%+</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;
