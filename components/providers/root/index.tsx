import Footer from "@/components/common/footer";
import RootProviderImpl from "./types";
import Navbar from "@/components/common/navbar";
import RightSidebar from "@/components/common/sidebars/right";
import LeftSidebar from "@/components/common/sidebars/left";

const RootProvider = ({ children }: RootProviderImpl) => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col min-h-screen bg-blue-primary">
        <Navbar />
        <RightSidebar />
        <LeftSidebar />
        <div
          className="bg-[#FAFAFF] min-h-[calc(100vh-85px)] w-[calc(100%-164px-290px)] relative
         top-[85px] right-[63px] rounded-[36px] rounded-b-none"
        >
          <div className="w-full p-4">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default RootProvider;
