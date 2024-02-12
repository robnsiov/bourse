"use client";

import Link from "next/link";
import useRightSidebar from "./use";
import cls from "classnames";
import searchIcon from "../../../../public/icons/search.svg";
import rightToggleIcon from "../../../../public/icons/right-toggle.svg";
import alertIcon from "../../../../public/icons/alert.svg";
import sunIcon from "../../../../public/icons/sun.svg";
import goldIcon from "../../../../public/icons/gold.svg";
import silverIcon from "../../../../public/icons/silver.svg";
import Image from "next/image";

const RightSidebar = () => {
  const { links, pathname } = useRightSidebar();

  return (
    <>
      <div
        className="w-[290px] h-[100vh] fixed inset-y-0  right-0 bg-blue-primary text-white
      flex justify-start items-center flex-col pt-3"
      >
        <div className="w-[210px] h-[200px] absolute top-[-50px] right-[-50px] z-[1]">
          <Image
            src={"/images/blur-navbar.png"}
            alt="blur-nanbar"
            width={300}
            height={300}
            className="object-contain scale-[3.5] rotate-[-18deg] opacity-80"
          />
        </div>
        <div className="w-[85%] flex justify-start items-start flex-col relative z-20">
          <div className="flex justify-start items-center relative mb-10">
            <div className="min-w-[51px] max-w-[51px] aspect-square rounded-full overflow-hidden">
              <Image
                src={"/images/girl.png"}
                alt="user-profile"
                width={200}
                height={200}
                className="
              object-fill w-full h-full object-center"
              />
            </div>
            <div className="flex justify-center items-center flex-col mx-2.5 relative top-[19px]">
              <Image src={goldIcon} alt="goldIcon" width={28} />
              <Image src={silverIcon} alt="silverIcon" width={28} />
            </div>
            <h3 className="relative text-[24px]">فائزه حیدری</h3>
          </div>
          <div className="w-full flex justify-between items-center mb-3">
            <div className="flex justify-start items-center">
              <Image
                src={sunIcon}
                alt="sunIcon"
                width={28}
                className="ml-2 cursor-pointer"
              />
              <Image
                src={alertIcon}
                alt="alertIcon"
                width={28}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-start items-center">
              <Image
                src={rightToggleIcon}
                alt="rightToggleIcon"
                className="cursor-pointer"
                width={36}
              />
            </div>
          </div>
          <div className="w-full relative">
            <input
              className="w-full h-[48px] bg-transparent border-2 pl-3 pr-10 mb-3 rounded-[9px] 
            border-blue-secondary outline-none placeholder:text-[19px]"
              placeholder="جستجوی  نماد/صنعت"
            />
            <div className="absolute top-[10px] right-3 cursor-pointer">
              <Image src={searchIcon} alt="search-icon" width={24} />
            </div>
          </div>
          <div className="w-full h-[1px] border-b-[1px] mb-1 border-white opacity-10"></div>
        </div>
        <div className="flex justify-start items-start flex-col p-2 w-full relative z-20">
          {links.map(({ href, title, icon }) => (
            <Link
              href={href}
              key={href}
              className={cls(
                `w-full px-3 py-2 transition-all duration-200
            hover:bg-[#26283A] rounded-[9px] mb-2 last:mb-0 relative overflow-hidden    
             flex justify-start items-center group border-2 border-transparent`,
                { "bg-[#26283A] border-black": pathname == href }
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
                  { "!opacity-100": pathname === href }
                )}
              >
                <Image
                  src={icon}
                  alt={`${title}-logo`}
                  width={20}
                  height={20}
                />
              </div>
              <span
                className={cls(`text-[16px]`, {
                  "!text-[24px]": pathname === href,
                })}
              >
                {title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default RightSidebar;
