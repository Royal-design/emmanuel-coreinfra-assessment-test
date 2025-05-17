import { Analytics } from "@/components/Analytics";
import { QuickAcess } from "@/components/QuickAcess";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import React from "react";

export const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <WelcomeMessage />
      <QuickAcess />
      <Analytics />
    </div>
  );
};
