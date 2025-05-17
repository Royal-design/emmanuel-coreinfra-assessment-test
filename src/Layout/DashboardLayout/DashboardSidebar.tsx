import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import lapoLogo from "@/assets/lapo-image.png";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Dashboard } from "@/components/ui/icons/Dashboard";
import { Branch } from "@/components/ui/icons/Branch";
import { UserRole } from "@/components/ui/icons/UserRole";
import { People } from "@/components/ui/icons/People";
import { CardScheme } from "@/components/ui/icons/CardScheme";
import { CreditCard } from "@/components/ui/icons/CreditCard";
import { CardRequest } from "@/components/ui/icons/CardRequest";
import { Stock } from "@/components/ui/icons/Stock";
import { BlockCard } from "@/components/ui/icons/BlockCard";
import { Menu } from "@/components/ui/icons/Menu";
import { Stack } from "@/components/ui/icons/Stack";
import { Map } from "@/components/ui/icons/Map";
import { User } from "@/components/ui/icons/User";
import { Card } from "@/components/ui/icons/Card";
import { Logout } from "@/components/ui/icons/Logout";
import cardInfra from "@/assets/card-infra.png";
import { Button } from "@/components/ui/button";

export const items = [
  {
    title: "Branches",
    url: "branches",
    icon: Branch
  },
  {
    title: "Roles",
    url: "roles",
    icon: UserRole
  },
  {
    title: "Users",
    url: "users",
    icon: People
  },
  {
    title: "Card Scheme",
    url: "card-scheme",
    icon: CardScheme
  },
  {
    title: "Card Profile",
    url: "card-profile",
    icon: CreditCard
  },
  {
    title: "Card Request",
    url: "card-request",
    icon: CardRequest
  },
  {
    title: "Stock",
    url: "stock",
    icon: Stock
  },
  {
    title: "Cards",
    url: "cards",
    icon: Card
  },
  {
    title: "Block/Unblock Card",
    url: "block-card",
    icon: BlockCard
  },
  {
    title: "Authorization List",
    url: "authorization-list",
    icon: Menu
  },
  {
    title: "Authorization Queue",
    url: "authorization-queue",
    icon: Stack
  },
  {
    title: "Trail",
    url: "trail",
    icon: Map
  },
  {
    title: "Account",
    url: "account",
    icon: User
  }
];

export const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  return (
    <Sidebar className="bg-background-sidebar  text-white border-none px-2">
      <SidebarHeader className="bg-background-sidebar pt-[27px] pb-[31px]">
        <img src={lapoLogo} alt="lapo-logo" className="w-[138.32px] h-[45px]" />
      </SidebarHeader>

      <SidebarContent className=" scrollbar-hidden bg-background-sidebar">
        {/* Dashboard Item */}
        <SidebarGroup className="py-0">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/dashboard"
                    end
                    className="flex items-center gap-3 text-xs font-satoshi text-primary-gray py-5"
                  >
                    <Dashboard
                      color={
                        isDashboard
                          ? "var(--primary-blue)"
                          : "var(--primary-gray)"
                      }
                    />
                    <span>Dashboard</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Main Menu */}
        <SidebarGroup className="py-0">
          <SidebarGroupLabel className="uppercase font-medium text-[8.5px] text-secondary-gray font-satoshi ml-5 mt-4">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname.includes(item.url);
                const IconComponent = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={`flex items-center gap-3 text-xs font-satoshi py-5 ${
                          isActive ? "text-primary-blue" : "text-primary-gray"
                        }`}
                      >
                        <IconComponent
                          color={isActive ? "#014DAF" : "#98A2B3"}
                        />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className=" px-3 pb-8 pt-5 bg-background-sidebar">
        <Button
          className="flex items- cursor-pointer bg-transparent mb-8 hover:bg-transparent justify-start text-xs rounded-md transition-colors "
          style={{ padding: 0 }}
        >
          <Logout />
          <span className="text-white">Logout</span>
        </Button>
        <div className="flex flex-col">
          <p className="text-[8.5px] font-medium uppercase font-satoshi text-secondary-gray mb-1">
            Powered By
          </p>
          <img src={cardInfra} alt="card-infra" className="w-[93.33px]" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
