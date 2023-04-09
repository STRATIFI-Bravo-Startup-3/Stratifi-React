import { useState } from "react";
import SideNav from "@/components/SideNav";
import ProfileCover from "@/components/brand/ProfileCover";
import { HiMenu } from "react-icons/hi";

const BrandDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="md:hidden p-4 bg-[#AD6EC0] w-auto">
        <HiMenu onClick={() => handleToggle()} />
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 z-10">
          <SideNav isOpen={isSidebarOpen} />
        </div>
        <ProfileCover />
      </div>
    </>
  );
};

export default BrandDashboard;
