import Image from "next/image";
import About from "./about";
import Links from "./links";
import Socials from "./socials";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-blue-primary text-white p-[25px] flex justify-center items-center  relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-100px] scale-110">
          <div className="w-[200px] h-[200px]">
            <Image
              src={"/images/blur-footer.png"}
              alt="blur-img"
              width={400}
              height={400}
              className="w-full h-full object-contain scale-[2]"
            />
          </div>
        </div>
        <div className="w-full max-w-5xl flex justify-between items-start relative z-10">
          <About />
          <Socials />
          <Links />
        </div>
      </div>
    </>
  );
};
export default Footer;
