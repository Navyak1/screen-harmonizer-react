
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";
import { Link } from 'react-router-dom';

const MobileHeader = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg" alt="User profile" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      
      <Link to="/" className="flex items-center justify-center">
        <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-black" fill="currentColor">
            <path d="M12 2L1 12h4v10h6v-6h2v6h6V12h4L12 2z" />
          </svg>
        </div>
      </Link>
      
      <MoreVertical size={20} className="text-white" />
    </div>
  );
};

export default MobileHeader;
