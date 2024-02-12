const Trades = () => {
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
              <div className="text-[#070707] text-[14px]">16M</div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                حجم معاملات روز
              </div>
              <div className="text-[#070707] text-[14px]">39.6M</div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                میانگین حجم 30 روز
              </div>
              <div className="text-[#070707] text-[14px]">65.2M</div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                میانگین حجم 90 روز
              </div>
              <div className="text-[#070707] text-[14px]">57.0M</div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                نسبت حجم معاملات روز به میانگین ماه
              </div>
              <div className="text-red-primary text-[14px]">0.6</div>
            </div>
            <div className="w-full flex justify-between items-start">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                نسبت حجم معاملات روز به میانگین 3 ماه
              </div>
              <div className="text-red-primary text-[14px]">0.7</div>
            </div>
          </div>
          <div className="w-1/2 flex justify-start items-start flex-col py-5 px-4">
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                ارزش بازار
              </div>
              <div className="text-[#070707] text-[14px]">4,464,000 B</div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                ارزش معاملات روز
              </div>
              <div className="text-[#070707] text-[14px]">294.5 B</div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                میانگین ارزش 30 روز
              </div>
              <div className="text-[#070707] text-[14px]">491.6 B</div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                میانگین ارزش 90 روز
              </div>
              <div className="text-[#070707] text-[14px]">408.8 B</div>
            </div>
            <div className="w-full flex justify-between items-start mb-3">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                نسبت ارزش معاملات هفته به ماه
              </div>
              <div className="text-green-primary text-[14px]">1.1</div>
            </div>
            <div className="w-full flex justify-between items-start">
              <div className="text-gray-primary max-w-[160px] font-iransansx text-[14px]">
                نسبت ارزش معاملات هفته به 3 ماه
              </div>
              <div className="text-green-primary text-[14px]">1.1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trades;
