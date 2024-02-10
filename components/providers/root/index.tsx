import Footer from "@/components/common/footer";
import RootProviderImpl from "./types";
import Navbar from "@/components/common/navbar";
import RightSidebar from "@/components/common/sidebars/right";
import LeftSidebar from "@/components/common/sidebars/left";

const RootProvider = ({ children }: RootProviderImpl) => {
  return (
    <>
      <div className="w-full flex justify-between items-start flex-col min-h-screen bg-blue-primary">
        <Navbar />
        <RightSidebar />
        <LeftSidebar />
        <div className="bg-red-400">{children}</div>
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default RootProvider;
