
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, BarChart2, Share2, Settings } from "lucide-react";

const DesktopSidebar = () => {
  return (
    <div className="w-64 bg-[#0c0c0c] border-r border-gray-800 flex flex-col">
      <div className="p-5 border-b border-gray-800">
        <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
          <span className="text-black font-bold">V</span>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="py-6 px-4 space-y-6">
          <SidebarItem icon={<Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-gray-700"></AvatarFallback>
          </Avatar>} label="Dashboard" active={false} />
          
          <SidebarItem icon={<Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-gray-700"></AvatarFallback>
          </Avatar>} label="Analytics" active={false} />
          
          <SidebarItem icon={<Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-gray-700"></AvatarFallback>
          </Avatar>} label="Connect" active={false} />
          
          <div className="border-b border-gray-800 my-6"></div>
          
          <SidebarItem icon={null} label="Dealroom" active={false} />
          <SidebarItem icon={null} label="Profile" active={true} />
          <SidebarItem icon={null} label="Settings" active={false} />
        </div>
      </div>
    </div>
  );
};

type SidebarItemProps = {
  icon: React.ReactNode | null;
  label: string;
  active: boolean;
};

const SidebarItem = ({ icon, label, active }: SidebarItemProps) => {
  return (
    <div className={`flex items-center gap-3 py-2 cursor-pointer ${active ? 'text-white' : 'text-gray-400'}`}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default DesktopSidebar;
