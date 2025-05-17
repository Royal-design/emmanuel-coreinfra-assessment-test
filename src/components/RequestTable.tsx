import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { TableLists } from "./TableLists";

export const RequestTable = () => {
  return (
    <div className="rounded-[12px] border bg-white  font-satoshi border-border-dark">
      <p className="text-lg font-medium p-4">Recent Card Requests</p>
      <Table className="">
        <TableHeader>
          <TableRow className="text-xs text-[#0000008F] bg-[#F1F7FF] border-y border-border-dark">
            <TableHead className="text-center">Branch</TableHead>
            <TableHead className="text-center">Card Type</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableLists />
        </TableBody>
      </Table>
    </div>
  );
};
