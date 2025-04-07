
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";

const MobileHeader = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Avatar className="h-8 w-8 bg-white">
        <AvatarImage src="/placeholder.svg" alt="User profile" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      
      <div className="flex items-center justify-center">
        <div className="bg-gray-800 rounded-full h-8 w-8 flex items-center justify-center">
          <span className="text-white">V</span>
        </div>
      </div>
      
      <MoreVertical size={20} className="text-white" />
    </div>
  );
};

export default MobileHeader;
