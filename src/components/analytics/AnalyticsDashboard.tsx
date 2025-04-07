
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import VisitorChart from './VisitorChart';
import DemographicsMap from './DemographicsMap';
import { BarChart, LineChart, MapPin, Layout, Users, Settings, LogOut, ChevronRight, ArrowRight, Filter, MoreVertical } from 'lucide-react';
import MobileNavigation from './MobileNavigation';

const AnalyticsDashboard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="dark min-h-screen flex flex-col w-full bg-background text-foreground">
      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="flex w-full border-b border-border">
          <div className="w-64 p-4 border-r border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-6 w-6 bg-white rounded-full"></div>
              <span className="font-semibold text-sm">Verdantix, Inc</span>
              <span className="text-xs text-muted-foreground ml-auto">Analytics</span>
            </div>
            <nav className="space-y-1 mt-8">
              <div className="flex items-center gap-3 p-2 text-white rounded-md hover:bg-secondary cursor-pointer">
                <Layout size={16} />
                <span className="text-sm">Dashboard</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-secondary text-white rounded-md">
                <BarChart size={16} />
                <span className="text-sm">Analytics</span>
              </div>
              <div className="flex items-center gap-3 p-2 text-muted-foreground rounded-md hover:bg-secondary cursor-pointer">
                <Users size={16} />
                <span className="text-sm">Content</span>
              </div>
              <div className="flex items-center gap-3 p-2 text-muted-foreground rounded-md hover:bg-secondary cursor-pointer">
                <Users size={16} />
                <span className="text-sm">Profile</span>
              </div>
              <div className="flex items-center gap-3 p-2 text-muted-foreground rounded-md hover:bg-secondary cursor-pointer">
                <Settings size={16} />
                <span className="text-sm">Settings</span>
              </div>
            </nav>
          </div>
          <div className="flex justify-between w-full px-6 py-3">
            <div className="flex gap-6">
              <div className="flex items-center text-white">
                <BarChart size={18} />
                <span className="ml-2 font-medium">Overview</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin size={18} />
                <span className="ml-2 font-medium">Demographics</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Activity</span>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-white rounded-full"></div>
                <span className="text-sm text-muted-foreground">Log out</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      {isMobile && (
        <div className="p-4 flex justify-between items-center">
          <div className="h-8 w-8 bg-white rounded-full"></div>
          <div className="flex gap-4">
            <Filter size={20} className="text-white" />
            <MoreVertical size={20} className="text-white" />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`flex-1 ${isMobile ? 'px-4' : 'px-6 py-4 ml-64'}`}>
        <Tabs defaultValue="overview">
          <TabsList className={`w-full justify-start border-b border-border rounded-none ${isMobile ? 'mb-6' : 'mb-8'}`}>
            <TabsTrigger 
              value="overview" 
              className={`relative data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-white`}
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="demographics" 
              className="relative data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-white"
            >
              Demographics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0 space-y-6">
            {/* Filters */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="text-sm text-muted-foreground">Visitors</span>
                <Select defaultValue="30days">
                  <SelectTrigger className="w-[130px] h-8 text-xs bg-card">
                    <SelectValue placeholder="Last 30 days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Last 7 days</SelectItem>
                    <SelectItem value="30days">Last 30 days</SelectItem>
                    <SelectItem value="90days">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" size="sm" className="text-xs h-8 bg-card">
                + Compare
              </Button>
            </div>

            {/* Stats Card */}
            <Card className={`bg-card p-4 ${!isMobile && 'flex'}`}>
              <div className={`${!isMobile ? 'w-3/5 pr-4' : 'mb-4'}`}>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <h3 className="text-3xl font-bold">13.49K</h3>
                    <span className="ml-2 text-xs positive-trend">+48%</span>
                    <span className="ml-1 text-xs text-muted-foreground">(891)</span>
                  </div>
                </div>
                <VisitorChart />
              </div>

              {!isMobile && <div className="w-2/5 pl-4">
                <InsightsCard />
              </div>}
            </Card>

            {/* Mobile Insights Card */}
            {isMobile && <InsightsCard />}

            {/* Demographics section in overview tab */}
            {!isMobile && <div className="space-y-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">Demographics</h3>
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                  View all countries <ChevronRight size={14} className="ml-1" />
                </Button>
              </div>
              <DemographicsMap />
            </div>}
          </TabsContent>

          <TabsContent value="demographics" className="mt-0">
            <DemographicsMap />
          </TabsContent>
        </Tabs>
      </div>

      {/* Mobile Navigation */}
      {isMobile && <MobileNavigation />}
    </div>
  );
};

const InsightsCard = () => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="bg-card p-4">
      <div className="mb-6">
        <h3 className="font-semibold mb-6">Insights</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Founders</span>
              <span className="text-xs text-muted-foreground">total</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-xl font-bold">7.4K</span>
              <span className="ml-2 text-xs positive-trend">+100%</span>
              <span className="ml-1 text-xs text-muted-foreground">(2000)</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Investors</span>
              <span className="text-xs text-muted-foreground">total</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-xl font-bold">6.09K</span>
              <span className="ml-2 text-xs positive-trend">+100%</span>
              <span className="ml-1 text-xs text-muted-foreground">(3000)</span>
            </div>
          </div>
        </div>
      </div>
      
      {isMobile && (
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">View detailed insights</span>
          <ArrowRight size={16} className="text-muted-foreground" />
        </div>
      )}
    </Card>
  );
};

export default AnalyticsDashboard;
