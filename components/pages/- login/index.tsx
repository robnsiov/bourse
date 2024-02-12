import Image from "next/image";
import userIcon from "../../../public/icons/user.svg";
import passwordIcon from "../../../public/icons/pass.png";
import openAyeIcon from "../../../public/icons/open-eye.svg";
import updateIcon from "../../../public/icons/update.svg";
import Link from "next/link";
import loginBlurImage from "../../../public/images/login-blur.svg";
import logo from "../../../public/images/logo.png";

const Login = () => {
  return (
    <>
      <div className="fixed inset-0 z-[999] bg-blue-primary flex justify-center items-center flex-col">
        <Link
          href={"/"}
          className="absolute top-5 right-5 flex justify-start items-center"
        >
          <Image src={logo} width={80} alt="logo" />
          <h1 className="text-white text-[36px] mr-2 font-bold">فراشاخص</h1>
        </Link>
        <h2 className="mb-10 text-white font-bold text-[44px]">ورود</h2>
        <div
          className="max-w-lg w-full  p-[2px] rounded-[16px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
          }}
        >
          <div className="w-full  bg-[#20212a] rounded-[15px] p-10 font-iransansx relative">
            <div
              className="absolute bottom-[50px] left-[50px] w-[100px] h-[100px] 
            z-10 scale-[3]"
            >
              <Image src={loginBlurImage} alt="loginBlurImage" width={400} />
            </div>
            <div
              className="absolute top-[50px] right-[50px] w-[100px] h-[100px] 
            z-10 scale-[3]"
            >
              <Image src={loginBlurImage} alt="loginBlurImage" width={400} />
            </div>
            <div className="w-full flex justify-start items-start flex-col relative z-20">
              <div className="w-full flex justify-start items-start relative">
                <input
                  className="w-full bg-white h-[48px] pr-4 pl-12 rounded-[16px] outline-none  placeholder:text-[13px]"
                  placeholder="ایمیل یا شماره همراه"
                />
                <Image
                  src={userIcon}
                  alt="userIcon"
                  width={24}
                  className="absolute top-1/2 -translate-y-1/2 left-3.5"
                />
              </div>
              <div className="w-full flex justify-start items-start relative mt-8">
                <input
                  className="w-full bg-white h-[48px] pl-4 pr-12 rounded-[16px] outline-none  placeholder:text-[13px]"
                  placeholder="رمزعبور"
                />
                <Image
                  src={passwordIcon}
                  alt="passwordIcon"
                  width={24}
                  className="absolute top-1/2 -translate-y-1/2 left-3.5"
                />
                <Image
                  src={openAyeIcon}
                  alt="openAyeIcon"
                  width={24}
                  className="absolute top-1/2 -translate-y-1/2 right-3.5"
                />
              </div>
              <div className="w-full mt-8 flex justify-between items-start ">
                <input
                  className="w-[calc(50%-10px)] bg-white h-[48px] px-3 rounded-[16px] outline-none  placeholder:text-[13px]"
                  placeholder="عبارت امنیتی"
                />
                <div
                  className="w-[calc(50%-10px)] bg-white h-[48px] px-3 rounded-[16px] 
              outline-none  placeholder:text-[13px] relative"
                >
                  <Image
                    src={updateIcon}
                    alt="updateIcon"
                    width={24}
                    className="absolute top-1/2 -translate-y-1/2 left-3.5 cursor-pointer"
                  />
                </div>
              </div>
              <Link
                href={"/"}
                className="text-orange-primary text-[12px] font-medium mt-3 inline-block"
              >
                رمز عبور خود را فراموش کرده اید؟
              </Link>
              <div className="w-full mt-5">
                <button
                  className="w-full bg-blue-secondary text-center text-white outline-none
              h-[48px] rounded-[16px]"
                >
                  ورود
                </button>
              </div>
              <div className="w-full flex justify-center items-center text-center">
                <Link
                  className="text-orange-primary font-bold mt-5 inline-block"
                  href={"/"}
                >
                  ورود با رمز یک بار مصرف
                </Link>
              </div>
              <div className="w-full flex justify-center items-center mt-4">
                <Link className="font-bold text-blue-secondary" href={"/"}>
                  حساب کاربری ندارید؟
                </Link>
                <Link
                  className="mr-2 text-orange-primary font-bold py-1 px-2 
              border-[1px] border-orange-primary rounded-[7px]"
                  href={"/"}
                >
                  ثبت نام کنید
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
