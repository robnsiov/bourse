"use client";
import Link from "next/link";
import useLeftSidebar from "./use";
import cls from "classnames";
import rightToggleIcon from "../../../../public/icons/right-toggle.svg";
import Image from "next/image";

const LeftSidebar = () => {
  const { views, pathnameWithoutView, activeView } = useLeftSidebar();
  return (
    <>
      <div
        className="w-[166px] h-[calc(100vh-76px)] fixed top-[85px] left-0 bg-blue-primary text-white
      flex justify-start items-start flex-col pt-3"
      >
        <div className="flex justify-start items-center mb-10 mt-1 mr-4 scale-[-1]">
          <Image
            src={rightToggleIcon}
            alt="rightToggleIcon"
            className="cursor-pointer"
            width={36}
          />
        </div>

        <div className="flex justify-start items-start flex-col p-2 w-full relative z-20">
          {views.map(({ href, title }) => (
            <Link
              href={`${pathnameWithoutView}/${href}`}
              key={href}
              className={cls(
                `w-full px-3 py-2 transition-all duration-200
            hover:bg-[#26283A] rounded-[9px] mb-2 last:mb-0 relative overflow-hidden    
             flex justify-start items-center group`,
                { "bg-[#26283A]": activeView === href }
              )}
            >
              <span className="text-[20px] w-full text-center">{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default LeftSidebar;
