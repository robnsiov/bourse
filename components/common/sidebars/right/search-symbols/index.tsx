import Image from "next/image";
import searchIcon from "../../../../../public/icons/search.svg";
import useSymbolsSearch from "./use";
import Link from "next/link";
import { RotatingLines } from "react-loader-spinner";
import { useClickOutside } from "@mantine/hooks";
import "./index.css";

const SearchSymbols = () => {
  const {
    searchInput,
    setSearchInput,
    symbols,
    symbolsFetcing,
    opened,
    setOpened,
  } = useSymbolsSearch();

  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <div className="w-full relative">
        <input
          onClick={() => setOpened(true)}
          value={searchInput}
          onChange={({ target: { value } }) => setSearchInput(value)}
          className="w-full h-[48px] bg-transparent border-2 pl-3 pr-11 mb-3 rounded-[9px] 
            border-blue-secondary outline-none placeholder:text-[19px] peer"
          placeholder="جستجوی  نماد/صنعت"
        />

        {symbols?.data && opened && (
          <div
            ref={ref}
            className="w-full absolute inset-x-0 top-[calc(100%-8px)] 
           p-2 bg-blue-primary rounded-[9px] max-h-[400px] overflow-y-auto z-10
           symbols-search-custom-scrollbar"
            dir="ltr"
          >
            {symbols.data.map(
              ({ id, expired, text, secondary_market, is_active }) => (
                <>
                  {is_active && !expired && !secondary_market && (
                    <Link
                      onClick={() => {
                        setOpened(false);
                        setTimeout(() => {
                          setSearchInput(text);
                        }, 100);
                      }}
                      dir="rtl"
                      key={id}
                      className="inline-block p-2 rounded-[5px] transition-alla duration-200
          hover:bg-blue-secondary w-full"
                      href={`/report/symbol/${id}/general-information`}
                    >
                      <p className="truncate w-full">{text}</p>
                    </Link>
                  )}
                </>
              )
            )}
            {symbols.data.length === 0 && (
              <p className="w-full text-right">آیتمی برای نمایش پیدا نشد</p>
            )}
          </div>
        )}

        <div className="absolute top-[10px] right-3 cursor-pointer">
          {symbolsFetcing ? (
            <RotatingLines
              visible={true}
              width="24"
              strokeColor="#fff"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
          ) : (
            <Image src={searchIcon} alt="search-icon" width={24} />
          )}
        </div>
      </div>
    </>
  );
};
export default SearchSymbols;
