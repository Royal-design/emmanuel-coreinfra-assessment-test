import type React from "react";
import { Search } from "./ui/icons/Search";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const SearchField: React.FC = () => {
  return (
    <div className="relative w-full md:max-w-sm ">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        id="search"
        placeholder="Search"
        className="pl-10 border  border-border-secondary-gray rounded-[97.99px] w-full md:w-[214px]"
      />
      <div className="absolute left-[15px] top-1/2 -translate-y-1/2 text-gray-dark">
        <Search />
      </div>
    </div>
  );
};
