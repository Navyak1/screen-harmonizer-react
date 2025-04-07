
import React from 'react';
import { Home, Briefcase, Award, Activity, Settings } from 'lucide-react';

const MobileNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around py-2">
        <NavItem icon={<Home size={20} />} label="Home" active={true} />
        <NavItem icon={<Briefcase size={20} />} label="Work" active={false} />
        <NavItem icon={<Award size={20} />} label="Awards" active={false} />
        <NavItem icon={<Activity size={20} />} label="Activity" active={false} />
        <NavItem icon={<Settings size={20} />} label="Settings" active={false} />
      </div>
    </div>
  );
};

const NavItem = ({ 
  icon, 
  label, 
  active 
}: { 
  icon: React.ReactNode, 
  label: string, 
  active: boolean 
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`p-1.5 ${active ? 'text-white' : 'text-muted-foreground'}`}>
        {icon}
      </div>
      <span className={`text-[10px] ${active ? 'text-white' : 'text-muted-foreground'}`}>{label}</span>
    </div>
  );
};

export default MobileNavigation;
