import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 text-white z-[51]">
        {/* <div className="w-[200px] h-[300px] absolute left-[calc(50%+290px)] top-1/2 -translate-x-[calc(50%+290px)] -translate-y-1/2">
          <Image
            src={"/images/blur-navbar.png"}
            alt="blur-nanbar"
            width={300}
            height={300}
            className="object-contain scale-[5] rotate-[270deg]"
          />
        </div> */}
        <Link href={"/"}>
          <div className="absolute left-1/2 top-[8px] -translate-x-1/2 flex justify-start items-center">
            <Image
              src={"/images/logo.png"}
              width={102}
              height={60}
              alt="logo"
            />
            <h1 className="font-semibold text-[48px] mr-1">فراشاخص</h1>
          </div>
        </Link>
      </div>
      <div
        className="flex justify-end items-center bg-blue-primary text-white p-[24px] pb-[10px] overflow-hidden
      fixed top-0 left-0 z-50 w-[calc(100%-290px)]"
      >
        <div className="flex justify-start items-center">
          <span className="ml-3 text-[20px]">
            11:21:31 <span className="mx-1.5">|</span> 1402/11/11
          </span>
          <Link
            className="bg-blue-secondary text-[20px] py-1.5 px-3 rounded-[9px]"
            href={"/"}
          >
            <span className="ml-1">اشتراک</span> VIP
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
