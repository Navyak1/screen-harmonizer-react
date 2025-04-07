
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle, Mail, Settings, MoreHorizontal } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopSidebar from '@/components/profile/DesktopSidebar';
import MobileHeader from '@/components/profile/MobileHeader';
import MobileNavigation from '@/components/profile/MobileNavigation';

const Profile = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="dark min-h-screen flex flex-col bg-[#0c0c0c] text-white">
      {/* Mobile header */}
      {isMobile && <MobileHeader />}
      
      <div className="flex flex-1">
        {/* Desktop sidebar */}
        {!isMobile && <DesktopSidebar />}
        
        <div className="flex-1">
          {/* Desktop header */}
          {!isMobile && (
            <div className="border-b border-gray-800 px-6 py-4 flex justify-between items-center">
              <div className="font-semibold">Vertxlabs, Inc</div>
              <div className="flex items-center gap-6">
                <div className="text-sm text-gray-400">Activity</div>
                <div className="text-sm text-gray-400">Log out</div>
              </div>
            </div>
          )}
          
          {/* Main Content */}
          <div className="px-4 md:px-6 py-4">
            {/* Navigation Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="bg-transparent w-full justify-start border-b border-gray-800">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-4 py-2 text-sm"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="portfolio" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-4 py-2 text-sm"
                >
                  Portfolio
                </TabsTrigger>
                <TabsTrigger 
                  value="experience" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-4 py-2 text-sm"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger 
                  value="media" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-4 py-2 text-sm"
                >
                  Media
                </TabsTrigger>
                {!isMobile && (
                  <div className="ml-auto">
                    <TabsTrigger 
                      value="more" 
                      className="data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-4 py-2 text-sm"
                    >
                      More
                    </TabsTrigger>
                  </div>
                )}
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <h2 className="text-2xl font-bold mb-6">Overview</h2>
                
                {/* Profile Card */}
                <Card className="bg-[#151515] border-gray-800 mb-6">
                  <div className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <Avatar className="h-24 w-24 bg-gray-700">
                        <AvatarImage src="" alt="Profile" />
                        <AvatarFallback>M.A</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-start">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{isMobile ? "Mr.ABC" : "Mr A"}</h3>
                        <CheckCircle size={16} className="text-blue-500" />
                      </div>
                      
                      <div className="text-sm text-gray-300 flex items-center gap-1 mt-1">
                        <span>Co-Founder & CEO @ vertx</span>
                        <span className="bg-white h-3 w-3 inline-block ml-1"></span>
                      </div>
                      
                      <div className="mt-2">
                        <Badge className="bg-gray-700 text-xs font-normal py-1 px-2 rounded-md">Entrepreneur</Badge>
                      </div>
                      
                      <div className="flex mt-4 gap-2">
                        <div className="bg-[#0077b5] p-1 rounded">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                            alt="LinkedIn" 
                            className="h-5 w-5"
                          />
                        </div>
                        <div className="bg-black p-1 rounded">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" 
                            alt="Twitter" 
                            className="h-5 w-5" 
                          />
                        </div>
                        <div className="bg-white p-1 rounded">
                          <Mail size={20} className="text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Founded Companies Card */}
                  <Card className="bg-[#151515] border-gray-800">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Founded Companies</h3>
                      
                      <div className="mb-6">
                        <div className="text-6xl font-bold">02</div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 bg-gray-700 flex items-center justify-center rounded">V</div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span>Vertx</span>
                                <Badge className="bg-green-600 text-white text-[10px] px-1">CEO</Badge>
                              </div>
                              <div className="text-xs text-gray-400 mt-1">Founded in 2025, in Fintech</div>
                            </div>
                          </div>
                          <div className="text-xs text-blue-400">View Profile</div>
                        </div>
                        
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 bg-gray-700 flex items-center justify-center rounded"></div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span>{isMobile ? "Comp 1" : "Company"}</span>
                                <Badge className="bg-blue-600 text-white text-[10px] px-1">PORTFOLIO</Badge>
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                {isMobile ? "Founded in 2023. Acquired by abc in QuickCommerce." : "Details/Information He acquired from?idk"}
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-blue-400">View Profile</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Experience Card */}
                  {!isMobile && (
                    <Card className="bg-[#151515] border-gray-800">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Experience</h3>
                        
                        <div className="mb-6">
                          <div className="text-6xl font-bold">03</div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 bg-gray-700 flex items-center justify-center rounded"></div>
                              <div>Company 1</div>
                            </div>
                            <div className="text-xs text-blue-400">View Profile</div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 bg-gray-700 flex items-center justify-center rounded"></div>
                              <div>Company 2</div>
                            </div>
                            <div className="text-xs text-blue-400">View Profile</div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 bg-gray-700 flex items-center justify-center rounded"></div>
                              <div>Company 3</div>
                            </div>
                            <div className="text-xs text-blue-400">View Profile</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="portfolio">Portfolio content here</TabsContent>
              <TabsContent value="experience">Experience content here</TabsContent>
              <TabsContent value="media">Media content here</TabsContent>
              <TabsContent value="more">More content here</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileNavigation />}
    </div>
  );
};

export default Profile;
