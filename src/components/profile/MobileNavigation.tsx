
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, BarChart2, Globe, Bell, Settings } from "lucide-react";

const MobileNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#151515] border-t border-gray-800 py-2">
      <div className="flex justify-around">
        <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" path="/" />
        <NavItem icon={<BarChart2 size={18} />} label="Analytics" path="/analytics" />
        <NavItem icon={<Globe size={18} />} label="Connect" path="#" />
        <NavItem icon={<Bell size={18} />} label="Activity" path="#" />
        <NavItem icon={<Settings size={18} />} label="Settings" path="#" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, path }: { icon: React.ReactNode; label: string; path: string }) => {
  return (
    <Link to={path} className="flex flex-col items-center">
      <div className="p-2 text-gray-400">
        {icon}
      </div>
      <span className="text-xs text-gray-400">{label}</span>
    </Link>
  );
};

export default MobileNavigation;
