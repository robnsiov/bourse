import Image from "next/image";
import About from "./about";
import Links from "./links";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-blue-primary text-white p-[33px] flex justify-start items-start flex-col relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px]">
          <div className="w-[200px] h-[200px]">
            <Image
              src={"/images/blur.png"}
              alt="blur-img"
              width={400}
              height={400}
              className="w-full h-full object-contain scale-[2]"
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-start p-2 pt-6 relative z-10">
          <div className="flex justify-between items-start w-full">
            <About />
            <Links />
          </div>
        </div>
        <div className="w-full flex justify-end items-star">
          <span>© تمام حقوق برای شاخص محفوظ است.</span>
        </div>
      </div>
    </>
  );
};
export default Footer;
