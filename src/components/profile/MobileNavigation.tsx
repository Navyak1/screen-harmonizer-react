
import React from 'react';
import { LayoutDashboard, BarChart2, Globe, Bell, Settings } from "lucide-react";

const MobileNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#151515] border-t border-gray-800 py-2">
      <div className="flex justify-around">
        <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active={true} />
        <NavItem icon={<BarChart2 size={18} />} label="Analytics" active={false} />
        <NavItem icon={<Globe size={18} />} label="Connect" active={false} />
        <NavItem icon={<Bell size={18} />} label="Activity" active={false} />
        <NavItem icon={<Settings size={18} />} label="Settings" active={false} />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active }: { icon: React.ReactNode; label: string; active: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`p-2 ${active ? 'text-white' : 'text-gray-400'}`}>
        {icon}
      </div>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
};

export default MobileNavigation;
