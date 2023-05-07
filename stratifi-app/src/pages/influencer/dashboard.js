import { useState } from "react";
import SideNav from "@/components/SideNav";
import { HiMenu } from "react-icons/hi";
import Profile from "@/components/influencer/Profile";
import Campaigns from "@/components/influencer/Campaigns";
import ChatWidget from "@/components/ChatWidget";
import Dashboard from "@/components/influencer/Dashboard";
import Wallet from "@/components/influencer/Wallet";
import Settings from "@/components/influencer/Settings";

const InfluencerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  // Handles SideBar Toggle
  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const selected = () => setIsSidebarOpen(false);

  // Selects the Sidebar  Component to render
  let componentToRender;
  switch (selectedComponent) {
    case "Dashboard":
      componentToRender = (
        <Dashboard onClick={(component) => setSelectedComponent(component)} />
      );
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
      componentToRender = <Wallet type="influencer" />;
      break;

    case "Settings":
      componentToRender = <Settings />;
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
          {/* SideBar */}
          <SideNav
            onClick={(component) => setSelectedComponent(component)}
            isOpen={isSidebarOpen}
            type="influencer"
            hasSelected={selected}
          />
        </div>
        {/* Rendered Component */}
        <div className="w-full flex-grow items-center flex flex-col gap-4 overflow-y-auto overflow-x-hidden ">
          {componentToRender}
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
