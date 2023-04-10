import { useState } from "react";
import SideNav from "@/components/SideNav";
import ProfileCover from "@/components/brand/ProfileCover";
import { HiMenu } from "react-icons/hi";
import Profile from "@/components/brand/Profile";

const BrandDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let componentToRender;
  switch (selectedComponent) {
    case "Profile":
      componentToRender = <Profile />;
      break;
    default:
      componentToRender = null;
  }
  return (
    <div className="relative overflow-x-hidden">
      <div className="md:hidden p-4 bg-[#AD6EC0]">
        <HiMenu onClick={() => handleToggle()} />
      </div>
      <div className="flex min-h-screen md:h-screen">
        <div className="absolute md:relative z-10">
          <SideNav
            onClick={(component) => setSelectedComponent(component)}
            isOpen={isSidebarOpen}
          />
        </div>
        <div className="w-full m-6 flex-grow flex flex-col gap-4 overflow-y-auto">
          <ProfileCover />
          {componentToRender}
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;
