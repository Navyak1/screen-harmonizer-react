
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Home, Briefcase, Award, Activity, Settings } from "lucide-react";
import MobileNavigation from '@/components/dashboard/MobileNavigation';
import Sidebar from '@/components/dashboard/Sidebar';

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="dark min-h-screen flex bg-background text-foreground">
      {/* Sidebar for desktop */}
      {!isMobile && <Sidebar />}
      
      <div className="flex-1">
        {/* Mobile Header */}
        {isMobile && (
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/lovable-uploads/0ff49563-a118-463a-9879-5c1775cb2841.png" alt="User" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center gap-4">
              <Activity size={20} className="text-white" />
              <Settings size={20} className="text-white" />
            </div>
          </div>
        )}
        
        {/* Desktop Header */}
        {!isMobile && (
          <div className="flex justify-between items-center px-6 py-4 border-b border-border">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Activity</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Log out</span>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className={`${isMobile ? 'px-4 py-3' : 'px-6 py-8'}`}>
          {isMobile && <h2 className="text-xl font-bold mb-6">Overview</h2>}
          
          {/* User Profile Section */}
          <div className={`mb-8 ${isMobile ? 'pt-4 pb-6' : 'py-6'}`}>
            <div className="flex items-center gap-4">
              <Avatar className={`${isMobile ? 'h-12 w-12' : 'h-14 w-14'}`}>
                <AvatarImage src="/lovable-uploads/0ff49563-a118-463a-9879-5c1775cb2841.png" alt="User" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Mr. A</h3>
                  <Badge className="bg-blue-500 px-2 py-0.5 text-xs rounded-sm">Pro</Badge>
                </div>
                <div className="flex gap-1 mt-1">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-indigo-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className={`grid ${!isMobile ? 'grid-cols-2 gap-6' : 'grid-cols-1 gap-5'}`}>
            {/* Featured Companies */}
            <Card className="bg-card border-border p-4">
              <h3 className="text-sm text-muted-foreground mb-4">Featured Companies</h3>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-4xl font-bold">02</span>
                </div>
                <div className="space-y-2 w-full max-w-[160px]">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-white/10 rounded"></div>
                    <div className="text-sm">Company A</div>
                    <div className="ml-auto text-xs text-muted-foreground">19%</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-white/10 rounded"></div>
                    <div className="text-sm">Company B</div>
                    <div className="ml-auto text-xs text-muted-foreground">22%</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Experiences */}
            <Card className="bg-card border-border p-4">
              <h3 className="text-sm text-muted-foreground mb-4">Experiences</h3>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-4xl font-bold">03</span>
                </div>
                <div className="space-y-2 w-full max-w-[160px]">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-white/10 rounded"></div>
                    <div className="text-sm">Experience A</div>
                    <div className="ml-auto text-xs text-muted-foreground">2yr</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-white/10 rounded"></div>
                    <div className="text-sm">Experience B</div>
                    <div className="ml-auto text-xs text-muted-foreground">3yr</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-white/10 rounded"></div>
                    <div className="text-sm">Experience C</div>
                    <div className="ml-auto text-xs text-muted-foreground">1yr</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobile && <MobileNavigation />}
    </div>
  );
};

export default Dashboard;
