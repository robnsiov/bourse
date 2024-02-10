import Footer from "@/components/common/footer";
import RootProviderImpl from "./types";
import Navbar from "@/components/common/navbar";

const RootProvider = ({ children }: RootProviderImpl) => {
  return (
    <>
      <div className="w-full flex justify-between items-start flex-col min-h-screen">
        <Navbar />
        <div></div>
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default RootProvider;
