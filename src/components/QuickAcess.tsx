import React from "react";
import { CreditCardShield } from "./ui/icons/CreditCardShield";
import { Chevron } from "./ui/icons/Chevron";
import { CreditCard2 } from "./ui/icons/CreditCard2";
import { CreditCardEdit } from "./ui/icons/CreditCardEdit";
import { CreditCardAdd } from "./ui/icons/CreditCardAdd";
const items = [
  {
    title: "Manage a Card",
    icon: CreditCardShield
  },

  {
    title: "Issue Instant Card",
    icon: CreditCard2
  },
  {
    title: "Issue Personalized Card",
    icon: CreditCardEdit
  },
  {
    title: "Review Card Requests",
    icon: CreditCardAdd
  }
];

export const QuickAcess: React.FC = () => {
  return (
    <div className="font-satoshi flex flex-col rounded-[10px] bg-white p-4 border border-border-dark mt-[13px]">
      <h3 className="text-primary text-base font-medium mb-[13px]">
        Your Quick Access
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.title}
              className="h-full md:h-[45px] bg-background-light-blue px-4 md:pl-4 md:pr-0 pt-[9px] pb-2"
            >
              <div className="flex">
                <div className="bg-primary-blue rounded-full p-[6px] size-7 mr-4">
                  <IconComponent />
                </div>
                <span className="flex items-center text-sm font-medium">
                  {item.title}{" "}
                  <span className="ml-2">
                    <Chevron />
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
