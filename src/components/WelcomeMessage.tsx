import React from "react";
import { Calendar } from "./ui/icons/Calendar";

export const WelcomeMessage: React.FC = () => {
  return (
    <div className="font-satoshi mt-2 flex justify-between w-full items-center">
      <div className="">
        <h2 className="font-bold text-lg">
          Hi Nazeer, what would you like to do today?
        </h2>
        <p className="text-xs">Last login: 26/11/2024 14:39:58</p>
      </div>

      <div className="flex items-center border rounded-sm border-border-secondary-gray py-2 px-[13px] gap-4">
        <div className="flex items-center gap-1">
          <Calendar />
          <span className="text-[11px]">Today</span>
        </div>

        <span className="w-px h-3 border-l border-border-secondary-gray inline-block" />

        <p className="text-[11px]">11 Nov 2024</p>
      </div>
    </div>
  );
};
