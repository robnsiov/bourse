"use client";

import Link from "next/link";
import useRightSidebar from "./use";
import cls from "classnames";
import searchIcon from "../../../../public/icons/search.svg";
import rightToggleIcon from "../../../../public/icons/right-toggle.svg";
import alertIcon from "../../../../public/icons/alert.svg";
import sunIcon from "../../../../public/icons/sun.svg";
import Image from "next/image";

const RightSidebar = () => {
  const { links, pathname } = useRightSidebar();

  return (
    <>
      <div
        className="w-[290px] h-[calc(100vh-85px)] fixed top-[85px] right-0 bg-blue-primary text-white
      flex justify-start items-center flex-col"
      >
        <div className="w-[85%] flex justify-start items-start flex-col">
          <div className="w-full flex justify-between items-center mb-3">
            <div className="flex justify-start items-center">
              <Image
                src={sunIcon}
                alt="sunIcon"
                width={24}
                className="ml-2 cursor-pointer"
              />
              <Image
                src={alertIcon}
                alt="alertIcon"
                width={24}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-start items-center">
              <Image
                src={rightToggleIcon}
                alt="rightToggleIcon"
                className="cursor-pointer"
                width={30}
              />
            </div>
          </div>
          <div className="w-full relative">
            <input
              className="w-full h-[48px] bg-transparent border-2 pl-3 pr-9 mb-3 rounded-[9px] 
            border-blue-secondary outline-none"
              placeholder="جستجوی  نماد/صنعت"
            />
            <div className="absolute top-[10px] right-2 scale-[0.8] cursor-pointer">
              <Image src={searchIcon} alt="search-icon" />
            </div>
          </div>
          <div className="w-full h-[1px] border-b-[1px] mb-1 border-white opacity-10"></div>
        </div>
        <div className="flex justify-start items-start flex-col p-2 w-full">
          {links.map(({ href, title, icon }) => (
            <Link
              href={href}
              key={href}
              className={cls(
                `w-full px-3 py-2 transition-all duration-200
            hover:bg-[#29264b] rounded-[9px] mb-2 last:mb-0 relative overflow-hidden    
             flex justify-start items-center group`,
                { "bg-[#29264b]": pathname == href }
              )}
            >
              <div
                className={cls(
                  `absolute left-[15px] top-0 right-[15px] h-[2px] bg-[#2106eb] blur-[10px] opacity-0 
                  transition-all duration-200 group-hover:opacity-100`,
                  { "opacity-100": pathname === href }
                )}
              ></div>
              {pathname == href && (
                <div className="w-[6px] h-[7px] rounded-full bg-blue-secondary ml-2 mr-3"></div>
              )}

              <div
                className={cls(
                  `ml-2 opacity-20 group-hover:opacity-100 duration-200 transition-all`,
                  { "opacity-100": pathname === href }
                )}
              >
                <Image
                  src={icon}
                  alt={`${title}-logo`}
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-[17px]">{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default RightSidebar;
