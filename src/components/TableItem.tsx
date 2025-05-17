import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import type { DataType } from "./TableLists";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const TableItem: React.FC<DataType> = ({
  branch,
  card_type,
  quantity,
  status
}) => {
  return (
    <TableRow className="text-[10px] text-[#475467]  font-satoshi text-center border-b border-[#EAECF0]">
      <TableCell>{branch}</TableCell>
      <TableCell>{card_type}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>
        <Button
          className={cn(
            "text-[10px] rounded-[16px] px-2 py-[2px] font-semibold",
            "hover:bg-transparent hover:border-transparent border h-[22px]"
          )}
          style={{
            backgroundColor: status.background,
            borderColor: status.border,
            color: status.color
          }}
        >
          {status.title}
        </Button>
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          className="hover:bg-transparent cursor-pointer font-bold text-primary-blue text-[10px]"
        >
          View
        </Button>
      </TableCell>
    </TableRow>
  );
};
