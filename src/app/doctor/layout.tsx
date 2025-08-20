import Navbar from "@/components/doctor/Navbar";
import Sidebar from "@/components/doctor/Sidebar";
import React, { ReactNode } from "react";

const DoctorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">    
      <div className="fixed top-0 w-full">
          <Navbar />
      </div>

      <div className="flex flex-1 mt-0.5">        
        <div className="fixed left-0 bottom-0">
            <Sidebar />   
        </div>    
        <main className="ml-64 mt-12 flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
