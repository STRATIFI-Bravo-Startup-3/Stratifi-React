import { useState } from "react";
import SideNav from "@/components/SideNav";
import { HiMenu } from "react-icons/hi";
import Profile from "@/components/brand/Profile";
import Campaigns from "@/components/brand/Campaigns";
import ChatWidget from "@/components/ChatWidget";
import Dashboard from "@/components/brand/Dashboard";
import Wallet from "@/components/brand/Wallet";

const BrandDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Profile");

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let componentToRender;
  switch (selectedComponent) {
    case "Dashboard":
      componentToRender = <Dashboard />;
      break;
    case "Profile":
      componentToRender = <Profile />;
      break;
    case "Campaigns":
      componentToRender = <Campaigns />;
      break;

    case "Messages":
      componentToRender = <ChatWidget />;
      break;

    case "Wallet":
      componentToRender = <Wallet />;
      break;
    default:
      componentToRender = null;
  }
  return (
    <div className="relative overflow-x-hidden">
      <div className="lg:hidden p-4 bg-[#AD6EC0]">
        <HiMenu onClick={() => handleToggle()} />
      </div>
      <div className="flex min-h-screen lg:h-screen">
        <div className="absolute lg:relative z-30">
          <SideNav
            onClick={(component) => setSelectedComponent(component)}
            isOpen={isSidebarOpen}
          />
        </div>
        <div className="w-full flex-grow items-center flex flex-col gap-4 overflow-y-auto overflow-x-hidden ">
          {componentToRender}
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;
