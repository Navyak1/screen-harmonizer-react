
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, Award, Activity, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-16 bg-card border-r border-border flex flex-col items-center py-6">
      <div className="mb-10">
        <div className="h-8 w-8 bg-white rounded-full"></div>
      </div>
      
      <nav className="flex flex-col items-center gap-8">
        <NavItem icon={<Home size={20} />} active={true} path="/" />
        <NavItem icon={<Briefcase size={20} />} active={false} path="/portfolio" />
        <NavItem icon={<Award size={20} />} active={false} path="/experience" />
        <NavItem icon={<Activity size={20} />} active={false} path="/analytics" />
        <NavItem icon={<Settings size={20} />} active={false} path="/settings" />
      </nav>
    </div>
  );
};

const NavItem = ({ 
  icon, 
  active,
  path
}: { 
  icon: React.ReactNode, 
  active: boolean,
  path: string 
}) => {
  return (
    <Link to={path} className={`p-2 rounded-md cursor-pointer ${active ? 'bg-white/10' : ''}`}>
      <div className={`${active ? 'text-white' : 'text-muted-foreground'}`}>
        {icon}
      </div>
    </Link>
  );
};

export default Sidebar;
