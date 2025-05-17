import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import React from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

export const DashboardLayout: React.FC = () => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "230px",
          "--sidebar-width-mobile": "300px"
        } as React.CSSProperties
      }
    >
      <DashboardSidebar />
      <SidebarInset>
        <div className="md:hidden fixed top-2 -left-1 z-20">
          <SidebarTrigger />
        </div>
        <Navbar />
        <div className="min-h-[100vh] bg-background-lighter-blue flex-1 px-5 flex-col md:min-h-min">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
