import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { CreditCardCheck } from "./ui/icons/CreditCardCheck";
import { ArrowUp } from "./ui/icons/ArrowUp";
import { CreditCardEdit2 } from "./ui/icons/CreditCardEdit2";
import { BankNote } from "./ui/icons/BankNote";
import { HourGlass } from "./ui/icons/HourGlass";
import { AlertCircle } from "./ui/icons/AlertCircle";
import { MonthlyIssuanceChart } from "./MonthlyIssuanceChart";
import { WeeklyIncomeChart } from "./WeeklyIncomeChart";
import { RequestTable } from "./RequestTable";
import { CardStatusDistribution } from "./CardStatusDistribution";
const items = [
  {
    title: "Total Active Cards",
    icon: CreditCardCheck,
    value: "26,478",
    percent: "+9%",
    alert: false,
    time: "this month"
  },
  {
    title: "Total Personalized Cards",
    icon: CreditCardEdit2,
    value: "15,703",
    percent: "8.5%",
    alert: false,
    time: "this month"
  },
  {
    title: "Today’s Revenue",
    icon: BankNote,
    value: "₦9.3M",
    percent: "+6%",
    alert: false,
    time: "vs yesterday"
  },
  {
    title: "Pending Requests",
    icon: HourGlass,
    value: "38",
    warning: "Requires attention",
    alert: true,
    alertIcon: AlertCircle
  }
];
export const Analytics: React.FC = () => {
  return (
    <div className="font-satoshi w-full ">
      <header className="flex items-center">
        <h2 className="text-lg font-bold my-[11px]">Analytics</h2>
        <span className="block h-px w-full bg-primary-gray ml-1"></span>
      </header>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
        {items.map((item) => {
          const IconComponent = item.icon;
          const AlertIcon = item.alertIcon;
          return (
            <Card
              key={item.title}
              className=" h-full md:h-[110px] shadow-none border-border-dark rounded-[10px] p-0 px-3 pt-3 bg-white gap-0"
            >
              <CardHeader className="p-0 gap-0" />
              <CardContent className="p-0">
                <IconComponent />
                <p className="mt-1 text-sm font-medium text-primary/[56.08%]">
                  {item.title}
                </p>
                <div className="flex items-center justify-between mt-[11px] mb-[17px]">
                  <p className="text-2xl font-bold">{item.value}</p>
                  {item.alert ? (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center px-[9px] py-[7px]">
                        {AlertIcon && <AlertIcon />}
                        <span className="text-xs text-[#E78020] ml-1">
                          {item.warning}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center px-[9px] bg-background-light-green py-[7px]">
                        <ArrowUp />
                        <span className="text-xs font-semibold ml-[6px] text-primary-green">
                          {item.percent}
                        </span>
                      </div>
                      <p className="text-primary/[56.08%] text-xs">
                        {item.time}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-0" />
            </Card>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row my-2 gap-2">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <MonthlyIssuanceChart />
          <WeeklyIncomeChart />
        </div>
        <div className="flex-1 flex gap-2 flex-col">
          <RequestTable />
          <CardStatusDistribution />
        </div>
      </div>
    </div>
  );
};
