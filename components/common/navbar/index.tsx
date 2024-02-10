import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center bg-blue-primary text-white p-[24px] pb-[10px] relative overflow-hidden">
        <div className="w-[170px] h-[170px] absolute top-[-50px] right-[-50px]">
          <Image
            src={"/images/blur-navbar.png"}
            alt="blur-nanbar"
            width={300}
            height={300}
            className="object-contain scale-[3] rotate-[18deg]"
          />
        </div>
        <div className="flex justify-start items-start">
          <div className="min-w-[51px] aspect-square rounded-full bg-red-200"></div>
          <div className="flex justify-start items-start flex-col mx-2"></div>
          <h3 className="relative top-[11px] text-[20px]">فائزه حیدری</h3>
        </div>
        <div className="absolute left-1/2 top-[23px] -translate-x-1/2 flex justify-start items-center">
          <Link href={"/"}>
            <Image src={"/images/logo.png"} width={75} height={60} alt="logo" />
          </Link>
          <h1 className="font-semibold text-[30px] mr-1">فراشاخص</h1>
        </div>
        <div className="flex justify-start items-center">
          <span className="ml-3">
            11:21:31 <span className="mx-1.5">|</span> 1402/11/11
          </span>
          <Link
            className="bg-blue-secondary py-1.5 px-3 rounded-[9px]"
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
